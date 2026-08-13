

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
        const character = characters[i];
        character.labels = addToken(character.labels, "character");
        if (hasToken(character.universe, "mcu") && character.type === "character") {
            character.labels = addToken(character.labels, "disneyplus");
        }
        allNodes.push(character);
    }
    for (var i in movies) {
        const movie = movies[i];
        if (hasToken(movie.universe, "mcu") && movie.type === "movie") {
            movie.labels = addToken(movie.labels, "disneyplus");
        }
        allNodes.push(movie);
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

function hasToken(value, token) {
    return (` ${value || ""} `).includes(` ${token} `);
}

function addToken(value, token) {
    if (hasToken(value, token)) { return value || ""; }
    return `${value || ""} ${token}`.trim();
}

const dependencyStateMemory = {};

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
    if (!nodeMap[link.source]) {
        console.log("Could not find source: ", link.source);
    }
    if (!nodeMap[link.target]) {
        console.log("Could not find target: ", link.target);
    }
    link.source = nodeMap[link.source];
    link.target = nodeMap[link.target];
});

const zoom = d3.behavior.zoom()
    .scaleExtent([0.1, 5]);

// D3.js code to create the Force-directed graph
const svg = d3.select("#graph-container")
    .append("svg")
    .attr("width", "100%")
    .attr("height", "90%")
    .attr("viewBox", `-${width / 32} ${height / 4} ${width} ${height}`) // Center and fit graph in viewport
    .call(d3.behavior.zoom().on("zoom", (event) => {
        applyZoom(d3.event.scale, d3.event.translate)
        d3.select("#zoomSlider").property("value", d3.event.scale);
    }))
    .attr("id", "graph")
    .append("g");

const defs = svg.append("defs");

// Apply manual zoom logic
function applyZoom(scale, translate) {
    svg.attr("transform", `translate(${translate}) scale(${scale})`);
}

// Slider input controls the zoom
d3.select("#zoomSlider").on("input", function() {
    zoom.scale(+this.value);
    applyZoom(zoom.scale(), zoom.translate());
});

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

function resizeSVG() {
    const container = document.getElementById("graph-container");
    const graphSvg = document.getElementById("graph");
    if (!container || !graphSvg) { return; }

    const width = Math.max(container.clientWidth - 2, 100);
    const height = Math.max(container.clientHeight - 2, 100);
    graphSvg.setAttribute("width", width);
    graphSvg.setAttribute("height", height);
}

// Call resizeSVG on load and window resize
window.addEventListener("resize", resizeSVG);
window.addEventListener("DOMContentLoaded", resizeSVG);

// Create the force layout
const force = d3.layout.force()
    .nodes(nodes)
    .links(links)
    .size([width, height])
    .charge(function(i) {
        return -3500;
    })
    .gravity(0.12)
    .on("tick", ticked)
    .on("end", settleLayout);

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

const NODE_FRAME = {
    baseWidth: 60,
    baseHeight: 100,
    nonCharacterScale: 1.6,
    outerRadius: 10,
    imageRadius: 7,
    imageTopPadding: 6,
    labelBottomPadding: 8,
    labelSidePadding: 7,
    lineHeightEm: 1.15,
    labelMaxLines: 3
};

function isCharacterNode(d) {
    return d.type === "character" || (d.labels && d.labels.indexOf("character") !== -1);
}

function getNodeLayout(d) {
    const scale = isCharacterNode(d) ? 1 : NODE_FRAME.nonCharacterScale;
    const width = NODE_FRAME.baseWidth * scale;
    const height = NODE_FRAME.baseHeight * scale;
    const imageHeight = height * 0.68;
    const imageWidth = Math.min(width * 0.8, imageHeight * 0.86);
    const imageX = -imageWidth / 2;
    const imageY = -height / 2 + (NODE_FRAME.imageTopPadding * scale);

    return {
        width,
        height,
        outerRadius: NODE_FRAME.outerRadius * scale,
        imageX,
        imageY,
        imageWidth,
        imageHeight,
        imageRadius: NODE_FRAME.imageRadius * scale,
        labelY: (height / 2) - (NODE_FRAME.labelBottomPadding * scale),
        labelMaxWidth: width - (NODE_FRAME.labelSidePadding * 2 * scale),
        labelMaxLines: NODE_FRAME.labelMaxLines
    };
}

