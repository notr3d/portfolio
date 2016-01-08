$(document).ready(function() {
  $('#fullpage').fullpage({
    //scrollBar:true,
    scrollingSpeed:300,
    anchors:['1', '2', '3'],
    paddingTop:0,
    navigation:true,
  });
  $('.slider-nav').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    asNavFor: '.slider-for',
    //dots: true,
    centerMode: true,
    focusOnSelect: true,
    autoplay:true,
    autoplaySpeed:5000,
    infinite:true
  });
  $('.slider-for').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: true,
    arrows: false,
    fade: true,
    asNavFor: '.slider-nav'
  });
});