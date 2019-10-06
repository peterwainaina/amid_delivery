$(function () {
    new WOW().init();
});

$(function () {
    $("#products").magnificPopup({
        delegate: 'a',
        type: 'image',
        gallery: {
            enabled: true
        }
    });
});
$(function () {
    $("#gallery-items").owlCarousel({
        items: 3,
        autoplay: true,
        smartSpeed: 700,
        loop: true,
        autoplayHoverPause: true,
        responsive : {
            0 : {
                items: 1
            },
            480 : {
                items: 2
            },
            768 : {
                items: 3
            }
        }
    });
});
$(function () {
    $("#customers-testimonials").owlCarousel({
        items: 1,
        autoplay: true,
        smartSpeed: 700,
        loop: true,
        autoplayHoverPause: true
    });
});

$(function () {
    $(window).scroll(function () {
        if ($(this).scrollTop() < 50) {
            $("nav").removeClass("amiz-top-nav");
            $("#back-to-top").fadeOut();
        } else {
            $("nav").addClass("amiz-top-nav");
            $("#back-to-top").fadeIn();
        }
    });
});

$(function () {
    $("a.smooth-scroll").click(function (event) {
        event.preventDefault();
        var section = $(this).attr("href");
        $('html, body').animate({
            scrollTop: $(section).offset().top - 54
        }, 1250, "easeInOutExpo");
    });
});

$(function () {
    $(".navbar-collapse ul li a").on("click touch", function () {
        $(".navbar-toggle").click();
    });
});

$(function () {
    $('.counter').counterUp({
        delay: 10,
        time: 2000
    });
});


$(function () {

    $("#clients-list").owlCarousel({
        items: 6,
        autoplay: true,
        smartSpeed: 700,
        loop: true,
        autoplayHoverPause: true,
		responsive: {
		  0: {
			items: 1
		  },
		  480: {
			items: 3
		  },
		  768: {
			items: 5
		  },
		  992: {
			items: 6
		  }
		}
    });
});




















