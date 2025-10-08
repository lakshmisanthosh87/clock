// Select the clock hands
const hourHand = document.querySelector('.hour');
const minuteHand = document.querySelector('.minute');
const secondHand = document.querySelector('.second');

function updateClock() {
    const now = new Date(); // current time

    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();
    const milliseconds = now.getMilliseconds(); // for smooth second hand

    const hours12 = hours % 12;

    // Calculate angles for rotation
    const secondDeg = ((seconds + milliseconds / 1000) / 60) * 360;
    const minuteDeg = ((minutes + seconds / 60) / 60) * 360;
    const hourDeg = ((hours12 + minutes / 60) / 12) * 360;

    // Apply rotation
    secondHand.style.transform = `translateX(-50%) rotate(${secondDeg}deg)`;
    minuteHand.style.transform = `translateX(-50%) rotate(${minuteDeg}deg)`;
    hourHand.style.transform = `translateX(-50%) rotate(${hourDeg}deg)`;
}

// Update the clock immediately and every 50ms for smooth movement
updateClock();
setInterval(updateClock, 50);
