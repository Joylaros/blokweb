// JavaScript Document
console.log("hi");

let reviews = document.querySelectorAll('.review');
let currentIndex = 0;
let intervalId = null;

function showReview(index) {
    reviews.forEach((review, i) => {
        if (i === index) {
            review.classList.add('active');
        } else {
            review.classList.remove('active');
            review.classList.add('review-exit'); // Voeg de exit-animatie toe
        }
    });
}

function nextReview() {
    reviews[currentIndex].classList.remove('active');
    currentIndex = (currentIndex + 1) % reviews.length;
    showReview(currentIndex);
}

function prevReview() {
    reviews[currentIndex].classList.remove('active');
    currentIndex = (currentIndex - 1 + reviews.length) % reviews.length;
    showReview(currentIndex);
}

// Automatisch wisselen elke 5 seconden
intervalId = setInterval(nextReview, 5000);

// Event listeners voor de pijltjes
document.getElementById('next').addEventListener('click', function() {
    clearInterval(intervalId); // Stop automatische wisseling na handmatige actie
    nextReview();
});

document.getElementById('prev').addEventListener('click', function() {
    clearInterval(intervalId); // Stop automatische wisseling na handmatige actie
    prevReview();
});





const carousel = document.querySelector('#swipeableVideoCarousel ul');
let isDown = false;
let startX;
let scrollLeft;

carousel.addEventListener('mousedown', (e) => {
    isDown = true;
    carousel.classList.add('active');
    startX = e.pageX - carousel.offsetLeft;
    scrollLeft = carousel.scrollLeft;
});

carousel.addEventListener('mouseleave', () => {
    isDown = false;
    carousel.classList.remove('active');
});

carousel.addEventListener('mouseup', () => {
    isDown = false;
    carousel.classList.remove('active');
});

carousel.addEventListener('mousemove', (e) => {
    if (!isDown) return; // stop the fn from running
    e.preventDefault();
    const x = e.pageX - carousel.offsetLeft;
    const walk = (x - startX) * 1; // scroll-fast
    carousel.scrollLeft = scrollLeft - walk;
});

document.addEventListener("DOMContentLoaded", function() {
    const overlay = document.querySelector('.overlay-container');
    overlay.classList.add('visible'); // Voeg de class toe voor de fade-in
});


// Auto-play music when the page loads
window.addEventListener('load', () => {
    const audio = document.getElementById('background-music');
    audio.play().catch(error => {
        console.log("Music playback prevented: ", error);
    });
});

// Toggle music play/pause on icon click
document.getElementById('music-toggle').addEventListener('click', () => {
    const audio = document.getElementById('background-music');
    if (audio.paused) {
        audio.play();
    } else {
        audio.pause();
    }
});



  


