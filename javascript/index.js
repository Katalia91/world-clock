function updateTime() {
// Los Angeles

let losAngelesElement = document.querySelector("#los-angeles");
let losAngelesDateElement = losAngelesElement.querySelector(".date");
let losAngelesTimeElement = losAngelesElement.querySelector(".time");
let losAngelesTime = moment().tz("America/Los_Angeles");

losAngelesDateElement.innerHTML = losAngelesTime.format("MMMM Do YYYY");
losAngelesTimeElement.innerHTML = losAngelesTime.format('hh:mm:ss [<small>]A[</small>]');

// Warsaw

let warsawElement = document.querySelector("#warsaw");
let warsawDateElement = warsawElement.querySelector(".date");
let warsawTimeElement = warsawElement.querySelector(".time");
let warsawTime= moment().tz("Europe/Warsaw");

warsawDateElement.innerHTML = warsawTime.format("MMMM Do YYYY");
warsawTimeElement.innerHTML = warsawTime.format('hh:mm:ss [<small>]A[</small>]');


// Sydney

let sydneyElement = document.querySelector("#sydney");
let sydneyDateElement = sydneyElement.querySelector(".date");
let sydneyTimeElement = sydneyElement.querySelector(".time");
let sydneyTime= moment().tz("Australia/Sydney");

sydneyDateElement.innerHTML = sydneyTime.format("MMMM Do YYYY");
sydneyTimeElement.innerHTML = sydneyTime.format('hh:mm:ss [<small>]A[</small>]');
}
updateTime();
setInterval(updateTime, 1000);
