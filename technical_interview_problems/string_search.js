// indexOf('or', 'hello world'); // should return 7
// indexOf('howdy', 'hello world'); // should return -1
// indexOf('ast', 'asast') // should return 2 (this is an edge case that forces you to do 2 loops)

// const indexOf = function(str1, str2){
//   for (let i = 0; i < str2.length; i++){
//     let outLetter = str2[i].toLowerCase() // current letter of outer loop
//     if (outLetter === str1[0]){
//       let match = true
//       for (let j = 0; j < str1.length; j++){
//         let inLetterStr2 = str2[j + i].toLowerCase() // current letter for str2 of inner loop
//         let inLetterStr1 = str1[j].toLowerCase() // current letter for str1 of inner loop
//         if (inLetterStr1 !== inLetterStr2){
//           match = false
//           break
//         }
//       }
//       if (match) {
//         return i
//       }
//     }
//   }
//
//   return -1
// }

const indexOf = function(str1, str2){ //WAY BETTER ANSWER.. more dry
  for (let i = 0; i < str2.length - str1.length + 1; i++){
    let match = true
    for (let j = 0; j < str1.length; j++){
      const bookLetter = str2[i + j].toLowerCase()
      const strLetter = str1[j].toLowerCase()
      if (bookLetter !== strLetter){
        match = false
        break
      }
    }
    if (match){
      return i
    }
  }
  return -1
}

console.log(indexOf('or', 'hello world')) // 7
console.log(indexOf('howdy', 'hello world')) // -1
console.log(indexOf('ast', 'asast')) // 2
