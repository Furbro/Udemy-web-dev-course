// function rollDiceP1(){
//     // const dice = ["⚀", "⚁", "⚂", "⚃", "⚄", "⚅"]
//     let diceRoll = Math.floor(Math.random()*5);
//     console.log(diceRoll)
//     if (diceRoll === 0) document.querySelector("#dP1").innerHTML = "⚀"
//     if (diceRoll === 1) document.querySelector("#dP1").innerHTML = "⚁"
//     if (diceRoll === 2) document.querySelector("#dP1").innerHTML = "⚂"
//     if (diceRoll === 3) document.querySelector("#dP1").innerHTML = "⚃"
//     if (diceRoll === 4) document.querySelector("#dP1").innerHTML = "⚄"
//     if (diceRoll === 5) document.querySelector("#dP1").innerHTML = "⚅"
//     const outputP1 = diceRoll
//     }

// function rollDiceP2(){
//     let p2DiceRoll = Math.floor(Math.random()*5);
//     console.log(p2DiceRoll)
//     if (p2DiceRoll === 0) document.querySelector("#dP2").innerHTML = "⚀"
//     if (p2DiceRoll === 1) document.querySelector("#dP2").innerHTML = "⚁"
//     if (p2DiceRoll === 2) document.querySelector("#dP2").innerHTML = "⚂"
//     if (p2DiceRoll === 3) document.querySelector("#dP2").innerHTML = "⚃"
//     if (p2DiceRoll === 4) document.querySelector("#dP2").innerHTML = "⚄"
//     if (p2DiceRoll === 5) document.querySelector("#dP2").innerHTML = "⚅"
//     const outputP2 = p2DiceRoll
//     return p2DiceRoll
// }

// function determinWin(){
//     const roll1 = rollDiceP1()
//     const roll2 = rollDiceP2()
//     if (outputP1 < outputP2) return document.querySelector("h1").innerHTML = "Player 2 wins!"
//     if (outputP1 > outputP2) return document.querySelector("h1").innerHTML = "Player 1 wins!"
//     if (outputP1 === outputP2) return document.querySelector("h1").innerHTML = "It's a tie!"
// }
// determinWin()

function diceRoll() {
  return Math.floor(Math.random() * 6) + 1;
}

function displayDice(value, element) {
  if (value === 1) element.innerHTML = "⚀";
  if (value === 2) element.innerHTML = "⚁";
  if (value === 3) element.innerHTML = "⚂";
  if (value === 4) element.innerHTML = "⚃";
  if (value === 5) element.innerHTML = "⚄";
  if (value === 6) element.innerHTML = "⚅";
}

function displayResult(roll1, roll2, textElement, flagElement) {
  console.log({ roll1, roll2, textElement, flagElement });
  const parentNode = textElement.parentNode;
  if (roll1 < roll2) {
    parentNode.removeChild(flagElement);
    parentNode.appendChild(flagElement);
    return (textElement.innerHTML = "Player 2 wins!");
  }
  if (roll1 > roll2) {
    parentNode.removeChild(flagElement);
    parentNode.removeChild(textElement);
    console.log(parentNode, flagElement, textElement);
    parentNode.appendChild(flagElement);
    parentNode.appendChild(textElement);
    return (textElement.innerHTML = "Player 1 wins!");
  }
  if (roll1 === roll2) {
    parentNode.removeChild(flagElement);
    return (textElement.innerHTML = "It's a tie!");
  }
}

function determinWin() {
  const roll1 = diceRoll();
  const roll2 = diceRoll();
  displayDice(roll1, document.querySelector("#dP1"));
  displayDice(roll2, document.querySelector("#dP2"));
  displayResult(
    roll1,
    roll2,
    document.querySelector("h1>span"),
    document.querySelector("#mtFlag")
  );
}
determinWin();
