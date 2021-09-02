//guests buttons
const inputGuests = document.querySelector(".book__input-guests");
const minusBtn = document.querySelector(".book__minus");
const plusBtn = document.querySelector(".book__plus");
const guestsErr = document.querySelector(".guests-error");

hideMinus();

inputGuests.addEventListener("blur", () => {
    if(inputGuests.value == "" || inputGuests.value == "0") {
        inputGuests.value = "1";
        hideMinus();
        showPlus();
    } else if (Number(inputGuests.value) > 5) {
        inputGuests.value = "5";
        hidePlus();
        showMinus();
    } else {
        showMinus();
        showPlus();
    }
});


plusBtn.addEventListener("click", () => {
    showMinus(); 
    inputGuests.stepUp();
    if(Number(inputGuests.value) == 5) {
        hidePlus();
    } 
});

minusBtn.addEventListener("click", () => {
    showPlus();
    inputGuests.stepDown();
    if(Number(inputGuests.value) == 1) {
        hideMinus();
    }
});

function hidePlus() {
        plusBtn.classList.add("_no-active");
}
function showPlus() {
        plusBtn.classList.remove("_no-active");
}
function hideMinus() {
    minusBtn.classList.add("_no-active");
}
function showMinus() {
    minusBtn.classList.remove("_no-active");
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

