





//============Fixed Menu====================== 

   $(document).ready(function(){
       $(window).scroll(function(){
           var menuFixed = $(this).scrollTop();
           if(menuFixed>40){
               $('body').addClass('fixed');
           }
           else{
               $('body').removeClass('fixed');
           }
       })
   }) 








//===============Owl Carousel==============


$(document).ready(function(){
  $(".owl-carousel").owlCarousel({
   
      autoplay:true,
      autoplayTimeout:2500,
      loop:true,
      

   responsive:{
        0:{
            items:1,
        },
        600:{
            items:3,
        },
        1000:{
            items:5,
        }
    }
       
  });
});





//============Scroll Top======================
   $(document).ready(function(){
       
     $('.top').click(function(){
            $('html, body').animate({
                scrollTop:0
            },2000)
        });
       
       
       $('.top').hide();
       
       $(window).scroll(function(){
           var topButton = $(this).scrollTop();
           
           if(topButton<400){
               $('.top').fadeOut();
           }
           else{
               $('.top').fadeIn();
           }
       });
       
});






//============Animation======================

$(document).ready(function(){
    new WOW().init();
});







