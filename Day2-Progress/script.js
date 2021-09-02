const progress = document.getElementById('progress');
const prev = document.getElementById('prev');
const next = document.getElementById('next');
const circles = document.querySelectorAll('.circle');

let currentValue = 1;

next.addEventListener('click', () => {
    currentValue++;
    // console.log(currentValue);
    if (currentValue > circles.length) {
        currentValue = circles.length
    }

    update()
})

prev.addEventListener('click', () => {
    currentValue--;

    if (currentValue < 1) {
        currentValue = 1
    }

    update()
})

function update() {
    // Update active for each circle
    circles.forEach((circle, index) => {
        if (index < currentValue) {
            circle.classList.add('active');
        } else {
            circle.classList.remove('active');
        }
    });

    const actives = document.querySelectorAll('.active');

    // Update progress 
    progress.style.width = (actives.length - 1) / (circles.length - 1) * 100 + '%';

    // Update button 
    if (currentValue === 1) {
        prev.disabled = true;
    } else if (currentValue === circles.length) {
        next.disabled = true;
    } else {
        prev.disabled = false;
        next.disabled = false;
    }
}