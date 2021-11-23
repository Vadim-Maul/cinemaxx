
$(document).ready(function () {
   $('.carousel__inner').slick({
      infinite: true,
      rt1: true,
      dots: false,
      speed: 1500,
      slideToShow: 1,
      adaptiveHeight: false,
      autoplay: true,
      autoplaySpeed: 3000,
      prevArrow: '<button type="button" class="slick-prev"><img src="img/chevron_left_solid.png"></button>',
      nextArrow: '<button type="button" class="slick-next"><img src="img/chevron_right_solid.png"></button>'
   });
});