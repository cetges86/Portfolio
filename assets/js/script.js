$(document).ready(function () {
    // activate materialize js functions
    $('.sidenav').sidenav();
    $('.scrollspy').scrollSpy();
    $('.carousel').carousel();

    // function to advance carousel automatically
    advanceCarousel = () => {
        $('.carousel').carousel('next');
    }

    // set initial opacity on animated elements
    $('#headshot').css('opacity', 0);
    $('#bioP').css('opacity', 0);
    $('#section-header').css('opacity', 0);
    $('.carousel').css('opacity', 0);
    $('#down-arrow').css('opacity', 0);

    // animation trigger points
    $("#down-arrow").waypoint(function () {
        $('#down-arrow').addClass('bounceInDown');
        $('#down-arrow').css('opacity', 1);
    }
        , { offset: '60%' });

    $("#headshot").waypoint(function () {
        $('#headshot').addClass('fadeInLeft');
    }
        , { offset: '50%' });

    $("#bioP").waypoint(function () {
        $('#bioP').addClass('fadeInRight');
    }
        , { offset: '50%' });

    $("#section-header").waypoint(function () {
        $('#section-header').addClass('fadeInUp');
    }
        , { offset: '50%' });

    $('.carousel').waypoint(function () {
        $('.carousel').addClass('fadeIn');
        setInterval(advanceCarousel, 2000);
    }
        , { offset: '50%' });
    // for loop to run through all project cards
    for (let i = 0; i < 19; i++) {
        $(`#proj${i}`).css('opacity', 0);
        $(`#proj${i}`).waypoint(function () {
            $(`#proj${i}`).addClass('fadeInUp')
            $(`#proj${i}`).css('opacity', 1);
        }
            , { offset: '75%' });
    }

    $('.btn-large').waypoint(function () {
        $('.btn-large').addClass('slideInUp')
    }
        , { offset: '90%' });


});