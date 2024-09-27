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






function createCustomCarrousel(carrouselID) {
    let carrousel = document.querySelector("#" + carrouselID);
    let carrouselElementsContainer = carrousel.querySelector(":scope > ul");
    let carrouselElements = carrouselElementsContainer.querySelectorAll("li");
    let bolletjes = carrousel.querySelectorAll(":scope > nav a");

    function iniBolletjes() {
        for (let bolletje of bolletjes) {
            bolletje.addEventListener("click", function (e) {
                e.preventDefault();
                let index = Array.from(bolletjes).indexOf(this); // Bepaal welke bolletje is geklikt
                let startElementIndex = index * 2; // Bepaal de start index voor de rechthoeken

                // Scroll naar de juiste positie
                carrouselElementsContainer.scrollTo({
                    left: carrouselElements[startElementIndex].offsetLeft,
                    behavior: 'smooth'
                });

                // Update de huidige elementen en bolletjes
                updateCurrentElements(startElementIndex);
                updateBolletjes(index);
            });
        }
    }

    function iniStartPosition() {
        updateCurrentElements(0); // Toont rechthoek 1 en 2
        updateBolletjes(0); // Actieve bolletje instellen
        carrouselElementsContainer.scrollLeft = 0;
    }

    function updateCurrentElements(startIndex) {
        // Verwijder 'current' van alle elementen
        carrouselElements.forEach(el => el.classList.remove("current"));

        // Voeg 'current' toe aan de juiste elementen
        if (carrouselElements[startIndex]) {
            carrouselElements[startIndex].classList.add("current");
        }
        if (carrouselElements[startIndex + 1]) {
            carrouselElements[startIndex + 1].classList.add("current");
        }
    }

    function updateBolletjes(index) {
        // Verwijder 'active' van alle bolletjes en voeg 'inactive' toe
        bolletjes.forEach((b, i) => {
            b.classList.remove("active");
            b.classList.add("inactive");
        });

        // Voeg 'active' toe aan de juiste bolletje
        bolletjes[index].classList.add("active");
        bolletjes[index].classList.remove("inactive");
    }

    iniBolletjes();
    iniStartPosition();
}

// De carrousel creëren na het laden van de pagina
(function () {
    createCustomCarrousel("twoElements");
})();




