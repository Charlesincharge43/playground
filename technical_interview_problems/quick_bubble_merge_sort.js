const bubbleSort = function (arr){
  let pairsExamined = 0
  let numSwaps = Infinity
  while (numSwaps){
    numSwaps = 0
    for (let i = 0; i < arr.length - 1; i++){
      pairsExamined++
      const leftVal = arr[i]
      const rightVal = arr[i + 1]
      if (leftVal > rightVal){
        arr[i] = rightVal
        arr[i + 1] = leftVal
        numSwaps++
      }
    }
  }
  console.log('bubblesort... pairsExamined: ' + pairsExamined)
}

const bubbleSortOptimized = function (arr){
  let pairsExamined = 0
  let numSwaps = Infinity
  let numPasses = 0
  while (numSwaps){
    numSwaps = 0
    for (let i = 0; i < arr.length - 1 - numPasses; i++){
      pairsExamined++
      const leftVal = arr[i]
      const rightVal = arr[i + 1]
      if (leftVal > rightVal){
        arr[i] = rightVal
        arr[i + 1] = leftVal
        numSwaps++
      }
    }
    numPasses++
  }
  console.log('bubblesort better ... pairsExamined: ' + pairsExamined)
}

let quickSortPairsExamined = 0

const partition = function(arr){
  const pivotIdx = Math.floor(Math.random() * (arr.length - 1))
  const pivot = arr[pivotIdx]
  const leftArr = []
  const rightArr = []
  for (let i = 0; i < arr.length; i++){
    quickSortPairsExamined++
    if (i === pivotIdx){
      continue
    }
    if (arr[i] < pivot){
      leftArr.push(arr[i])
    } else {
      rightArr.push(arr[i])
    }
  }
  return {left: leftArr, mid: [pivot], right: rightArr}
}

const quickSort = function (arr){
  if (arr.length < 2){
    return arr
  } else {
    const partitioned = partition(arr)
    const sortedLeft = quickSort(partitioned.left)
    const sortedRight = quickSort(partitioned.right)
    arr = sortedLeft.concat(partitioned.mid).concat(sortedRight)
    return arr
  }
}

let mergeSortPairsExamined = 0

const merge = function(arr1, arr2){
  let idx1 = 0
  let idx2 = 0
  const newArr = []
  let remainder = []
  while (!remainder.length){
    mergeSortPairsExamined++
    if (arr1[idx1] < arr2[idx2]){
      newArr.push(arr1[idx1])
      idx1++
    } else {
      newArr.push(arr2[idx2])
      idx2++
    }
    if (idx1 >= arr1.length){
      remainder = remainder.concat(arr2.slice(idx2, arr2.length))
    } else if (idx2 >= arr2.length){
      remainder = remainder.concat(arr1.slice(idx1, arr1.length))
    }
  }
  return newArr.concat(remainder)
}

const split = function(arr){
  const mid = Math.round((arr.length - 1) / 2)
  //more accurately, mid represents 1st index of 2nd array
  return [arr.slice(0, mid), arr.slice(mid, arr.length)]
}

const mergeSort = function(arr){
  if (arr.length === 1){
    return arr
  }
  const splitArrs = split(arr)
  return merge(mergeSort(splitArrs[0]), mergeSort(splitArrs[1]))
}

const testArr1 = [9,8,7,6,5,4,3,2,1]
const testArr2 = [9,8,7,6,5,4,3,2,1]
const testArr3 = [9,8,7,6,5,4,3,2,1]
const testArr4 = [9,8,7,6,5,4,3,2,1]

bubbleSort(testArr1)
console.log(testArr1)

bubbleSortOptimized(testArr2)
console.log(testArr2)


const testArr3Sorted = quickSort(testArr3)
console.log(testArr3Sorted) // because non mutating
console.log('quick sort... pairsExamined: ', quickSortPairsExamined)

const testArr4Sorted = mergeSort(testArr4)
console.log(testArr4Sorted) // because non mutating
console.log('merge sort... pairsExamined: ', mergeSortPairsExamined)
