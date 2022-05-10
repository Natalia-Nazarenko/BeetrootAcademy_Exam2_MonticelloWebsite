'use strict'

$('.slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    dots: true,
    arrows: false,
})
$(".slick-dots").children().children().addClass("dot-btns");
// $(".slick-dots").children().css("position", "relative");
// $(".slick-dots").children().children().css("position", "absolute");


