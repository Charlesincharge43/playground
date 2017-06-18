

var doesPathExist= function(graph, start, end){
  let visited={};
  var doesPathExistRecursive = function(currentVertex, target) {
    console.log('current ', currentVertex)
    visited[currentVertex]=true;
    return graph[currentVertex].some(function(vertex){
      if (vertex === target) {
        return true;
      } else if (!visited[vertex]) {
        return doesPathExistRecursive(vertex, target);
      } else {
        return false;
      }
    });
  };
  return doesPathExistRecursive(start,end)
}
