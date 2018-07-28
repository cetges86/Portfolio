$(document).ready(function () {
    $('.sidenav').sidenav();
    $('.scrollspy').scrollSpy();
    $('.carousel').carousel();




    $('#headshot').css('opacity', 0);
    $('#bioP').css('opacity', 0);
    $('#section-header').css('opacity', 0);
    $('.carousel').css('opacity', 0);
    $('#down-arrow').css('opacity', 0);

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

    advanceCarousel = () => {
        $('.carousel').carousel('next');
    }

    $('.carousel').waypoint(function () {
        $('.carousel').addClass('fadeIn');
        setInterval(advanceCarousel, 1000);
    }
        , { offset: '50%' });

    for (let i = 0; i < 14; i++) {
        $(`#proj${i}`).css('opacity', 0);
        $(`#proj${i}`).waypoint(function () {
            $(`#proj${i}`).addClass('fadeInUp')
            $(`#proj${i}`).css('opacity', 1);
        }
            , { offset: '40%' });
    }

    $('.btn-large').waypoint(function () {
        $('.btn-large').addClass('pulse')
    }
        , { offset: '90%' });


})