const correctAnswers = ["A", "A", "A", "A", "A"];
const form = document.querySelector(".quiz-form");
const questions = document.querySelectorAll(".question");
const result = document.querySelector(".result");
const scoreP = document.querySelector(".result p");
console.log(scoreP);


var score = 0;

function SubmitAnswers() {

    event.preventDefault();
    const userAnswers = [form.q1.value, form.q2.value, form.q3.value, form.q4.value, form.q5.value]
    userAnswers.forEach((answer, index) => {
        if (answer === correctAnswers[index]) {
            score += 1;
            questions[index].classList.add("correct")
        } else {
            questions[index].classList.add("wrong")
        }
    });
    result.classList.remove("hide");
    scrollTo(0, 0);
    scoreP.textContent = `You scored ${score}/5`;

}


function reloadPage() {
    window.location.reload(); // Reloads the page
}