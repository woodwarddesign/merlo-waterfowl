/**
 * @file
 * JavaScript file for Atlas
 *
 */

(function ($, Drupal) {

  $(document).ready(function() {

  // add a class to indicate js enabled on client
    $('body').addClass('js');
    $('body').removeClass('no-js');

    // toggle menu position on click

    $('.menu-link').click(function(e) {
      e.preventDefault();

      var $menu = $('.main-menu-1');
      $menu.height($(document).height());

      if ($menu.hasClass('toggled')) {
        // hide menu
        $menu.velocity({
          properties: { right: '-300px' },
          options: { duration: 300, easing: 'ease-in-out' }
        });
        $menu.removeClass('toggled');
      }
      else {
        // show menu
        $menu.velocity({
          properties: { right: '0' },
          options: { duration: 400 }
        });
        $menu.addClass('toggled');
      }
    });

    // set top wrapper on front page to be height of screen minus room for menu

      var topHeight = $(window).height();
      var topWidth = $(window).width();
      var textContainer = $('.top-text');
      var mediaContainer = $('.page-top');
      $('.page-top, .front-cover-image').height(topHeight);
      var textBoxWidth = $('.top-text').width();
      $('.top-text').css({'top':topHeight * 0.4, 'left': (topWidth/2) - (textBoxWidth/2)});

      $(window).resize(function() {
        $('.top-text').css({'top':$( window ).height() * 0.4, 'left': ($( window ).width()/2) - (textBoxWidth/2)});
      });
      // smooth scroll from top video/image to content
      $('.top-text a').click(function() {
        event.preventDefault();
        $('#start').velocity("scroll", { duration: 700, easing: "ease-in-out" });
      });

  //set up variable for mobile. set this to keep track of width so functions are run only on transition from
  // mobile to desktop and vice versa. if this isn't done, functions will fire constantly as window is resized
  var mobile = 0;
  // keeps track if function has been run
  var functionStatus = 0;

  // todo - instead of browser width, this should be based on property at given media query
  function setMobileValue() {
    if (($("#skip-link").css("position") == "absolute" ) || ($("#skip-link").css("position") == "fixed" )) {
      mobile = 1;
    }
    else {
      mobile = 0;
    }
  }

  setMobileValue();

  // determine if width is 'mobile' and if function has already been run
  function fireMobileFunctions() {
    if (mobile === 1 && functionStatus === 0) {
      // turn this 'on' so that it doesn't run multiple times during resize
      functionStatus = 1;
      addMobileMenuItem();
      toggleMenu();
      equalHeightColumns();
    }
    else if (mobile === 0 && functionStatus == 1)  {
      //turn 'off' so that it will run again if resized to mobile
      functionStatus = 0;
      removeMobileMenuItem();

    }
  }

  fireMobileFunctions();

  $(window).resize(function() {
    setMobileValue();
    fireMobileFunctions();
    });

    function is_touch_device() {
     return (('ontouchstart' in window) || (navigator.MaxTouchPoints > 0) || (navigator.msMaxTouchPoints > 0));
    }
    // remove add classes as needed
    if (is_touch_device()) {
       $('body').removeClass('no-touch');
       $('body').addClass('touch');
    }


    // insert video instead of picture element if desktop display
    if (mobile === 0) {
      $('.front-cover-image').remove();
      $('.front .page-top').html('<video autoplay loop poster=\"/sites/all/themes/atlas/images/video-cover.jpg\" class=\"front-vid\"> <source src=\"/sites/all/themes/atlas/videos/front-video.webm\" type=\"video/webm\">   <source src=\"/sites/all/themes/atlas/videos/front-video.mp4\" type=\"video/mp4\"></video>');
  }


});

})(jQuery, Drupal);
