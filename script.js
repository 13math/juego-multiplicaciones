document.addEventListener('DOMContentLoaded', () => {
    const multiplicandElement = document.getElementById('multiplicand');
    const multiplierElement = document.getElementById('multiplier');
    const answerInput = document.getElementById('answer');
    const submitButton = document.getElementById('submit');
    const feedbackElement = document.getElementById('feedback');
    const nextButton = document.getElementById('next');

    let multiplicand, multiplier;

    function generateQuestion() {
        multiplicand = Math.floor(Math.random() * 10) + 1;
        multiplier = Math.floor(Math.random() * 10) + 1;
        multiplicandElement.textContent = multiplicand;
        multiplierElement.textContent = multiplier;
        answerInput.value = '';
        feedbackElement.textContent = '';
        nextButton.style.display = 'none';
        submitButton.style.display = 'inline';
    }

    submitButton.addEventListener('click', () => {
        const userAnswer = parseInt(answerInput.value, 10);
        const correctAnswer = multiplicand * multiplier;

        if (userAnswer === correctAnswer) {
            feedbackElement.textContent = '¡Correcto!';
            feedbackElement.style.color = 'green';
        } else {
            feedbackElement.textContent = `Incorrecto. La respuesta correcta es ${correctAnswer}.`;
            feedbackElement.style.color = 'red';
        }

        submitButton.style.display = 'none';
        nextButton.style.display = 'inline';
    });

    nextButton.addEventListener('click', generateQuestion);

    generateQuestion();
});
