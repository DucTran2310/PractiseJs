const textEl = document.getElementById('text');
const speedEl = document.getElementById('speed_num');
const text = 'Manchester is Red!!!';

let idx = 1;
let speed = 300/speedEl.value;

function textEffect(){
    textEl.innerText = text.slice(0, idx);
    idx++; 
    if(idx > text.length){
        idx = 1;
    }

    setTimeout(textEffect, speed);
}

textEffect();

speedEl.addEventListener('input', (e) => speed = 300/e.target.value );