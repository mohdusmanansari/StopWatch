        let timer;
        let seconds = 0, minutes = 0, hours = 0;
        let isRunning = false;

        function updateDisplay() {
            document.querySelector(".timer").innerText = 
                (hours < 10 ? "0" : "") + hours + ":" +
                (minutes < 10 ? "0" : "") + minutes + ":" +
                (seconds < 10 ? "0" : "") + seconds;
        }

        function startTimer() {
            if (!isRunning) {
                isRunning = true;
                timer = setInterval(() => {
                    seconds++;
                    if (seconds === 60) { seconds = 0; minutes++; }
                    if (minutes === 60) { minutes = 0; hours++; }
                    updateDisplay();
                }, 1000);
            }
        }

        function stopTimer() {
            clearInterval(timer);
            isRunning = false;
        }

        function resetTimer() {
            clearInterval(timer);
            seconds = 0; minutes = 0; hours = 0;
            isRunning = false;
            updateDisplay();
        }