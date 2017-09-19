const uniques = function (arr){
  const hash = {}
  arr.forEach(el => {
    hash[el] = true
  })
  return Object.keys(hash)
}

const stringSplice = function(str, idx, length){
  const stringArr = []
  for (let letter of str){
    stringArr.push(letter)
  }
  stringArr.splice(idx, length)
  return stringArr.join('')
}

const stringPermutations = function (remainingStr){
  if (remainingStr.length === 1){
    return [remainingStr]
  }
  let arrayOfPerms = []
  for (let i = 0; i < remainingStr.length; i++){
    const letter = remainingStr[i]
    const remaining = stringSplice(remainingStr, i, 1)
    const childPermutations = stringPermutations(remaining)
    arrayOfPerms = arrayOfPerms.concat(childPermutations.map(childPerm => letter + childPerm))
  }
  return uniques(arrayOfPerms)
}

// stringPermutations('one')
// // should return  [ 'eon', 'eno' 'neo', 'noe', 'one', 'oen']
// stringPermutations('app')
// // should return  [ 'app','pap','ppa']
// stringPermutations('nn') //should return  [ 'nn' ]

const remove = function (idx, choices){
  return choices.slice(0, idx) + choices.slice(idx + 1, choices.length)
}

const unique = function (perms){
  const hashTable = {}
  perms.forEach(el => {
    hashTable[el] = true
  })
  return Object.keys(hashTable)
}

const perm = function (choices, partial = ''){ // solution passing in second parameter
  let perms = []
  if (!choices){
    return [partial]
  }
  for (let i = 0; i < choices.length; i++){
    const letter = choices[i]
    const newChoices = remove(i, choices)
    const newPartial = partial + letter
    perms = perms.concat(perm(newChoices, newPartial))
  }
  return unique(perms)
}
