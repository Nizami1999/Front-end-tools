$(document).ready(function(){


    $nav = $('.nav');
    $toggleCollapse = $('.toggle-collapse');

    /* click event on toggle menu */
    /* toggleClass -----> Add or remove one or more classes from each element  */

    $toggleCollapse.click(function(){
        $nav.toggleClass('collapse');
    })

});




