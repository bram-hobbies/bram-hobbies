

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
        characters[i].labels = "character";
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
            'url': "./test/connections.json",
            'dataType': "json",
            'success': function(data) {
                json = data;
            }
        });
        return json;
    })();
    console.log("Stringify connections: " + JSON.stringify(connections));
    return connections;
}

let nodes = getNodes();
let links = getLinks();



var width = 3600,
    height = 4000;

// Compute the distinct nodes from the links.
links.forEach(function(link) {
    var source_ = nodes.filter(node => node.label == link.source)[0];
    var target_ = nodes.filter(node => node.label == link.target)[0];
    link.source = source_ || (nodes[link.source] = {name: link.source, icon: link.icon});
    link.target = target_ || (nodes[link.target] = {name: link.target, icon: link.icon});
    link.source = source_;
    link.target = target_;
});


var force = d3.layout.force()
    .nodes(d3.values(nodes))
    .links(links)
    .size([width, height])
    .linkDistance(220)
    // .charge(-300)
    // .charge(function(d, i) { return i==0 ? -10000 : -500; })
    .charge(function(d, i) {
        if (i == 0) return -1000;
        if (i < 23) return -500;
        return -650;
    })
    .on("tick", tick)
    .start();



var svg = d3.select("body").append("svg")
    .attr("width", width)
    .attr("height", height);

var link = svg.selectAll(".link")
    .data(force.links())
    .enter().append("line")
    .attr("class", "link");

var node = svg.selectAll(".node")
    .data(force.nodes())
    .enter().append("g")
    .attr("class", function(d) { return "node " + (d.labels != null ? d.labels : ""); })
    .attr("text-align", "center")
    .on("mouseover", mouseover)
    .on("mouseout", mouseout)
    .call(force.drag);

var rect = node.append("rect")
    .attr("r", 62)
    .attr("class", function(d) { return "container " + d.universe; })
;

node.append("image")
    .attr("xlink:href", function(d) { return d.icon; })
    .attr("class", function(d) { return d.universe; })
    .attr("border", "55px red");

node.append("text")
    .attr("x", "-20px")
    .attr("y", function(d) {
            if (!d.labels) { return "0px"; }
            if (d.labels.includes("series")) {
                return "70px";
            }
            if (d.labels.includes("movie")) {
                return "100px";
            }
            if (d.labels.includes("character")) {
                return "35px";
            }
            return "40px" })
    .attr("dy", ".35em")
    .attr("text-align", "center")
    .attr("width", "80px")
    .text(function(d) { return d.name; });

function tick() {
    link
        .attr("x1", function(d) { return d.source.x; })
        .attr("y1", function(d) { return d.source.y; })
        .attr("x2", function(d) { return d.target.x; })
        .attr("y2", function(d) { return d.target.y; });

    node
        .attr("transform", function(d) { return "translate(" + d.x + "," + d.y + ")"; });
}

function mouseover() {
    d3.select(this).select("circle").transition()
        .duration(750)
        .attr("r", 16);
}

function mouseout() {
    d3.select(this).select("circle").transition()
        .duration(750)
        .attr("r", 42);
}

function refresh_graph() {
    $(".node").hide();
    $(".filters tr td input:checkbox:checked").each(function() {
        console.log("Filter: " + this.id);
        console.log("Class: " + this.id.replace('filter_',''));
        $(".node ." + this.id).show();
    });
}

// $(window).on('load', function() {
//     refresh_graph();
// });

