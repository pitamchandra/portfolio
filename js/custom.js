
//scrolling function add
$(window).scroll(function(){
  //for menu fixed
  if($(window).scrollTop() > 100 ) {
    $(".menu_part").addClass('menu_fixed')
  }else{
    $(".menu_part").removeClass('menu_fixed')
  }

  //fade out back to top btn
  if($(window).scrollTop() > 300 ) {
    $(".back_to_top").fadeIn()
  }else{
    $(".back_to_top").fadeOut()
  }
})

//go to top 

$(".back_to_top").click(function(){
  $("body,html").animate({
    scrollTop : 0,
  },2000)
})




//banner typing
var typed = new Typed('.banner_typing', {
  strings: [
    'Web Designer',
    'UI/UX Designer',
    'Font end Developer',
    'WordPress Expert',
  ],
  typeSpeed: 60,
  backSpeed: 40,
  loop: true,
  startDelay: 1000,
  backDelay: 1000,
});

//skills part barfiller
$('#bar1').barfiller();
$('#bar2').barfiller();
$('#bar3').barfiller();
$('#bar4').barfiller();
$('#bar5').barfiller();
$('#bar6').barfiller();
$('#bar7').barfiller();
$('#bar8').barfiller();

//testimonial part 
$('.testi_slider').slick({
  dots: true,
  infinite: false,
  speed: 300,
  slidesToShow: 1,
  slidesToScroll: 1,
  
});