// dark/light mode

const switchElement = document.querySelector('.switch')
const image1 = document.getElementById('image1');
const image2 = document.getElementById('image2');
const image3 = document.getElementById('image3');
const logo = document.getElementById('logo');

function imageMode(color) {
    image1.src = `illustraitions/undraw_aircraft_re_m05i ${color}.svg`;
    image2.src = `illustraitions/undraw_journey_re_ec5q ${color}.svg`;
    image3.src = `illustraitions/undraw_hiking_re_k0bc ${color}.svg`;
    logo.src = `images/mountain1 ${color}.png`; 
}

function darkMode() {
    imageMode('dark')
    
}
function lightMode() {
    imageMode('light')
}

switchElement.addEventListener('click', () => {
    document.body.classList.toggle('dark')
    darkMode(); 
}

);

// gallery

const imageContainer = document.getElementById('content-container');

let photosArray = [];
const count = 3;
let query = 'mountains';
let orientation = 'portrait';
const apiKey = 'shvddcZmMfoLgJW-5WBBsAEgyGZrQQxEE7LQFW_Qiqo';
const apiUrl = `https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=${count}&query=${query}&orientation=${orientation}`;

function displayPhotos() {
    photosArray.forEach((photo) => {
        const item = document.createElement('a');
        item.setAttribute('href', photo.links.html);
        item.setAttribute('target', '_blank');
        const img = document.createElement('img');
        img.setAttribute('src', photo.urls.regular);
        img.setAttribute('alt', photo.alt_description);
        img.setAttribute('title', photo.alt_description);
        item.appendChild(img);
        imageContainer.appendChild(item);

    });
}

async function getPhotos() {
    try {
        const response = await fetch(apiUrl);
        photosArray = await response.json();
        displayPhotos();

    } catch (error) {

    }
}
getPhotos();

// slider

var swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    spaceBetween: 20,
    slidesPerGroup: 3,
    loop: true,
    loopFillGroupWithBlank: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});