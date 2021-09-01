//add guests button
const inputGuests = document.querySelector(".book__input-guests");
const minusBtn = document.querySelector(".book__minus");
const plusBtn = document.querySelector(".book__plus");
const guestsErr = document.querySelector(".guests-error");

inputGuests.addEventListener("blur", () => {
    if(inputGuests.value == "" || inputGuests.value == "0") {
        inputGuests.value = "1";
    } else if (Number(inputGuests.value) > 5) {
        inputGuests.value = "5";
        showError();
    }
});


plusBtn.addEventListener("click", () => {
    if(Number(inputGuests.value) < 5) {
        inputGuests.stepUp();
    } else {
        showError();
    }
});

minusBtn.addEventListener("click", () => {
    if(Number(inputGuests.value) > 1) {
        inputGuests.stepDown();
    }
});

guestsErr.addEventListener("click", () => {
    guestsErr.classList.remove("_show-error");
});


function showError() {
    guestsErr.classList.add("_show-error");
    setTimeout(function() {guestsErr.classList.remove("_show-error")}, 6000);
}





const date = new Date();

// const renderCalendar = () => {
//     date.setDate(1);

//     const monthDays = document.querySelector(".days");

//     const lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();

//     const prevLastDay = new Date(date.getFullYear(), date.getMonth(), 0).getDate();

//     const firstDayIndex = date.getDay();

//     const lastDayIndex = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDay();

//     const nextDays = 7 - lastDayIndex -1;

//     const months = [
//         "January",
//         "February",
//         "March",
//         "April",
//         "May",
//         "June",
//         "July",
//         "August",
//         "September",
//         "October",
//         "November",
//         "Decamber",
//     ];

//     document.querySelector(".date h1").innerHTML = months[date.getMonth()];

//     document.querySelector(".date p").innerHTML = date.toDateString();

//     let days = "";

//     for(let x = firstDayIndex; x > 0; x--) {
//         days += `<div class="prev-date">${prevLastDay - x + 1}</div>`;
//     }

//     for(let i = 1; i <= lastDay; i++ ) {
//         if(i === new Date().getDate() && date.getMonth() === new Date().getMonth()) {
//             days += `<div class="today">${i}</div>`; 
//         } else {
//             days += `<div>${i}</div>`;
//         } 
//     }

//     for(let j = 1; j <= nextDays; j++) {
//         days += `<div class="next-date">${j}</div>`;
//     }
//     monthDays.innerHTML = days;
// }

date.setDate(1);

const monthDays = document.querySelector(".days");
const monthDaysD = document.querySelector(".days-d");

const lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();

// const prevLastDay = new Date(date.getFullYear(), date.getMonth(), 0).getDate();

const firstDayIndex = date.getDay();

// const lastDayIndex = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDay();

// const nextDays = 7 - lastDayIndex -1;

const months = [
     "January",
     "February",
     "March",
     "April",
     "May",
     "June",
     "July",
     "August",
     "September",
     "October",
     "November",
     "Decamber",
];

document.querySelector(".date__month").innerHTML = months[date.getMonth()];
document.querySelector(".date__month-d").innerHTML = months[date.getMonth()+ 1];

document.querySelector(".date__year").innerHTML = new Date().getFullYear();
document.querySelector(".date__year-d").innerHTML = new Date().getFullYear();

let days = "";

for(let x = firstDayIndex; x > 0; x--) {
    days += `<div></div>`;
}

for(let i = 1; i <= lastDay; i++ ) {
    if(i === new Date().getDate() && date.getMonth() === new Date().getMonth()) {
        days += `<div class="today">${i}</div>`; 
    } else {
        days += `<div>${i}</div>`;
    } 
}
monthDays.innerHTML = days;

// for(let j = 1; j <= nextDays; j++) {
//     days += `<div class="next-date">${j}</div>`;
//     monthDays.innerHTML = days;
// }

// document.querySelector(".prev").addEventListener("click", () => {
//     date.setMonth(date.getMonth() - 1);
//     renderCalendar();
// });

// document.querySelector(".next").addEventListener("click", () => {
//     date.setMonth(date.getMonth() + 1);
//     renderCalendar();
// });

// renderCalendar();