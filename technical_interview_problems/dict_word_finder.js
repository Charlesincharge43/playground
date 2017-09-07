
const dictionary = [
  'a - Used when mentioning someone or something for the first time in a text or conversation',
  'and - Used to connect words of the same part of speech, clauses, or sentences, that are to be taken jointly',
  'be - Exist',
  'in - Expressing the situation of something that is or appears to be enclosed or surrounded by something else',
  'of - Expressing the relationship between a part and a whole',
  'that - Used to identify a specific person or thing observed or heard by the speaker',
  'the - Denoting one or more people or things already mentioned or assumed to be common knowledge',
  'to - Expressing motion in the direction of (a particular location)'
];

// const definitionOf = function (word, dict){
//   for (let entry of dict){
//     const entrySplit = entry.split(' - ')
//     const currWord = entrySplit[0]
//     const definition = entrySplit[1]
//     if (word === currWord){
//       return definition
//     }
//   }
// }

const dictionaryObj = {}
let lastIdx = 0
// more optimal.. only need to interate through array once at maximum
// it builds a dictionary object in the global scope while iterating through the array
// so that looking up past entries won't take up unnecessary computation

const definitionOf = function (word, dict){
  if (dictionaryObj[word]){
    return dictionaryObj[word]
  } else {
    for (lastIdx; lastIdx < dict.length; lastIdx++){
      const entry = dict[lastIdx]
      const entrySplit = entry.split(' - ')
      const currWord = entrySplit[0]
      const definition = entrySplit[1]
      dictionaryObj[currWord] = definition
      if (word === currWord){
        lastIdx++
        return definition
      }
    }
  }
}

const be_Def = definitionOf('be', dictionary); // should return 'Exist'
const that_Def = definitionOf('that', dictionary); // should return 'Used to identify a specific person or thing observed or heard by the speaker'
const to_Def = definitionOf('to', dictionary); // should return 'Expressing motion in the direction of (a particular location)'

console.log(be_Def)
console.log(that_Def)
console.log(to_Def)
