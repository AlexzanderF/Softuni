function stopwatch() {
    const startBtn = document.getElementById('startBtn');
    const stopBtn = document.getElementById('stopBtn');
    const timer = document.getElementById('time');
    startBtn.addEventListener('click', () => {
        timer.textContent = '00:00';
        startBtn.setAttribute('disabled', 'true');
        stopBtn.removeAttribute('disabled');
        let sec = 0;
        let min = 0;
        let intervalID = setInterval(
            function () {
                sec++;
                if (sec === 60) {
                    sec = 0;
                    min++;
                }
                if (min < 10) {
                    if (sec < 10) {
                        timer.textContent = `0${min}:0${sec}`;
                    } else {
                        timer.textContent = `0${min}:${sec}`;
                    }
                } else {
                    if (sec < 10) {
                        timer.textContent = `${min}:0${sec}`;
                    } else {
                        timer.textContent = `${min}:${sec}`;
                    }
                }
            },
            1000
        );
        stopBtn.addEventListener('click', () => {
            stopBtn.setAttribute('disabled', 'true');
            startBtn.removeAttribute('disabled');
            clearInterval(intervalID);
        });
    });

}