////! 1st alternative way to using jquery

//eslint-disable-next-line no-undef

(function ($) {
  
//   "use strict";
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




  // eslint-disable-next-line no-undef
})(jQuery);

