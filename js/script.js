function showCountdown() {
    const setButton = $(".set-button");

    setButton.click(() => {
        const countdownContainer = $(".Countdown-container");
        const countdownElements = $(".Countdown-elements");

        countdownContainer.css("display", "none");
        countdownElements.css("display", "flex");

        setInterval(setTimer, 1000);
    });
}


function setTimer() {
    const dayElement = $(".days h1");
    const hourElement = $(".hours h1");
    const minutesElement = $(".minutes h1");
    const secondsElement = $(".seconds h1");
    const dateInput = $(".date").val();
    const timeInput = $(".time").val();
    const now = Date.now();
    const targetDate = new Date(`${dateInput} ${timeInput}`).getTime();
    const countDown = targetDate - now;

    if (countDown <= 0) {
        dayElement.html("00");
        hourElement.html("00");
        minutesElement.html("00");
        secondsElement.html("00");
        return;
    }

    let day = Math.floor(countDown / (24 * 60 * 60 * 1000));
    let hour = Math.floor((countDown % (24 * 60 * 60 * 1000)) / (60 * 60 * 1000));
    let minutes = Math.floor((countDown % (60 * 60 * 1000)) / (60 * 1000));
    let seconds = Math.floor((countDown % (60 * 1000)) / 1000);

    day = day < 10 ? "0" + day : day;
    hour = hour < 10 ? "0" + hour : hour;
    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;

    dayElement.html(day);
    hourElement.html(hour);
    minutesElement.html(minutes);
    secondsElement.html(seconds);
}


showCountdown();