function getNodeCollisionRadius(d) {
    const layout = getNodeLayout(d);
    return Math.sqrt((layout.width * layout.width) + (layout.height * layout.height)) / 2;
}

function relaxNodeCollisions(activeNodes, alpha) {
    const padding = 8;
    const quadtree = d3.geom.quadtree(activeNodes);

    activeNodes.forEach(d => {
        const radius = getNodeCollisionRadius(d) + padding;
        const nx1 = d.x - radius;
        const nx2 = d.x + radius;
        const ny1 = d.y - radius;
        const ny2 = d.y + radius;

        quadtree.visit((quad, x1, y1, x2, y2) => {
            const point = quad.point;
            if (point && point !== d) {
                const minDistance = getNodeCollisionRadius(d) + getNodeCollisionRadius(point) + padding;
                let dx = d.x - point.x;
                let dy = d.y - point.y;
                let distance = Math.sqrt((dx * dx) + (dy * dy));

                if (distance === 0) {
                    dx = (Math.random() - 0.5) * 0.01;
                    dy = (Math.random() - 0.5) * 0.01;
                    distance = Math.sqrt((dx * dx) + (dy * dy));
                }

                if (distance < minDistance) {
                    const shift = ((minDistance - distance) / distance) * alpha * 0.6;
                    const moveX = dx * shift;
                    const moveY = dy * shift;
                    d.x += moveX;
                    d.y += moveY;
                    point.x -= moveX;
                    point.y -= moveY;
                }
            }
            return x1 > nx2 || x2 < nx1 || y1 > ny2 || y2 < ny1;
        });
    });
}

function settleLayout() {
    const activeNodes = force.nodes();
    for (let i = 0; i < 24; i++) {
        relaxNodeCollisions(activeNodes, 0.45);
    }
    ticked();
}

function nodeClipId(d) {
    const rawId = (d.label || d.name || String(d.id || "")).toLowerCase();
    const nodeType = isCharacterNode(d) ? "char" : "nonchar";
    return "node-image-clip-" + nodeType + "-" + rawId.replace(/[^a-z0-9_-]/g, "-");
}

function ensureNodeClipPath(d) {
    const layout = getNodeLayout(d);
    const clipId = nodeClipId(d);
    if (!defs.select("#" + clipId).empty()) {
        return clipId;
    }

    defs.append("clipPath")
        .attr("id", clipId)
        .append("rect")
        .attr("x", layout.imageX)
        .attr("y", layout.imageY)
        .attr("width", layout.imageWidth)
        .attr("height", layout.imageHeight)
        .attr("rx", layout.imageRadius)
        .attr("ry", layout.imageRadius);

    return clipId;
}

function wrapNodeText(textSelection) {
    textSelection.each(function(d) {
        const text = d3.select(this);
        const layout = getNodeLayout(d);
        const maxWidth = layout.labelMaxWidth;
        const maxLines = layout.labelMaxLines;
        const words = (d.name || d.label || "").trim().split(/\s+/).filter(Boolean);

        text.text(null);
        if (!words.length) {
            return;
        }

        let lines = [];
        let lineWords = [];
        let probeTspan = text.append("tspan")
            .attr("x", 0)
            .attr("dy", "0em");

        for (let i = 0; i < words.length; i++) {
            const word = words[i];
            lineWords.push(word);
            probeTspan.text(lineWords.join(" "));

            if (probeTspan.node().getComputedTextLength() > maxWidth && lineWords.length > 1) {
                lineWords.pop();
                lines.push(lineWords.join(" "));
                lineWords = [word];
                probeTspan.text(word);
            }
        }

        if (lineWords.length) {
            lines.push(lineWords.join(" "));
        }

        lines = lines.slice(0, maxLines);
        text.text(null);
        text.attr("y", layout.labelY);

        const startDy = -((lines.length - 1) * NODE_FRAME.lineHeightEm);
        for (let i = 0; i < lines.length; i++) {
            text.append("tspan")
                .attr("x", 0)
                .attr("dy", (i === 0 ? startDy : NODE_FRAME.lineHeightEm) + "em")
                .text(lines[i]);
        }
    });
}

