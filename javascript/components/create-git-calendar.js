// Function that creates the git calendar using the 'Bloggify/github-calendar' library
// Added a small change to personalize it
async function createGitCalendar() {
  function fetchCalendar() {
    fetch(`https://api.bloggify.net/gh-calendar/?username=edgareu1`)
    .then(response => response.text())
    .then(response => {
      let calendarHelper = document.createElement("div"),
          container = document.querySelector('.calendar');

      calendarHelper.innerHTML = response;
      calendarHelper.querySelector('h2').remove();

      let calendar = calendarHelper.querySelector(".js-yearly-contributions");
      calendar.querySelector(".float-left").innerHTML = 'For more details please check <a href="https://github.com/edgareu1" target="blank">#edgareu1</a>';

      if (calendar.querySelector("include-fragment")) {
        setTimeout(fetchCalendar, 500);

      } else {
        let calendarSVG = calendar.querySelector("svg.js-calendar-graph-svg"),
            width = calendarSVG.getAttribute("width"),
            height = calendarSVG.getAttribute("height");

        calendarSVG.removeAttribute("height");
        calendarSVG.setAttribute("width", "100%");
        calendarSVG.setAttribute("viewBox", "0 0 " + width + " " + height);
      }

      container.innerHTML = calendar.innerHTML;
    });
  }

  fetchCalendar();
}

export { createGitCalendar };
