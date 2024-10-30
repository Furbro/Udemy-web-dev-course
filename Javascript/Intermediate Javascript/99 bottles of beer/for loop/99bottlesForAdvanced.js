const beerBottles = " bottles of beer."
const beerBottlesWall1 = " bottles of beer on the wall, "
const beerBottlesWall2 = " bottles of beer on the wall."
const drinkBeer = "Take one down and pass it around, "
const noMore = "No more"
// const goToStore = `Go to the store and buy some more, ${beer} bottles of beer on the wall.`
const goToStore = (beer) => `Go to the store and buy some more, ${beer} bottles of beer on the wall.`

function bottlesOfBeer(beer){
    const output = []
    const initialBeers = beer
    for (beer; beer >= 0; beer--){
        if (beer > 2 ){
        output.push(beer + beerBottlesWall1 + beer + beerBottles)
        output.push(drinkBeer + (beer-1) + beerBottlesWall2)
        } else if (beer === 2) {
            output.push(beer + beerBottlesWall1 + beer + beerBottles)
            output.push(drinkBeer + (beer-1) + " bottle of beer on the wall.")
        } else if(beer === 1){
            output.push(beer + " bottle of beer on the wall, " + beer + " bottle of beer.")
            output.push(drinkBeer + "No more" + beerBottlesWall2)
        } else {output.push("No more" + beerBottlesWall1 + " no more" + beerBottles)
            output.push(goToStore(initialBeers))
        }
        beer--
    }
    console.log(output.join("\n"))
}

bottlesOfBeer(99)