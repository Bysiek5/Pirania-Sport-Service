$(document).ready(function() {
// STICKY NAVIGATION
    $('.js-section-about-us').waypoint(function(direction) {
            if (direction == "down") {
                $('nav').addClass('sticky');
            } else {
                $('nav').removeClass('sticky');
            }
        }, {
      offset: '40px'
    });
    
    $('.js-section-contact').waypoint(function(direction) {
            if (direction == "down") {
                $('nav').removeClass('sticky');
            } else {
                $('nav').addClass('sticky');
            }
        }, {
      offset: '-15px'
    });
    
// STICKY NAVIGATION WITHOUT CLASS BTN
    
        $('.js-section-about-us').waypoint(function(direction) {
            if (direction == "down") {
                $('nav ul li a').removeClass('btn');
            } else {
                $('nav ul li a').addClass('btn');
            }
        }, {
      offset: '40px'
    });
    
// NAVIGATION SCROLL
    $(function() {
        $('a[href*=#]:not([href=#])').click(function() {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') 
            && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
               if (target.length) {
                 $('html,body').animate({
                     scrollTop: target.offset().top
                }, 1000);
                return false;
                }
            }
        }); 
    });    
});