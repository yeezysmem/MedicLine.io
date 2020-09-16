$(function(){
    $('.banner-slider').slick({
      arrows:false,
      dots: true,
      infinite: true,
      speed: 500,
      fade: true,
      cssEase: 'linear',
      autoplay:true,
      autoplaySpeed: 1000
      });

      $('.card').slick({
        lazyLoad: 'ondemand',
        dots: false,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
          {
            breakpoint: 991,
            settings: {
              arrows:false
            }
          }
        ]
        
      });
      
      $('.about-flex').slick({
        lazyLoad: 'ondemand',
        dots: false,
        slidesToShow: 2,
        slidesToScroll: 1,
        responsive: [
          {
            breakpoint: 991,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              infinite: true,
              arrows:false
            }
          }
        ]
      });


  
});