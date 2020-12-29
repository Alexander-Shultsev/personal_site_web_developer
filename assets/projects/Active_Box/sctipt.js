$(function() {

    /*Fixed Header*/
    let header = $("#header");
    let intro = $("#intro");
    scrollPos = $(window).scrollTop();

    checkScroll(scrollPos);

    $(window).on("scroll load resize", function() {
        scrollPos = $(this).scrollTop();

        checkScroll(scrollPos);
    });

    function checkScroll(scrollPos) {
        if (scrollPos > 1) {
            header.addClass("fixed");
        } else {
            header.removeClass("fixed");
        }
    }


    /*Smooth scroll*/
    $("[data-scroll]").on("click", function(event) {
        event.preventDefault();

        let elementID = $(this).data('scroll');
        let elementOffset = $(elementID).offset().top;

        console.log(elementOffset);

        $("html, body").animate({
           scrollTop: elementOffset - 100
        }, 500);
    });

});
