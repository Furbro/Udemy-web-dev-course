/* Parameters and arguments */
function getMilk(cash) {   
    var priceOfMilk = 12;
    var bottlesBought = cash / priceOfMilk;
    var cashUsed = cash - (Math.floor(bottlesBought) * priceOfMilk);
    console.log("leaveHouse");
    console.log("moveRight");
    console.log("moveRight");
    console.log("moveUp");
    console.log("moveUp");
    console.log("moveUp");
    console.log("moveUp");
    console.log("moveRight");
    console.log("moveRight");
    console.log("use " + cash + " nok to buy " + Math.floor(bottlesBought) + " bottles of milk. You have " + cashUsed + " nok left")
    console.log("moveLeft");
    console.log("moveLeft");
    console.log("moveDown");
    console.log("moveDown");
    console.log("moveDown");
    console.log("moveDown");
    console.log("moveLeft");
    console.log("moveLeft");
    console.log("enterHouse");
  }


  getMilk(600)

  /* Challenge complete! */

