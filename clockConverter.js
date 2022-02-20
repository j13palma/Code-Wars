/*
 * Complete the 'timeConversion' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts STRING s as parameter.
 */

function timeConversion(s) {
  // Write your code here
  let newTime;
  let [time, hours, minutes, seconds, modifier] = s.match(
    /(\d+):(\d+):(\d+)(\w+)/
  );
  console.log(hours, minutes, seconds, modifier);

  if (modifier === 'AM') {
    if (hours === '12') {
      newTime = `00:${minutes}:${seconds}`;
    } else {
      newTime = `${hours}:${minutes}:${seconds}`;
    }
  } else {
    if (hours === '12') {
      newTime = `${hours}:${minutes}:${seconds}`;
    } else {
      newTime = `${Number(hours) + 12}:${minutes}:${seconds}`;
    }
  }
  return newTime;
}
