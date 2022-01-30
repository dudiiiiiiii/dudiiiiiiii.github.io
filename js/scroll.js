'use strickt';

$(function (){

    $("header a").on('click', function(e) {

        e.preventDefault();

        const goToSection = $(this).attr('href');

        console.log(goToSection);

        console.log($(goToSection).offset().top);

        $("html, body").animate({

            scrollTop: $(goToSection).offset().top

        }, 800);

    })

    
})