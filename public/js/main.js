////! 1st alternative way to using jquery

//eslint-disable-next-line no-undef

(function ($) {
  
//   "use strict";
$('#preloader').fadeOut();
  //! Back to top button start
  $(window).scroll(function() {
    if ($(this).scrollTop() > 100) {
      $('.back-to-top').fadeIn('slow');
    } else {
      $('.back-to-top').fadeOut('slow');
    }
  });

  $('.back-to-top').click(function() {
    $('html, body').animate({
      scrollTop: 0
    }, 1500, 'easeInOutExpo');
    return false;
  });

 //! Back to top button end

 //!go to cart 
 $(window).scroll(function() {
  if ($(this).scrollTop() > 100) {
    $('.go_to_cart').fadeIn('slow');
  } else {
    $('.go_to_cart').fadeOut('slow');
  }
});

$('.go_to_cart').click(function() {
  $('html, body').animate({
    scrollTop: 0
  }, 1500, 'easeInOutExpo');
  return false;
});

//! APP MENU LARGE SCREEN


$(window).on('scroll', function() {
  if ($(window).scrollTop() > 60) {
      $('.scrolling-navbar').addClass('navApp');
  } else {
      $('.scrolling-navbar').removeClass('navApp');
  }
});



  // eslint-disable-next-line no-undef
})(jQuery);

