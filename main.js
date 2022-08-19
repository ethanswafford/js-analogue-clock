const secondsHand = document.getElementById('seconds');
const minutesHand = document.getElementById('minutes');
const hoursHand = document.getElementById('hours');

function getTime() {
    const now = new Date();
    const seconds = now.getSeconds();
    const minutes = now.getMinutes();
    const hours = now.getHours();
    const timeInterval = 6;

    secondsHand.style.transform = 'rotate(60deg)'
}

getTime();