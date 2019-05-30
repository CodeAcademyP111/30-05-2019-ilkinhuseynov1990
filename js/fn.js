// $.fn.greenify = function() {
//     this.css({
//         "color": "red",
//         "font-size": "20px"
//     });
//     return this;
// }


$.fn.secondomer = function(options) {

    // This is the easiest way to have default options.
    var settings = $.extend({
        // These are the defaults.
        color: "white",
        backgroundColor: "black",
        color1: "white",
        backgroundColor1: "black"
    }, options);

    // Greenify the collection based on the settings variable.


    //get Time
    var time = this.data("timer");
    var minute = time[0] + time[1];
    var second = time[3] + time[4];

    var self = this;

    //adding htnl
    var spanMin = $(`<span>${minute}</span>`);
    this.append(spanMin);
    var spanDot = $(`<span>:</span>`);
    this.append(spanDot);
    var spanSec = $(`<span>${second}</span>`);
    this.append(spanSec);

    this.children().last().css({
        color: settings.color,
        backgroundColor: settings.backgroundColor
    });

    this.children().eq(0).css({
        color: settings.color1,
        backgroundColor: settings.backgroundColor1
    });

    var secondomer1 = setInterval(Timer, 1000);

    function Timer() {
        if (second > 0) {
            second--;
            self.children().last().text(formatTime(second));
        } else {
            if (minute > 0) {
                minute--;
                self.children().eq(0).text(formatTime(minute));
                second = 59;
                self.children().last().text(formatTime(second));
            }
        }

    }

    function formatTime(nmb) {
        var result = nmb;
        if (nmb < 10) {
            result = "0" + nmb;
        }
        return result;
    }

    this.click(function() {
        if (!self.hasClass("stop")) {
            clearInterval(secondomer1);
            self.addClass("stop");
        } else {
            secondomer1 = setInterval(Timer, 1000);
            self.removeClass("stop");
        }

    })


    return this;
}