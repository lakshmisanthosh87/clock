
const hourHand = document.querySelector('.hour');
const minuteHand = document.querySelector('.minute');
const secondHand = document.querySelector('.second');
const  digitalDisplay =document.querySelector('.digital')

function updateClock() {
    const now = new Date(); 

    const hours = now.getHours(); 
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();
    const milliseconds = now.getMilliseconds(); 

    const hours12 = hours % 12;

    
    const secondDeg = ((seconds + milliseconds / 1000) / 60) * 360;
    const minuteDeg = ((minutes + seconds / 60) / 60) * 360;
    const hourDeg = ((hours12 + minutes / 60) / 12) * 360;

    
    secondHand.style.transform = `translateX(-50%) rotate(${secondDeg}deg)`;
    minuteHand.style.transform = `translateX(-50%) rotate(${minuteDeg}deg)`;
    hourHand.style.transform = `translateX(-50%) rotate(${hourDeg}deg)`;



    const formatTime = (n) => (n < 10 ? "0" + n : n); 
  const ampm = hours >= 12 ? "PM" : "AM";
  const displayHour = hours % 12 || 12;

  digitalDisplay.textContent = `${formatTime(displayHour)}:${formatTime(minutes)}:${formatTime(seconds)} ${ampm}`;









}


updateClock();
setInterval(updateClock, 50);
