const secondsHand = document.getElementById('seconds');
const minutesHand = document.getElementById('minutes');
const hoursHand = document.getElementById('hours');

function getTime() {
    const now = new Date();
    const seconds = now.getSeconds();
    const minutes = now.getMinutes();
    const hours = now.getHours();
    const timeInterval = 6;
    console.log(seconds);

    secondsHand.style.transform = 'rotate(' + (seconds * timeInterval) + 'deg)';
    minutesHand.style.transform = 'rotate(' + (minutes * timeInterval) + 'deg)';
    hoursHand.style.transform = 'rotate(' + (hours * timeInterval) + 'deg)';
}

setInterval(getTime, 1000);