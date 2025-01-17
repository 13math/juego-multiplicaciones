document.addEventListener('DOMContentLoaded', () => {
    const multiplicandElement = document.getElementById('multiplicand');
    const multiplierElement = document.getElementById('multiplier');
    const answerInput = document.getElementById('answer');
    const submitButton = document.getElementById('submit');
    const feedbackElement = document.getElementById('feedback');
    const nextButton = document.getElementById('next');
    const livesElement = document.getElementById('lives');
    const scoreElement = document.getElementById('score');
    const timerElement = document.getElementById('timer');

    let multiplicand, multiplier;
    let lives = 3; // Número inicial de vidas
    let score = 0; // Puntuación inicial
    let timeLeft = 300; // Tiempo en segundos (5 minutos)
    let timerInterval;

    function generateQuestion() {
        multiplicand = Math.floor(Math.random() * 10) + 1;
        multiplier = Math.floor(Math.random() * 10) + 1;
        multiplicandElement.textContent = multiplicand;
        multiplierElement.textContent = multiplier;
        answerInput.value = '';
        feedbackElement.textContent = '';
        nextButton.style.display = 'none';
        submitButton.style.display = 'inline';
        answerInput.disabled = false;
        answerInput.focus();
    }

    function updateLives() {
        // Actualiza la visualización de las vidas con corazones
        livesElement.innerHTML = '';
        for (let i = 0; i < lives; i++) {
            const heart = document.createElement('span');
            heart.classList.add('heart');
            heart.innerHTML = '&#9829;';
            livesElement.appendChild(heart);
        }
        if (lives === 0) {
            alert('Has perdido todas tus vidas. El juego se reiniciará.');
            resetGame();
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
            alert('El tiempo ha terminado. El juego se reiniciará.');
            resetGame();
        }
    }

    function resetGame() {
        clearInterval(timerInterval);
        lives = 3;
        score = 0;
        timeLeft = 300;
        updateLives();
        updateScore();
        generateQuestion();
        timerInterval = setInterval(updateTimer, 1000); // Reinicia el temporizador
    }

    submitButton.addEventListener('click', () => {
        const userAnswer = parseInt(answerInput.value, 10);
        const correctAnswer
::contentReference[oaicite:0]{index=0}
 
