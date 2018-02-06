$(document).ready(function () {
    $('[id^="carousel-"]').each(function () {
        var target = $(this);
        target.carousel({
            interval: 4000
        });
        target.on("slid", function () {
            var to_slide;
            to_slide = target.find(".carousel-item.active").attr("data-slide-no");
            target.find(".myCarousel-target.active").removeClass("active");
            target.find(".carousel-indicators [data-slide-to=" + to_slide + "]").addClass("active");
        });
        target.find(".myCarousel-target").on("click", function () {
            //$(this).preventDefault();
            target.carousel(parseInt($(this).attr("data-slide-to")));
            target.find(".myCarousel-target.active").removeClass("active");
            $(this).addClass("active");
        });
    });
});