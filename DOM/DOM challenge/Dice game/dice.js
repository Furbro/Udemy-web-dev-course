function rollDiceP1(){
    // const dice = ["⚀", "⚁", "⚂", "⚃", "⚄", "⚅"]
    let diceRoll = Math.floor(Math.random()*5);
    console.log(diceRoll)
    if (diceRoll === 0) document.querySelector("#dP1").innerHTML = "⚀"
    if (diceRoll === 1) document.querySelector("#dP1").innerHTML = "⚁"
    if (diceRoll === 2) document.querySelector("#dP1").innerHTML = "⚂"
    if (diceRoll === 3) document.querySelector("#dP1").innerHTML = "⚃"
    if (diceRoll === 4) document.querySelector("#dP1").innerHTML = "⚄"
    if (diceRoll === 5) document.querySelector("#dP1").innerHTML = "⚅"
    }


function rollDiceP2(){
    let p2DiceRoll = Math.floor(Math.random()*5);
    console.log(p2DiceRoll)
    if (p2DiceRoll === 0) document.querySelector("#dP2").innerHTML = "⚀"
    if (p2DiceRoll === 1) document.querySelector("#dP2").innerHTML = "⚁"
    if (p2DiceRoll === 2) document.querySelector("#dP2").innerHTML = "⚂"
    if (p2DiceRoll === 3) document.querySelector("#dP2").innerHTML = "⚃"
    if (p2DiceRoll === 4) document.querySelector("#dP2").innerHTML = "⚄"
    if (p2DiceRoll === 5) document.querySelector("#dP2").innerHTML = "⚅"
}

function determinWin(){
    rollDiceP1()
    rollDiceP2()
    if (rollDiceP1 < rollDiceP2) return document.querySelector("h1").innerHTML = "Player 2 wins!"
    if (rollDiceP1 > rollDiceP2) return document.querySelector("h1").innerHTML = "Player 1 wins!"
    if (rollDiceP1 === rollDiceP2) return document.querySelector("h1").innerHTML = "It's a tie!"
}
determinWin()