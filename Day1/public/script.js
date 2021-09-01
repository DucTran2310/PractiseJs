const panels = document.querySelectorAll('.panel');

function removeClassActive() {
    panels.forEach(panel => {
        panel.classList.remove('active');
    })
}

panels.forEach(panel => {
    panel.addEventListener('click', () => {
        removeClassActive();
        panel.classList.add('active');
    })
})