let timerText = document.getElementById("timerText");
let twentySecBtn = document.getElementById("twentySecondsBtn");
let thirtySecBtn = document.getElementById("thirtySecondsBtn");
let fortySecBtn = document.getElementById("fortySecondsBtn");
let oneMinBtn = document.getElementById("oneMinuteBtn");

let secondsLeft = 0;
let timerId;
twentySecBtn.onclick = function() {
    secondsLeft = 20;
    clearPreviousTimer();
    setTimerAndShow();
}
thirtySecBtn.onclick = function() {
    secondsLeft = 30;
    clearPreviousTimer();
    setTimerAndShow();
}
fortySecBtn.onclick = function() {
    secondsLeft = 40;
    clearPreviousTimer();
    setTimerAndShow();
}
oneMinBtn.onclick = function() {
    secondsLeft = 60;
    clearPreviousTimer();
    setTimerAndShow();
}

function clearPreviousTimer() {
    clearInterval(timerId);
}

function setTimerAndShow() {
    timerText.textContent = secondsLeft + " seconds left";
    timerId = setInterval(startTimer, 1000);
}

function startTimer() {
    if (secondsLeft > 1) {
        secondsLeft = secondsLeft - 1;
        timerText.textContent = secondsLeft + " seconds left";
    } else {
        clearPreviousTimer();
        timerText.textContent = 'Your moment is complete';
    }
}