$(document).ready(function(){
  //menu
  $(".menu-hamburguer").on("click", function(){
    $(".navegation-link-content").slideToggle();
  });

  //microinteractions
  // window.sr = ScrollReveal();
  // sr.reveal('.section-about', { duration: 1000 });
  // sr.reveal('.home-middle', { duration: 2000 });

  //scroll to top show
  $(document).scroll(function(){
    if ($(this).scrollTop() > 400) {
        $('.go-top').fadeIn();
    } else {
        $('.go-top').fadeOut();
    }
  });

  //scroll to top action
  $('.go-top').each(function(){
      $(this).click(function(){
          $('html,body').animate({ scrollTop: 0 }, 'slow');
          return false;
      });
  });

  $('.icon-arrow-down').each(function(){
      $(this).click(function(){
          $('html,body').animate({ scrollTop: 800 }, 'slow');
          return false;
      });
  });

  //tripAdvisor loads
  setTimeout(function(){
    $("#TA_restaurantWidgetGreen988").show();
  }, 4000);

  // Ayto Open PopUp - this function show pop up on Bill landing page
  // Comment this line until END POPUP if you don't want to show the popUp on Landing page
  // Quadro de Avisos is on _layout > landing.html
  $( window ).load(function() {
    if ($.cookie('avisos_bill')) {
    } else {
      $('a.open-popup-infos').trigger('click');
      $.cookie('avisos_bill', 'foo', { expires: 1 });
    }
  });
  $('.open-popup-infos').magnificPopup({
    type:'inline',
    midClick: false,
  });
  // END POPUP

});//wrapper end
