
function bmiCalculator (weight, height) {
    const heightMeters = height/100
    const bmi = Math.round(weight/(heightMeters*heightMeters))
    if (!weight || !height) return 
    if (bmi < 8 || bmi > 250) return `<span class="error"> Your BMI is out of bounds. Did you input the correct units? Weight should be in kilograms and height should be in centimeters.</span>`
    if (bmi < 18.5) return "Your BMI is " + bmi + ", so you are underweight.";
    if (bmi > 24.9) return "Your BMI is " + bmi + ", so you are overweight.";
    return "Your BMI is " + bmi + ", so you have a normal weight.";
}

function handleSubmit (event) {
    event.preventDefault()
    const weight = document.querySelector("#bodyWeight").value
    const height = document.querySelector("#bodyHeight").value
    const result = bmiCalculator(weight, height)
    if (result) document.querySelector(".textResult").innerHTML=result
}

function bodyWeightChangeHandler (event) {
    const buttonIsDisabled = document.querySelector("#calculate").disabled
    const bodyWeightValue = document.querySelector("#bodyWeight").value
    const bodyHeightValue = document.querySelector("#bodyHeight").value
    console.log({ buttonIsDisabled, bodyWeightValue, bodyHeightValue })
    if (buttonIsDisabled && bodyWeightValue && bodyHeightValue) {
        console.log("Removing disabled")
        document.querySelector("#calculate").removeAttribute("disabled")
    } else if (!buttonIsDisabled && (!bodyWeightValue || !bodyHeightValue)) {
        document.querySelector("#calculate").setAttribute("disabled", "")
        console.log("Adding disabled")
    }
}   

function bodyHeightChangeHandler (event) {
    
}

// alle events har verdi som heter event.target.value, pull this!

document.querySelector(".bmiForm").addEventListener("submit", handleSubmit)

document.querySelector("#bodyWeight").addEventListener("input", bodyWeightChangeHandler)

document.querySelector("#bodyHeight").addEventListener("input", bodyWeightChangeHandler)