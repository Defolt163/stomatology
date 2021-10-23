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

/*     $('.left').on('click', 'div:not(.quest__wrapper_active)', function() {
        $(this)
            .addClass('quest__wrapper_active').siblings().removeClass('quest__wrapper_active')
        }); */

        var acc = document.getElementsByClassName("quest__border");
        var i;

        for (i = 0; i < acc.length; i++) {
            acc[i].addEventListener("click", function() {
                /* Toggle between adding and removing the "active" class,
                to highlight the button that controls the panel */
                this.classList.toggle("quest__border_active");

                /* Toggle between hiding and showing the active panel */
                var panel = this.nextElementSibling;
                if (panel.style.display === "block") {
                    panel.style.display = "none";
                } else {
                    panel.style.display = "block";
                }
            });
        }

        $('[data-modal=feedback]').on('click', function(){
            $('.overlay, #feedback').fadeIn();
          });
      
          $('.modal__close').on('click', function(){
            $('.overlay, #feedback, #thank').fadeOut();
          });
  });