let score = 0; // Total score
const totalQuestions = 10;

// MULTIPLE CHOICE LOGIC
const mcButtons = document.querySelectorAll(".mc");
mcButtons.forEach(button => {
    button.addEventListener("click", () => {
        const feedback = button.nextElementSibling;
        // Prevent double counting
        if (!button.classList.contains("answered")) {
            button.classList.add("answered");
            if (button.classList.contains("correct")) {
                button.style.backgroundColor = "green";
                feedback.textContent = "Correct!";
                score++;
            } else {
                button.style.backgroundColor = "red";
                feedback.textContent = "Incorrect!";
            }
        }
    });
});

// FREE RESPONSE LOGIC
const frButtons = document.querySelectorAll(".check");
frButtons.forEach(button => {
    button.addEventListener("click", () => {
        const input = button.previousElementSibling;
        const feedback = button.nextElementSibling;
        const answer = input.dataset.answer.toLowerCase().trim();
        const userAnswer = input.value.toLowerCase().trim();
        // Prevent double counting
        if (!input.classList.contains("answered")) {
            input.classList.add("answered");
            if(userAnswer === answer){
                input.style.backgroundColor = "green";
                feedback.textContent = "Correct!";
                score++;
            } else {
                input.style.backgroundColor = "red";
                feedback.textContent = "Incorrect!";
            }
        }
    });
});

// SHOW FINAL SCORE
document.getElementById("show-score").addEventListener("click", () => {
    const finalScore = document.getElementById("final-score");
    let message = "";
    if(score === totalQuestions){
        message = "Perfect! You got all correct!";
    } else if(score >= totalQuestions*0.7){
        message = "Great job!";
    } else if(score >= totalQuestions*0.4){
        message = "Not bad!";
    } else{
        message = "Better luck next time!";
    }
    finalScore.textContent = `You got ${score}/${totalQuestions} correct! ${message}`;
});
