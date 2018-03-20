var svg = d3.select("svg");

var data = [ [1.3,1.7],[1.4,1.9],[1.4,1.8],[1.5,1.9],[1.9,2.3],[2.1,3.5],[2.1,2.8],[2.1,2.7],[2.2,3.0],[2.2,2.7],[2.3,3.0],[2.4,3.2],[2.4,2.9],[2.5,3.5],[2.5,3.3],[2.6,3.5],[2.6,3.4],[2.6,3.4],[2.7,3.2],[2.8,3.8],[2.8,3.5],[2.9,3.8],[2.9,3.9],[2.9,3.8],[2.9,3.7],[3.0,3.8],[3.0,4.0],[3.0,3.7],[3.1,4.1],[3.4,4.4],[3.4,4.3],[3.5,4.5],[3.6,4.6],[3.6,4.8],[3.6,4.9],[3.6,4.5],[3.7,4.9],[3.9,5.4],[ 3.9,5.2],[ 4.1,5.3],[4.1,5.4],[ 4.1,5.2],[4.2,5.4],[4.2,5.5],[4.2,5.6],[4.2,5.2],[4.3,5.6],[4.7,6.1],[4.8,6.6],[4.8,6.1],[4.8,6.0],[4.9,6.1],[5.0,6.6],[5.0,6.2],[5.1,6.6],[5.2,6.4],[5.2,6.8],[5.4,6.3],[5.6,7.0],[5.6,7.9],[5.8,7.4],[5.8,7.4],[5.8,6.9],[5.9,7.9],[6.0,7.7],[6.0,7.8],[6.0,7.3],[6.2,8.5],[6.2,7.5],[6.3,7.6],[6.5,9.3],[6.6,8.1],[6.6,8.0],[6.7,8.2],[6.7,9.2],[6.7,8.0],[6.7,7.9],[6.9,8.6],[6.9,8.1],[7.0,9.5],[7.1,9.1],[7.1,9.1],[7.1,9.4],[7.2,8.4],[7.3,9.3],[7.3,8.9],[7.4,8.9],[7.5,8.6]]

var labels =[]

var addAttr = function(data){
    svg.selectAll("circle")
  	.data(data)
  	.enter()
  	.append("circle")
  	.attr("cx",function(d) { return d[0] * 50 + 20})
  	.attr("cy",function(d) { return 520 - (d[1] * 50)})
  	.attr("r",function(d) { return 5 } )
    console.log("done");
};

addAttr(data);

svg.append("line") //thicker x axis
    .attr("x1", 0)
    .attr("y1", 500)
    .attr("x2", 520)
    .attr("y2", 500)
    .attr("stroke-width", 1)
    .attr("stroke", "black");

svg.append("line") //thicker y axis
    .attr("x1", 20)
    .attr("y1", 0)
    .attr("x2", 20)
    .attr("y2", 520)
    .attr("stroke-width", 1)
    .attr("stroke", "black");

var counter = 1;
while(counter <= 5){
    svg.append("line")
	.attr("x1", counter * 100 + 19.5)
	.attr("y1", 0)
	.attr("x2", counter * 100 + 19.5)
	.attr("y2", 500)
	.attr("stroke-width", .5)
	.attr("stroke", "black");
    svg.append("line")
	.attr("x1", 20)
	.attr("y1", counter * 100 -99.5)
	.attr("x2", 520)
	.attr("y2", counter * 100 -99.5)
	.attr("stroke-width", .5)
	.attr("stroke", "black");
    if(counter == 5){
	labels.push({"x": 6 + counter * 100, "y":513, num: counter * 2});
    }
    else{
	labels.push({"x": 15 + counter * 100, "y":513, num: counter * 2});
    }
    labels.push({"x": 12.5, "y": counter * 100 - 90, num: 12 - counter * 2});
    counter ++;
}

labels.push({"x": 245, "y": 517, num:"Width(cm)"});
labels.push({"x": -278, "y": 15, num:"Length(cm)", tr:"rotate(270)"});

var text = svg.selectAll("text")
    .data(labels)
    .enter()
    .append("text")

var textLabels = text
    .attr("x", function(d) { return d.x; })
    .attr("y", function(d) { return d.y; })
    .text( function (d) { return d.num; })
    .attr("transform", function(d) { return d.tr; })
    .attr("font-family", "sans-serif")
    .attr("font-size", "12px");
