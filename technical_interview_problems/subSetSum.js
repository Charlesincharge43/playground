
// const subsetSum = function(sum, arr, current = 0, test = {num: 0}){
//   //brute force
//   test.num+=1
//   if (current === sum){
//     return true
//   } else if (current > sum){
//     return false
//   }
//   const res = arr.some((el, idx) => {
//     const newArr = arr.slice(0, idx).concat(arr.slice(idx + 1, arr.length))
//     return subsetSum(sum, newArr, current + el, test)
//   })
//   console.log(test.num) // 59
//   return res
// }

// const subsetSum = function(sum, arr, current = 0, test = {num: 0}){
//   //a bit better
//   test.num+=1
//   if (current === sum){
//     return true
//   } else if (current > sum){
//     return false
//   }
//   const res = arr.some((el, idx) => {
//     const newArr = arr.slice(idx + 1, arr.length)
//     return subsetSum(sum, newArr, current + el, test)
//   })
//   console.log(test.num) //16
//   return res
// }

const subsetSum = function(sum, arr, current = 0, idx = 0){
  if (current === sum){
    return true
  } else if (current > sum){
    return false
  }

  const currentNum = arr[idx]
  if (idx < arr.length){
    const whenIncluded = subsetSum(sum, arr, current + currentNum, idx + 1)
    const whenExcluded = subsetSum(sum, arr, current, idx + 1)
    return whenIncluded || whenExcluded ? true : false
  } else {
    return false
  }
}

//Need memoized solution

const r1 = subsetSum(2, [1,10,5,3]); // false
const r2 = subsetSum(10, [1,10,5,3]); // true
const r3 = subsetSum(9, [1,10,5,3]); // true
const r4 = subsetSum(19, [1,10,5,3]); // true
const r5 = subsetSum(17, [1,10,5,3]); // false
console.log(r1, r2, r3, r4, r5)
