
//color switcher
$('.color_switcher').click(function(){
  $('.scrollspy-example').toggleClass('white_theme');
})

//scrolling function add
$(window).scroll(function(){
  //for menu fixed
  if($(window).scrollTop() > 50 ) {
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

//fade out preeloader
$(".preloader").delay(2000).fadeOut();

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
    'Web Developer (PHP)',
    'Wordpress Expert',
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
  responsive: [
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: true,
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        arrows:false,
      }
    },
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        arrows: false,
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});

//animation wow js
new WOW().init();