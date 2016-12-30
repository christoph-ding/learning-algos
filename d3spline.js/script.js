function createRadarChart () {
  // read the inputs
  // var dataSets = require('./inputs/data.json');
  // var configurations = require('./inputs/style.json');

  dataSets = {"data": [
    [{"axis": "hit points", "value": 18},
     {"axis": "magic points", "value": 17}, 
     {"axis": "wisdom", "value": 16},
     {"axis": "strength", "value": 15},
     {"axis": "agility", "value": 14},
     {"axis": "charisma", "value": 13},
     {"axis": "toughness", "value": 12},
     {"axis": "dexterity", "value": 11},
     {"axis": "cleverness", "value": 11},
     {"axis": "money", "value": 11},
     {"axis": "coolness", "value": 11},
     {"axis": "awesomeness", "value": 11}
    ],
    [{"axis": "hit points", "value": 19},
     {"axis": "magic points", "value": 24}, 
     {"axis": "wisdom", "value": 16},
     {"axis": "strength", "value": 15},
     {"axis": "agility", "value": 24},
     {"axis": "charisma", "value": 33},
     {"axis": "toughness", "value": 12},
     {"axis": "dexterity", "value": 11},
     {"axis": "cleverness", "value": 21},
     {"axis": "money", "value": 25},
     {"axis": "coolness", "value": 20},
     {"axis": "awesomeness", "value": 19}
    ]]
  };

  config = {
  };

  var fills = ['#0C7489', '#931F1D'];

  // create the canvas element, legend and axis
  var maximum = calculateChartBounds(dataSets.data);
  var axisLabels = gatherAxisLabels(dataSets.data[0]);
  buildRelief(maximum, axisLabels);

  // visualize the datasets on the chart
  // 
  for (var i = 0; i < dataSets.data.length; i++) {
    visData(dataSets.data[i], 850, 600, maximum, fills[i]);
  }
}

// 
function calculateChartBounds (dataSets) {  
  var max = 0;
  // iterate through dataSets, looking for a maximum value to determine range
  for (var i = 0; i < dataSets.length; i++) {
    currentDataSet = dataSets[i];
    for (var j = 0; j < currentDataSet.length; j++) {
      if (currentDataSet[j].value > max) {
        max = currentDataSet[j].value;
      }
    }
  }
  return max;
}

function gatherAxisLabels(dataset) {
  var labels = {};
  for (var i = 0; i < dataset.length; i++) {
    var attribute = dataset[i].axis;
    if (!(labels.hasOwnProperty(attribute))) {
      labels[attribute] = true;
    }
  }

  return Object.keys(labels);
}

// run the program
createRadarChart();
