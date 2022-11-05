let birthday = new Date(Date.parse("March 29, 2008"));

let currentDate = new Date();
let timer = document.querySelector("#time");
let timerFormat = document.querySelector("#format");

let years = (currentDate.getTime() - birthday.getTime()) / 31536000000;
let yearsRaw = currentDate.getTime() - birthday.getTime();

let seconds = Math.floor((currentDate - birthday) / 1000);
let minutes = Math.floor(seconds / 60);
let hours = Math.floor(minutes / 60);
let days = Math.floor(hours / 24);
let yearsLog = Math.floor(days / 365);

days = days - yearsLog * 365;
hours = hours - days * 24 - yearsLog * 365 * 24;
minutes = minutes - days * 24 * 60 - hours * 60 - yearsLog * 365 * 24 * 60;
seconds =
  seconds -
  days * 24 * 60 * 60 -
  hours * 60 * 60 -
  minutes * 60 -
  yearsLog * 365 * 24 * 60 * 60;

timerFormat.innerHTML =
  yearsLog + ":" + days + ":" + hours + ":" + minutes + ":" + seconds;

setInterval(updateFormat, 1000);
function updateFormat() {
  timerFormat.innerHTML =
    yearsLog + ":" + days + ":" + hours + ":" + minutes + ":" + seconds;
  currentDate = new Date();
  seconds = Math.floor((currentDate - birthday) / 1000);
  minutes = Math.floor(seconds / 60);
  hours = Math.floor(minutes / 60);
  days = Math.floor(hours / 24);
  yearsLog = Math.floor(days / 365);
  days = days - yearsLog * 365;
  hours = hours - days * 24 - yearsLog * 365 * 24;
  minutes = minutes - days * 24 * 60 - hours * 60 - yearsLog * 365 * 24 * 60;
  seconds =
    seconds -
    days * 24 * 60 * 60 -
    hours * 60 * 60 -
    minutes * 60 -
    yearsLog * 365 * 24 * 60 * 60;
}

// years = parseFloat(years.toFixed(9));

// setInterval(update, 1000);
// function update() {
//   timer.innerHTML = years;
//   years = parseFloat(years.toFixed(9));
//   years += 0.00000001;
//   years = parseFloat(years.toFixed(9));
// }
