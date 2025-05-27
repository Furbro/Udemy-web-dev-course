// alert("Hello, is this working?");
// if (alert) alert("YES!");
// STEP 1 (check if js is connected to html) - SUCCESS, CHALLENGE COMPLETE!

/* This is the better way!*/

// document.querySelector(".set").addEventListener("click", function () {
//   alert("Help, I got clicked!");
// });

// The roundabout way:

// document.querySelector(".w").addEventListener("click", handleClick);
// document.querySelector(".a").addEventListener("click", handleClick);
// document.querySelector(".s").addEventListener("click", handleClick);
// document.querySelector(".d").addEventListener("click", handleClick);
// document.querySelector(".j").addEventListener("click", handleClick);
// document.querySelector(".k").addEventListener("click", handleClick);
// document.querySelector(".l").addEventListener("click", handleClick);

// function handleClick() {
//   alert("Help, I got clicked!");
// }

// the fritjof way:

// document.querySelector(".set").addEventListener("click", handleClick);

// function handleClick() {
//   alert("Help, I got clicked!");
// }

// querySelectorAll:

// document.querySelectorAll("button")[0].addEventListener("click", handleClick);
// document.querySelectorAll("button")[1].addEventListener("click", handleClick);
// document.querySelectorAll("button")[2].addEventListener("click", handleClick);
// document.querySelectorAll("button")[3].addEventListener("click", handleClick);
// document.querySelectorAll("button")[4].addEventListener("click", handleClick);
// document.querySelectorAll("button")[5].addEventListener("click", handleClick);
// document.querySelectorAll("button")[6].addEventListener("click", handleClick);

// function handleClick() {
//   alert("I got clicked");
// }

// for loop:

// let btn = 0;

// for (btn = 0; btn < 6; btn++)
//   document
//     .querySelectorAll("button")
//     [btn].addEventListener("click", function () {
//       alert("I got clicked");
//     });

// vs
// one that accounts for the targeting of drum buttons
// and making it possible to add buttons without changing the code;

const numberOfDrums = document.querySelectorAll(".drum").length;

for (btn = 0; btn < numberOfDrums; btn++)
  document
    .querySelectorAll(".drum")
    [btn].addEventListener("click", function (e) {
      console.log(e.target.innerHTML);
      let buttonInnerHTML = this.innerHTML;

      makeSound(buttonInnerHTML);
      buttonAnimation(buttonInnerHTML);
    });

document.addEventListener("keydown", function (event) {
  makeSound(event.key);
  buttonAnimation(event.key);
});

function makeSound(key) {
  switch (key) {
    case "w":
      var tom1 = new Audio("./sounds/tom-1.mp3");
      tom1.play();
      break;

    case "a":
      var tom2 = new Audio("./sounds/tom-2.mp3");
      tom2.play();
      break;

    case "s":
      var tom3 = new Audio("./sounds/tom-3.mp3");
      tom3.play();
      break;

    case "d":
      var tom4 = new Audio("./sounds/tom-4.mp3");
      tom4.play();
      break;

    case "j":
      var snare = new Audio("./sounds/snare.mp3");
      snare.play();
      break;

    case "k":
      var kickBass = new Audio("./sounds/kick-bass.mp3");
      kickBass.play();
      break;

    case "l":
      var crash = new Audio("./sounds/crash.mp3");
      crash.play();
      break;

    default:
      console.log(buttonInnerHTML);
      break;
  }
}

function buttonAnimation(currentKey) {
  let activeButton = document.querySelector("." + currentKey);
  activeButton.classList.add("pressed");
  setTimeout(() => {
    activeButton.classList.remove("pressed");
  }, 200);
}

// Angela:
// case w:
// break;

// is the same as;

// if (){

// }

// Du må breake eller returne en swich statement, kan være vanskelig/ brittle med javascript, i motsetning til typescirpt.
// Det er vanskelig å finne ut om du har glemt å adde en break.
// Du skjønner ikke en dritt hvis du har gjort feil her, trenger en tool som kan se at du har glemt noe.
// this.style.color = "white";
// Are Andreas Metoden for this, fordi referansen til this er inkonsistent.
// e.target.style.color = "white";
