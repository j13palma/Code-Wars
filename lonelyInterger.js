/*
 * Complete the 'lonelyinteger' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER_ARRAY a as parameter.
 */

function lonelyinteger(a) {
  // Write your code here
  let b = [];
  let single;
  a.forEach((number, index) => {
    console.log(!a.includes(number, index + 1));
    if (!b.includes(number)) {
      if (!a.includes(number, index + 1)) {
        single = number;
      }
      b.push(number);
    }
  });
  return single;
}
