const book = {
  id: 1,
  text: 'Once upon a time, there was a book with words. The book had not been catalogued, but would catch the eyes of onlookers nonetheless.'
};

const results = {}

const findWordsStartingWith = function (bookInput, str){ // this solution actually more optimal than
  // the official FSA solution as it only computes trie as you are searching for prefix searching
  // (not all precomputation done right from the start)
  // It also uses partial matches to help narrow down the search space (e.g., if it already knows the
  // results for 'the', then prefix searching for 'there' shouldn't take much longer)
  
  if (!results[bookInput.id]){
    results[bookInput.id] = {}
  }
  const bookInputResults = results[bookInput.id]
  let matchesForPartial = []
  let i = str.length
  for (i; i >= 0; i--){
    const partialStr = str.slice(0, i)
    if (bookInputResults[partialStr]) {
      matchesForPartial = bookInputResults[partialStr]
      if (i === str.length){
        console.log(`\n **** match found for '${str}' no computation needed! \n`)
        return getIndices(matchesForPartial)
      }
      break
    }
  }
  buildResults(bookInputResults, matchesForPartial.length ? matchesForPartial : makeWordsArr(bookInput.text), str, i + 2)
  return getIndices(bookInputResults[str])
}

const buildResults = function (bookInputResults, initialWordsArr, str, idx){
  let prevMatches = initialWordsArr
  let partialStr = ''
  for (let i = idx; i <= str.length; i++){
    partialStr = str.slice(0, i)
    prevMatches = getMatches(prevMatches, partialStr)
    bookInputResults[partialStr] = prevMatches
  }
}

// const findWordsStartingWith = function (bookInput, str){
// //solution without building the results object
//   const initWordsArr = makeWordsArr(bookInput.text)
//   const matchesArr = getMatches(initWordsArr, str)
//   return getIndices(matchesArr)
// }

const getIndices = function (wordsArr){
  return wordsArr.map(wordObj => wordObj.idx)
}

const getMatches = function (wordsArr, str){
  const newMatches = []
  for (let i = 0; i < wordsArr.length; i++){
    const wordObj = wordsArr[i]
    let match = true
    for (let j = 0; j < str.length && j < wordObj.word.length; j++){
      const textLetter = wordObj.word[j].toLowerCase()
      const prefixLetter = str[j].toLowerCase()
      if (textLetter !== prefixLetter){
        match = false
      }
    }
    if (match){
      newMatches.push(wordObj)
    }
  }
  return newMatches
}

const makeWordsArr = function(text){
  const wordsArr = [{idx: undefined, word: ''}]
  for (let i = 0; i < text.length; i++){
    const lastWord = wordsArr[wordsArr.length - 1]
    if (text[i] === ' '){
      if (lastWord.idx){
        wordsArr.push({idx: undefined, word: ''})
      }
    } else {
      if (!lastWord.idx) {
        lastWord.idx = i
      }
      lastWord.word = lastWord.word.concat(text[i])
    }
  }
  return wordsArr
}

const firstRes = findWordsStartingWith(book, 'the') // should return [ 18, 47, 97 ]
console.log(`'the': `, firstRes)

const secondRes = findWordsStartingWith(book, 'cat') // should return [ 69, 91 ]
console.log(`'cat': `, secondRes)

const thirdRes = findWordsStartingWith(book, 'catalogued')
console.log(`'catalogued': `, thirdRes)

const fourthRes = findWordsStartingWith(book, 'catalogue') // if using result object, then this require no computation
console.log(`'catalogue': `, fourthRes)

const fifthRes = findWordsStartingWith(book, 'onlookers')
console.log(`'onlookers': `, fifthRes)

const sixthRes = findWordsStartingWith(book, 'on') // if using result object, then this require no computation
console.log(`'on': `, sixthRes)

console.dir(results)
