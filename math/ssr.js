



const calcSSR = function(coordArray, func1, func2){
  let total = 0
  for (let coordPair of coordArray){
    const err = func1(coordPair.x, coordPair.y) - func2(coordPair.x, coordPair.y)
    total += Math.pow(err, 2)
  }
  return total
}

const testfunc1 = function(x, y) {
  return 3 * x + 2 * y - 1
}

const testfunc2 = function(x, y) {
  return 5 * x + 2 * y - 1
}

const testCoordArr = [
  {x: 0, y: 0},
  {x: 0, y: 1},
  {x: 0, y: 2},
  {x: 1, y: 0},
  {x: 1, y: 1},
  {x: 1, y: 2},
  {x: 2, y: 0},
  {x: 2, y: 1},
  {x: 2, y: 2},
]

const testFuncFact = function(w1, w2){
  return function(x, y){
    return w1 * x + w2 * y - 1
  }
}

const wpairs = [
  {w1: 5, w2: 1},
  {w1: 5, w2: 2},
  {w1: 5, w2: 3},
  {w1: 4, w2: 1},
  {w1: 4, w2: 2},
  {w1: 4, w2: 3},
  {w1: 3, w2: 1},
  {w1: 3, w2: 2},
  {w1: 3, w2: 3},
  {w1: 2, w2: 1},
  {w1: 2, w2: 2},
  {w1: 2, w2: 3},
]

const testWeights = function(coordArr, wpairs, expectedFunc){
  const errorPlotPoints = []
  for (let wpair of wpairs){
    const testfunc = testFuncFact(wpair.w1, wpair.w2)
    const z = calcSSR(coordArr, testfunc, expectedFunc)
    const plotpoint = {x: wpair.w1, y: wpair.w2, z}
    errorPlotPoints.push(plotpoint)
  }
  return errorPlotPoints
}

testWeights(testCoordArr, wpairs, testfunc1)
