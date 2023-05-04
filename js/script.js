$(document).ready(function () {
  $('.events-slider-list').slick({
    cssEase: 'linear',
    dots: true,
    variableWidth: true,
    centerMode: true,
    centerPadding: '100px',
    arrows: false,
    slidesToShow: 3,
    draggable: false,
    autoplay: true,
  });


  $(".nav-links a").on("click", function(e){
    var href = $(this).attr("href");
    $( 'html, body' ).animate({
      scrollTop: $( href ).offset().top
    }, '300' );
    e.preventDefault();
  });

  var scrollTop = $(".scrollTop");

  $(window).scroll(function() {
    var topPos = $(this).scrollTop();

    if (topPos > 100) {
      $(scrollTop).css("opacity", "1");
    } else {
      $(scrollTop).css("opacity", "0");
    }
  });

  $(scrollTop).click(function() {
    $('html, body').animate({
      scrollTop: 0
    }, 800);
    return false;
  });

});