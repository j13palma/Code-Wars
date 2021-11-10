/*Consider an array/list of sheep where some sheep may be missing from their place. 
We need a function that counts the number of sheep present in the array (true means present).
*/

function countSheeps(arrayOfSheep) {
  // TODO May the force be with you
  let sheep = 0;
  for (i = 0; i < arrayOfSheep.length; i++) {
    if (arrayOfSheep[i]) {
      sheep += 1;
    }
  }
  return sheep;
}