function appendNodeContents(nodeSelection) {
    nodeSelection.append("rect")
        .attr("x", d => -getNodeLayout(d).width / 2)
        .attr("y", d => -getNodeLayout(d).height / 2)
        .attr("width", d => getNodeLayout(d).width)
        .attr("height", d => getNodeLayout(d).height)
        .attr("rx", d => getNodeLayout(d).outerRadius)
        .attr("ry", d => getNodeLayout(d).outerRadius)
        .attr("class", function(d) { return "container " + d.labels + " " + d.universe; })
        .style("stroke", "#1f2937")
        .style("stroke-width", 1.5);

    nodeSelection.append("rect")
        .attr("x", d => getNodeLayout(d).imageX)
        .attr("y", d => getNodeLayout(d).imageY)
        .attr("width", d => getNodeLayout(d).imageWidth)
        .attr("height", d => getNodeLayout(d).imageHeight)
        .attr("rx", d => getNodeLayout(d).imageRadius)
        .attr("ry", d => getNodeLayout(d).imageRadius)
        .style("fill", "#ffffff")
        .style("fill-opacity", 0.18)
        .style("stroke", "rgba(15, 23, 42, 0.35)")
        .style("stroke-width", 1);

    nodeSelection.append("image")
        .attr("x", d => getNodeLayout(d).imageX)
        .attr("y", d => getNodeLayout(d).imageY)
        .attr("width", d => getNodeLayout(d).imageWidth)
        .attr("height", d => getNodeLayout(d).imageHeight)
        .attr("preserveAspectRatio", "xMidYMid meet")
        .attr("clip-path", d => "url(#" + ensureNodeClipPath(d) + ")")
        .attr("xlink:href", d => d.icon);

    nodeSelection.append("text")
        .attr("text-anchor", "middle")
        .attr("x", 0)
        .style("font-size", "8px")
        .text(d => d.name || d.label)
        .call(wrapNodeText);
}

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

    appendNodeContents(nodeSelection);

    // Store the selection for later use
    window.currentNodes = nodeSelection;
}

