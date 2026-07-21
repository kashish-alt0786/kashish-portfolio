// Typing Animation

var typed = new Typed("#typing", {

    strings: [

        "AI Developer",

        "Machine Learning Enthusiast",

        "Healthcare AI Researcher",

        "Medical Information Technology Student"

    ],

    typeSpeed: 70,

    backSpeed: 45,

    backDelay: 1500,

    loop: true

});


// Initialize Scroll Animation

AOS.init({

    duration: 1000,

    once: false,

    offset: 100

});


// Navbar Background on Scroll

window.addEventListener("scroll", function(){

    const nav = document.querySelector("nav");

    if(window.scrollY > 50){

        nav.style.background = "rgba(11,15,25,.95)";

    }

    else{

        nav.style.background = "rgba(11,15,25,.85)";

    }

});
