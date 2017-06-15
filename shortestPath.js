var G1 = {a: ['q', 'b', 'c'],
		  b: ['a', 'd'],
	   	  c: ['a','d', 'y'],
	   	  d: ['b', 'c', 'r', 'x'],
		  q: ['a', 'r'],
		  r: ['d', 'q', 'z'],
		  x: ['d'],
		  y: ['c'],
		  z: ['r']
 }

 var G2 = {a: ['b'],
 		  b: ['a','c'],
 		  c: ['b']
 		  }


 const BFS= function(graph, start, end){
	 let visited={[start]: 0};//value represents depth where the vertex was first visited
	 let queue=[start];
	 let paths=[[start]];
	 let queueSwitch=true;

	 const addToPaths=function(paths, currentVertex, edge){
		 for(let pathArr of paths){
			 if(pathArr[pathArr.length-1]===currentVertex){
				 paths.push(pathArr.concat(edge))
			 }
		 }
	 }

	 while(queue.length){
		 let currentVertex=queue[0];//next time just make it currentVertex=queue.shift() ... instead of having a separate line for it
		 if(currentVertex===end) queueSwitch=false;
		 let currentDepth=visited[currentVertex];
		 for(let edge of graph[currentVertex]){
			 if(visited[edge]===undefined){
				 visited[edge]=currentDepth+1;
				 if(queueSwitch) queue.push(edge);
				 addToPaths(paths, currentVertex, edge)
			 }
			 else if(visited[edge]===currentDepth+1){//for edges cases where there are more than one (same length) routes to a vertex
				 addToPaths(paths, currentVertex, edge)
			 }
		 }

		//  paths=paths.filter(pathArr=> pathArr[pathArr.length-1]!==currentVertex)//filter out paths whose lengths are less than or equal to depth
		 queue.shift();
	 }

	 paths=paths.filter(pathArr=>pathArr[pathArr.length-1]===end)
	 return paths
 }

console.log(BFS(G1, 'a','x'))
console.log(BFS(G2, 'a', 'b')) // ['a', 'b']
console.log(BFS(G2, 'a', 'c')) // ['a', 'b', 'c'] or adc
console.log(BFS(G1, 'a', 'd')) // ['a', 'b', 'd']
console.log(BFS(G1, 'a', 'b')) // ['a', 'b']
console.log(BFS(G1, 'a', 'z'))
console.log(BFS(G1, 'a', 'x'))
console.log(BFS(G1, 'a', 'y'))
