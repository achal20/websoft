

$('.banner-slider').owlCarousel({
    loop:true,
	autoplay: true,
  	nav: false,
  	items:1,
  	autoplayHoverPause: true,
     animateOut: 'slideOutUp',
    animateIn: 'slideInDown',
    responsive : {
        1000 : {
        animateOut: 'slideOutUp',
        animateIn: 'slideInDown',
    },
     992 : {
        animateOut: 'slideOutUp',
        animateIn: 'slideInDown',
    },

    576 : {
        animateOut: 'slideOutUp',
        animateIn: 'slideInDown',
    },
    0 : {
        animateOut: 'fadeOut',
        animateIn: 'fadeIn',
    }
  },
});


$('.review_slider').owlCarousel({
    loop:true,
	autoplay: true,
  	nav: false,
  	items:2,
  	autoplayHoverPause: true,
    responsive : {
        1000 : {
        items:2,
        },
      767 : { 
      items:2, 
      },
      567 : { 
      items:2, 
      },
      0 : { 
      items:1, 
      },     

        }
});

 $(document).ready(function(){
       if($('.banner-wrapper').length > 0) {
         $('body').addClass('banner-here');
       }
       else {
         $('body').addClass('no-banner');
       }
});

$(document).ready(function() {
    $('.payment-btn').click(function() {
      $('body').addClass('payment-page')
     });
	 
	   $('.payment-btn-bk').click(function() {
      $('body').removeClass('payment-page')
     });
	 
     
     
  });




$(document).ready(function() {
   new WOW().init();
}); 

