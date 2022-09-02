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
        centerPadding: '30px',
        slidesToScroll: 1,
        slidesToShow: 3,
        infinite: true,
        appendDots: $('.slide-arrows-h'),
        appendArrows: $('.slide-arrows-h')
    });
    $('.feedback-slider').slick({
        arrows: true,
        dots: true,
        variableWidth: true,
        slidesToScroll: 1,
        slidesToShow: 2,
        appendDots: $('.slide-arrows-f'),
        appendArrows: $('.slide-arrows-f')
    })

    function toggleOverlay(){
        if($('.overlay').css('display') == 'none'){
            $('.overlay').css({'display':'flex'})
        }
        else{
            $('.overlay').css({'display':'none'})
        }
    }

    $('.overlay > .feedback-slider__item').after().click(toggleOverlay)
    $('.feedback-slider__btn').click(toggleOverlay)
});