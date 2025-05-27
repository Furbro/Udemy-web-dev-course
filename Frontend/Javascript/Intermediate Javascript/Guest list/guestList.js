
function checkGuestList(name){
    const guestList = ["Børge", "Karius", "Jarle", "Mons"]
    if (guestList.includes(name)) return "Welcome " + name
    else { return "You are not invited"}
}

console.log(checkGuestList("Børge"))
console.log(checkGuestList("Kåre"))
console.log(checkGuestList("Mons"))