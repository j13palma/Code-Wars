/*
Given an array of integers your solution should find the smallest integer.

For example:

Given [34, 15, 88, 2] your solution will return 2
Given [34, -345, -1, 100] your solution will return -345
*/

class SmallestIntegerFinder {
  findSmallestInt(args) {
    let x = args[0];
    for (let i = 0; i < args.length; i++) {
      if (x > args[i]) {
        x = args[i];
      }
    }
    return x;
  }
}
