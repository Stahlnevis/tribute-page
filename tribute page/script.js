const quotes = [
    "Leadership is a privilege to better the lives of others. It is not an opportunity to satisfy personal greed.",
    "It doesn't matter where you come from. What matters is what you do to better yourself and your surroundings.",
    "Let us work together to build a prosperous and united Tanzania."
];

function showQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    document.getElementById("quote").innerText = quotes[randomIndex];
}

let slideIndex = 1;
showSlides(slideIndex);

function openLightbox() {
    document.getElementById("lightbox").style.display = "block";
}

function closeLightbox() {
    document.getElementById("lightbox").style.display = "none";
}

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    const slides = document.getElementsByClassName("mySlides");
    const dots = document.getElementsByClassName("demo");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}

let slideshowInterval;
function toggleSlideshow() {
    const button = document.querySelector(".slideshow-control");
    if (button.innerText === "Play") {
        button.innerText = "Pause";
        slideshowInterval = setInterval(() => plusSlides(1), 2000);
    } else {
        button.innerText = "Play";
        clearInterval(slideshowInterval);
    }
}
