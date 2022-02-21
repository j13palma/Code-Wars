/*
 * Complete the 'countingSort' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

function countingSort(arr) {
  // Write your code here
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    newArr[i] = 0;
  }
  arr.forEach((number) => {
    newArr[number] += 1;
  });
  return newArr;
}
