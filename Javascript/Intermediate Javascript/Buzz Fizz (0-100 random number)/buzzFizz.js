/*
var output = [];

function fizzBuzz() {
    output.push(output.length +1)
    console.log(output)
} 
*/


function fizzBuzz2 (targetSize){
    const output = [];
    let count = 1;
    while (count <= targetSize){
        if (count%3 === 0 && count%5 === 0) {
            output.push("Fizz Buzz");
        } else if (count%3 === 0 && !count%5 === 0){
            output.push("Fizz");
        } else if (!(count%3 === 0) && count%5 ===0){
            output.push("Buzz");
        } else output.push(count);
        count++
    }
    console.log(output)
}

console.log(fizzBuzz2(100))

/*

function checkFizzBuzz(outputNumber){
    const multiplesOf3 = outputNumber%3 === 0
    const multiplesOf5 = outputNumber%5 === 0

    if (multiplesOf3 && multiplesOf5){
        return "fizzBuzz"
    } else if (multiplesOf3){ 
        return "fizz"
    } else if (multiplesOf5){
        return "buzz"
    }
    else return outputNumber
}

console.log(checkFizzBuzz(30))

/*

const outputNumber = Math.floor(Math.random() * 100)
//const outputNumber = 15
const multiplesOf3 = outputNumber%3 === 0
const multiplesOf5 = outputNumber%5 === 0
const multiplesOf3And5 = outputNumber%3 === 0 && outputNumber%5 === 0


function checkFizzBuzz(outputNumber){
    console.log(outputNumber)
    if (multiplesOf3And5) return "FizzBuzz"
    if (multiplesOf3) return "Buzz"
        if (multiplesOf5) return "Fizz"
    else return outputNumber
    
}
console.log(checkFizzBuzz(outputNumber)) 
*/