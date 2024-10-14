import bmiCalculator from "./bmiAdvanced.js";
const result1 = bmiCalculator(75, 1.7) === "Your BMI is 26, so you are overweight.";
const result2 = bmiCalculator(60, 1.7) === "Your BMI is 21, so you have a normal weight.";
const result3 = bmiCalculator(50, 1.7) === "Your BMI is 17, so you are underweight.";

console.log(result1, result2, result3)

if (result1 && result2 && result3)
    console.log("Test succeeded!")
else {
    console.log("Test failed!")
}

/* 
true and false and true
        false and true
                false 
*/

//console.log(result1 && result2 && "kake")

/* 
true true true
Test succeeded!
kake
*/

//console.log(false && "sopp")

/* 
true true true
Test succeeded!
kake
false
*/