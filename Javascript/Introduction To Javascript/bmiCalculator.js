//Create your function below this line.
//The first parameter should be the weight and the second should be the height.
/* If my weight is 65Kg and my height is 1.8m, I should be able to call your function like this:

var bmi = bmiCalculator(65, 1.8); 
bmi should equal 20 when it's rounded to the nearest whole number.

BMI Calculator Challenge

Create a BMI calculator using JavaScript functions. 

The Body Mass Index (BMI) is a way of estimating the amount of body fat. 
It's used in medicine to calculate risk of heart disease.

You can calculate it using the formula below, where weight divided by height squared.

BMI = (height x height) / weight

Your challenge is to create a function that takes weight and height as inputs and gives the calculated BMI value as an output. 
The output should be rounded to the nearest whole number.

The first parameter should be the weight and the second should be the height.

NOTE: You do not need to write any alerts or prompts or console logs. 
Your code should only contain the function, the result has to be returned by the function. 
You do not need to call the function.

hint: math.round()
*/

/* forsøk nr. 1 */

function bmiCalculator(bmi){
    let weight = prompt("type in your weight in two digits");
    let height = prompt("what is your height?");
    let heightSquared = height * height;
    let bmi = (heightSquared / weight)
	alert("Your BMI is " + bmi)
}

/* forsøk nr. 2 */

function bmiCalculator(weight, height){
    return Math.round(weight/(height*height));
}

let bmi = bmiCalculator(65, 1.8)
console.log(bmi);

/* udemy solution alfa: */

function bmiCalculator(weight, height) {
    let bmi = weight / (height*height);
    return bmi;
}

/* beta: */

function bmiCalculator(weight, height) {
    let bmi = weight / Math.pow(height, 2);
    return Math.round(bmi);
}