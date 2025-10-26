"use strict";
/*    JavaScript 7th Edition
      Chapter 8
      Project 08-01

      Project to create a timer object
      Author: Amanda Ruff
      Date:   10/26/2025

      Filename: project08-01.js
*/

/*--------------- Object Code --------------------*/
function timer(min, sec) {
    this.minutes = min;
    this.seconds = sec;
    this.timeID = null;
}

timer.prototype.runPause = function(timer, minBox, secBox) {
    if (timer.timeID) {
        // If timer.timeID already has a value, pause the timer
        window.clearInterval(timer.timeID);
        timer.timeID = null;
    } else {
        // Otherwise, start the timer and run countdown() every second
        timer.timeID = window.setInterval(function() {
            countdown(timer, minBox, secBox);
        }, 1000);
    }
};

function countdown(timer, minBox, secBox) {
    if (timer.seconds > 0) {
        // Decrease seconds by 1
        timer.seconds -= 1;
    } else if (timer.minutes > 0) {
        // If seconds hit 0 but minutes remain, reduce minutes and reset seconds to 59
        timer.minutes -= 1;
        timer.seconds = 59;
    } else {
        // Timer reached 0:0 — stop it
        window.clearInterval(timer.timeID);
        timer.timeID = null;
    }

    // Update the display boxes with current time
    minBox.value = timer.minutes;
    secBox.value = timer.seconds;
}

/*--------------- Interface Code -----------------*/

/* Interface Objects */
let minBox = document.getElementById("minutesBox");
let secBox = document.getElementById("secondsBox");
let runPauseTimer = document.getElementById("runPauseButton");

/* Timer Instance */
let myTimer = new timer(minBox.value, secBox.value);

/* Event Handlers */
minBox.onchange = function() {
    myTimer.minutes = minBox.value;
};

secBox.onchange = function() {
    myTimer.seconds = secBox.value;
};

runPauseTimer.onclick = function() {
    myTimer.runPause(myTimer, minBox, secBox);
};
