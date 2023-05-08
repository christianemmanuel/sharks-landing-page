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

  if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
    $(".nav-links a").on("click", function(e){
      $('.toggle-mobile-menu').trigger('click');
      e.preventDefault();
    });  
  }

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

  $('.toggle-mobile-menu').click(function(e) {
    e.preventDefault();
    $('body').toggleClass('active_menu');
    $('.nav-links').slideToggle('fast');
  })

  let form = document.querySelector("form");
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    
    document.querySelector("#btn-subscribe").value = "Submiting..";
    let data = new FormData(form);
    
    fetch("https://script.google.com/macros/s/AKfycbxGUjF-QspgtIrL_bjyX843FrkVYSGnp_uTDxtHPgIQmE6FtgRe-VrNywYAuG2KX0rz/exec", {
      method: "POST",
      body: data
    })
    .then(res => res.text())
    .then(data => {
      document.querySelector("#msg").innerHTML = data;
      document.querySelector("#btn-subscribe").value = "Submit"
    });
  })

});