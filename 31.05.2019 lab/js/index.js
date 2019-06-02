$(document).ready(function () {


    var item = $(".slider").children();


    $(".right").hover(function () {

        $(this).removeClass("fas fa-chevron-right")
        $(this).addClass("fas fa-angle-double-right");


    }, function () {

        $(this).removeClass("fas fa-angle-double-right");
        $(this).addClass("fas fa-chevron-right")
    })


    $(".left").hover(function () {

        $(this).removeClass("fas fa-chevron-left")
        $(this).addClass("fas fa-angle-double-left");


    }, function () {

        $(this).removeClass("fas fa-angle-double-left");
        $(this).addClass("fas fa-chevron-left")
    })





    $(".right").click(function () {
        var active = $(".slider").find(".activeslide");

        if (active.next().length != 0) {

            active.next().addClass("activeslide");

            active.removeClass("activeslide");

            $(".left").css("visibility", "visible");

        } else {
            $(".right").css("visibility", "hidden");
        }
    })


    $(".left").click(function () {
        var active = $(".slider").find(".activeslide");

        if (active.prev().length != 0) {

            active.prev().addClass("activeslide");

            active.removeClass("activeslide");

            $(".right").css("visibility", "visible");


        } else {
            $(".left").css("visibility", "hidden");
        }



    })














})