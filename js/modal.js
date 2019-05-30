$(document).ready(function() {
    //close modal
    $(".cover").click(function() {
        $(".modal_content").hide();
    })


    //show modal
    $(".main img").click(function() {
        addSlide($(this));
        var index = $(this).data("index");
        activated($(".navigation").children().eq(index));
        $(".modal_content").show();
    })

    //change content slider via navigation image
    $(".navigation .item").click(function() {
        addSlide($(this));
        activated($(this));
    })

    let carousel = setInterval(rightChange, 1500);

    $(".slider").hover(
        function() {
            clearInterval(carousel);
        },
        function() {
            carousel = setInterval(rightChange, 1500);
        }
    )

    $("#right_i").click(rightChange);


    function rightChange() {
        var next = $(".active").parent().next();
        if (next.length != 0) {
            addSlide(next);
            activated(next);
        } else {
            addSlide($(".navigation").children().eq(0));
            activated($(".navigation").children().eq(0));
        }
    }


    $("#left_i").click(function() {
        var prev = $(".active").parent().prev();
        if (prev.length != 0) {
            addSlide(prev);
            activated(prev);
        } else {
            addSlide($(".navigation").children().last());
            activated($(".navigation").children().last());
        }
    })

    function addSlide(elm) {
        var img = elm.data("img");
        var msg = elm.data("msg");
        $(".slider").children().eq(0).attr("src", `img/lg/${img}`);
        $(".slider").children().eq(1).text(msg);
    }

    function activated(elm) {
        if ($(".active")) {
            $(".active").removeClass("active");
        }
        elm.children().eq(1).addClass("active");
    }
})