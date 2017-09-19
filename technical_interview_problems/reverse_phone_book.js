// NOT ALLOWED TO USE HASHTABLES OR OBJECTS

const generateSearcher = function(arr){
  const numbersArr = arr.map(entry => {
    return [entry.split(' ... ')[1], entry]
  })
  // console.log(numbersArr.map(el => el[0]))
  numbersArr.sort((a, b) => {
    const aKeyInt = convertToNum(a[0])
    const bKeyInt = convertToNum(b[0])
    return bKeyInt < aKeyInt
  })
  // console.log(numbersArr.map(el => el[0]))
  return function findByNumber(str){
    return searchInSorted(str, numbersArr)
  }
}

const convertToNum = function(str){
  return +str.split('-').join('')
}

const searchInSorted = function(target, numbersArr){
  const targetNum = convertToNum(target)
  let idx = Math.round(numbersArr.length / 2)
  let upperBound = numbersArr.length - 1
  let lowerBound = 0
  let counter = 0
  while ((upperBound - lowerBound) > 0 && counter < 100){
    const entryToCheck = numbersArr[idx]
    const keyNum = convertToNum(entryToCheck[0])
    if (targetNum === keyNum){
      return entryToCheck[1]
    } else if (targetNum > keyNum){
      lowerBound = idx
      idx = Math.round((upperBound - lowerBound) / 2) + lowerBound
    } else {
      upperBound = idx
      idx = upperBound - Math.round(upperBound - lowerBound / 2)
    }
    counter++
  }
}

const findByNumber = generateSearcher([
  'Alexa Quigley ... 013-410-3292',
  'Luis Wisoky ... 648-377-3486',
  'Tessie Walter ... 399-926-3371',
  'Declan Boyer ... 607-731-1862',
  'Jade Fay ... 929-689-8345',
  'Brando Kunde ... 444-899-5147',
  'Nellie Swaniawski ... 078-540-4797',
  'Dr. Marquise Lueilwitz ... 803-336-1863',
  'Julian Feest PhD ... 853-712-7819',
  'Russel Roberts ... 845-613-3905'
]);
const r1 = findByNumber('399-926-3371'); // 'Tessie Walter ... 399-926-3371'
const r2 = findByNumber('853-712-7819'); // 'Julian Feest PhD ... 853-712-7819'
const r3 = findByNumber('444-899-5147'); // 'Brando Kunde ... 444-899-5147'
const r4 = findByNumber('803-336-1863'); // 'Dr. Marquise Lueilwitz ... 803-336-1863'
const r5 = findByNumber('123-456-7890'); // undefined

console.log(r1, r2, r3, r4, r5)
