// PRELOADER 

// const preloader = document.querySelector(".preloader");
// window.addEventListener("load", function(){
//     preloader.classList.add("loaded");
//     this.document.body.classList.add("loaded");
// });

// RESPONSIVE NAVBAAR

const navlinks = document.querySelector(".navLinks");
function toggleMenu(e){
    e.name = e.name === "menu" ? "close" : "menu"
    navlinks.classList.toggle("top-[8%]");
}

// HERO SLIDER SECTION

const slides = document.querySelectorAll(".slide");
var counter = 0;

slides.forEach(function(slide, index){
    slide.style.left = `${index*100}%`
    slide.style.transition = "transform 2s ease";
})

var goNext = document.querySelector(".next_slide").addEventListener("click", function(){
    counter ++;
    if(counter >= slides.length){
        counter=0;
    }
    slideImage();
});

var goPrev = document.querySelector(".prev_slide").addEventListener("click", function(){
    counter --;
    if(counter < 0){
        counter = slides.length -1;
    }
    slideImage();
});

const slideImage = function(){
    slides.forEach(function(slide){
        slide.style.transform = `translateX(-${counter*100}%)`
    })
}
setInterval(function() {
    counter++;
    if (counter >= slides.length) {
        counter = 0;
    }
    slideImage();
}, 4000);

// View Menu Button Event

document.querySelector('.home_menu').addEventListener('click', function(){
    document.querySelector('#menu').scrollIntoView({
        behavior: 'smooth'
    });
});

