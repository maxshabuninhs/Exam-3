$(document).ready(function () {
    $('.works-slider').slick({
        dots: true,
        autoplay: true,
        autoplaySpeed: 4000,
        mobilefirst: true,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    arrows: false,
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    arrows: false,
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });
    $('.our-team__slider').slick({
       arrows: true,
        infinite: true,
        speed: 450,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        mobilefirst: true,
        responsive: [{
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                }
            }, {
                breakpoint: 600,
                settings: {
                    arrows: false,
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
        ]
           
    });

    $(window).scroll(function () {
        var scroll = $(window).scrollTop();
        if (scroll >= 50) {
            $(".header-nav").addClass("nav-scroll");
        } else {
            $(".header-nav").removeClass("nav-scroll");
        }
    });
       
});

function initMap() {
     let nolan91 = {

         lat: -7.930747,
         lng: 112.637747
     }

     let centerMap = {
          
         lat: -7.943061,
         lng: 112.618698
     }

    let map = new google.maps.Map(
        document.getElementById('map'), {
            zoom: 13,
            center: centerMap,
        });

    let marker = new google.maps.Marker({
        position: nolan91,
        map: map,
        icon: './img/map-marker.png',
        title: '91 Nolan Extensions Suite 670'
    });
};



