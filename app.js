const btn = document.querySelector('.start-btn');
const box = document.querySelector('.container')

let b = true;
btn.addEventListener('click' , () => {
    const ele = document.querySelector('.popup-box');
    if(b) {
        ele.classList.add('popup-box-visible');
        b = false;
    }
    else {
        ele.classList.remove('popup-box-visible');
        b = true;
    }
})

box.addEventListener('click' , () => {
    ele.classList.remove('popup-box-visible');
    b = true;
})

