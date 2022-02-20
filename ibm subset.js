/*
 * Complete the 'subsetA' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

function subsetA(arr) {
  // Write your code here
  arr.sort((a, b) => a - b);
  let subA = [];
  let front = 0;
  let back = arr[arr.length - 1];
  subA.push(back);
  for (let i = 0, j = arr.length - 1; i < j; ) {
    if (front + arr[i] < back) {
      front += arr[i];
      i++;
    } else {
      j--;
      back += arr[j];
      subA.push(arr[j]);
    }
  }

  subA.sort((a, b) => a - b);
  return subA;
}
