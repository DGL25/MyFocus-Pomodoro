"use strict";

var elSel = function elSel(el) {
  return document.querySelector(el);
};

function reEl() {
  if (window.innerWidth < 450) {
    elSel('svg').setAttribute('height', 310);
    elSel('svg').setAttribute('width', 310);
    elSel('circle').setAttribute('cx', 155);
    elSel('circle').setAttribute('cy', 155);
    elSel('circle').setAttribute('r', 152);
    elSel('circle').style.strokeDasharray = 955;

    if (typeTime === 'pomodoro') {
      svgSeconds = 1579;
    } else if (typeTime === 'shortBreak') {
      svgSeconds = 314;
    } else if (typeTime === 'longBreak') {
      svgSeconds = 952;
    }
  } else {
    elSel('svg').setAttribute('height', 360);
    elSel('svg').setAttribute('width', 360);
    elSel('circle').setAttribute('cx', 130);
    elSel('circle').setAttribute('cy', 180);
    elSel('circle').setAttribute('r', 176);
    elSel('circle').style.strokeDasharray = 1110;

    if (typeTime === 'pomodoro') {
      svgSeconds = 1363;
    } else if (typeTime === 'shortBreak') {
      svgSeconds = 271;
    } else if (typeTime === 'longBreak') {
      svgSeconds = 821;
    }
  }

  window.addEventListener('resize', reEl);
}