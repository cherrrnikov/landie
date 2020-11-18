$(document).ready(function () {
  // Модальное окно
  var modalButton = $(".purchase-button")
  var modalOverlay = $(".modal__overlay")
  var modalPayment = $(".modal-payment")
  var modalPaymentClose = $(".modal__close")
  // Открытие модального окна
  modalButton.on("click", function() {
    modalOverlay.addClass("modal__overlay--visible")
    modalPayment.addClass("modal-payment--visible")
  })
  // Закрытие модального окна при нажатии на крестик
  modalPaymentClose.on("click", function(event) {
    event.preventDefault()
    modalOverlay.removeClass("modal__overlay--visible")
    modalPayment.removeClass("modal-payment--visible")
  })
  // Сокрытие модального окна при нажатии на Escape
  $("body").on("keydown", function(e) {
    if(e.keyCode == 27) {
    $('.modal__overlay').removeClass("modal__overlay--visible")
    $('.modal-payment').removeClass("modal-payment--visible")
    }
  })

  // Модальное окно с подпиской
  var modalSubscribeButton = $(".main-info__button--transparent")
  var modalOverlay = $(".modal__overlay")
  var modalSubscribe = $(".modal-subscribe")
  var modalSubscribeClose = $(".modal__close")
  // Открытие модального окна
  modalSubscribeButton.on("click", function() {
    modalOverlay.addClass("modal__overlay--visible")
    modalSubscribe.addClass("modal-subscribe--visible")
  })
  // Закрытие модального окна при нажатии на крестик
  modalSubscribeClose.on("click", function(event) {
    event.preventDefault()
    modalOverlay.removeClass("modal__overlay--visible")
    modalSubscribe.removeClass("modal-subscribe--visible")
  })
  // Сокрытие модального окна при нажатии на Escape
  $("body").on("keydown", function(e) {
    if(e.keyCode == 27) {
    $('.modal__overlay').removeClass("modal__overlay--visible")
    $('.modal-subscribe').removeClass("modal-subscribe--visible")
    }
  })
  // Закрытие модального окна при нажатии на фон
  modalOverlay.on("click", function() {
    $('.modal__overlay').removeClass("modal__overlay--visible")
    $('.modal-subscribe').removeClass("modal-subscribe--visible")
    $('.modal-payment').removeClass("modal-payment--visible")
    $(".modal-successful").removeClass("modal-successful--visible")
  })
  // Обработка форм
  $(".form").each(function () {
    $(this).validate({
      errorClass: "invalid",
      rules: {
        phone: {
          required: true,
        },
        email: {
          required: true,
          email: true,
        },
      },
      messages: {
        name: {
          required: "Enter your full name",
          minlength: "Minimum of two characters",
        },
        email: {
          required: "Please, enter your email",
          email: "Example: name@domain.com",
        },
        phone: {
          required: "Enter your phone number",
          minlength: "Example: +7 (xxx)-xxx-xx-xx",
        },
      },
    });
  });
  $(".phone").mask("+7 (000)-000-00-00")
   
  $(".form").trigger("reset");
  $(function() {
  $(".form").on("submit", function(e) {
    e.preventDefault();
    alert("Successful! We will contact you soonest!");

    var popupClass = $(this).attr("sex").replace(".form", "sex");
      $.ajax({
        url: "send.php",
        type: "POST",
        contentType: false,
        processData: false,
        data: new FormData(this),
        success: function(msg) {
          console.log(msg);
          if ( msg == "ok") {
          console.log("Нужный класс попапа: " + popupClass);
          $(".form").trigger("reset");
          } 
          else {
          alert("Ошибка");
          }
        }
      })
    })
  })
})