function ticked(e) {
    const activeNodes = force.nodes();
    const alpha = (e && e.alpha) ? Math.max(e.alpha, 0.15) : 0.2;
    relaxNodeCollisions(activeNodes, alpha);

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
d3.selectAll(".filter").on("change", function() {
    enforceFilterDependencies();
    updateGraph();
});

function setCheckboxDisabled(id) {
    const checkbox = document.getElementById(id);
    if (!checkbox) {
        return;
    }
    checkbox.disabled = true;
    checkbox.checked = false;
}

function setDependentState(groupKey, dependentIds, disabled) {
    if (!dependencyStateMemory[groupKey]) {
        dependencyStateMemory[groupKey] = {};
    }

    dependentIds.forEach(id => {
        const checkbox = document.getElementById(id);
        if (!checkbox) { return; }
        const wasDisabled = checkbox.disabled;

        if (disabled) {
            if (!wasDisabled) {
                dependencyStateMemory[groupKey][id] = checkbox.checked;
            }
            setCheckboxDisabled(id);
            return;
        }

        checkbox.disabled = false;
        if (wasDisabled && Object.prototype.hasOwnProperty.call(dependencyStateMemory[groupKey], id)) {
            checkbox.checked = dependencyStateMemory[groupKey][id];
        }
    });
}

function enforceFilterDependencies() {
    const disneyPlus = document.getElementById("disneyplus");
    const mcu = document.getElementById("mcu");
    const sony = document.getElementById("sony");
    if (!disneyPlus || !mcu || !sony) { return; }

    const mcuChildren = ["whatif", "phase1", "phase2", "phase3", "phase4", "phase5", "phase6"];
    setDependentState("disneyplus", ["mcu"], !disneyPlus.checked);
    setDependentState("mcu", mcuChildren, !disneyPlus.checked || !mcu.checked);

    const sonyChildren = ["sonyverse", "raimi", "webb"];
    setDependentState("sony", sonyChildren, !sony.checked);
}

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
    const showDisneyPlus = d3.select("#disneyplus").property("checked");
    const showNetflix = d3.select("#netflix").property("checked");
    const showFox = d3.select("#fox").property("checked");
    const showAbc = d3.select("#abc").property("checked");
    const showHulu = d3.select("#hulu").property("checked");
    const showSony = d3.select("#sony").property("checked");
    const showMcu = d3.select("#mcu").property("checked");
    const showSonyVerse = d3.select("#sonyverse").property("checked");
    const showRaimi = d3.select("#raimi").property("checked");
    const showWebb = d3.select("#webb").property("checked");
    const showClassics = d3.select("#classic").property("checked");

    // Filter nodes and links based on the checkbox status
    const filteredNodes = nodes.filter(d => {
        if (d.type === "movie" && !showMovies)         { return false; }
        if (d.type === "series" && !showSeries)        { return false; }
        if (d.type === "special" && !showSpecials)     { return false; }
        if (d.type === "character" && !showCharacters) { return false; }

        if (hasToken(d.labels, "disneyplus") && !showDisneyPlus) { return false; }
        if (hasToken(d.labels, "phase1") && !showPhase1) { return false; }
        if (hasToken(d.labels, "phase2") && !showPhase2) { return false; }
        if (hasToken(d.labels, "phase3") && !showPhase3) { return false; }
        if (hasToken(d.labels, "phase4") && !showPhase4) { return false; }
        if (hasToken(d.labels, "phase5") && !showPhase5) { return false; }
        if (hasToken(d.labels, "phase6") && !showPhase6) { return false; }

        if (hasToken(d.universe, "mcu") && !showMcu) { return false; }
        if (hasToken(d.universe, "whatif") && !showWhatIf) { return false; }
        if (hasToken(d.universe, "netflix") && !showNetflix) { return false; }
        if (hasToken(d.universe, "fox") && !showFox) { return false; }
        if (hasToken(d.universe, "abc") && !showAbc) { return false; }
        if (hasToken(d.universe, "hulu") && !showHulu) { return false; }
        if (hasToken(d.universe, "sony") && !showSony) { return false; }
        if (hasToken(d.universe, "sony") && !showSonyVerse) { return false; }
        if (hasToken(d.universe, "raimi") && !showRaimi) { return false; }
        if (hasToken(d.universe, "webb") && !showWebb) { return false; }
        if (hasToken(d.universe, "classic") && !showClassics) { return false; }

        return true;
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

    appendNodeContents(nodeEnter);


    // Restart the force layout simulation with collision detection
    force.nodes(filteredNodes)
        .links(filteredLinks)
        // .charge(-20)
        .linkDistance(250)
        .on("tick", ticked)
        .on("end", settleLayout)
        .start();
}

let searchTimeout; // To manage the debounce timeout

// Trigger search on "Enter" or debounce when typing
document.getElementById("searchInput").addEventListener("keyup", (event) => {
    const query = event.target.value.trim().toLowerCase();

    // Trigger search on "Enter" key press
    if (event.key === "Enter") {
        triggerSearch(query);
        return;
    }

    // Debounce search for 500ms after typing at least 3 characters
    clearTimeout(searchTimeout); // Clear any existing timeout
    if (query.length >= 3) {
        searchTimeout = setTimeout(() => {
            console.log("Search triggered by debounce.");
            triggerSearch(query);
        }, 500);
    } else {
        // Reset highlights if query is less than 3 characters
        resetHighlights();
    }
});

// Trigger search on button click
document.getElementById("searchButton").addEventListener("click", () => {
    const query = document.getElementById("searchInput").value.trim().toLowerCase();
    triggerSearch(query);
});

// Reset highlights
function resetHighlights() {
    window.currentNodes.classed("highlighted", false).attr("opacity", 1);
}

// Search logic
function triggerSearch(query) {
    if (!query) {
        resetHighlights();
        return;
}

    let foundAny = false;

    window.currentNodes.classed("highlighted", d => {
        const isMatch = d.label.toLowerCase().includes(query) ||
            d.name.toLowerCase().includes(query) ||
            (d.tags && d.tags.toLowerCase().includes(query));
        if (isMatch) foundAny = true;
        return isMatch;
    });

    window.currentNodes.attr("opacity", d => {
        return d.label.toLowerCase().includes(query) ||
        d.name.toLowerCase().includes(query) ||
        (d.tags && d.tags.toLowerCase().includes(query)) ? 1 : 0.2;
    });

    if (!foundAny) {
        console.log(`No nodes found matching '${query}'`);
    }
}


// Reset highlights when clicking outside the graph
svg.on("click", () => {
    node.classed("highlighted", false).attr("opacity", 1); // Reset styles
});


// Initial call to render the graph
renderGraph(nodes, links);

// Call updateGraph() whenever the data changes (e.g., due to filtering)
enforceFilterDependencies();
updateGraph();
