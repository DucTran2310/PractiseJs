const labels = document.querySelectorAll('.form-control label')

// Duyệt qua labe; của form, label nào được focus thì tách label 
// map qua từng ptu của label cho chạy transition tương ứng vs index của ptu do
// xong r join lại với nhau 

labels.forEach(label => {
    label.innerHTML = label.innerText
        .split('')
        .map((letter, idx) => `<span style="transition-delay:${idx * 50}ms">${letter}</span>`)
        .join('')
})