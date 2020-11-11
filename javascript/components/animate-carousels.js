// Function that animates the app carousels
function animateCarousels() {
  var carousels = document.querySelectorAll('.carousel'); // Get the app carousels

  // Animate each carousel
  for (let i = 0; i < carousels.length; i++) {
    animateCarousel(i);
  }

  // Function that animates the carousel of index 'i' in the 'carousels' node list variable
  // Arguments:
  //   i: Index of the carousel to animate
  function animateCarousel(i) {
    // Variables:
    //   anchors:          Anchors that change the active carousel item
    //   items:            Items of the carousel
    //   currentItem:      Currently active item
    //   currentSlide:     Currently active item slide (number in string format)
    //   currentIndicator: Carousel indicator anchor that is currently active
    //   slideTo:          Carousel slide to change into
    var anchors = carousels[i].querySelectorAll('[data-target]'),
        items = carousels[i].querySelectorAll('.carousel-item'),
        currentItem = carousels[i].querySelector('.carousel-item.active'),
        currentSlide = currentItem.getAttribute('slide'),
        currentIndicator = filterNodeList(anchors, 'data-slide-to', currentSlide),
        slideTo = "0";

    // Refresh the items position (positioned side by side with the 'transform: translate' property)
    refreshItemsPosition();

    // If the User clicks on an anchor...
    for (const anchor of anchors) {
      anchor.addEventListener('click', () => {
        // If the anchor is a direct anchor
        if (anchor.hasAttribute('data-slide-to')) {
          slideTo = anchor.getAttribute('data-slide-to');

          // Update the carousel active slide if the slide does change
          if (slideTo !== currentSlide) changeCarouselItem();

        // If the anchor is a direction anchor ('prev' or 'next')
        } else {
          // Get the slide to change into
          slideTo = parseInt(slideTo);
          slideTo += anchor.getAttribute('data-slide') == 'prev' ? -1 : 1;

          // Make sure the 'slideTo' variable is correct
          if (slideTo < 0) {
            slideTo = items.length - 1;
          } else if (slideTo >= items.length) {
            slideTo = 0;
          }

          slideTo = slideTo.toString(); // Make sure the slideTo variable is of the string format
          changeCarouselItem();         // Update the carousel active slide
        }

        // Function that changes the currently active slide
        function changeCarouselItem() {
          // Update the currently active Item
          currentItem.classList.remove('active');
          currentItem = filterNodeList(items, 'slide', slideTo);
          currentItem.classList.add('active');

          // Update the current slide
          currentSlide = slideTo;

          // Update the currently active indicator anchor
          currentIndicator.classList.remove('active');
          currentIndicator = filterNodeList(anchors, 'data-slide-to', currentSlide);
          currentIndicator.classList.add('active');

          // Refresh the items position (positioned side by side with the 'transform: translate' property)
          // This will create an animation derived from the 'transition: transform' property
          refreshItemsPosition();
        }
      });
    }

    // Function that refreshes the items position (which are side by side with the 'transform: translate' property)
    function refreshItemsPosition() {
      const currentSlideInt = parseInt(currentSlide);

      for (const item of items) {
        const relativePosition = parseInt(item.getAttribute('slide')) - currentSlideInt;
        item.style.transform = `translate(${relativePosition * 100}%)`;
      }
    }

    // Function that gets the first element in a node list that has a certain value for a certain attribute
    // Arguments:
    //   nodeList:  Node list to filter
    //   attr:      Attribute to evaluate
    //   attrValue: Attribute value that the node list element should have
    function filterNodeList(nodeList, attr, attrValue) {
      return Array.from(nodeList).filter(el => el.getAttribute(attr) == attrValue)[0];
    }
  }
}

export { animateCarousels };
