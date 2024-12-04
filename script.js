// script.js
function checkAnswer(selectedOption) {
  const isCorrect = selectedOption.getAttribute("data-correct") === "true";
  const feedback = document.getElementById("feedback");

  if (isCorrect) {
    feedback.textContent = "Correct! 🎉";
    feedback.style.color = "green";
  } else {
    feedback.textContent = "Oops! Try again. ❌";
    feedback.style.color = "red";
  }
}
