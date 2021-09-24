let offset = 0;
const sliderLine = document.querySelector('.slider__line');

document.querySelector('.slider_nex').addEventListener('click',() => {
    offset = offset + 300;
    if (offset > 900){
        offset = 0;
    }
    sliderLine.style.left = -offset + 'px';
})

document.querySelector('.slider_prev').addEventListener('click',() => {
    offset = offset - 300;
    if (offset < 0){
        offset = 900;
    }
    sliderLine.style.left = -offset + 'px';
})