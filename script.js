document.addEventListener('DOMContentLoaded', () => {
    const multiplicandElement = document.getElementById('multiplicand');
    const multiplierElement = document.getElementById('multiplier');
    const answerInput = document.getElementById('answer');
    const submitButton = document.getElementById('submit');
    const feedbackElement = document.getElementById('feedback');
    const nextButton = document.getElementById('next');
    const resetButton = document.getElementById('reset');
    const livesElement = document.getElementById('lives');
    const scoreElement = document.getElementById('score');
    const timerElement = document.getElementById('timer');

    let multiplicand, multiplier;
    let lives = 3;
    let score = 0;
    let timeLeft = 300;
    let timerInterval;

    function generateQuestion() {
        multiplicand = Math.floor(Math.random() * 10) + 1;
        multiplier = Math.floor(Math.random() * 10) + 1;
        multiplicandElement.textContent = multiplicand;
        multiplierElement.textContent = multiplier;
        answerInput.value = '';
        feedbackElement.textContent = '';
        nextButton.style.display = 'none';
        submitButton.style.display = 'inline-block';
        answerInput.disabled = false;
        answerInput.focus();
    }

    function updateLives() {
        livesElement.innerHTML = '';
        for (let i = 0; i < lives; i++) {
            const heart = document.createElement('span');
            heart.classList.add('heart');
            heart.innerHTML = '&#9829;';
            livesElement.appendChild(heart);
        }
        if (lives === 0) {
            endGame('Has perdido todas tus vidas.');
        }
    }

    function updateScore() {
        scoreElement.textContent = `Puntos: ${score}`;
    }

    function updateTimer() {
        const minutes = Math.floor(timeLeft / 60);
        const seconds = timeLeft % 60;
        timerElement.textContent = `Tiempo restante: ${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
        if (timeLeft > 0) {
            timeLeft--;
        } else {
            endGame('El tiempo ha terminado.');
        }
    }

    function endGame(message) {
        clearInterval(timerInterval);
        // Ocultar elementos del juego
        submitButton.style.display = 'none';
        nextButton.style.display = 'none';
        answerInput.disabled = true;
        // Mostrar botón de reinicio
        resetButton.style.display = 'inline-block';
    }

    function resetGame() {
        location.reload(); // Recargar la página para reiniciar el juego
    }

    submitButton.addEventListener('click', () => {
        const userAnswer = parseInt(answerInput.value, 10);
        const correctAnswer = multiplicand * multiplier;
        if (userAnswer === correctAnswer) {
            feedbackElement.textContent = '¡Correcto!';
            feedbackElement.style.color = 'green';
            score++;
            updateScore();
        } else {
            feedbackElement.textContent = `Incorrecto. La respuesta correcta es ${correctAnswer}.`;
            feedbackElement.style.color = 'red';
            lives--;
            updateLives();
        }
        answerInput.disabled = true;
        submitButton.style.display = 'none';
        nextButton.style.display = 'inline-block';
    });

    nextButton.addEventListener('click', generateQuestion);
    resetButton.addEventListener('click', resetGame);

    function startGame() {
        lives = 3;
        score = 0;
        timeLeft = 300;
        updateLives();
        updateScore();
        generateQuestion();
        timerInterval = setInterval(updateTimer, 1000);
    }

    startGame();
});
