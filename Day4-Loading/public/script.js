const bg = document.querySelector('.container');
const loadText = document.querySelector('.loading-text');

let load = 0

// ánh xạ ảnh 
function scale(number, inMin, inMax, outMin, outMax) {
    return (number - inMin) * (outMax - outMin) / (inMax - inMin) + outMin;
}

// const num = 1;
// console.log(scale(num, 0, 100, 30, 0));

function blurring() {
    load++

    if (load > 99) {
        clearInterval(init)
    }

    loadText.innerText = `${load}%`
        // chỉnh mức loading-text vs gtri hiện tại từ (0->100) chạy opacity từ (1->0)
    loadText.style.opacity = scale(load, 0, 100, 1, 0)
        // chỉnh mức blur image từ (25 -> 0)
    bg.style.filter = `blur(${scale(load, 0, 100, 25,0)}px)`
        // console.log(bg.style.filter);
}

// Thực hiện setInterval trong 0.03s 
const init = setInterval(blurring, 30)