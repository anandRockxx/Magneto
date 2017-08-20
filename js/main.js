
// Auto Type
var typed = new Typed('.type', {
  strings: [
    "Creative",
    "Responsive",
    "Multipurpose"
  ],
  typeSpeed:30,
  backSpeed:30,
  backDelay:1500,
  smartBackspace:true,
  backDelay:200,
  loop:true,
  showCursor:false
});


// Preloader
  $(window).on('load',function(){
   $('.cssload-loader').fadeOut('slow',function(){
   $('.preloader').remove();
 });
  });


// Icon-bar Clicked
$('.navbar').on('click',function() {
  $('.navbar').css('background-color','rgba(0,0,0,0.5)');
  $('.icon-bar').css('color','#fff');
});



//Header Scroller
$(window).on('scroll', function () {
       if ($(".navbar").offset().top > 1) {
         $('.navbar').css('background-color','rgba(0,0,0,0.5)');
         $('.icon-bar').css('color','#fff');
       } else {
         $('.navbar').css('background-color','transparent');
       }
   });


//services animation
$('.service-image img').mouseover(function(){

});
