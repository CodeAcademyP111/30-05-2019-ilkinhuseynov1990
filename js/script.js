$(document).ready(function() {
    //timer jquery
    // var minute = $(".timer").children().eq(0).text();
    // var second = $(".timer").children().last().text();

    // var secondomer = setInterval(function() {
    //     if (second > 0) {
    //         second--;
    //         $(".timer").children().last().text(formatTime(second));
    //     } else {
    //         if (minute > 0) {
    //             minute--;
    //             $(".timer").children().eq(0).text(formatTime(minute));
    //             second = 59;
    //             $(".timer").children().last().text(formatTime(second));
    //         }
    //     }

    // }, 1000)

    // function formatTime(nmb) {
    //     var result = nmb;
    //     if (nmb < 10) {
    //         result = "0" + nmb;
    //     }
    //     return result;
    // }

    // $(".text").greenify();


    $(".timer").secondomer({
        "color": "red",
        "backgroundColor": "green",
        "color1": "green",
        "backgroundColor1": "red",
    });

    // $(".timer1").secondomer();
})