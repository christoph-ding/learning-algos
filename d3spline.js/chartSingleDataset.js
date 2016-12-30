// make a single point
function makePoints(dataSet, width, height, maximum, dotFill) {

  var factor = 0.75;
  var radians = 2 * Math.PI;
  var total = dataSet.length;

  d3.select('#chart')
  .selectAll(".nodes")
  .data(dataSet).enter()
  .append("svg:circle")
  .attr('r', '10')
  .attr("cx", function(d, i){
    return width/2*(1-(Math.max(d.value, 0)/maximum)*factor*Math.sin(i*radians/total));
  })
  .attr("cy", function(d, i){
    return height/2*(1-(Math.max(d.value, 0)/maximum)*factor*Math.cos(i*radians/total));    
  })
  .style('fill', dotFill)
}

// for all the attributes: value pairs in the dataset, visualize that pair on the chart - this is exposed
function visData(dataSet, width, height, maximum, dotFill) {
  console.log('visualizing data');
  // console.log(dataSet);
  makePoints(dataSet, width, height, maximum, dotFill);
}
