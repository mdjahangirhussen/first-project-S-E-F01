 $(document).ready(function() {
            $(".owl-carousel").owlCarousel({
                items: 5,
                autoplay: false,
                autoplayTimeout: 1000,
                autoplaySpeed: 1000,
                loop: true,
                margin: 15,
                autoplayHoverPause: true,
                nav: true,
                navText: ['<div class="prev"><i class="fas fa-angle-left"></i></div>', '<div class="next"><i class="fas fa-angle-right"></i></div>'],
                navSpeed: 1000,
                animateIn: 'bounceIn',
                animateOut: 'bounceOut',
                dotsContainer: false,
                dots: false,
                responsive:{
        0:{
            items:3,
            nav:false,
           
        },
        576:{
            items:4,
            
        },
        768:{
            items:5,
        }
    }
    
            });
     
        });
 // scroll-to-top 
 $(function () {
     $(window).scroll(function () {
         if ($(this).scrollTop() > 100) {
             $('.scrollup').fadeIn();
         } else {
             $('.scrollup').fadeOut();
         }
     });

     $('.scrollup').click(function () {
         $("html, body").animate({
             scrollTop: 0
         }, 600);
         return false;
     });

 });
$(window).scroll(function(){
  var sticky = $('.sticky'),
      scroll = $(window).scrollTop();

  if (scroll >=180) sticky.addClass('fixed')
  else sticky.removeClass('fixed');
});

//menu height
 $(function () {
     var topoffset = 55; //variable for menu height

     //Use smooth scrolling when clicking on navigation
     $('.navbar-nav a').click(function () {
         if (location.pathname.replace(/^\//, '') ===
             this.pathname.replace(/^\//, '') &&
             location.hostname === this.hostname) {
             var target = $(this.hash);
             target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
             if (target.length) {
                 $('html,body').animate({
                     scrollTop: target.offset().top - topoffset
                 }, 500);
                 return false;
             } //target.length
         } //click function
     }); //smooth scrolling
    });  
 
$('.carousel').carousel({
  interval: 200000
});
