const nodeA = {id: 'a', connections: []}
const nodeB = {id: 'b', connections: []}
const nodeC = {id: 'c', connections: []}
const nodeD = {id: 'd', connections: []}
const nodeE = {id: 'e', connections: []}
const nodeF = {id: 'f', connections: []}
const nodeG = {id: 'g', connections: []}
const nodeH = {id: 'h', connections: []}
const nodeI = {id: 'i', connections: []}
const nodeJ = {id: 'j', connections: []}

nodeA.connections.push({node: nodeB}, {node: nodeC}, {node: nodeD}, {node: nodeE})
nodeB.connections.push({node: nodeA}, {node: nodeE}, {node: nodeF}, {node: nodeG}, {node: nodeH}, {node: nodeI})
nodeC.connections.push({node: nodeA}, {node: nodeI}, {node: nodeJ})
nodeD.connections.push({node: nodeA}, {node: nodeJ})
nodeE.connections.push({node: nodeA}, {node: nodeB}, {node: nodeF})
nodeF.connections.push({node: nodeG}, {node: nodeB}, {node: nodeE})
nodeG.connections.push({node: nodeH}, {node: nodeB}, {node: nodeF})
nodeH.connections.push({node: nodeJ}, {node: nodeI}, {node: nodeB}, {node: nodeG})
nodeI.connections.push({node: nodeH}, {node: nodeJ}, {node: nodeC}, {node: nodeB})
nodeJ.connections.push({node: nodeC}, {node: nodeI}, {node: nodeH}, {node: nodeD})

// for this weighted graph, the edges are weighted by the number of connections that the corresponding nodes have
// (this is the weighted graph used by your phantom racer project)

// this is NOT represented by an array of arrays, so the dijkstras function below will be 

const prGraph = { // see IntersectNode constructor function in genRoute.js for your phantom racer project
  'a' : nodeA, // after the nested for loops have run, should look something like {id: 'a', connections: [{node: <nodeB>, weight: 6}, ], {node: <nodeC>, weight: 3}, {node: <nodeD>, weight: 0}}
  'b' : nodeB,
  'c' : nodeC,
  'd' : nodeD,
  'e' : nodeE,
  'f' : nodeF,
  'g' : nodeG,
  'h' : nodeH,
  'i' : nodeI,
  'j' : nodeJ,
}

for (let key in prGraph){
  for (let connectionObj of prGraph[key].connections){
    const unconvWeight = connectionObj.node.connections.length
    connectionObj.weight = unconvWeight > 2 ? unconvWeight : 0
  }
}

const dijkstras = function (weighedGraph)
