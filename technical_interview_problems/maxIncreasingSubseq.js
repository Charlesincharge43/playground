
// const longestIncreasingSubsequence = function(arr, idx = 0, prev = -Infinity, length = 0){
//   if (idx > arr.length - 1){
//     return length
//   }
//   const currentNum = arr[idx]
//   longestIncreasingSubsequence(arr, idx + 1, prev, length)
// }

const longestIncreasingSubsequence = function(arr, idx = 0, prev = -Infinity){
  if (idx > arr.length - 1){
    return 0
  }
  const currentNum = arr[idx]
  const excludedMaxLength = longestIncreasingSubsequence(arr, idx + 1, prev)
  let includedMaxLength = 0
  if (currentNum > prev){
    includedMaxLength = 1 + longestIncreasingSubsequence(arr, idx + 1, currentNum)
  }
  return Math.max(excludedMaxLength, includedMaxLength)
}

longestIncreasingSubsequence([3, 4, 2, 1, 10, 6]);
// should return 3, the length of the longest increasing subsequence:
// 3, 4, 6
longestIncreasingSubsequence([10, 22, 9, 33, 20, 50, 41, 60, 80]);
// should return 6, the length of the maximum increasing subsequence:
// 10, 22, 33, 41, 60, 80 (or 10, 22, 33, 50, 60, 80)
longestIncreasingSubsequence([10, 22, 9, 33, 20, 50, 41, 60, 80, 21, 23, 24, 25, 26, 27, 28]);
// should return 9, the length of the maximum increasing subsequence:
// 10, 20, 21, 23, 24, 25, 26, 27, 28
