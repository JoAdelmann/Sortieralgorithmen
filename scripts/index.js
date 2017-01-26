var clock = null;
var dayArray = new Array(7);
dayArray[0] = "Sonntag";
dayArray[1] = "Montag";
dayArray[2] = "Dienstag";
dayArray[3] = "Mittwoch";
dayArray[4] = "Donnerstag";
dayArray[5] = "Freitag";
dayArray[6] = "Samstag";

function tick() {
    var today = new Date();
    var day = today.getDate();
    var month = today.getMonth() + 1;
    var year = today.getFullYear();
    var hour = today.getHours();
    var minutes = today.getMinutes();
    var seconds = today.getSeconds();
    var dayNumber = today.getDay();
    
    
    var hourString = "";
    var minutesString = "";
    var secondsString = "";
    var dayString = dayArray[dayNumber];
    
    
    if(hour < 10) {
        hourString = "0" + hour;
    } else {
        hourString = hour;
    }
    if(minutes < 10) {
        minutesString = "0" + minutes;
    } else {
        minutesString = minutes;
    }
    if(seconds < 10) {
        secondsString = "0" + seconds;
    } else {
        secondsString = seconds;
    }
    
    var timeString = hourString + ":" + minutesString + ":" + secondsString + " Uhr";
    
    clock.innerHTML = dayString + ", " + day + "." + month + "." + year + "  |  " + timeString;
    
    window.setTimeout("tick();", 1000);
}

function init() {
    clock = document.getElementById("time");
    tick();
}

window.onload = init;