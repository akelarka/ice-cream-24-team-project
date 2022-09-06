import $ from "jquery";
import "slick-carousel";
$(".carousel").slick({
dots: true,
infinite: true,
slidesToShow: 1,
slidesToScroll: 1,
autoplay: true,
autoplaySpeed: 2000,
cssEase: 'linear',
fade: true,
});