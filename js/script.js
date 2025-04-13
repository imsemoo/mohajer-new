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
  
});
