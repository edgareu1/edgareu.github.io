// jQuery Function that smooths the same page scrolling
// Parameters: from    starting point element
//             to      destination element
//             time    milliseconds during which the animation takes place
function smoothScrolling(from, to, time = 800) {
  from.addEventListener('click', (event) => {
    event.preventDefault(); // Prevents default anchor click behavior

    // Performs the scrolling animation during a certain period of time
    $("html, body").animate( {
      scrollTop: $(to).offset().top
    }, time);
  });
}
