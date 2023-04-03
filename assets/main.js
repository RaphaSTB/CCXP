
const dias = document.getElementById('dias')
const horas = document.getElementById('horas')
const minutos = document.getElementById('minutos')
const segundos = document.getElementById('segundos')

const relogio = setInterval(function time(){
    let daytoday = new Date();
    let days = daytoday.getDay();
    let hr = daytoday.getHours();
    let min = daytoday.getMinutes();
    let sec = daytoday.getSeconds();

    if(days < 10) days = '0' + days;
    if(hr < 10) hr = '0' + hr;
    if(min < 10) min = '0' + min;
    if(sec < 10) sec = '0' + sec;

    dias.textContent = days;
    horas.textContent = hr;
    minutos.textContent = min;
    segundos.textContent = sec;
})