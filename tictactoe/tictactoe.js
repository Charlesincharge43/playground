
const Ramda = require('ramda');

// represent your game state
// keep track of whose turn it is
// make sure to CLONE your game state when you are doing simulation
// checking wins... want to run at the end of every turn

class GameState {
  constructor({boardState, parentGameState, turnNumber, playersTurn}){
    this.boardState = Ramda.clone(boardState);
    this.parentGameState = parentGameState;
    this.turnNumber = turnNumber;
    this.playersTurn = playersTurn;
  }

  display(){//visually show the tic tac toe board
    const outputStr = '\n' + this.boardState.map(line => line.map(el => el || '.').join(' ')).join('\n');
    console.log(outputStr);
  }

  getLegalMoves(){
    const arr = [];
    let rowCount = 0;
    for (const row of this.boardState){
      let colCount = 0;
      for (const el of row){
        if (!el) arr.push([colCount, rowCount])
        colCount += 1;
      }
      rowCount += 1;
    }
    return arr;
  }

  move(x, y){
    const nextPlayersTurn = this.playersTurn === 'O' ? 'X' : 'O';
    const nextTurnNumber = this.turnNumber + 1;
    const nextGameState = new GameState({
      boardState: this.boardState,
      parentGameState: this,
      turnNumber: nextTurnNumber,
      playersTurn: nextPlayersTurn,
    });
    nextGameState.boardState[y][x] = this.playersTurn;
    return nextGameState;
  }


  checkWin(){
    const topLeft = this.boardState[0][0];
    const topMid = this.boardState[0][1];
    const topRight = this.boardState[0][2];
    const midLeft = this.boardState[1][0];
    const midMid = this.boardState[1][1];
    const midRight = this.boardState[1][2];
    const botLeft = this.boardState[2][0];
    const botMid = this.boardState[2][1];
    const botRight = this.boardState[2][2];

    const playerToCheck = this.playersTurn === 'X' ? 'O' : 'X';//have to check one turn before..
    //change this later because it's confusing... basically you had your move method jump the gun
    // and change the turn before checkWin can be run ... so you have to resort to this for now

    if ((topLeft === playerToCheck && topMid === playerToCheck && topRight === playerToCheck) ||
        (topLeft === playerToCheck && midMid === playerToCheck && botRight === playerToCheck) ||
        (topLeft === playerToCheck && midLeft === playerToCheck && botLeft === playerToCheck) ||
        (midLeft === playerToCheck && midMid === playerToCheck && midRight === playerToCheck) ||
        (topMid === playerToCheck && midMid === playerToCheck && botMid === playerToCheck) ||
        (botLeft === playerToCheck && botMid === playerToCheck && botRight === playerToCheck) ||
        (topRight === playerToCheck && midRight === playerToCheck && botRight === playerToCheck)
      ) return true;
    return false;
  }
}

class Round {
  constructor(Xplayer, Oplayer){
    this.Xplayer = Xplayer;
    this.Oplayer = Oplayer;
    this.game = null;
  }

  initialize(){
    const emptyBoard =
    [[null, null, null],
     [null, null, null],
     [null, null, null]];

    const params = {
      boardState: emptyBoard,
      parentGameState: null,
      turnNumber: 0,
      playersTurn: 'X',
    };

    this.game = new GameState(params);
  }

  playerXmove (x, y){
    if (this.game.playersTurn === 'X'){
      this.game = this.game.move(x, y);
    }
    else throw Error('invalid move, it is X turn..');
  }

  playerOmove (x, y){
    if (this.game.playersTurn === 'O'){
      this.game = this.game.move(x, y);
    }
    else throw Error('invalid move, it is O turn..');
  }

  minimax (gameState, start = false){
    const possibleMoves = gameState.getLegalMoves();

    const maximizingPlayer = gameState.playersTurn === 'X' ? true : false;
    //base case
    if (possibleMoves.length === 0) return 0;
    const arrayOfEvalStates = [];
    for (const move of possibleMoves){
      let minmaxValue;
      let newState = gameState.move(move[0], move[1]);
      if (newState.checkWin()){
        minmaxValue = maximizingPlayer ? 1 : -1 ;
        arrayOfEvalStates.push(minmaxValue);
      }
      else {// if checkWin returns false, then recursive case
        minmaxValue = this.minimax(newState);
        arrayOfEvalStates.push(minmaxValue)
      }
    }
    if (maximizingPlayer){
      const max = Math.max(...arrayOfEvalStates);
      return max;
    }
    else {
      const min = Math.min(...arrayOfEvalStates);
      return min;
    }
  }

  botMove(){
    const maximizingPlayer = this.game.playersTurn === 'X' ? true : false;
    const currentGameState = this.game;
    const movesMinMaxPair = currentGameState.getLegalMoves()
      .map(move => {
        return {move, minMaxVal: this.minimax(currentGameState.move(move[0], move[1]), true)};
      });
    const sortingFunc = maximizingPlayer
                        ? (a, b) => (b.minMaxVal - a.minMaxVal)
                        : (a, b) => (a.minMaxVal - b.minMaxVal);

    movesMinMaxPair.sort(sortingFunc);
    console.log(movesMinMaxPair)
    console.log('moves sorted from best to worst: ', movesMinMaxPair.map(pair => pair.move))
    const bestMove = movesMinMaxPair[0].move;
    const bestMoveX = bestMove[0];
    const bestMoveY = bestMove[1];
    if (maximizingPlayer) this.playerXmove(bestMoveX, bestMoveY)
    else this.playerOmove(bestMoveX, bestMoveY);
  }
}

let testRound = new Round('Charles', 'Rolland');
testRound.initialize();
testRound.game.display();
testRound.playerXmove(0,1);
testRound.game.display();
// let legalMoves = testRound.game.getLegalMoves();
// testRound.botMove();
// console.log(testRound.botMove())
// console.log(legalMoves)
