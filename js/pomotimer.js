"use strict";

var whatTime = {
  typeTime: 'pomodoro',
  time: 25,
  seconds: 60,
  svgDash: 0,
  svgSeconds: 0
};
var typeTime = whatTime.typeTime,
    time = whatTime.time,
    timeSeconds = whatTime.timeSeconds,
    seconds = whatTime.seconds,
    svgDash = whatTime.svgDash,
    svgSeconds = whatTime.svgSeconds;
var clock;
var clockSvg;
elSel('#time-pomodoro').textContent = "".concat(time, ":00");
elSel('#reset-time').setAttribute('onclick', "timerFunction('reset', '".concat(typeTime, "')"));
elSel('#playpause').setAttribute('onclick', "timerFunction('play')");

function timerFunction(param, what) {
  switch (param) {
    case 'reset':
      console.log('reset time');
      clearInterval(clock);
      clearInterval(clockSvg);
      seconds = 60;
      svgDash = 0;
      elSel('#playpause').style.background = "url('media/svg/play.svg') no-repeat center center";
      elSel('#playpause').setAttribute('onclick', "timerFunction('play')");
      elSel('circle').style.strokeDashoffset = 0;

      switch (what) {
        case 'pomodoro':
          time = 25;
          elSel('#time-pomodoro').textContent = "".concat(time, ":00");
          break;

        case 'shortBreak':
          time = 5;
          elSel('#time-pomodoro').textContent = "0".concat(time, ":00");
          break;

        case 'longBreak':
          time = 15;
          elSel('#time-pomodoro').textContent = "".concat(time, ":00");
          break;
      }

      break;

    case 'play':
      console.log('play time');

      if (typeTime === 'pomodoro' && time === 25) {
        time--;
      } else if (typeTime === 'shortBreak' && time === 5) {
        time--;
      } else if (typeTime === 'longBreak' && time === 15) {
        time--;
      }

      elSel('#playpause').style.background = "url('media/svg/pause-outline.svg') no-repeat center center";
      elSel('#playpause').setAttribute('onclick', "timerFunction('pause')");
      clock = setInterval(function () {
        seconds--;

        if (time >= 10 && seconds >= 10) {
          elSel('#time-pomodoro').textContent = "".concat(time, ":").concat(seconds);
          elSel('#title-browser').textContent = "".concat(time, ":").concat(seconds, " MyFocus Pomodoro");
        } else if (time < 10 && seconds < 10) {
          elSel('#time-pomodoro').textContent = "0".concat(time, ":0").concat(seconds);
          elSel('#title-browser').textContent = "0".concat(time, ":0").concat(seconds, " MyFocus Pomodoro");
        } else if (time >= 10 && seconds < 10) {
          elSel('#time-pomodoro').textContent = "".concat(time, ":0").concat(seconds);
          elSel('#title-browser').textContent = "".concat(time, ":0").concat(seconds, " MyFocus Pomodoro");
        } else if (time < 10 && seconds >= 10) {
          elSel('#time-pomodoro').textContent = "0".concat(time, ":").concat(seconds);
          elSel('#title-browser').textContent = "0".concat(time, ":").concat(seconds, " MyFocus Pomodoro");
        }

        if (time < 1 && seconds <= 0) {
          clearInterval(clock);
          clearInterval(clockSvg);

          if (typeTime === 'pomodoro' && pomoFocus < 3) {
            ++pomoFocus;
            typeTime = 'shortBreak';
            time = 5;
            elSel('#time-pomodoro').textContent = "0".concat(time, ":00");
          } else if (typeTime === 'shortBreak' && shortBreak < 3) {
            ++shortBreak;
            typeTime = 'pomodoro';
            time = 25;
            elSel('#time-pomodoro').textContent = "".concat(time, ":00");
          } else if (pomoFocus === 3 && shortBreak === 3) {
            pomoFocus = 0;
            shortBreak = 0;
            typeTime = 'longBreak';
            time = 15;
            elSel('#time-pomodoro').textContent = "".concat(time, ":00");
          } else if (typeTime === 'longBreak' && time <= 0 && seconds <= 0) {
            typeTime = 'pomodoro';
            time = 25;
            elSel('#time-pomodoro').textContent = "".concat(time, ":00");
          }

          showModals('endTime');
          elSel('circle').style.strokeDashoffset = 0;

          if (window.innerWidth <= 450) {
            if (typeTime === 'pomodoro') {
              svgSeconds = 1579;
            } else if (typeTime === 'shortBreak') {
              svgSeconds = 314;
            } else if (typeTime === 'longBreak') {
              svgSeconds = 952;
            }
          } else if (window.innerWidth > 450) {
            if (typeTime === 'pomodoro') {
              svgSeconds = 1363;
            } else if (typeTime === 'shortBreak') {
              svgSeconds = 271;
            } else if (typeTime === 'longBreak') {
              svgSeconds = 821;
            }
          }

          elSel('#playpause').style.background = "url('media/svg/play.svg') no-repeat center center";
          elSel('#playpause').setAttribute('onclick', "timerFunction('play')");
        }

        if (seconds <= 0) {
          seconds = 60;
          time--;
        }

        elSel('#reset-time').setAttribute('onclick', "timerFunction('reset', '".concat(typeTime, "')"));
      }, 1000);
      clockSvg = setInterval(function () {
        if (window.innerWidth <= 450 && svgDash <= -955) {
          clearInterval(clockSvg);
          elSel('circle').style.strokeDashoffset = 0;
        } else if (window.innerWidth > 450 && svgDash <= -1105) {
          clearInterval(clockSvg);
          elSel('circle').style.strokeDashoffset = 0;
        } else {
          elSel('circle').style.strokeDashoffset = svgDash--;
        }
      }, svgSeconds);
      break;

    case 'pause':
      console.log('pause time');
      clearInterval(clock);
      clearInterval(clockSvg);
      elSel('#playpause').style.background = "url('media/svg/play.svg') no-repeat center center";
      elSel('#playpause').setAttribute('onclick', "timerFunction('play')");
      break;
  }
}

reEl();