$(document).ready(function () {
    $('.sidenav').sidenav();
    $('.scrollspy').scrollSpy();

    $('#headshot').css('opacity', 0);

    $("#headshot").waypoint(function () {
        $('#headshot').addClass('fadeInLeft');
    }
        , { offset: '50%' });


    $('#bioP').css('opacity', 0);
    $("#bioP").waypoint(function () {
        $('#bioP').addClass('fadeInRight');
    }
        , { offset: '50%' });
})