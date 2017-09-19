const checkNums = function (arr){
  arr = arr.slice().sort() // This is absolutely crucial... other wise if you pass
  // in an array directly from the matrix, the sudoku board will be mutated
  for (let i = 0; i < 9; i++){
    if (arr[i] !== i + 1){
      return false
    }
  }
  return true
}

const checkSq = function (y, x, mat){
  return checkNums([
    mat[y][x],
    mat[y][x + 1],
    mat[y][x + 2],
    mat[y + 1][x],
    mat[y + 1][x + 1],
    mat[y + 1][x + 2],
    mat[y + 2][x],
    mat[y + 2][x + 1],
    mat[y + 2][x + 2],
  ])
}

const isValidSolution = function(mat){
  const cols = []
  for (let y = 0; y < 9; y++){
    const rowToCheck = mat[y]
    if (!checkNums(rowToCheck)){
      return false
    }
    for (let x = 0; x < 9; x++){
      if (!cols[x]){
        cols[x] = []
      }
      cols[x][y] = mat[y][x]
      if (y < 7 && x < 7 && !(x % 3) && !(y % 3 ) && !checkSq(y, x, mat)){
        return false
      }
    }
  }
  for (let col of cols){
    if (!checkNums(col)){
      return false
    }
  }
  return true
}

const r1 = isValidSolution([
  [5, 3, 4, 6, 7, 8, 9, 1, 2],
  [6, 7, 2, 1, 9, 5, 3, 4, 8],
  [1, 9, 8, 3, 4, 2, 5, 6, 7],
  [8, 5, 9, 7, 6, 1, 4, 2, 3],
  [4, 2, 6, 8, 5, 3, 7, 9, 1],
  [7, 1, 3, 9, 2, 4, 8, 5, 6],
  [9, 6, 1, 5, 3, 7, 2, 8, 4],
  [2, 8, 7, 4, 1, 9, 6, 3, 5],
  [3, 4, 5, 2, 8, 6, 1, 7, 9]
]);
//should return true
const r2 = isValidSolution([
  [1, 2, 3, 4, 5, 6, 7, 8, 9],
  [2, 3, 1, 5, 6, 4, 8, 9, 7],
  [3, 1, 2, 6, 4, 5, 9, 7, 8],
  [4, 5, 6, 7, 8, 9, 1, 2, 3],
  [5, 6, 4, 8, 9, 7, 2, 3, 1],
  [6, 4, 5, 9, 7, 8, 3, 1, 2],
  [7, 8, 9, 1, 2, 3, 4, 5, 6],
  [8, 9, 7, 2, 3, 1, 5, 6, 4],
  [9, 7, 8, 3, 1, 2, 6, 4, 5]
]);
//should return false

console.log(r1, r2)
