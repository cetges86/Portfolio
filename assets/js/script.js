$(document).ready(function () {
    $('.sidenav').sidenav();
    $('.scrollspy').scrollSpy();

    $('#headshot').css('opacity', 0);
    $('#bioP').css('opacity', 0);


    $("#headshot").waypoint(function () {
        $('#headshot').addClass('fadeInLeft');
    }
        , { offset: '50%' });

    $("#bioP").waypoint(function () {
        $('#bioP').addClass('fadeInRight');
    }
        , { offset: '50%' });

    $('#proj1').css('opacity', 0);
    $('#proj1').waypoint(function () {
        $('#proj1').addClass('fadeInLeft')
    }
        , { offset: '45%' });

    $('#proj2').css('opacity', 0);
    $('#proj2').waypoint(function () {
        $('#proj2').addClass('fadeInRight')
    }
        , { offset: '45%' });


    $('#proj3').css('opacity', 0);
    $('#proj3').waypoint(function () {
        $('#proj3').addClass('fadeInLeft')
    }
        , { offset: '45%' });

    $('#proj4').css('opacity', 0);
    $('#proj4').waypoint(function () {
        $('#proj4').addClass('fadeInRight')
    }
        , { offset: '45%' });



})