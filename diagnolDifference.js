/*
 * Complete the 'diagonalDifference' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts 2D_INTEGER_ARRAY arr as parameter.
 */

function diagonalDifference(arr) {
  // Write your code here
  let right = 0;
  let left = 0;
  let matrixLength = arr.length;
  console.log(matrixLength);
  for (let i = 0; i < matrixLength; i++) {
    right += arr[i][i];
    left += arr[i][matrixLength - i - 1];
  }
  return Math.abs(right - left);
}
