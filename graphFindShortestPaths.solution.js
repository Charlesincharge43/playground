// BFS shortestPaths
var shortestPaths= function(graph, start, end){
  var visited={[start]: 0};//value represents depth where the vertex was first visited
  var queue=[start];
  var paths=[[start]];
  // var queueSwitch=true;
  var exploreNeighborsSwitch=true;

  var addToPaths=function(paths, currentVertex, edge){
    for(var pathArr of paths){
      if(pathArr[pathArr.length-1]===currentVertex){
        paths.push(pathArr.concat(edge))
      }
    }
  }

  var nodesvisited=0;
  while(queue.length){
    var currentVertex=queue[0];//next time just make it currentVertex=queue.shift() ... instead of having a separate line for it
    nodesvisited+=1;

    // if(currentVertex===end) queueSwitch=false;
    if(currentVertex===end) exploreNeighborsSwitch=false;
    var currentDepth=visited[currentVertex];
    if(exploreNeighborsSwitch){
      for(var edge of graph[currentVertex]){
        if(visited[edge]===undefined){
          visited[edge]=currentDepth+1;
          // if(queueSwitch) queue.push(edge);
          queue.push(edge);
          addToPaths(paths, currentVertex, edge)
        }
        else if(visited[edge]===currentDepth+1){//for edges cases where there are more than one (same length) routes to a vertex
          addToPaths(paths, currentVertex, edge)
        }
      }
    }

   //  paths=paths.filter(pathArr=> pathArr[pathArr.length-1]!==currentVertex)//filter out paths whose lengths are less than or equal to depth
    queue.shift();
  }

  paths=paths.filter(pathArr=>pathArr[pathArr.length-1]===end)
  // console.log('BFS nodesvisited ',nodesvisited,'paths ', paths)
  return paths
}

//DFS shortestPaths
// var shortestPaths= function(graph, current, end, path=[],debuggerObj={nodesvisited:0}){
//   debuggerObj.nodesvisited+=1;
//   var path=path.concat(current);//DO NOT push... dont want to mutate the path
//   var workingPathsArr=[];
//   var shortestPathsArr=[];
//   if(current===end) return [path]//base case
//   else {
//     for(var neighbor of graph[current]){
//       if(path.indexOf(neighbor)===-1){//recursive (and base case?): if neighbor IS in path, don't do anything.., otherwise call shortestPathsArr
//         workingPathsArr=workingPathsArr.concat(shortestPaths(graph, neighbor, end, path, debuggerObj));
//       }
//     }
//     var shortestlength=Infinity;
//     for( var i=0; i< workingPathsArr.length; i++){
//       if(workingPathsArr[i].length<shortestlength){
//         shortestlength=workingPathsArr[i].length;
//         shortestPathsArr=[workingPathsArr[i]];
//       }
//       else if(workingPathsArr[i].length===shortestlength){
//         shortestPathsArr.push(workingPathsArr[i]);
//       }
//     }
//     // if(path.length===1) console.log('DFS nodesvisited', debuggerObj.nodesvisited, 'paths ', shortestPathsArr)
//     return shortestPathsArr;
//   }
// }
