

var avatar = "./pics/default.png";

function getNodes() {
    let movies = (function() {
        let json = null;
        $.ajax({
            'async': false,
            'global': false,
            'url': "./data/movies.json",
            'dataType': "json",
            'success': function(data) {
                json = data;
            }
        });
        return json;
    })();

    let characters = (function() {
        let json = null;
        $.ajax({
            'async': false,
            'global': false,
            'url': "./data/characters.json",
            'dataType': "json",
            'success': function(data) {
                json = data;
            }
        });
        return json;
    })();

    let allNodes = [];
    for (var i in characters) {
        characters[i].labels += " character";
        allNodes.push(characters[i]);
    }
    for (var i in movies) {
        allNodes.push(movies[i]);
    }
    return allNodes;
}

function getLinks() {
    let connections = (function() {
        let json = null;
        $.ajax({
            'async': false,
            'global': false,
            'url': "./data/connections.json",
            'dataType': "json",
            'success': function(data) {
                json = data;
            }
        });
        return json;
    })();
    return connections;
}

let nodes = getNodes();
let links = getLinks();

// Define width and height before SVG creation
const width = 8000;
const height = 8000;

// Map nodes by their labels for quick lookup
let nodeMap = {};
nodes.forEach(node => nodeMap[node.label] = node);

// Update links to use actual node references
links.forEach(link => {
    link.source = nodeMap[link.source];
    link.target = nodeMap[link.target];
});

// D3.js code to create the Force-directed graph
const svg = d3.select("#graph-container")
    .append("svg")
    .attr("width", "100%")
    .attr("height", "90%")
    .attr("viewBox", `-${width / 32} ${height / 4} ${width} ${height}`) // Center and fit graph in viewport
    .attr("preserveAspectRatio", "xMidYMid meet")
    .call(d3.behavior.zoom().on("zoom", function() {
        svg.attr("transform", "translate(" + d3.event.translate + ")scale(" + d3.event.scale + ")");
    }))
    .append("g");

const linkGroup = svg.append("g").attr("class", "links");
const nodeGroup = svg.append("g").attr("class", "nodes");

let link = linkGroup.selectAll(".link")
// let link = svg.selectAll(".link")
    .data(links)
    .enter().append("line")
    .attr("class", "link")
    .style("stroke", "black")
    .style("stroke-width", 1);

let node = svg.append("g")
    .attr("class", "nodes")
    .selectAll("g");

// Create the force layout
const force = d3.layout.force()
    .nodes(nodes)
    .links(links)
    .size([width, height])
    // .linkDistance(100)
    .charge(function(i) {
        if (i == 0) return -400;
        if (i < 23) return -500;
        return -700;
    })
    .on("tick", ticked);

force.nodes(nodes)
    .links(links)
    .start();  // Start the simulation

function validateData(nodes, links) {
    nodes.forEach(node => {
        console.assert(node.label !== undefined, 'Node label is undefined:', node);
    });
    links.forEach(link => {
        console.assert(link.source !== undefined, 'Link source is undefined:', link);
        console.assert(link.target !== undefined, 'Link target is undefined:', link);
        console.assert(nodes.find(n => n.label === link.source.label), 'Link source node not found:', link.source);
        console.assert(nodes.find(n => n.label === link.target.label), 'Link target node not found:', link.target);
    });
    console.log("All data is valid");
}

validateData(nodes, links);

function renderGraph(nodes, links) {
    // Update links
    const linkSelection = linkGroup.selectAll(".link")
        .data(links)
        .enter().append("line")
        .attr("class", "link")
        .style("stroke", "black")
        .style("stroke-width", 1);

    // Update nodes
    const nodeSelection = nodeGroup.selectAll(".node")
        .data(nodes)
        .enter().append("g")
        .attr("class", "node")
        .call(d3.behavior.drag()
            .on("dragstart", dragstarted)
            .on("drag", dragged)
            .on("dragend", dragended));

    nodeSelection.append("rect")
        .attr("dy", 30)
        .attr("x", -40)
        .attr("y", -50)
        .attr("width", 80)
        .attr("height", 100)
        .attr("class", function(d) { return "container " + d.labels + " " + d.universe; });

    nodeSelection.append("image")
        .attr("x", -35)
        .attr("y", -45)
        .attr("width", 70)
        .attr("height", 70)
        .attr("preserveAspectRatio", "xMidYMid slice")
        .attr("xlink:href", d => d.icon);

    nodeSelection.append("text")
        .attr("text-anchor", "middle")
        .attr("y", 40)
        .text(d => d.name);
}



function ticked() {
    // Update links
    svg.selectAll(".link")
        .attr("x1", d => d.source.x)
        .attr("y1", d => d.source.y)
        .attr("x2", d => d.target.x)
        .attr("y2", d => d.target.y);

    // Update nodes
    svg.selectAll(".node")
        .attr("transform", d => `translate(${d.x},${d.y})`);
}

function dragstarted(d) {
    d3.event.sourceEvent.stopPropagation();
    d3.select(this).classed("dragging", true);
    force.stop();
}

function dragged(d) {
    d.x = d3.event.x;
    d.y = d3.event.y;
    ticked();
}

function dragended(d) {
    d3.select(this).classed("dragging", false);
    force.resume();
}

// Toggle event listeners
d3.selectAll(".filter").on("change", () => {
    updateGraph();
});

