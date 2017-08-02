function shootBalloons(balloons) {

  // bins ... fill up
  // _ 1-2 1-2 _ _ _ _ _ _ _ _ _ _ _ _ _ _

  // check: is there a balloon there?  
  // does that right's bigger > this left?

  balloons.forEach(function(balloon) {
    var size = balloon[1] - balloon[0]
    console.log('start is: ', balloon[0], ' size: ', size)
  })
}

var testOne = [ [1,2], [2, 6], [3, 4], [2, 7] ] 
console.log(shootBalloons(testOne))
