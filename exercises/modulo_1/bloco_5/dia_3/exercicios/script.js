function createDaysOfTheWeek() {
  const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
  const weekDaysList = document.querySelector('.week-days');

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement('li');
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  };
};

createDaysOfTheWeek();

function createDaysOfTheMonth() {
  const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
  let monthDaysList = document.querySelector('#days');

  for (let index = 0; index < dezDaysList.length; index += 1) {
    let day = dezDaysList[index];
    let dayItem = document.createElement('li');

    if (day === 24 || day === 25 || day === 31) {
      dayItem.classList.add('holiday');
    }
    if (day === 4 || day === 11 || day === 18 || day === 25) {
      dayItem.classList.add('friday');
    }
    dayItem.classList.add('day');
    dayItem.innerText = day;

    monthDaysList.appendChild(dayItem);
  }
}

createDaysOfTheMonth();

function createButton(string, id) {
  let btn = document.createElement('button');
  let parent = document.querySelector('.buttons-container');
  btn.id = id;
  btn.innerText = string;

  parent.appendChild(btn);
}

createButton('Feriados', 'btn-holiday');

let btnHoliday = document.querySelector('#btn-holiday');

function colorChange(elements, color) {
  for (let index = 0; index < elements.length; index += 1) {
    elements[index].style.backgroundColor = color;
  }
}

btnHolidayEnable = false;
btnHoliday.addEventListener('click', function() {
  let holidays = document.querySelectorAll('.holiday');
  if (btnHolidayEnable) {
    colorChange(holidays,'rgb(238, 238, 238)');
    btnHolidayEnable = false;
  } else {
    colorChange(holidays,'lightgrey');
    btnHolidayEnable = true;
  }
});

createButton('Sexta-feira', 'btn-friday');

function changeTextToNumber(friday, number) {
  friday.innerText = number;
}

function changeText(fridays, text) {
  for (let index = 0; index < fridays.length; index += 1) {
    fridays[index].innerText = text;
  }
}

let btnFriday = document.querySelector('#btn-friday');
btnFridayEnable = false;
btnFriday.addEventListener('click', function() {
  let fridays = document.querySelectorAll('.friday');
  let numbersFridays = [4, 11, 18, 25];
  if (btnFridayEnable) {
    for (let index = 0; index < numbersFridays.length; index += 1) {
      changeTextToNumber(fridays[index], numbersFridays[index]);
    }
    btnFridayEnable = false;
  } else {
    changeText(fridays, 'SEXTOU o/');
    btnFridayEnable = true;
  }
});

let zoomedIn = false;
function zoomInAndOut(event) {
  if (zoomedIn) {
    event.target.style.fontSize = '20px';
    zoomedIn = false;
  } else {
    event.target.style.fontSize = '27px';
    zoomedIn = true;
  }
}

let monthDays = document.querySelector('#days');
monthDays.addEventListener('mouseover', zoomInAndOut);
monthDays.addEventListener('mouseout', zoomInAndOut);