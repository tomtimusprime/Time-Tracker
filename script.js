const displayTime = document.querySelector("#displayTime");
displayTime.textContent = moment().format("dddd, MMMM DD, YYYY hh:mm A");
const clockInBtn = document.querySelector("#clock-in");
const clockOutBtn = document.querySelector("#clock-out");
const clockInTimeEl = document.querySelector("#clock-in-time");
const clockOutTimeEl = document.querySelector("#clock-out-time");
const currentTimeEl = document.querySelector("#current-time");
currentTimeEl.textContent = "Current Time: " + moment().format("h:mm A");
const timeClockedInEl = document.querySelector("#time-clocked-in");

let start;
let clockInTime;
let clockOutTime;
let clickedClockOut = false;
let timerCount = 0;
let now = moment();

// var minutesPassed = moment().diff(start, 'minutes');

function displayLapsedTime(f) {
    // var minutesPassed = moment().diff(clockedInTime, 'seconds');
    // timeClockedInEl.textContent = moment().seconds(timerCount);
    // timeClockedInEl.textContent = minutesPassed;
    timeClockedInEl.textContent = f;

}

function startTimer() {
    timer = setInterval(function () {
        if (clickedClockOut) {
            clearInterval(timer);
        }
        elapsedDuration = moment().diff(start, 'seconds');
        var duration = moment.duration(elapsedDuration, "hh:mm:ss");
        let f = moment.utc(elapsedDuration).format("HH:mm:ss");
        //in minutes
        timerCount++;
        displayLapsedTime(f);
    }, 1000);
}


clockInBtn.addEventListener("click", function (e) {
    start = moment();
    clockInTime = moment().format("hh:mm:ss");
    clockInTimeEl.textContent = "    " + clockInTime;
    localStorage.setItem("clockIn", moment().format("hh:mm:ss"));
    clockInBtn.disabled = true;
    startTimer();
})
clockOutBtn.addEventListener("click", function (e) {
    clockOutTime = moment().format("hh:mm:ss");
    clockOutTimeEl.textContent = "    " + clockOutTime;
    localStorage.setItem("clockOut", moment().format("hh:mm:ss"));
    clickedClockOut = true;
    clockInBtn.disabled = false;

})


