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

