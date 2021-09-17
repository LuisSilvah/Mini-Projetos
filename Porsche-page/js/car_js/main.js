import ('https://cdn.jsdelivr.net/jquery.slick/1.6.0/slick.min.js');

function createSlick() {
  $(".slider")
    .not(".slick-initialized")
    .slick({
      centerMode: true,
      autoplay: true,
      dots: true,
      speed: 400,
      slidesToShow: 6,
      slidesToScroll: 6,

      slidesToShow: 3,
      responsive: [
        {
          breakpoint: 768,
          settings: {
            dots: false,
            arrows: false,
            infinite: false,
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    });
}

createSlick();

//Will not throw error, even if called multiple times.
$(window).on("resize", createSlick);
