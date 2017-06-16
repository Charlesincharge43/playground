board=[
  ["E","A","R","A"],
  ["N","L","E","C"],
  ["I","A","I","S"],
  ["B","Y","O","R"]
];

function Bwch(boggleBoard){
  this.board=boggleBoard;
  this.transformedBoard;
}

Bwch.prototype.bwch=function(str){
  this.transform();
  for(let arr of this.transformedBoard){
    for(let vertexObj of arr){
      if(this.bwchSingleVertex(vertexObj,str)) return true;
    }
  }
  return false;
}

Bwch.prototype.transform=function(){
  this.transformedBoard=this.board.map((arr,y)=>{
    return arr.map((vertex,x)=>{
      return {vertex, location: {x,y}}
    })
  })
}

Bwch.prototype.bwchSingleVertex=function(vertexObj,str,visited={},depth=0){//vertexObj is an element in transformedBoard
  let loc=vertexObj.location.x+','+vertexObj.location.y;
  console.log('compare part of string |',str[depth],'| with vertex ',vertexObj.vertex);
  console.log('loc ',loc,'visited ',visited)
  if(visited[loc]) return false;
  if(str[depth]===vertexObj.vertex){
    let newVisited=Object.assign({[loc]:true},visited)
    if(depth===str.length-1) return true;
    let validMoves=this.validMoves(vertexObj);
    return validMoves.some(neighbor=>{
      return this.bwchSingleVertex(neighbor,str,newVisited,depth+1)
    })
  }
  return false;
}

Bwch.prototype.validMoves=function(vertexObj){
  let x= vertexObj.location.x;
  let y= vertexObj.location.y;
  let unfiltered= [
    this.transformedBoard[y-1] && this.transformedBoard[y-1][x-1],
    this.transformedBoard[y-1] && this.transformedBoard[y-1][x],
    this.transformedBoard[y-1] && this.transformedBoard[y-1][x+1],
    this.transformedBoard[y] && this.transformedBoard[y][x-1],
    this.transformedBoard[y] && this.transformedBoard[y][x+1],
    this.transformedBoard[y+1] && this.transformedBoard[y+1][x-1],
    this.transformedBoard[y+1] && this.transformedBoard[y+1][x],
    this.transformedBoard[y+1] && this.transformedBoard[y+1][x+1],
  ];
  return unfiltered.filter(el=>el);
}
