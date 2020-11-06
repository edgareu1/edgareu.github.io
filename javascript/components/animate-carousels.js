function animateCarousels() {
  var carousels = document.querySelectorAll('.carousel');

  for (let i = 0; i < carousels.length; i++) {
    animateCarousel(i);
  }

  function animateCarousel(i) {
    var anchors = carousels[i].querySelectorAll('[data-target]'),
        items = carousels[i].querySelectorAll('.carousel-item'),
        currentItem = carousels[i].querySelector('.carousel-item.active'),
        currentSlide = currentItem.getAttribute('slide'),
        currentIndicator = Array.from(anchors).filter(anchor => anchor.getAttribute('data-slide-to') == currentSlide)[0],
        slideTo = "0";

    for (let j = 0; j < anchors.length; j++) {
      anchors[j].addEventListener('click', () => {
        if (anchors[j].hasAttribute('data-slide-to')) {
          slideTo = anchors[j].getAttribute('data-slide-to');

          if (slideTo !== currentSlide) {
            changeCarouselItem();
          }
        } else {
          slideTo = parseInt(slideTo);
          slideTo += anchors[j].getAttribute('data-slide') == 'prev' ? -1 : 1;

          if (slideTo < 0) {
            slideTo = items.length - 1;
          } else if (slideTo >= items.length) {
            slideTo = 0;
          }

          slideTo = slideTo.toString();
          changeCarouselItem();
        }

        function changeCarouselItem() {
          currentItem.classList.remove('active');
          currentItem = Array.from(items).filter(item => item.getAttribute('slide') == slideTo)[0];
          currentItem.classList.add('active');
          currentSlide = slideTo;
          currentIndicator.classList.remove('active');
          currentIndicator = Array.from(anchors).filter(anchor => anchor.getAttribute('data-slide-to') == currentSlide)[0];
          currentIndicator.classList.add('active');
        }
      });
    }
  }
}

export { animateCarousels };
