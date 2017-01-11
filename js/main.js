$(document).ready(function(){
  //menu
  $(".menu-hamburguer").on("click", function(){
    $(".navegation-link-content").slideToggle();
  });

  //microinteractions

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

});//wrapper end
