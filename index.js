
var svg = d3.select("svg");
var space = -135;


var data = [
  [15.81,10],
  [22.84,9.8],
  [26.86,9.7],
  [32.9,9.5],
  [42.92,9.35],
  [58.94,9.3],
  [66.94,9.1],
  [70.35, 8.9]

]

var addAttr = function(data){
  	svg.selectAll("circle")
  		.data(data)
  		.enter()
  		.append("circle")
  		.attr("cx",function(d) { return (d[0]/10) * 100  + space })
  		.attr("cy",function(d) { return (d[1]/4 ) * 100 +100})
  		.attr("r",function(d) { return 5 } )
      console.log("done");
      space += 99;
  };

addAttr(data);
