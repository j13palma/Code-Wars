/*
In this challenge, you are going to create a function that tells us how many days,
weeks, and months we have left if live until 90 years old.

It will take your current age as an input and console.log a message with our time lest in this format:

    You have x days, x weeks, y months, and z years left.

*/

function lifeInWeeks(age) {
  /************Don't change the code above************/
  // Your code goes here

  let remainingMonths = (90 - age) * 12;
  let remainingWeeks = (90 - age) * 52;
  let remainingDays = (90 - age) * 365;
  console.log(
    `You have ${remainingDays} days left, ${remainingWeeks} weeks left, or ${remainingMonths} months left.`
  );

  /*************Don't change the code below**********/
}

lifeInWeeks(56);
