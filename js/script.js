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
    speed: 300,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          variableWidth: false,
          autoplay: false,
          slidesToShow: 1,
          centerPadding: '60px',
        }
      },
      {
        breakpoint: 576,
        settings: {
          variableWidth: false,
          autoplay: false,
          slidesToShow: 1,
          centerPadding: '30px',
        }
      }
    ]
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

  // Adjust Height
  function autoHeight() {
    $winHeight = window.innerHeight;
    
    var autoHeight = document.querySelectorAll('.auto_height');

    if($winHeight > 520){
      // alert($winHeight)
      for (i = 0; i < autoHeight.length; i++) {
        autoHeight[i].style.minHeight = $winHeight - 1 + "px";
      }
    }
    else{
      for (i = 0; i < autoHeight.length; i++) {
        autoHeight[i].style.minHeight = "520px"
      }
    }
  }
  autoHeight();

  // Window Resize
  $( window ).resize(function() {
    autoHeight;
  });

});