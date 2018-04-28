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



    // function addWaypoint() {
    //     for (var i = 1; i < 8; i++) {
    //         $(`#proj${i}`).css('opacity', 0);

    //         $(`#proj${i}`).waypoint(function () {
    //             $(`proj${i}`).addClass('fadeInRight')
    //         }, { offset: '45%' });
    //     };
    // }


    $('#proj1').css('opacity', 0);
    $('#proj1').waypoint(function () {
        $('#proj1').addClass('fadeInUp')
    }
        , { offset: '45%' });

    $('#proj2').css('opacity', 0);
    $('#proj2').waypoint(function () {
        $('#proj2').addClass('fadeInUp')
    }
        , { offset: '45%' });


    $('#proj3').css('opacity', 0);
    $('#proj3').waypoint(function () {
        $('#proj3').addClass('fadeInUp')
    }
        , { offset: '45%' });

    $('#proj4').css('opacity', 0);
    $('#proj4').waypoint(function () {
        $('#proj4').addClass('fadeInUp')
    }
        , { offset: '45%' });

    $('#proj5').css('opacity', 0);
    $('#proj5').waypoint(function () {
        $('#proj5').addClass('fadeInUp')
    }
        , { offset: '45%' });

    $('#proj6').css('opacity', 0);
    $('#proj6').waypoint(function () {
        $('#proj6').addClass('fadeInUp')
    }
        , { offset: '45%' });

    $('#proj7').css('opacity', 0);
    $('#proj7').waypoint(function () {
        $('#proj7').addClass('fadeInUp')
    }
        , { offset: '45%' });

    $('#proj8').css('opacity', 0);
    $('#proj8').waypoint(function () {
        $('#proj8').addClass('fadeInUp')
    }
        , { offset: '45%' });


})