// Example update function for nodes
function updateNodes() {
    const nodeGroup = svg.selectAll(".node")
        .data(nodes, d => d.id);  // Use a unique key function

    // Update existing nodes
    nodeGroup.select("circle")
        .style("fill", "lightblue");

    nodeGroup.select("text")
        .text(d => d.label);

    // Enter new nodes
    const nodeEnter = nodeGroup.enter().append("g")
        .attr("class", "node")
        .call(force.drag);  // Enable drag behavior

    nodeEnter.append("circle")
        .attr("r", 10)
        .style("fill", "lightblue");

    nodeEnter.append("text")
        .attr("dx", 12)
        .attr("dy", ".35em")
        .text(d => d.label);

    // Exit any old nodes
    nodeGroup.exit().remove();

    // Restart the force layout
    force.start();
}


function updateGraph() {
    const showMovies = d3.select("#movies").property("checked");
    const showSeries = d3.select("#series").property("checked");
    const showSpecials = d3.select("#specials").property("checked");
    const showCharacters = d3.select("#characters").property("checked");
    const showPhase1 = d3.select("#phase1").property("checked");
    const showPhase2 = d3.select("#phase2").property("checked");
    const showPhase3 = d3.select("#phase3").property("checked");
    const showPhase4 = d3.select("#phase4").property("checked");
    const showPhase5 = d3.select("#phase5").property("checked");
    const showPhase6 = d3.select("#phase6").property("checked");
    const showWhatIf = d3.select("#whatif").property("checked");
    const showNetflix = d3.select("#netflix").property("checked");
    const showFox = d3.select("#fox").property("checked");
    const showAbc = d3.select("#abc").property("checked");
    const showHulu = d3.select("#hulu").property("checked");
    const showSony = d3.select("#sony").property("checked");
    const showRaimi = d3.select("#raimi").property("checked");
    const showWebb = d3.select("#webb").property("checked");
    const showClassics = d3.select("#classic").property("checked");

    // Filter nodes and links based on the checkbox status
    const filteredNodes = nodes.filter(d => {
        if (d.type === "movie" && !showMovies)                      { return false; }
        if (d.type === "series" && !showSeries)                     { return false; }
        if (d.type === "special" && !showSpecials)                  { return false; }
        if (d.type === "character" && !showCharacters)              { return false; }
        if (d.labels.includes("phase1") && showPhase1)              { return true; }
        if (d.labels.includes("phase2") && showPhase2)              { return true; }
        if (d.labels.includes("phase3") && showPhase3)              { return true; }
        if (d.labels.includes("phase4") && showPhase4)              { return true; }
        if (d.labels.includes("phase5") && showPhase5)              { return true; }
        if (d.labels.includes("phase6") && showPhase6)              { return true; }
        if (d.universe.includes("whatif") && showWhatIf)       { return true; }
        if (d.universe.includes("netflix") && showNetflix)     { return true; }
        if (d.universe.includes("fox") && showFox)             { return true; }
        if (d.universe.includes("abc") && showAbc)             { return true; }
        if (d.universe.includes("hulu") && showHulu)           { return true; }
        if (d.universe.includes("sony") && showSony)           { return true; }
        if (d.universe.includes("raimi") && showRaimi)         { return true; }
        if (d.universe.includes("webb") && showWebb)           { return true; }
        if (d.universe.includes("classic") && showClassics)    { return true; }
        return false;
    });

    const hiddenNodes = nodes

    // Filter links based on the filtered nodes
    const filteredNodeIds = new Set(filteredNodes.map(d => d.label));
    const filteredLinks = links.filter(d => {
        return filteredNodeIds.has(d.source.label) && filteredNodeIds.has(d.target.label);
    });

    // Update the links selection
    let linkUpdate = linkGroup.selectAll(".link")
        .data(filteredLinks, d => d.source.label + "-" + d.target.label);

    // Remove any old links
    linkUpdate.exit().remove();

    // Enter new links
    linkUpdate.enter().append("line")
        .attr("class", "link")
        .style("stroke", "black")
        .style("stroke-width", 1);

    // Update existing links
    linkUpdate.style("stroke", "black")
        .style("stroke-width", 1);

    // Update the nodes selection
    let nodeUpdate = nodeGroup.selectAll(".node")
        .data(filteredNodes, d => d.label);

    // Remove old nodes
    nodeUpdate.exit().remove();  // This removes all elements for nodes that are not in filteredNodes

    // Enter new nodes
    let nodeEnter = nodeUpdate.enter().append("g")
        .attr("class", "node")
        .call(force.drag);

    nodeEnter.append("rect")
        .attr("dy", 30)
        .attr("x", -40)
        .attr("y", -50)
        .attr("width", 80)
        .attr("height", 100)
        .attr("class", function(d) { return "container " + d.labels + " " + d.universe; });

    nodeEnter.append("image")
        .attr("x", -35)
        .attr("y", -45)
        .attr("width", 70)
        .attr("height", 70)
        .attr("preserveAspectRatio", "xMidYMid slice")
        .attr("xlink:href", d => d.icon);

    nodeEnter.append("text")
        .attr("dx", 12)
        .attr("dy", ".35em")
        .text(d => d.label);


    // Restart the force layout simulation with collision detection
    force.nodes(filteredNodes)
        .links(filteredLinks)
        // .charge(-20)
        .linkDistance(250)
        .on("tick", function(e) {
            // Update node positions
            nodeUpdate.attr("transform", d => `translate(${d.x}, ${d.y})`);

            // Update link positions
            linkUpdate.attr("x1", d => d.source.x)
                .attr("y1", d => d.source.y)
                .attr("x2", d => d.target.x)
                .attr("y2", d => d.target.y);
        })
        .start();
}

// Initial call to render the graph
renderGraph(nodes, links);

// Call updateGraph() whenever the data changes (e.g., due to filtering)
updateGraph();


