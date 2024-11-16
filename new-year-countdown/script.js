const dayEl = document.getElementById("day");
const hourEl = document.getElementById("hour");
const minuteEl = document.getElementById("minute");
const secondEl = document.getElementById("second");

const newYearTime = new Date("Jan 1, 2025 00:00:00:00").getTime();

updateCountdown();

function updateCountdown(){
    const now = new Date().getTime();
    const gap = newYearTime - now;
    const second = 1000;
    const minute = 60 * second;
    const hour = 60 * minute;
    const day = 24 * hour;
    const remDay = Math.floor(gap/day);
    const remHour = Math.floor((gap % day) / hour);
    const remMinute = Math.floor((gap % hour) / minute);
    const remSecond = Math.floor((gap % minute) / second);

    dayEl.innerText = remDay;
    hourEl.innerText = remHour;
    minuteEl.innerText = remMinute;
    secondEl.innerText = remSecond;

    setTimeout(updateCountdown, 1000);
}