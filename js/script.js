"use strict";
$(document).ready(function () {
  // включаем слайдер, используя нужный класс, указанный в html
  $('.slider').slick({
  slidesToShow:3,
    slidesToScroll:3,
    infinite:true,//бесконечный слайдер
  });
});