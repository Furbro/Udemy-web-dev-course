Sample Code Snippets:
Here are some simple snippets to get you started:

JavaScript:

javascript
Kopier kode
const quizQuestions = [
{
question: "What is the capital of France?",
options: ["Berlin", "Madrid", "Paris", "Lisbon"],
answer: "Paris",
},
{
question: "What is 2 + 2?",
options: ["3", "4", "5", "6"],
answer: "4",
},
// Add more questions as needed
];

let currentQuestionIndex = 0;
let score = 0;

function showQuestion(index) {
const questionElement = document.getElementById("question");
const optionsElement = document.getElementById("options");

questionElement.textContent = quizQuestions[index].question;
optionsElement.innerHTML = ""; // Clear previous options

quizQuestions[index].options.forEach((option) => {
const button = document.createElement("button");
button.textContent = option;
button.onclick = () => checkAnswer(option); // Pass user-selected answer as an argument
optionsElement.appendChild(button);
});
}

function checkAnswer(selectedOption) {
if (selectedOption === quizQuestions[currentQuestionIndex].answer) {
alert("Correct!");
score++;
} else {
alert("Wrong answer.");
}

currentQuestionIndex++;
if (currentQuestionIndex < quizQuestions.length) {
showQuestion(currentQuestionIndex);
} else {
showResult();
}
}

function showResult() {
alert(`Quiz Over! Your score: ${score}`);
}
HTML:

html
Kopier kode

<div id="quiz-container">
  <h2 id="question">Question will appear here</h2>
  <div id="options">
    <!-- Options will be dynamically added here -->
  </div>
</div>
<button onclick="startQuiz()">Start Quiz</button>
CSS (basic styling):

css
Kopier kode
#quiz-container {
max-width: 500px;
margin: 0 auto;
text-align: center;
padding: 20px;
border: 2px solid #333;
border-radius: 10px;
background-color: #f9f9f9;
}

button {
padding: 10px 20px;
margin: 10px;
cursor: pointer;
}
Steps to Complete the Task:
Set up your HTML structure.
Style your quiz using CSS to make it visually appealing.
Write JavaScript functions to handle quiz logic:
Displaying questions.
Handling user input.
Checking answers.
Showing results.
Test the quiz to ensure it works smoothly.
Add bonus features if you feel comfortable and have time.
By completing this task, you'll get practical experience working with HTML, CSS, and JavaScript, particularly using functions, parameters, and arguments effectively. Good luck, and have fun coding!
