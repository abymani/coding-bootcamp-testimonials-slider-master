
const slides = document.querySelectorAll(".slide");
const prevBtn = document.querySelectorAll(".prev-btn");
const nextBtn = document.querySelectorAll(".next-btn");


let currentSlide = 0;
let length = slides.length;

nextBtn.forEach(btn => {
    btn.addEventListener('click', () => {   
        next();
    });
} );

prevBtn.forEach(btn => {
    btn.addEventListener('click', () => {
        previous();
    });
});

document.addEventListener('keydown', function(event) {
    if(event.keyCode == 37) {
        next();
    }
    else if(event.keyCode == 39) {
        previous();
    }
});

function next() {
    slides[currentSlide].style.display = "none";
    currentSlide = (currentSlide +1) % length;
    slides[currentSlide].style.display = "flex";  
}
function previous() {
    slides[currentSlide].style.display = "none";
    currentSlide == 0 ? currentSlide = length -1 : currentSlide -=  1;     
    slides[currentSlide].style.display = "flex";
}