const g1 = {
  a: ['c'],
  b: ['c'],
  c: ['s', 'r'],
  d: ['a'],
  s: ['a', 'c'],
  r: ['d'],
  z: ['z']
 }

const doesPathExist = function (graph, start, end, visited = {}){
  visited[start] = true
  if (start === end){
    return true
  }
  return graph[start] ? graph[start].some(vertex => {
    return !visited[vertex] ? doesPathExist(graph, vertex, end, visited) : false
  }) : false
}

const res1 = doesPathExist(g1, 'a', 'z')
const res2 = doesPathExist(g1, 'a', 'd')
const res3 = doesPathExist(g1, 'a', 'a')
console.log(res1, res2, res3)

const bfsDoesPathExist = function (graph, start, end){
  let queue = [start]
  const visited = {}
  let idx = 0
  while (idx < queue.length){
    const currentVertex = queue[idx]
    if (currentVertex === end){
      return true
    }
    visited[currentVertex] = true
    const edges = graph[currentVertex].filter(v => !visited[v])// do not want neighbors that have been visited!
    queue = queue.concat(edges)
    idx++
  }
  return false
}

const bfsres1 = bfsDoesPathExist(g1, 'a', 'z')
const bfsres2 = bfsDoesPathExist(g1, 'a', 'd')
const bfsres3 = bfsDoesPathExist(g1, 'a', 'a')
console.log(bfsres1, bfsres2, bfsres3)
