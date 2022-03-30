$(document).ready( function(){
    $('.customers-slider').slick({
        arrows: true,
        dots: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        rows: 2,
        variableWidth: true,
        appendDots: $('.slide-arrows-c'),
        appendArrows: $('.slide-arrows-c')
    });
    $('.horses-slider').slick({
        arrows: true,
        dots: true,
        centerMode: true,
        slidesToScroll: 1,
        slidesToShow: 3,
        centerPadding: '30px',
        infinite: true,
        appendDots: $('.slide-arrows-h'),
        appendArrows: $('.slide-arrows-h')
    });
    $('.feedback-slider').slick({
        arrows: true,
        dots: true,
        centerMode: true,
        focusOnSelect: true,
        slidesToScroll: 1,
        slidesToShow: 2,
        appendDots: $('.slide-arrows-f'),
        appendArrows: $('.slide-arrows-f')
    })
});