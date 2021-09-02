$(function () {

    $('.slider__inner').slick({
        dots: true,
        infinite: false,
        slidesToShow: 1,
        adaptiveHeight: true
    });



    $('.product__btn').on('click', function (e) {

        e.preventDefault();
        $('.product__btn').removeClass('product__btn--active');
        $(this).addClass('product__btn--active');

        $('.zno__courses-wrapper').removeClass('zno__courses-wrapper--active');
        $($(this).attr('href')).addClass('zno__courses-wrapper--active');

    });



    $(".stars").rateYo({
        starWidth: "16px",
        normalFill: "#ccccce",
        ratedFill: "#FAFE3E",
        readOnly: true,
        spacing: "4px"
        // starSvg: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="18pt" height="16pt" viewBox="0 0 18 16" version="1.1"> <g id="surface1"> <path d="M 8.101562 0.554688 L 6.0625 4.695312 L 1.496094 5.359375 C 0.679688 5.476562 0.351562 6.488281 0.945312 7.066406 L 4.246094 10.285156 L 3.464844 14.832031 C 3.324219 15.652344 4.191406 16.269531 4.914062 15.882812 L 9 13.738281 L 13.085938 15.882812 C 13.808594 16.265625 14.675781 15.652344 14.535156 14.832031 L 13.753906 10.285156 L 17.054688 7.066406 C 17.648438 6.488281 17.320312 5.476562 16.503906 5.359375 L 11.9375 4.695312 L 9.898438 0.554688 C 9.53125 -0.179688 8.472656 -0.191406 8.101562 0.554688 Z M 8.101562 0.554688 " /> </g> </svg>'
    });

});