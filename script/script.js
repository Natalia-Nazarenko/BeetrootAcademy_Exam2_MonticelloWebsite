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
    // responsive: [
    //     {
    //         breakpoint: 1024,
    //         settings: {
    //             slidesToShow: 3,
    //         }
    //     },
    //     {
    //         breakpoint: 600,
    //         settings: {
    //             slidesToShow: 2,
    //         }
    //     },
    //     {
    //         breakpoint: 480,
    //         settings: {
    //             slidesToShow: 1,
    //         }
    //     }
    // ]
});

$(".slider-news .slick-dots").children().children().addClass("dot-btns");

let smoothLink = document.querySelector('.header__img img');
smoothLink.addEventListener('click', function (e) {
    e.preventDefault();
    let projectsSection = document.querySelector('.section_projects')
    projectsSection.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
    });
});

// перехід на секції
// валідація форми
// marker
// респонсівнес

let map;
function initMap() {
    map = new google.maps.Map(document.getElementById("map"),
        {
            center: { lat: 50.44896759, lng: 30.51332140 },
            zoom: 16,
            mapId: 'd0ab2965df73818c',
            disableDefaultUI: true,
        });
}

window.initMap = initMap;

let input = document.querySelector('input');

// input.addEventListener('click', (e) => {
//     e.preventDefault();
//     input.toggleClass('input-value');
// });



