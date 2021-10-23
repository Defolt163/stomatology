$(document).ready(function(){
    $('.caorusel__inner, .caorusel__inner_feedback').slick(
        {
            dots: true,
            nextArrow: '<button type="button" class="slick-next"><img src="ico/arrows/right.svg"></button>',
            prevArrow: '<button type="button" class="slick-prev"><img src="ico/arrows/left.svg"></button>',
            responsive: [
            {
                breakpoint: 992,
                settings: {
                arrows: false,
                dots: false,
                }
            }
            ]
        });
    $('img.card__img').each(function(){
        var $img = $(this);
        var imgClass = $img.attr('class');
        var imgURL = $img.attr('src');
        $.get(imgURL, function(data) {
            var $svg = $(data).find('svg');
            if(typeof imgClass !== 'undefined') {
            $svg = $svg.attr('class', imgClass+' replaced-svg');
            }
            $svg = $svg.removeAttr('xmlns:a');
            if(!$svg.attr('viewBox') && $svg.attr('height') && $svg.attr('width')) {
            $svg.attr('viewBox', '0 0 ' + $svg.attr('height') + ' ' + $svg.attr('width'))
            }
            $img.replaceWith($svg);
        }, 'xml');
        });

    $('.popular__quest').on('click', 'div:not(.quest__wrapper_active)', function() {
        $(this)
            .addClass('quest__wrapper_active').siblings().removeClass('quest__wrapper_active')
        });
  });