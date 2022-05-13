const touchSlider = () => {
    let browserWidth = document.body.clientWidth;
    let slides = 4
    if(browserWidth < 1380){
        slides = 3
    }
    if (browserWidth < 1080){
        slides = 2
    }
    if(browserWidth < 550){
        slides = 1
    }

    var swiper = new Swiper('.swiper-container', {
        slidesPerView: slides,
        spaceBetween: 20,
        loop: true,
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
        // navigation: {
        //   nextEl: '.swiper-button-next',
        //   prevEl: '.swiper-button-prev',
        // },
      });
     
}

touchSlider();
window.onresize = function(){
    touchSlider();
}