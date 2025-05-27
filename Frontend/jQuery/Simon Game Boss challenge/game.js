let buttonColors = ["red", "blue", "green", "yellow"];
let gamePattern = [];
let userClickedPattern = [];
let level = 0;
let started = false;

$(document).on("keydown", function () {
  if (!started) {
    $("#level-title").text("Level " + level);
    nextSequence();
    started = true;
  }
});
// $("h1").css("color", "yellow");

function nextSequence() {
  userClickedPattern = [];
  level++;
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
  console.log("sounds/" + name + ".mp3");
  audio.play();
}

function animatePress(currentColor) {
  $("#" + currentColor).addClass("pressed");
  setTimeout(function () {
    $("#" + currentColor).removeClass("pressed");
  }, 100);
}

function startOver() {
  console.log("Wrong!");
  playSound("wrong");
  $("h1").text("Game over! Press a key to continue..");
  $("body").addClass("game-over");
  setTimeout(function () {
    $("body").removeClass("game-over");
  }, 100);
  gamePattern = [];
  userClickedPattern = [];
  level = 0;
  started = false;
}

function checkAnswer(currentLevel) {
  console.log(currentLevel);
  console.log(gamePattern[currentLevel], userClickedPattern[currentLevel]);
  if (gamePattern[currentLevel] === userClickedPattern[currentLevel]) {
    if (userClickedPattern.length === gamePattern.length) {
      console.log("Correct!");
      $("body").addClass("next-level");
      setTimeout(function () {
        $("body").removeClass("next-level");
      }, 100);
      setTimeout(() => nextSequence(), 1000);
    }
  } else startOver();

  // if (userClickedPattern[currentLevel] !== gamePattern[currentLevel]) {
  //   return false;
  // }
  // if (gamePattern.length !== userClickedPattern.length) {
  //   return false;
  // }
  // level++;
  // return true;
}
