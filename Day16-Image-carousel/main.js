const imgs = document.getElementById('imgs');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');

// select all img
const img = document.querySelectorAll('#imgs img');

let idx = 0;

function changeImage() {
    if(idx > img.length - 1) {
        idx = 0;
    } else if(idx < 0) {
        idx = img.length - 1;
    }

    imgs.style.transform = `translateX(${-idx * 500}px)`;
};

function run() {
    idx++;
    changeImage();
};

let interval = setInterval(run, 2000);
function resetInterval() {
    // clearInterval() được sử dụng để xóa nhiệm vụ mà ta đã thiết lập trong phương thức setInterval() .
    // ko clear là tg tăng nhanh hơn
    clearInterval(interval);
    interval = setInterval(run, 2000);
};


nextBtn.addEventListener('click', () => {
    idx++;
    changeImage();
    resetInterval();
});

prevBtn.addEventListener('click', () => {
    idx--;
    changeImage();
    resetInterval();
});
