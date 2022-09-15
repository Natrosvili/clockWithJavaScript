const hourDisplay = document.querySelector(".hour");
const minuteDisplay = document.querySelector(".minute");
const secondDisplay = document.querySelector(".second");

function updateClock() {
    const currentDate = new Date();    

    const hour = currentDate.getHours();
    const hourDeg = (hour / 12) * 360;
    hourDisplay.style.transform = `rotate(${hourDeg}deg)`;


    const minute = currentDate.getMinutes();
    const minuteDeg = (minute / 60) * 360;
    minuteDisplay.style.transform = `rotate(${minuteDeg}deg)`
    
    const second = currentDate.getSeconds();
    const secondDeg = (second / 60) * 360;
    secondDisplay.style.transform = `rotate(${secondDeg}deg)`

}

setInterval(updateClock, 1000);