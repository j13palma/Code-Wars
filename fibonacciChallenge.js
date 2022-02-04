function fibonacciGenerator(n) {
  //Do NOT change any of the code above 👆

  //Write your code here:
  let output = [0];
  while (output.length < n) {
    if (output.length === 1) {
      output.push(1);
    } else {
      output.push(output[output.length - 1] + output[output.length - 2]);
    }
  }

  console.log(output);

  //Return an array of fibonacci numbers starting from 0.

  //Do NOT change any of the code below 👇
}

fibonacciGenerator(5); // [0, 1, 1, 2, 3]
