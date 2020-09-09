$(function(){
    $('.banner-slider').slick({
      arrows:false,
      dots: true,
      infinite: true,
      speed: 500,
      fade: true,
      cssEase: 'linear'
      });

      $('.card').slick({
        lazyLoad: 'ondemand',
        slidesToShow: 3,
        slidesToScroll: 1,
        dots: false
      });


  
});