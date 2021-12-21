'use strict'

const hublot = document.querySelector('.hublot');

// Нарисовали деления циферблата, маленькие и большие
const drawSegments = (deg) => {
    for (deg=0; deg<360; deg+=6) {
        if(deg%5!==0){
            hublot.innerHTML+=
            `
            <div style="position: absolute;
            box-sizing: border-box;
            height: 5px;
            width: 1px;
            background-color:cornsilk;
            transform-origin: 50% 100px;
            transform: rotate(${deg}deg)"></div>
            `
        } else {
            hublot.innerHTML+=
            `
            <div style="position: absolute;
            box-sizing: border-box;
            height: 9px;
            width: 2px;
            background-color:cornsilk;
            transform-origin: 50% 100px;
            transform: rotate(${deg}deg)"></div>
            ` 
        }
    }
}

drawSegments();

// установили градус поворота
const degree = 6;
const h = document.querySelector('.h');
const m = document.querySelector('.m');
const s = document.querySelector('.s');

// запустили часы с интервалом, определили угол поворота для трансформации стрелок и добавили трансформацию
setInterval(() => {
    let time = new Date();

    let hour = time.getHours()*30;
    let minute = time.getMinutes()*degree;
    let second = time.getSeconds()*degree;
    
    h.style.transform = `rotate(${(hour) + (minute/12)}deg)`;
    m.style.transform = `rotate(${minute}deg)`;
    s.style.transform = `rotateZ(${second}deg)`;


});



