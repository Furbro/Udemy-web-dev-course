// Methods of changing html: 
// #1
document.firstElementChild.lastElementChild.querySelector("h1").innerHTML = "fritjof";
document.firstElementChild.lastElementChild.querySelector("ul").lastElementChild.innerHTML = "Angela";

// #2
document.getElementsByTagName("li")[1].innerHTML = "Poop";
document.getElementsByTagName("li")[1].style.color = "brown";

// #3
document.getElementsByClassName("btn")[0].style.color = "red";

// #4
document.getElementById("Angela").style.color = "green";

// #5 
document.querySelector("#brag").innerHTML = "...";
// document.querySelector("li a").innerHTML = "bwuhahaha";

// #6
document.querySelectorAll("li a")[0].style.color = "gray";
// vs. 
document.querySelectorAll("ul li")[0].style.color = "pink";

// change btn background
document.querySelector(".btn").style.backgroundColor = "yellow";

// hide button

document.firstElementChild.lastElementChild.querySelector("a").setAttribute("href", "https://www.1001spill.no");
// document.querySelector(".btn").classList.add("hide");

//