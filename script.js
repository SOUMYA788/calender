let dateContainer = document.getElementById("monthDates");
let dayList = ["SUN", "MON", "TUE", "WED", "THRUS", "FRI", "SAT"]
let monthList = ["JAN", "FEB", "MAR", "APR", "MAY", "JUNE", "JULY", "AUG", "SEPT", "OCT", "NOV", "DEC"]

let date = new Date();

let currentYear = date.getFullYear()
let currentMonth = date.getMonth()

let firstDayOfCurrentMonth = new Date(currentYear, currentMonth, 1).getDay()
let firstDateOfCurrentMonth = new Date(currentYear, currentMonth, 1).getDate()

let lastDayOfCurrentMonth = new Date(currentYear, currentMonth+1, 0).getDay()
let totalDatesOfCurrentMonth = new Date(currentYear, currentMonth+1, 0).getDate()


let previousDaysOfCurrentMonth = firstDayOfCurrentMonth;
let forwordDaysOfCurrentMonth = 7 - (lastDayOfCurrentMonth+1);


let lastDateOfPreviousMonth = new Date(currentYear, currentMonth, 0).getDate()
let count = lastDateOfPreviousMonth-firstDayOfCurrentMonth+1;

console.log(count, lastDateOfPreviousMonth);

let dateHolder = "";


for (let i = count; i <= lastDateOfPreviousMonth; i++) {
    dateHolder += `<span class="previousDates">${i}</span>`
    console.log(i);  
}


for (let i = 1; i <= totalDatesOfCurrentMonth; i++) {
    dateHolder += `<span class="currentDates">${i}</span>`
}

for (let i = 1; i <= forwordDaysOfCurrentMonth; i++) {
    dateHolder += `<span class="forwordDates">${i}</span>`  
}
dateContainer.innerHTML = dateHolder



const calenderBody = document.getElementById("calenderBody");
let randumNum = Math.floor(Math.random()*12)
if (randumNum<=10) {
    calenderBody.style.background = `black url(./img/0${randumNum}.jpg) no-repeat`
    calenderBody.style.backgroundSize = `cover`
} else {
    calenderBody.style.background = `black url(./img/${randumNum}.jpg) no-repeat`
    calenderBody.style.backgroundSize = `cover`
}
