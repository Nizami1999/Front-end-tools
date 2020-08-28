$(document).ready(function(){

    // 1    
    $(".btn").click(function(){

        $(".paragraph").hide()

    });

    // 2
    $('.post div').html('Hey, I performed by jQuery');

    // 3
    $('p[class]').addClass('background');

    // 4
    $('a[href="#"]').addClass("link");
    $('a[href!="#"]').addClass("fontsize");
    $('a[href^="http"]').addClass("external");
    $('a[href$="org"]').addClass("org");

    // 5
    
    // :first
    // :last
    // :even
    // :odd
    // :eq(n)
    // :lt(n)
    // :gt(n)

    $('.first li:first').css('font-size','40px')
    $('.first li:last').html('I am last one')
    $('.second li:eq(2)').hide()
    $('.third li:gt(1)').html('greater than 2')

    // 6
    $("form :input").addClass('border')
    $("form input").addClass('bg')

    // 7
    $('div .mix')
        .hide(2000)
        .html('Hello World')
        .addClass('border')
        .show(2000);
    
    // 8 each, this 
    $("p").each(iteration);
 
    function iteration(index){
            
        let item = $(this);
        console.log(index + " " + item.text())
    }



    

    
});


