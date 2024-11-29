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
// and making it possible to add buttons without changing the code

const numberOfDrums = document.querySelectorAll(".drum").length;

for (btn = 0; btn < numberOfDrums; btn++)
  document
    .querySelectorAll(".drum")
    [btn].addEventListener("click", function () {
      alert("I got clicked");
    });
