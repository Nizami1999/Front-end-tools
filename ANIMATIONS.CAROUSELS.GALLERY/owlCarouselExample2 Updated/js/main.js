$(document).ready(function(){

    var owl = $('.owl-carousel');
    owl.owlCarousel({
        loop: true, // infinity loop
        autoplay: true,
        autoplayTimeout: 9000, // автомтически переходит каждые три секунды
        margin: 30,
        nav: true, // Show next/prev buttons.
        navText:[$('.owl-nav-prev'),$('.owl-nav-next')], // change icons 
        items: 3, // The number of items you want to see on the screen. [3-default]
        dots: false,
        responsive:{
            0:{
                items:1,
                dots: true,
                nav: false
            },
            600:{
                items:2

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




