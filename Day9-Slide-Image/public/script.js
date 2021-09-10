const body = document.body
const slides = document.querySelectorAll('.slide')
const leftBtn = document.getElementById('left')
const rightBtn = document.getElementById('right')

var activeImg = 0;

leftBtn.addEventListener('click', () => {
    activeImg-- ;
    if(activeImg < 0) {
        activeImg = slides.length - 1;
    };
    setBgImage();
    addBgImage();

});

rightBtn.addEventListener('click', () => {
    activeImg++;
    if(activeImg > slides.length){
        activeImg = 0;
    };
    setBgImage();
    addBgImage();

});

// set bg image for body
function setBgImage() {
    body.style.backgroundImage = slides[activeImg].style.backgroundImage;
};

setBgImage();

// add bg image active 
function addBgImage() {
    slides.forEach(slide => {
        slide.classList.remove('active');
    });

    slides[activeImg].classList.add('active');
}