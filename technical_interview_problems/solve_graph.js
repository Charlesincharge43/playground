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
