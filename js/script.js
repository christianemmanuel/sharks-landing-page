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
  

  var $status = $('.pagingInfo');
  var $slickElement = $('.arenas-livestream-list');

  // $slickElement.on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
  //   if(!slick.$dots){
  //     return;
  //   }
  //   var i = (currentSlide ? currentSlide : 0) + 1;
  //   $status.text('Showing ' + i + ' of ' + (slick.$dots[0].children.length));
  // });

  // $('.pagingInfo').insertAfter( ".inner" );

  $slickElement.slick({
    cssEase: 'linear',
    dots: true,
    variableWidth: true,
    arrows: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    draggable: true,
    infinite: true,
    autoplay: false,
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

  $('.previous-matches-list').slick({
    cssEase: 'linear',
    dots: true,
    variableWidth: true,
    arrows: false,
    slidesToShow: 3,
    slidesToScroll: 2,
    draggable: true,
    infinite: true,
    autoplay: false,
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

  $('div').removeClass('list-render')

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
  if(form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
  
      var submitBtn = document.querySelector("#btn-subscribe");
      
      submitBtn.value = "Submiting..";
      submitBtn.setAttribute("disabled", "");
  
      let data = new FormData(form);
      fetch("https://script.google.com/macros/s/AKfycbxGUjF-QspgtIrL_bjyX843FrkVYSGnp_uTDxtHPgIQmE6FtgRe-VrNywYAuG2KX0rz/exec", {
        method: "POST",
        body: data,
        crossorigin: true,    
        mode: 'no-cors'
      })
      .then(res => res.text())
      .then(data => {
        document.getElementById("email").value = ""
  
        document.getElementById("msg").innerHTML = `<span class="msg">Thank you for subscribing!!!</span>`
  
        setTimeout(function () {
          document.querySelector(".msg").remove();
        }, 5000)
  
        submitBtn.removeAttribute('disabled');
        submitBtn.value = "Submit"
      });
    })
  }

  $('.dropdown').click(function (e) {
    e.preventDefault();
    $(this).toggleClass('active');
    $(this).children('.submenu').slideToggle();
  })
  
});