// Complete the solution so that it reverses the string passed into it.

// 'world'  =>  'dlrow'
// 'word'   =>  'drow'

function solution(str) {
  let i = str.length - 1;
  let newStr = [];
  for (i; i >= 0; i--) {
    newStr.push(str[i]);
  }
  return newStr.join('');
}
