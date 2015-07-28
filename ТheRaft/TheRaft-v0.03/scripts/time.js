function startTime(stopTimer) {
    var display = document.getElementById('checkTime'),
        timer = 60 * 10,
        minutes,
        seconds;

    setInterval(function () {
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? '0' + minutes : minutes;
        seconds = seconds < 10 ? '0' + seconds : seconds;

        display.innerHTML = minutes + ':' + seconds;

        if (--timer < 0) {
            timer = duration;
        }
    }, 1000);
}