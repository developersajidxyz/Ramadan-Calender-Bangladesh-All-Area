const hour = document.querySelector('.hour');
const minutes = document.querySelector('.minutes');
const second = document.querySelector('.second');
const period = document.querySelector('.period');


function showTime(){
  let h = new Date().getHours();
  let m = new Date().getMinutes();
  m = m < 10 ? '0' + m : m;
  let s = new Date().getSeconds();
  s = s < 10 ? '0' + s : s;
  
  let ampm = h >= 12 ? 'PM' : 'AM';
  h = h % 12;
  h = h ? h : 12; // the hour '0' should be '12'
  h = (h < 10) ? '0' + h : h;
  
  hour.innerHTML = h;
  minutes.innerHTML = m;
  second.innerHTML = s;
  period.innerHTML = ampm;
}

showTime();

setInterval(showTime,1000);