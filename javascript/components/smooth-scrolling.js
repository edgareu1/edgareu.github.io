function smoothScrolling(from, to, time = 800) {
  from.addEventListener('click', (event) => {
    event.preventDefault();

    $("html, body").animate( {
      scrollTop: $(to).offset().top
    }, time);
  });
}
