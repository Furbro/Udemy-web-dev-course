/*
You are going to write a function which will select a random name from a list of names. 
The person selected will have to pay for everybody's food bill.

Important: The output should e returned from the function and you do not need alert, prompt or console.log. 
The output should match the example output exactly, including capitalisation and punctuation.

Example Input

    ["Angela", "Ben", "Jenny", "Michael", "Chloe"]

Example Output

    Michael is going to buy lunch today!
*/
function whosPaying(names) {
    const targets = names.length
    const target = Math.floor(Math.random()*(targets))
    const lamb = names[(target)]
    if (lamb.isVerb) return lamb.name + " going to buy lunch today!"
    else return lamb.name + " is going to buy lunch today!"
}

// const names = ["Are Andreas", "Arnfinn","I'm"];
const names = [
    {
        name:"Are Andreas", isVerb:false
    },
    {
        name:"Arnfinn", isVerb:false
    },
    {
        name:"I'm", isVerb:true
    }
]
console.log(whosPaying(names))

/*
udemy solution:
function whosPaying(names) {

    const numberOfPeople = names.lenght
    const randomPersonPostion = Math.floor(Math.random()* numberOfPeople)
    const randomPerson = names[randmoPersonPosition]

    return randomPerson + " is going to buy lunch today!"
}

whosPaying("Are", "Arnfinn", "John Doe")