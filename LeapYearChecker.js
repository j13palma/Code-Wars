/*
Checks if the given year is a leap year.
*/

function isLeap(year) {
  /**************Don't change the code above****************/

  if (year % 4 === 0) {
    if (year % 100 === 0) {
      if (year % 400 === 0) {
        return 'Leap year.';
      }
      return 'Not leap year.';
    }
    return 'Leap year.';
  }
  return 'Not leap year.';

  /**************Don't change the code below****************/
}
