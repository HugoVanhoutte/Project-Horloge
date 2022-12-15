const secondsNeedle = document.getElementById("clock-needle-s");
const minutesNeedle = document.getElementById("clock-needle-m");
const hoursNeedle = document.getElementById("clock-needle-h");
setInterval(() => {
    let timeNow = new Date();
    secondsNeedle.style.transform = `rotate(${(timeNow.getSeconds()*6)}deg)`;
    minutesNeedle.style.transform = `rotate(${(timeNow.getMinutes()*6)}deg)`;
    hoursNeedle.style.transform = `rotate(${(timeNow.getHours()*30)}deg)`;
}, 500);

let color;
let background = document.getElementById("clock-background")
document.getElementById("color-changer").addEventListener("click", ()=> {
    color = document.getElementById("color").value;
    background.style.backgroundColor = color;
})
