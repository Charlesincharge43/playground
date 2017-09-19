//UPDATE THIS ONE!!!   NEED A BETTER SOLUTION (don't do recursion.. just keep track of brackets)

const hasBalancedBrackets = function(str){ // more intuitive, but not optimal (and also does not currently work for closing brackets that come out of nowhere)
  const bracketsTable = {
    '[': ']',
    '(': ')',
    '{': '}',
  }
  let outerBalanced = true
  let valueToCheck = null
  let innerVal = ''
  let concatSwitch = false
  const innerBalBools = [true] // just so the !innerBalBools.some(el => !el) line will return true by default (will return false if a single false bool is in the array)
  for (let i = 0; i < str.length; i++){
    const char = str[i]
    if (char === valueToCheck){
      outerBalanced = true
      concatSwitch = false
      valueToCheck = null
      innerBalBools.push(hasBalancedBrackets(innerVal))
    }
    innerVal += concatSwitch ? char : ''
    if (!valueToCheck && bracketsTable[char]){
      outerBalanced = false
      concatSwitch = true
      valueToCheck = bracketsTable[char]
    }
  }
  // console.log('return bool for str: ', str, '\n')
  // console.log(outerBalanced, innerBalBools)
  if (outerBalanced){
    return !innerBalBools.some(el => !el)
  }
  return false
}



const r1 = hasBalancedBrackets('[][(){}'); // false
const r2 = hasBalancedBrackets('text ( is allowed ){rwwrwrrww [] ()}'); // true
console.log(r1, r2)
