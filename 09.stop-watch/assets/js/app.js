const hour = document.querySelector('.hour'),
      minute = document.querySelector('.minute'),
      second = document.querySelector('.second'),
      startBtn = document.querySelector('.start'),
      pauseBtn = document.querySelector('.pause'),
      resetBtn = document.querySelector('.reset');
let myTimer = null;
let setHour = 0;
let setMinute = 0;
let setSecond = 0;

function startTimer() {
  if (!myTimer) {
    myTimer = setInterval(() => {
      second.innerHTML = `${formatTimer(setSecond)}`;
      minute.innerHTML = `${formatTimer(setMinute)}`;
      hour.innerHTML = `${formatTimer(setHour)}`;
      increaseTime();
      setSecond++;
    }, 1000);        
  }
}

function resetTimer() {
  clearInterval(myTimer);
  myTimer = null;
  setHour = 0;
  second.innerHTML = '00';

  setMinute = 0;
  minute.innerHTML = '00';

  setSecond = 0;
  second.innerHTML = '00';
}

function pauseTimer() {
  clearInterval(myTimer);
  myTimer = null;
}

function increaseTime() {
  if ( setSecond === 60 ) {
    setSecond = 0;
    setMinute++
  }

  if ( setMinute === 60 ) {
    setMinute = 0;
    setHour++
  }
}

function formatTimer(time) {
  return time < 10 ? `0${time}` : time;
}

startBtn.addEventListener('click', startTimer);
resetBtn.addEventListener('click', resetTimer);
pauseBtn.addEventListener('click', pauseTimer);