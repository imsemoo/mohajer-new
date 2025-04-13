$(document).ready(function () {
  $(window).on("scroll", function () {
    $(".navbar").toggleClass("fixed-nav", $(window).scrollTop() > 50);
  });
    // Toggle search input visibility when search icon is clicked
    document.addEventListener('DOMContentLoaded', function(){
      const searchToggle = document.querySelector('.search-toggle');
      const searchInputContainer = document.querySelector('.search-input-container');
      searchToggle.addEventListener('click', function(){
        searchInputContainer.classList.toggle('active');
      });
    });

    $(".articlesSlider").owlCarousel({
      loop: true,             
      rtl: true,
      margin: 15,           
      nav: false,            
      dots: true,            
      autoplay: true,        
      autoplayTimeout: 3000, 
      autoplayHoverPause: true, 
      animateOut: 'slideOutDown',
      animateIn: 'flipInX',
      responsive: {
        0: {
          items: 1          
        },
        768: {
          items: 1         
        },
        992: {
          items: 1         
        }
      }
    });
    $(".owl-about-us").owlCarousel({
      loop: true,
      margin: 20,
      nav: false,
      dots: true,
      rtl: true,
      autoplay: true,
      autoplayTimeout: 3000,
      responsive: {
          0: {
              items: 1
          },
          600: {
              items: 3
          },
          1000: {
              items: 4
          }
      }
  });
    // عند تحميل الصفحة بالكامل
    $(window).on('load', function () {
      $('#preloadr').fadeOut(500); // بيخفي اللودر بعد التحميل بـ 0.5 ثانية
    });
    $(".mobile-menu-toggle").on("click", function () {
      $(".navbar-links-mobile").addClass("active");
      $("body").addClass("mobile-menu-open");
    });

    $(".mobile-close").on("click", function () {
      $(".navbar-links-mobile").removeClass("active");
      $("body").removeClass("mobile-menu-open");
    });

    // لو ضغط المستخدم بره القائمة
    $(document).on("click", function (e) {
      if (!$(e.target).closest('.navbar-links-mobile, .mobile-menu-toggle').length) {
        $(".navbar-links-mobile").removeClass("active");
        $("body").removeClass("mobile-menu-open");
      }
    });
});
