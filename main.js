//Variables
let timeDisplay = document.querySelector(".time-display");
let dateDisplay = document.querySelector(".date-display");

//Dislays time
function displayTime() {
  let d = new Date();
  let hour = d.getHours();
  let min = d.getMinutes();
  let sec = d.getSeconds();

  //Ensures values are 2 digits
  (hour < 10) ? hour = "0" + hour: hour;
  (min < 10) ? min = "0" + min: min;
  (sec < 10) ? sec = "0" + sec: sec;

  //Sets display
  let time = hour + ":" + min + ":" + sec;
  timeDisplay.innerText = time;

  //Causes the displayTime() to repeat every second
  setTimeout(displayTime, 1000);
}

//Dislays date
function displayDate() {
  let d = new Date();
  let day = d.getDay();
  let date = d.getDate();
  let month = d.getMonth();
  let year = d.getFullYear();

  switch (day) {
    case 0:
      day = "Sunday";
      break;
    case 1:
      day = "Monday";
      break;
    case 2:
      day = "Tuesday";
      break;
    case 3:
      day = "Wednesday";
      break;
    case 4:
      day = "Thursday";
      break;
    case 5:
      day = "Friday";
      break;
    case 6:
      day = "Saturday";
  }

  switch (month) {
    case 0:
      month = "January";
      break;
    case 1:
      month = "February";
      break;
    case 2:
      month = "March";
      break;
    case 3:
      month = "April";
      break;
    case 4:
      month = "May";
      break;
    case 5:
      month = "June";
      break;
    case 6:
      month = "July";
      break;
    case 7:
      month = "August";
      break;
    case 8:
      month = "September";
      break;
    case 9:
      month = "October";
      break;
    case 10:
      month = "November";
      break;
    case 11:
      month = "December";
      break;

  }

  let todaysDate = day + " " + date + " " + month + " " + year;
  dateDisplay.innerText = todaysDate;
}

//Initialises clock
function initClock() {
  displayTime();
  displayDate();
}

//Running funtions
initClock();
