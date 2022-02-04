/*
Create a BMI calculator using JavaScript functions.

BMI = weight(kg) / height^2(m)
*/

//Create your function below this line.
function bmiCalculator(weight, height) {
  let bmi = Math.round(weight / Math.pow(height, 2));
  if (bmi < 18.5) {
    return `Your BMI is ${bmi}, so you are underweight.`;
  } else if (bmi >= 18.5 && bmi < 25) {
    return `Your BMI is ${bmi}, so you are normal.`;
  } else if (bmi >= 25 && bmi < 30) {
    return `Your BMI is ${bmi}, so you have overweight.`;
  } else if (bmi >= 30) {
    return `Your BMI is ${bmi}, so you are obese.`;
  }
}

//Create your function above this line.

//Create your function call below this line.
console.log(bmiCalculator(75, 1.75));

//Create your function call above this line.
//The first parameter should be the weight and the second should be the height.

/* If my weight is 65Kg and my height is 1.8m, I should be able to call your function like this:

var bmi = bmiCalculator(65, 1.8); 

bmi should equal 20 when it's rounded to the nearest whole number.

*/
