// BFS shortestPaths
var shortestPaths = function(graph, start, end){
  var visited = {[start]: 0};//value represents depth where the vertex was first visited
  var queue = [start];
  var paths = [[start]];
  var exploreNeighborsSwitch = true;

  var addToPaths = function(pathsArr, currentVertex, neighbor){
    for (var pathArr of pathsArr){
      if (pathArr[pathArr.length - 1] === currentVertex){
        pathsArr.push(pathArr.concat(neighbor));
      }
    }
  };

  while (queue.length){
    var currentVertex = queue.shift();
    if (currentVertex === end) exploreNeighborsSwitch = false;
    var currentDepth = visited[currentVertex];
    if (exploreNeighborsSwitch){
      for (var neighbor of graph[currentVertex]){
        if (visited[neighbor] === undefined){
          visited[neighbor] = currentDepth + 1;
          queue.push(neighbor);
          addToPaths(paths, currentVertex, neighbor);
        }
        else if (visited[neighbor] === currentDepth + 1){//for edge cases where there are more than one (same length) routes to a vertex
          addToPaths(paths, currentVertex, neighbor);
        }
      }
    }
  }

  paths = paths.filter(pathArr => pathArr[pathArr.length - 1] === end);
  return paths;
};

//DFS shortestPaths  --- NOTE: this will NOT pass the final shortestPaths test spec!
// var shortestPaths = function(graph, current, end, path = []){
//   path = path.concat(current);//DO NOT push... dont want to mutate the path
//   var workingPathsArr = [];
//   var shortestPathsArr = [];
//   if (current === end) return [path];//base case
//   else {
//     for (var neighbor of graph[current]){
//       if (path.indexOf(neighbor) === -1){//recursive (and base case): if neighbor IS in path, don't do anything.., otherwise call shortestPaths
//         workingPathsArr = workingPathsArr.concat(shortestPaths(graph, neighbor, end, path));
//       }
//     }
//     var shortestlength = Infinity;
//     for ( var i = 0; i < workingPathsArr.length; i++){
//       if (workingPathsArr[i].length < shortestlength){
//         shortestlength = workingPathsArr[i].length;
//         shortestPathsArr = [workingPathsArr[i]];
//       }
//       else if (workingPathsArr[i].length === shortestlength){
//         shortestPathsArr.push(workingPathsArr[i]);
//       }
//     }
//     return shortestPathsArr;
//   }
// };
