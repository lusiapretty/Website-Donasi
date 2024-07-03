$(document).ready(function(){
  $('.slider').slick({
    slidesToShow: 2,
    slidesToScroll: 2,
    autoplaySpeed: 2000, // Atur waktu antara setiap slide (dalam milidetik)
    autoplay: true,
    dots: true,
    dotsClass: 'custom-dots',
    prevArrow: '<button type="button" class="slick-prev"><</button>',
    nextArrow: '<button type="button" class="slick-next">></button>',
  });
});        