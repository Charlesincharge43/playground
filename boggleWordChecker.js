board=[ ["I","L","A","W"],
        ["B","N","G","E"],
        ["I","U","A","O"],
        ["A","S","R","L"] ]

function Bwch(boggleBoard){
  this.board=boggleBoard;
  this.transformedBoard;
}

function bwch(str, boggleBoard){
  for(let i=0;i<str.length;i++){

    let currVertex= str[i];
    let currPos=findPos(currVertex,boggleBoard);
    console.log('i',i,'currVertex ',currVertex)
    console.log(validMoves(currPos.firstIdx,currPos.secondIdx,boggleBoard));
  }
}

Bwch.prototype.transform=function(){
  this.transformedBoard=this.board.map((arr,y)=>{
    return arr.map((vertex,x)=>{
      return {vertex, location: {x,y}}
    })
  })
}

Bwch.prototype.bwchSingleVertex=function(x,y,str,depth=0){
  if(depth)
  let validMoves=this.validMoves(x,y);
  for(let vertex of validMoves){
    this.
  }
}

Bwch.prototype.validMoves=function(x,y){
  let unfiltered= [
    this.transformedBoard[x-1] && this.transformedBoard[x-1][y-1],
    this.transformedBoard[x-1] && this.transformedBoard[x-1][y],
    this.transformedBoard[x-1] && this.transformedBoard[x-1][y+1],
    this.transformedBoard[x] && this.transformedBoard[x][y-1],
    this.transformedBoard[x] && this.transformedBoard[x][y+1],
    this.transformedBoard[x+1] && this.transformedBoard[x+1][y-1],
    this.transformedBoard[x+1] && this.transformedBoard[x+1][y],
    this.transformedBoard[x+1] && this.transformedBoard[x+1][y+1],
  ];
  return unfiltered.filter(el=>el);
}

// Bwch.prototype.findPos=function(vertex){
//   let firstIdx, secondIdx;
//   for(firstIdx=0; firstIdx<this.board.length; firstIdx++){
//     secondIdx=this.board[firstIdx].indexOf(vertex);
//     if(secondIdx!== -1) break;
//   }
//   return {firstIdx,secondIdx}
// }
