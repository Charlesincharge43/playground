
// const intersection = function(arr1, arr2){ //brute force
//   return intersectFunc(arr1, arr2)
// }

// const intersectFunc = function(arr1, arr2){
//   const intArr = []
//   for (let el1 of arr1){
//     for (let el2 of arr2){
//       if (el1 === el2){
//         intArr.push(el1)
//       }
//     }
//   }
//   return intArr
// }

// ****

// const intersection = function(arr1, arr2){ //a tad better because sorted
//   arr1.sort((a,b) => b < a)
//   arr2.sort((a,b) => b < a)
//   return intersectFunc(arr1, arr2)
// }

// ****

// const intersection = function(arr1, arr2){ //a tad better still because searching using
//   // midpoint method...  but this is NEEDLESSLY complicated
//   arr1.sort((a,b) => b < a)
//   arr2.sort((a,b) => b < a)
//   return betterIntersectFunc(arr1, arr2)
// }
//
// const betterIntersectFunc = function(arr1, arr2){
//   const intArr = []
//   return arr1.filter(el => intersectOne(el, arr2))
// }
//
// const intersectOne = function(el, arr){
//   if (el < arr[0] || el > arr[arr.length - 1]){
//     return false
//   }
//   let upperBound = arr.length - 1
//   let lowerBound = 0
//   let midPoint = Math.round((upperBound - lowerBound) / 2)
//   while (upperBound >= lowerBound){
//     let currentEl = arr[midPoint]
//     if (el === currentEl){
//       return true
//     } else if (el > currentEl){
//       lowerBound = midPoint + 1
//       const step = Math.round((upperBound - lowerBound) / 2)
//       midPoint = lowerBound + step
//     } else {
//       upperBound = midPoint - 1
//       const step = Math.round((upperBound - lowerBound) / 2)
//       midPoint = upperBound - step
//     }
//   }
//   return false
// }

// ****

const intersection = function(arr1, arr2){ //best .. ratcheting!
  arr1.sort((a,b) => b < a)
  arr2.sort((a,b) => b < a)
  return ratchIntersectFunc(arr1, arr2)
}

const ratchIntersectFunc = function(arr1, arr2){
  const intArr = []
  let arr1Idx = 0
  let arr2Idx = 0
  while (arr1Idx < arr1.length && arr2Idx < arr2.length){
    const el1 = arr1[arr1Idx]
    const el2 = arr2[arr2Idx]
    if (el1 === el2){
      intArr.push(el1)
      arr1Idx++
      arr2Idx++
    } else if (el1 > el2){
      arr2Idx++
    } else {
      arr1Idx++
    }
  }
  return intArr
}

// const intersection = function(arr1, arr2){ //no sorting and using hash map
//   const hash2 = {}
//   const intArr = []
//   for (let el2 of arr2){
//     hash2[el2] = true
//   }
//   for (let el1 of arr1){
//     if (hash2[el1]){
//       intArr.push(el1)
//     }
//   }
//   return intArr
// }

intersection([1,4,9,10,11], [2,3,4,5,8,10]); // should return [4, 10] (numbers can be in any order)
