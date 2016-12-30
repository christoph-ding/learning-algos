// Make the canvas
function makeChart (width, height) {
  console.log('making chart...');

  // the chart on which axis, data, circles, goes
  d3.select('#body')
  .append('svg')
  .attr('width', width)
  .attr('height', height)      
  .style('background', '#FFEEDD')
  // g is a group tag
  .append('g')
  .attr('id', 'chart')
}

// Make the legend
function insertLegend () {
  console.log('making legend...');

  // legend box
  var legend = d3.select('#body')
      .append('svg')
      .attr('width', 100)
      .attr('height', 40)
      .style('background', '#B8B8FF');

  // legend text
  legend.append('text')
        .attr("x", 0)
        .attr("y", 10)
        .attr("font-size", "14px")
        .text("Legend");
}

// Make the axis and labels
function makeAxis (maximum, axisLabels, width, height) {
  console.log('making axis...');

  var radians = 2 * Math.PI;
  var total = axisLabels.length;
  var factor = 0.75;

  // make each axis dom object
  var axis = d3.select('#chart')
      .selectAll('.axis')
      .data(axisLabels)
      .enter()
      .append("g")
      .attr("class", "axis")

  // axis labels
  axis.append("text")
      .attr("class", "legend")
      .text(function(d) {return d})
      .style("font-family", "sans-serif")
      .style("font-size", "11px")
      .attr("dy", "1.5em")
      .attr("transform", function(d, i){return "translate(0, -10)"})
      // there are a ton of hardcoded values here, should be a mathematical formula
      .attr("x", function(d, i){return width/2*(1-factor*Math.sin(i*radians/total))-60*Math.sin(i*radians/total);})
      .attr("y", function(d, i){return height/2*(1-factor*Math.cos(i*radians/total))-20*Math.cos(i*radians/total);});

  // lines from center of chart to axis
  axis.append("line")
    .attr("x1", width/2)
    .attr("y1", height/2)
    .attr("x2", function(d, i){return width/2*(1-factor*Math.sin(i*radians/total));})
    .attr("y2", function(d, i){return height/2*(1-factor*Math.cos(i*radians/total));})
    .attr("class", "line")
    .style("stroke", "grey")
    .style("stroke-width", "1px");
}

// Make rings 
function makeRings (levels, axisLabels, width, height) {  
  // this only makes a single ring right now
  // and the css is terrible
  var ring = d3.select('#chart')
    .append('circle')    
    .attr("cx", width/2)
    .attr("cy", height/2)
    .attr("width", width)
    .attr("height", height)
    .attr("r", height/4)
    .style("fill", '#grey')
    .style("opacity", '0.1')

  // a label for the level
  d3.select('#chart')
    .append('text')
    .text('50%')
    .style("font-family", "sans-serif")
    .style("font-size", "11px")
    .attr("dy", "1.5em")
    .attr("x", width/2)
    .attr("y", height*0.25)
}

function buildRelief (maximum, axisLabels) {
  var width = 850;
  var height = 600;

  console.log('building relief...');
  makeChart(width, height);
  makeAxis(maximum, axisLabels, width, height);
  makeRings(1, axisLabels, width, height);
}
