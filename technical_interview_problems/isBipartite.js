function isBipartite(graph){
  for (let vertex of graph.vertices){ // must do this ordered by vertex!  otherwise it'll mess up!
  // (e.g.for the famous K3,3 graph, if edge 0-3 is followed by edge 4-1, you'll end up making vertex 0 and 4 red...
  // which will result in a false negative)
    for (let edge of graph.edges){
      let sourceIdx, targetIdx
      if (edge[0] === vertex){ // make this into this ternary form later
        sourceIdx = 0
        targetIdx = 1
      } else if (edge[1] === vertex){
        sourceIdx = 1
        targetIdx = 0
      } else {
        continue
      }
      if (!edge[sourceIdx].color){
        if (!edge[targetIdx].color){
          edge[sourceIdx].color = 'r'
          edge[targetIdx].color = 'b'
        } else {
          edge[sourceIdx].color = edge[targetIdx].color === 'b' ? 'r' : 'b'
        }
      } else {
        if (!edge[targetIdx].color){
          edge[targetIdx].color = edge[sourceIdx].color === 'b' ? 'r' : 'b'
        } else {
          if (edge[sourceIdx].color === edge[targetIdx].color){
            console.log(graph)
            return false
          }
        }
      }
    }
  }
  console.log(graph)
  return true
}

// need to figure out... why do people prefer this way to represent graphs?

const vertices1 = [ {}, {}, {}, {}, {}, {}, {}, {} ];
const edges1 = [
  [ vertices1[1], vertices1[2] ],
  [ vertices1[1], vertices1[3] ],
  [ vertices1[1], vertices1[4] ],
  [ vertices1[3], vertices1[4] ],
  [ vertices1[2], vertices1[5] ],
  [ vertices1[6], vertices1[7] ],
  [ vertices1[0], vertices1[6] ]
];
const graph1 = {
  vertices: vertices1,
  edges: edges1
};

const vertices2 = [ {}, {}, {}, {}, {}, {}];
const edges2 = [
  [ vertices2[0], vertices2[3] ],
  [ vertices2[0], vertices2[4] ],
  [ vertices2[0], vertices2[5] ],
  [ vertices2[1], vertices2[3] ],
  [ vertices2[1], vertices2[4] ],
  [ vertices2[1], vertices2[5] ],
  [ vertices2[2], vertices2[3] ],
  [ vertices2[2], vertices2[4] ],
  [ vertices2[2], vertices2[5] ],
];
const graph2 = {
  vertices: vertices2,
  edges: edges2
};

console.log(isBipartite(graph1)) // should be false
console.log(isBipartite(graph2)) // should be true
