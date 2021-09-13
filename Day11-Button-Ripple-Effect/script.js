// Tạo 1 hàm bắt sự kiện click 

function createRipple(event) {
    // Truy cập nút bằng cách bắt sự kiện currentTarget 
    const button = event.currentTarget;

    const circle = document.createElement("span");
    // Tính đường kính và bán kính 
    const diameter = Math.max(button.clientWidth, button.clientHeight);
    const radius = diameter / 2;

    // Xác định các thuộc tính cần 
    circle.style.width = circle.style.height = `${diameter}px`;
    circle.style.left = `${event.clientX - button.offsetLeft - radius}px`;
    circle.style.top = `${event.clientY - button.offsetTop - radius}px`;
    circle.classList.add("ripple");

    // Ktra coi còn thuộc tính ripple ko, còn thì xóa đi 
    const ripple = button.getElementsByClassName("ripple")[0];

    if (ripple) {
        ripple.remove();
    }

    button.appendChild(circle);
}

const buttons = document.getElementsByTagName("button");
for (const button of buttons) {
    button.addEventListener("click", createRipple);
}