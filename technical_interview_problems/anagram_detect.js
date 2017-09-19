const words = ['cat', 'act', 'tca', 'ignore', 'a phrase', 'tape', 'pate', 'e hpsara'];

// const checkAnagram = function(str1, str2){
// // this is before you realized you can just check if 2 potential anagrams
// // sorted are identical  -___-
// // although technically... this might be more optimal than sorting???
// // not sure... look into this
//   const str1Hash = createLettersHash(str1)
//   const str2Hash = createLettersHash(str2)
//   const keys1 = Object.keys(str1)
//   const keys2 = Object.keys(str2)
//   if (keys1.length === keys2.length){
//     for (let key of keys1){
//       if (str1Hash[key] !== str2Hash[key]){
//         return false
//       }
//     }
//     return true
//   } else {
//     return false
//   }
// }
//
// const createLettersHash = function (str){
//   const hash = {}
//   for (let letter of str){
//     hash[letter] = !hash[letter] ? 1 : hash[letter] + 1
//   }
//   return hash
// }

const checkAnagram = function (str1, str2){
  if (str1.split('').sort().join('') === str2.split('').sort().join('')){
    return true
  }
}

const listAnagrams = function(words){
  const arrAnagrams = []
  const anagramsHash = {}
  for (let i = 0; i < words.length - 1; i++){
    const word1 = words[i]//You need to move the sorting part here... make the hash key the word sorted...
    // WAY better this way
    const currAnagrams = [word1]
    anagramsHash[word1] = true
    for (let j = i + 1; j < words.length; j++){
      const word2 = words[j]
      if (!anagramsHash[word2] && checkAnagram(word1, word2)){
          anagramsHash[word2] = true
          currAnagrams.push(word2)
      }
    }
    if (currAnagrams.length > 1){
      arrAnagrams.push(currAnagrams)
    }
  }
  return arrAnagrams
}

listAnagrams(words); // [['cat', 'act'], ['a phrase', 'e hpsara'], ['tape', 'pate']]
