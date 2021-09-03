const Calendar = document.querySelector(".calendar");

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

//hide calendar
window.onload = function () {

    const close = document.querySelector(".hide-calendar");
    const searchBtn = document.querySelectorAll(".book__search-date");

    close.addEventListener("click", () => {
        Calendar.style.display = "none";
    });

    searchBtn.forEach(function(item) {
        item.addEventListener("click", (e) => {
            e.preventDefault();
            if(Calendar.style.display == "none") {
                Calendar.style.display = "block";
            } 
        });
    });
};

//calendar 

let nav = 0;
let clicked = null;

const calendar = document.querySelector('.days');

const weekdays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

function load() {
  const dt = new Date();

  if (nav !== 0) {
    dt.setMonth(new Date().getMonth() + nav);
  }

  const day = dt.getDate();
  const month = dt.getMonth();
  const year = dt.getFullYear();
  
  const firstDayOfMonth = new Date(year, month, 1);
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  
  const dateString = firstDayOfMonth.toLocaleDateString('en-us', {
    weekday: 'long',
    year: 'numeric',
    month: 'numeric',
    day: 'numeric',
  });
  const paddingDays = weekdays.indexOf(dateString.split(', ')[0]);

  document.querySelector('.date__month').innerText = 
    `${dt.toLocaleDateString('en-us', { month: 'long' })} ${year}`;

  calendar.innerHTML = '';
 
  for(let i = 1; i <= paddingDays + daysInMonth; i++) {
    const daySquare = document.createElement('div');
    daySquare.classList.add('day');
    
    
    
    if (i > paddingDays) {
      daySquare.innerText = i - paddingDays;

      if (i - paddingDays === day && nav === 0) {
        daySquare.classList.add("today");
      }
    } else {
      daySquare.classList.add('padding');
    }

    calendar.appendChild(daySquare);    
  }
}


function renderNextMonth() {
    nav++;
    const calendarSecond = document.querySelector('.days-d');
    function loadSecond() {
        const dt = new Date();
      
        if (nav !== 0) {
          dt.setMonth(new Date().getMonth() + nav);
        }
      
        const day = dt.getDate();
        const month = dt.getMonth();
        const year = dt.getFullYear();
        
        const firstDayOfMonth = new Date(year, month, 1);
        const daysInMonth = new Date(year, month + 1, 0).getDate();
        
        const dateString = firstDayOfMonth.toLocaleDateString('en-us', {
          weekday: 'long',
          year: 'numeric',
          month: 'numeric',
          day: 'numeric',
        });
        const paddingDays = weekdays.indexOf(dateString.split(', ')[0]);
      
        document.querySelector('.date__month-d').innerText = 
          `${dt.toLocaleDateString('en-us', { month: 'long' })} ${year}`;
      
        calendarSecond.innerHTML = '';
       
        for(let i = 1; i <= paddingDays + daysInMonth; i++) {
          const daySquare = document.createElement('div');
          daySquare.classList.add('day');
          
          
          if (i > paddingDays) {
            daySquare.innerText = i - paddingDays;
          
      
            if (i - paddingDays === day && nav === 0) {
              daySquare.classList.add("today");
            }
          } else {
            daySquare.classList.add('padding');
          }
      
          calendarSecond.appendChild(daySquare);    
        }
      }
      loadSecond();
}

function initButtons() {
  document.querySelector(".next").addEventListener('click', () => {
    load();
    renderNextMonth();
  });

  document.querySelector(".prev").addEventListener('click', () => {
    nav--;
    function loadM() {
        nav--;
        const dt = new Date();
      
        if (nav !== 0) {
          dt.setMonth(new Date().getMonth() + nav);
        }
      
        const day = dt.getDate();
        const month = dt.getMonth();
        const year = dt.getFullYear();
        
        const firstDayOfMonth = new Date(year, month, 1);
        const daysInMonth = new Date(year, month + 1, 0).getDate();
        
        const dateString = firstDayOfMonth.toLocaleDateString('en-us', {
          weekday: 'long',
          year: 'numeric',
          month: 'numeric',
          day: 'numeric',
        });
        const paddingDays = weekdays.indexOf(dateString.split(', ')[0]);
      
        document.querySelector('.date__month').innerText = 
          `${dt.toLocaleDateString('en-us', { month: 'long' })} ${year}`;
      
        calendar.innerHTML = '';
       
        for(let i = 1; i <= paddingDays + daysInMonth; i++) {
          const daySquare = document.createElement('div');
          daySquare.classList.add('day');
          
          
          
          if (i > paddingDays) {
            daySquare.innerText = i - paddingDays;
      
            if (i - paddingDays === day && nav === 0) {
              daySquare.classList.add("today");
            }
          } else {
            daySquare.classList.add('padding');
          }
      
          calendar.appendChild(daySquare);    
        }
      }
    function renderNextMonthm() {
        nav++;
        const calendarSecond = document.querySelector('.days-d');
        function loadSecond() {
            const dt = new Date();
          
            if (nav !== 0) {
              dt.setMonth(new Date().getMonth() + nav);
            }
          
            const day = dt.getDate();
            const month = dt.getMonth();
            const year = dt.getFullYear();
            
            const firstDayOfMonth = new Date(year, month, 1);
            const daysInMonth = new Date(year, month + 1, 0).getDate();
            
            const dateString = firstDayOfMonth.toLocaleDateString('en-us', {
              weekday: 'long',
              year: 'numeric',
              month: 'numeric',
              day: 'numeric',
            });
            const paddingDays = weekdays.indexOf(dateString.split(', ')[0]);
          
            document.querySelector('.date__month-d').innerText = 
              `${dt.toLocaleDateString('en-us', { month: 'long' })} ${year}`;
          
            calendarSecond.innerHTML = '';
           
            for(let i = 1; i <= paddingDays + daysInMonth; i++) {
              const daySquare = document.createElement('div');
              daySquare.classList.add('day');
              
              const dayString = `${month + 1}/${i - paddingDays}/${year}`;
              
              if (i > paddingDays) {
                daySquare.innerText = i - paddingDays;
              //   const eventForDay = events.find(e => e.date === dayString);
          
                if (i - paddingDays === day && nav === 0) {
                  daySquare.classList.add("today");
                }
              } else {
                daySquare.classList.add('padding');
              }
          
              calendarSecond.appendChild(daySquare);    
            }
          }
          loadSecond();
    }
    loadM();
    renderNextMonthm();
  });
}
initButtons();
load();
renderNextMonth();