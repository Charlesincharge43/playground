
const stringPermutations = function (remainingStr){
  if (remainingStr.length === 1){
    return [remainingStr]
  }
  const arrayOfPerms = []
  for (let i = 0; i < remainingStr.length; i++){
    const spliced = stringSplice(remainingStr, i, 1)
    const splicedRemaining = spliced[1]
    const splicedOff = spliced[0]
    const childPermutations = stringPermutations(splicedRemaining)
    for (let childPerm of childPermutations){
      arrayOfPerms.push(splicedOff + childPerm)
    }
  }
  const uniques = {}
  const arrayOfUniques = []
  for (let perm of arrayOfPerms){
    if (!uniques[perm]){
      arrayOfUniques.push(perm)
      uniques[perm] = true
    }
  }
  return arrayOfUniques
}

const stringSplice = function(str, idx, length){
  const stringArr = []
  for (let letter of str){
    stringArr.push(letter)
  }
  const splicedOff = stringArr.splice(idx, length).toString()
  const splicedRemaining = stringArr.join('')
  return [splicedOff, splicedRemaining]
}

// stringPermutations('one')
// // should return  [ 'eon', 'eno' 'neo', 'noe', 'one', 'oen']
// stringPermutations('app')
// // should return  [ 'app','pap','ppa']
// stringPermutations('nn') //should return  [ 'nn' ]
