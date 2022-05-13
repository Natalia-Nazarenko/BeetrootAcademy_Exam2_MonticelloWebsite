'use strict'

$('.slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    dots: true,
    arrows: false,
});
$(".slider .slick-dots").children().children().addClass("dot-btns");

$('.slider-news').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    dots: true,
    arrows: true,
    responsive: [
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 2,
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
            }
        }
    ]
});

$(".slider-news .slick-dots").children().children().addClass("dot-btns");

// Карта, стилі в mapId

let map;
function initMap() {
    map = new google.maps.Map(document.getElementById("map"),
        {
            center: { lat: 50.44896759, lng: 30.51332140 },
            zoom: 16,
            mapId: 'd0ab2965df73818c',
            disableDefaultUI: true,
        });
    const icon = './img/pin.svg';
    const marker = new google.maps.Marker({
        position: { lat: 50.44896759, lng: 30.51332140 },
        icon: icon,
        map: map,
    });
}

window.initMap = initMap;

//Плавний перехід на секції

let headerLinks = document.querySelectorAll('.menu__item');
let newsSection = document.querySelector('.section_news');
let contactsSection = document.querySelector('.contacts');
let projectsSection = document.querySelector('.section_projects');

headerLinks.forEach(item => {
    let linkAttribute = item.getAttribute('data-anchor');
    item.addEventListener('click', (e) => {
        e.preventDefault();
        if (linkAttribute == 'news') {
            newsSection.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
        else if (linkAttribute == 'contacts') {
            contactsSection.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
        else {
            projectsSection.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    })
});

let smoothLink = document.querySelector('.header__img img');

smoothLink.addEventListener('click', function (e) {
    e.preventDefault();
    projectsSection.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
    });
});

// Parallax ефект на картинках Projects Section

let parallax = document.getElementById('parallax');
let parallaxLeft = new Parallax(parallax, {
    relativeInput: true,
    hoverOnly: true,
});

let parallax2 = document.getElementById('parallax-2');
let parallaxRight = new Parallax(parallax2, {
    relativeInput: true,
    hoverOnly: true,
});









