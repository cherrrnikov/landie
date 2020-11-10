$(document).ready(function() {
  var infoSlider = new Swiper('.info-slider', {
  effect: "flip",
  speed: 900,
  autoplay: {
    enabled: true,
    delay: 5000,
  },
  // Optional parameters
  direction: 'horizontal',
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Подключение клавиатуры
  keyboard: {
    enabled: true,
    onlyInViewport: true,
  },
  })
  $(".info-slider").on("mouseenter", function() {
    infoSlider.autoplay.stop();
  });
  $(".info-slider").on("mouseleave", function() {
    infoSlider.autoplay.start();
  });
})