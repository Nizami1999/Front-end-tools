$(document).ready(function(){

    var owl = $('.owl-carousel');
    owl.owlCarousel({
        loop: true, // infinity loop
        margin: 10,
        nav: true, // Show next/prev buttons.
        items: 3, // The number of items you want to see on the screen. [3-default]
        dots: false,
        responsive:{
            0:{
                items:1,
                dots: true,
                nav: false
            },
            600:{
                items:3

            },
            1000:{
                items:3,
                nav: true
            }
        }
    });

    /* Чтобы работала с мышкой */
    owl.on('mousewheel', '.owl-stage', function (e) {
        if (e.deltaY>0) {
            owl.trigger('next.owl');
        } else {
            owl.trigger('prev.owl');
        }
        e.preventDefault();
    });


});




