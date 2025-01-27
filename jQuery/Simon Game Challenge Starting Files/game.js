let buttonColors = ["red", "blue", "green", "yellow"];
let gamePattern = [];
let userClickedPattern = [];
let level = 0;

// $("h1").css("color", "yellow");

function nextSequence() {
  let randomNumber = Math.floor(Math.random() * buttonColors.length);
  let randomChosenColor = buttonColors[randomNumber];
  gamePattern.push(randomChosenColor);
  let audio = new Audio("sounds/" + randomChosenColor + ".mp3");
  audio.play();
  $("#" + randomChosenColor)
    .fadeOut(100)
    .fadeIn(100);
  $("h1").text("Level " + level);
}

$(".btn").on("click", function () {
  let userChosenColor = this.id;
  userClickedPattern.push(userChosenColor);
  $("#" + userChosenColor)
    .fadeOut(100)
    .fadeIn(100);
  playSound(userChosenColor);
  /* Husk dette steget! 
  Hvis du skal bruke en funkjson med inputs 
  fra en annen funksjon, så må du koble de sammen*/
  animatePress(userChosenColor);
  checkAnswer(userClickedPattern.length - 1);
});

function playSound(name) {
  let audio = new Audio("sounds/" + name + ".mp3");
  audio.play();
}

function animatePress(currentColor) {
  $("#" + currentColor).addClass("pressed");
  setTimeout(function () {
    $("#" + currentColor).removeClass("pressed");
  }, 100);
}

$(document).on("keydown", function () {
  while (level === 0) {
    nextSequence();
  }
});

function checkAnswer(currentLevel) {
  console.log(currentLevel);

  // if (currentLevel !== $(gamePattern)[-1]) {
  //   return false;
  // }
  // if (gamePattern.length !== userClickedPattern.length) {
  //   return false;
  // }
  // level++;
  // return true;
}
