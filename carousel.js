// ============================== Carousel ==============================

const track = document.querySelector(".carousel__track");
const slides = Array.from(track.children);
const prevButton = document.querySelector(".carousel__btnPrev");
const nextButton = document.querySelector(".carousel__btnNext");
const dotNav = document.querySelector(".carousel__nav");
const navDots = Array.from(dotNav.children);

const slideWidth = slides[0].getBoundingClientRect().width;


slides.forEach((slide, index) => {
    slide.style.left = slideWidth * index + "px";
});

const jump = (currentSlide, targetSlide, currentDot, targetDot) => {    
    track.style.transform = "translateX(-"+targetSlide.style.left+")";
    currentSlide.classList.remove("carousel__item_selected");
    targetSlide.classList.add("carousel__item_selected");
    currentDot.classList.remove("carousel__navDot_selected");
    targetDot.classList.add("carousel__navDot_selected");
}

nextButton.addEventListener("click", e => {
    const currentSlide = track.querySelector(".carousel__item_selected");    
    if (currentSlide.nextElementSibling) {
        const currentDot = dotNav.querySelector(".carousel__navDot_selected");
        const nextSlide =  currentSlide.nextElementSibling;
        const nextDot = currentDot.nextElementSibling;
        jump(currentSlide, nextSlide, currentDot, nextDot);
    }
});

prevButton.addEventListener("click", e => {
    const currentSlide = track.querySelector(".carousel__item_selected");
    if (currentSlide.previousElementSibling) {
        const prevSlide = currentSlide.previousElementSibling;
        const currentDot = dotNav.querySelector(".carousel__navDot_selected");
        const prevDot = currentDot.previousElementSibling;
        jump(currentSlide, prevSlide, currentDot, prevDot);
    }
});

dotNav.addEventListener("click", e => {
    const dotClicked = e.target.closest(".carousel__navDot");
    if (!dotClicked) return;
    
    const dotIndex = navDots.findIndex(dot => dot === dotClicked);
    const currentSlide = track.querySelector(".carousel__item_selected");
    const currentDot = dotNav.querySelector(".carousel__navDot_selected");
    

    jump(currentSlide, slides[dotIndex], currentDot, navDots[dotIndex]);
});