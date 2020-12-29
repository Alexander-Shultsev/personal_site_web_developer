$(function() {

    coin_1.onclick = function() {
        coin_1.style.opacity="0";
    };

    coin_2.onclick = function() {
        coin_2.style.opacity="0";
    };

    coin_3.onclick = function() {
        coin_3.style.opacity="0";
    };

    coin_4.onclick = function() {
        coin_4.style.opacity="0";
    };


    let about_me = $("#about_me");
    let projects = $("#projects");
    let order = $("#order");

    let projectsHeight = $("#projectsHeight");
    projectsHeight = $(projectsHeight).innerHeight();

    let bodyHeight = $(window).height();

    $(window).on("scroll load resize", function() {
        scrollPos = $(this).scrollTop();

        if (scrollPos >= bodyHeight + projectsHeight/2) {
            about_me.removeClass("active");
            projects.removeClass("active");
            order.addClass("active");
        }

        if ((scrollPos >= bodyHeight/2) && (scrollPos < bodyHeight + bodyHeight/2)) {
            about_me.removeClass("active");
            projects.addClass("active");
            order.removeClass("active");
        }

        if ((scrollPos >= 0) && (scrollPos < bodyHeight/2)) {
            about_me.addClass("active");
            projects.removeClass("active");
            order.removeClass("active");
        }

    });


    $("[data-scroll]").on("click", function(event) {
        event.preventDefault();

        let elementID = $(this).data('scroll');
        let elementOffset = $(elementID).offset().top;

        console.log(elementOffset);

        $("html, body").animate({
           scrollTop: elementOffset
        }, 500);
    });

});

