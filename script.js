
let dateContainer = document.getElementById("monthDates");
let dayList = ["SUN", "MON", "TUE", "WED", "THRUS", "FRI", "SAT"]
let monthList = ["JAN", "FEB", "MAR", "APR", "MAY", "JUNE", "JULY", "AUG", "SEPT", "OCT", "NOV", "DEC"]

let date = new Date();
let currentDates = document.querySelectorAll("currentDates")



let displayCalender = () => {

    let currentYear = date.getFullYear()
    let currentMonth = date.getMonth()

    let firstDayOfCurrentMonth = new Date(currentYear, currentMonth, 1).getDay()
    let firstDateOfCurrentMonth = new Date(currentYear, currentMonth, 1).getDate()

    let lastDayOfCurrentMonth = new Date(currentYear, currentMonth + 1, 0).getDay()
    let totalDatesOfCurrentMonth = new Date(currentYear, currentMonth + 1, 0).getDate()

    let previousDaysOfCurrentMonth = firstDayOfCurrentMonth;
    let forwordDaysOfCurrentMonth = 7 - (lastDayOfCurrentMonth + 1);

    let currentDate = date.getDate();
    let currentDay = date.getDay();

    let lastDateOfPreviousMonth = new Date(currentYear, currentMonth, 0).getDate()
    let count = lastDateOfPreviousMonth - firstDayOfCurrentMonth + 1;



    let dateHolder = "";

    for (let i = count; i <= lastDateOfPreviousMonth; i++) {
        if (new Date(currentYear, currentMonth - 1, i).getDay() == 0) {
            dateHolder += `<span class="allDates sunday previousDates">${i}</span>`
        } else {
            dateHolder += `<span class="allDates previousDates">${i}</span>`
        }
    }

    for (let i = 1; i <= totalDatesOfCurrentMonth; i++) {
        if (i == new Date().getDate() && new Date().getFullYear() == date.getFullYear() && new Date().getMonth() == date.getMonth()) {
            dateHolder += `<span class="allDates today">${i}</span>`
        }
        else if (new Date(currentYear, currentMonth, i).getDay() == 0) {
            dateHolder += `<span class="allDates sunday">${i}</span>`
        }
        else {
            dateHolder += `<span class="allDates currentDates">${i}</span>`
        }
    }

    for (let i = 1; i <= forwordDaysOfCurrentMonth; i++) {

        if (new Date(currentYear, currentMonth + 1, i).getDay() == 0) {
            dateHolder += `<span class="allDates sunday forwordDates">${i}</span>`
        } else {
            dateHolder += `<span class="allDates forwordDates">${i}</span>`
        }
    }

    dateContainer.innerHTML = dateHolder

    let year = document.getElementById("currentYear");
    let month = document.getElementById("currentMonth");
    let currentFullDate = document.getElementById("currentFullDate");
    let calenderBody = document.getElementById("calenderBody");
    if (currentMonth <= 10) {
        calenderBody.style.background = `black url(./img/0${currentMonth}.jpg) no-repeat`
        calenderBody.style.backgroundSize = `cover`
    } else {
        calenderBody.style.background = `black url(./img/${currentMonth}.jpg) no-repeat`
        calenderBody.style.backgroundSize = `cover`
    }
    year.innerText = currentYear
    month.innerText = monthList[currentMonth]
    currentFullDate.innerText = `${dayList[new Date().getDay()]}, ${currentDate} ${monthList[new Date().getMonth()]}, ${new Date().getFullYear()}`


    if (new Date().getFullYear() == date.getFullYear()) {
        year.style.color = "red"
    } else {
        year.style.color = "white"
    }

    if (new Date().getFullYear() == date.getFullYear() && new Date().getMonth() == date.getMonth()) {
        month.style.color = "red"
    } else {
        month.style.color = "white"
    }
}

displayCalender();

document.querySelector("#prevMonth").addEventListener("click", (e) => {
    e.preventDefault()
    date.setMonth(date.getMonth() - 1)
    displayCalender()
    e.stopPropagation()
})

document.querySelector("#nextMonth").addEventListener("click", (e) => {
    e.preventDefault()
    date.setMonth(date.getMonth() + 1)
    displayCalender()
    e.stopPropagation()
})

document.querySelector("#nextYear").addEventListener("click", (e) => {
    e.preventDefault()
    date.setFullYear(date.getFullYear() + 1)
    displayCalender()
    e.stopPropagation()
})

document.querySelector("#prevYear").addEventListener("click", (e) => {
    e.preventDefault()
    date.setFullYear(date.getFullYear() - 1)
    displayCalender()
    e.stopPropagation()
})






