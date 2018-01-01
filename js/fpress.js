//funções javascript
jQuery(document).ready(function($) {


   $(".menu").click(function(){
      $('body,html').animate({
       scrollTop: 0
    }, 300);
      $(".navbar").slideToggle(300);
   });


});
