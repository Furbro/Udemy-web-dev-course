// function loveCalc(lovePercentage){
//     let partner1Name = prompt("whats the name of one?")
//     let partner2Name = prompt("whats the name of the other?")
//     return lovePercentage = Math.round(Math.random()*100) + 1 + "%.";
// }

/* part 2 - version 1 */

function loveCalc(partner1Name, partner2Name){
    let lovePercentage = Math.round(Math.random()*100) + 1;
    if (lovePercentage >= 90) {
        console.log("Your lovescore is " + lovePercentage + "%. Your love is like the sun and the moon!");
    } 
    else if (lovePercentage >= 70) {
        console.log("Lovescore " + lovePercentage + "%. Your love may very well bear fruits");
    } 
    else if (lovePercentage >= 50) {
        console.log("Lovescore " + lovePercentage + "%. This love requires a lot of work and effort");
    } 
    else {
        console.log(lovePercentage + "%. Jump ship!!!");
    }
}

loveCalc(process.argv[0], process.argv[1])

/* Udemy solution: */

// prompt("What is your name?")
// prompt("What is their name?")

// var loveScore = Math.random() * 100;
// loveScore = Math.floor(loveScore) + 1;
// console.log("your lovescore is " + loveScore "%")