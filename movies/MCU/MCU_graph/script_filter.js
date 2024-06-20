
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
const width = 6000;
const height = 6000;
// const width = window.innerWidth;
// const height = window.innerHeight;

const simulation = d3.forceSimulation()
    // .force("link", d3.forceLink().id(d => d.label).distance(200))
    .force("link", d3.forceLink().id(d => d.label).distance(20).strength(1))


    // .force("charge", d3.forceManyBody().strength(-30))
    .force("charge", function(i) {
            if (i == 0) return -100;
            if (i < 23) return -200;
            return -300;
        })


    // .force("center", d3.forceCenter(width / 2, height / 2));
    .force("center", d3.forceCenter(0, 0)) // Centering force at (0,0)
    // .force("charge", d3.forceManyBody().strength(350)) // Repel force between nodes
    .force("collision", d3.forceCollide().radius(d => d.type === "movie" ? 120 : 70)) // Minimum distance between nodes
    .force("x", d3.forceX())
    .force("y", d3.forceY())
    .on("tick", ticked);



// D3.js code to create the Force-directed graph
const svg = d3.select("#graph-container")
    .append("svg")
    .attr("width", "100%")
    .attr("height", "100%")
    .attr("viewBox", `-${width / 2} -${height / 2} ${width} ${height}`) // Center and fit graph in viewport
    .attr("preserveAspectRatio", "xMidYMid meet")
    .call(d3.zoom().on("zoom", function(event) {
        svg.attr("transform", event.transform);
    }))
;

// Append links before nodes to ensure they are rendered behind nodes
let link = svg.append("g")
    .attr("class", "links")
    .selectAll("line");

let node = svg.append("g")
    .attr("class", "nodes")
    .selectAll("g");


// Start the simulation
simulation
    .nodes(nodes)
    .on("tick", ticked);

simulation.force("link")
    .links(links);

node.append("rect")
    .attr("dy", 30)
    .attr("x", -40)
    .attr("y", -50)
    .attr("width", 80)
    .attr("height", 100)
    .attr("class", function(d) { return "container " + d.labels + " " + d.universe; })
    // .attr("fill", d => d.type === "character" ? "lightblue" : "lightgreen") // Color based on type
;
node.append("image")
    .attr("x", -35)
    .attr("y", -45)
    .attr("width", 70)
    .attr("height", 70)
    .attr("preserveAspectRatio", "xMidYMid slice")
    .attr("xlink:href", d => d.icon);
node.append("text")
    .attr("text-anchor", "middle")
    // .attr("dy", 30)
    .attr("y", 40)
    .text(d => d.name);



function ticked() {
    link
        .attr("x1", d => d.source.x)
        .attr("y1", d => d.source.y)
        .attr("x2", d => d.target.x)
        .attr("y2", d => d.target.y);

    node.attr("transform", d => `translate(${d.x},${d.y})`);
}

function dragstarted(event, d) {
    if (!event.active) simulation.alphaTarget(0.3).restart();
    d.fx = d.x;
    d.fy = d.y;
}

function dragged(event, d) {
    d.fx = event.x;
    d.fy = event.y;
}

function dragended(event, d) {
    if (!event.active) simulation.alphaTarget(0);
    d.fx = null;
    d.fy = null;
}

// Toggle event listeners
d3.selectAll(".filter").on("change", () => {
    updateGraph();
});

function updateGraph() {
    const showMovies = d3.select("#movies").property("checked");
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

    // Filter links based on the filtered nodes
    const filteredNodeIds = new Set(filteredNodes.map(d => d.label));
    const filteredLinks = links.filter(d => {
        return filteredNodeIds.has(d.source.label) && filteredNodeIds.has(d.target.label);
    });

    // Update the links selection
    link = link.data(filteredLinks, d => d.source.label + "-" + d.target.label);
    link.exit().remove();
    link = link.enter().append("line")
        .attr("class", "link")
        .style("stroke", "black")  // Set the stroke color to black
        .style("stroke-width", 1)
        .merge(link);


    // Update the nodes selection
    node = node.data(filteredNodes, d => d.label);
    node.exit().remove();
    const nodeEnter = node.enter().append("g")
        .attr("class", "profile")
        .call(d3.drag() // Enable drag behavior
            .on("start", dragstarted)
            .on("drag", dragged)
            .on("end", dragended));
    nodeEnter.append("rect")
        .attr("dy", 30)
        .attr("x", -40)
        .attr("y", -50)
        .attr("width", 80)
        .attr("height", 100)
        .attr("class", function(d) { return "container " + d.labels + " " + d.universe; })
    ;

    nodeEnter.append("image")
        .attr("x", -35)
        .attr("y", -45)
        .attr("width", 70)
        .attr("height", 70)
        .attr("preserveAspectRatio", "xMidYMid slice")
        .attr("xlink:href", d => d.icon);
    nodeEnter.append("text")
        .attr("text-anchor", "middle")
        .attr("y", 40)
        .text(d => d.name);
    node = nodeEnter.merge(node);

    // Restart the simulation with the filtered data
    simulation.nodes(filteredNodes);
    simulation.force("link").links(filteredLinks);
    simulation.alpha(1).restart();

}


updateGraph();
