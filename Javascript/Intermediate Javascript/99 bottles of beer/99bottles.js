// 99 bottles of beer on the wall, 99 bottles of beer.
// Take one down and pass it around, 98 bottles of beer on the wall.
// No more bottles of beer on the wall, no more bottles of beer.
// Go to the store and buy some more, 99 bottles of beer on the wall.

// Task: use javascript to get the full version of this song using while loops.


function bottlesOfBeer(){
    let beer = 20;
    const output = []
    const beerBottles = " bottles of beer."
    const beerBottlesWall1 = " bottles of beer on the wall, "
    const beerBottlesWall2 = " bottles of beer on the wall."
    const drinkBeer = "Take one down and pass it around, "
    const noMore = "No more"
    const goToStore = "Go to the store and buy some more, 99 bottles of beer on the wall."
    while (beer >= 0){
        console.log(beer)
        if (beer > 2 ){
        output.push(beer + beerBottlesWall1 + beer + beerBottles)
        beer--
        output.push(drinkBeer + beer + beerBottlesWall2)
        } else if (beer === 2) {
            output.push(beer + beerBottlesWall1 + beer + beerBottles)
            beer--
            output.push(drinkBeer + beer + " bottle of beer on the wall.")
        } else if(beer === 1){
            output.push(beer + " bottle of beer on the wall, " + beer + " bottle of beer.")
            beer--
            output.push(drinkBeer + "No more" + beerBottlesWall2)
        } else {output.push("No more" + beerBottlesWall1 + " no more" + beerBottles)
            beer--
            output.push(goToStore)
        }
    }
    console.log(output)
}

console.log(bottlesOfBeer())