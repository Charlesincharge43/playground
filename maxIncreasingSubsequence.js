/*
Examples:

longestIncreasingSubsequence([3, 4, 2, 1, 10, 6]);
// should return 3, the length of the longest increasing subsequence:
// 3, 4, 6
longestIncreasingSubsequence([10, 22, 9, 33, 20, 50, 41, 60, 80]);
// should return 6, the length of the maximum increasing subsequence:
// 10, 22, 33, 41, 60, 80 (or 10, 22, 33, 50, 60, 80)
longestIncreasingSubsequence([10, 22, 9, 33, 20, 50, 41, 60, 80, 21, 23, 24, 25, 26, 27, 28]);
// should return 9, the length of the maximum increasing subsequence:
// 10, 20, 21, 23, 24, 25, 26, 27, 28

*/

function longestIncreasingSubsequence_Rec (arr, idx = 0, base = -Infinity) {
  if (idx === arr.length) return 0;

  const num = arr[idx];

  const whenExcluded = longestIncreasingSubsequence_Rec(arr, idx + 1, base);
  if (num < base) return whenExcluded;

  const whenIncluded = 1 + longestIncreasingSubsequence_Rec(arr, idx + 1, num);
  return Math.max(whenIncluded, whenExcluded);
}
