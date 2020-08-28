$(document).ready(function(){

    
    // 9 each this example-2
    let classNames = [];

    $("p[class]").each(function(i){   // i - index
        classNames[i] = $(this).attr('class');
    });

    console.log(classNames.join(', '));    

    // 10 Odd and Even list items

    $('li').each(function(i){
        if(i % 2 == 1) {
            $(this).addClass('red');
        }
        else{
            $(this).addClass('green');
        }
    })

    // 11 Adding attributes

    $('img').each(function(i){
        if(i % 2 == 1) {
            $(this).attr(
                {
                    src:'1.jpg',
                    title:'Even Photo',
                    style:'height:200px',
                    class:'even'
                }
            )
        }

        else{
            $(this).attr(
                {
                    src:'2.jpg',
                    title:'Odd Photo',
                    style:'height:200px',
                    class:'odd'
                }
            )
        }
    });

    // 12 Adding some attributes
    let first = $('#append');
    let second = $('#appendTo');

    // 1-st method
    first.append('<div class = "append">Added element after</div');
    first.prepend('<div class = "prepend">Added element before</div');
    
    // 2-nd method
    $('<div class = "append">Added element after</div').appendTo(second);
    $('<div class = "prepend">Added element before</div').prependTo(second);

    // 13.More classses
    $('#main').addClass('special');
    $('p').removeClass('special'); // если не писать имя класса -> удалит все классы!

    //toggle class (navbar)
    $('.special').click(function(){
        $(this).toggleClass('special')
    });

    // hasClass -> для проверки!
    console.log($('div').hasClass('special'))

    //css
    $('span').css({
        'font-size':'15px',
        'background-color':'black',
        'color':'white',
    });

    //Front-End event
    $('#btn').click(function(){
        $('.big').toggleClass('big-2')
    });

    // 14.Change event 
    $('#name, #surname, #phone, #email').change(function(){
        $(this).addClass('input-style')
    });

    // 15.Hover event
    $('.hover').hover(function(){
        // alert('You have hovered me')
    });

    $('.hover-2').mouseenter(function(){
        $(this).css('color','green');
    }).mouseleave(function(){
        $(this).css('color','blue'); 
    });

    $('.hover-2').on('mouseenter hover click',function(){
        $(this).css('background-color','red');
    });  
    
    // 16.ON event
    let mainDiv = $('#main-main');

    mainDiv.on('mouseover mouseleave',changeDiv);
    mainDiv.on('click',function(){
        mainDiv.off('mouseover mouseleave',changeDiv);
        mainDiv.html('Hey I was clicked');
        mainDiv.removeClass('change');
    })

    function changeDiv()    {
        mainDiv.toggleClass('change');
    }

    // 17.If Else, toggle Animation


    $('#btn-2').click(function(){
        let simpleDiv = $('.simple');
        let specialDiv = $('.special-3');

        // if (simpleDiv.is(':hidden')){
        //     simpleDiv.show(2000)
        // } 

        // else{
        //     simpleDiv.hide(3000)
        // }

        // The best variant is to use toggle
        // The toggle method makes an element visible or hidden
        simpleDiv.toggle(2000);
        specialDiv.toggle(2000); 
    })

    // 18.Slide and Fade
    $('#btn-3').click(function(){
        let fadeDiv = $('.fade');
        let fadeDiv2 = $('.fade-2');
        let fadeTo = $('.fadeTo');
        let slide = $('.slide');
        let anim = $('.anim');

        fadeDiv.fadeOut(1000).fadeIn(1000);
        fadeDiv2.fadeToggle(1000);
        fadeTo.fadeTo(1000, 0.5);
        slide.slideToggle(1000);
        anim.animate({
            fontSize:'50px',
        },2000);
        
    })



});



