// Function that creates the git calendar using the 'Bloggify/github-calendar' library
// Added a small change to personalize it
async function createGitCalendar() {
  const FULL_MONTHS = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
        ABBR_MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

  function addTooltips(container) {
    const tooltip = document.createElement("div"),
          calendarDays = document.querySelectorAll('rect.day');

    tooltip.classList.add("day-tooltip");
    container.appendChild(tooltip);

    for (let i = 0; i < calendarDays.length; i++) {
      calendarDays[i].addEventListener("mouseenter", (event) => {
        let dayCount = event.target.getAttribute("data-count");

        if (dayCount === "0") {
          dayCount = "No contributions";
        } else if (dayCount === "1") {
          dayCount = "1 contribution";
        } else {
          dayCount = `${dayCount} contributions`;
        }

        const date = new Date(event.target.getAttribute("data-date")),
              dateText = `${ABBR_MONTHS[date.getUTCMonth()].slice(0, 3)} ${date.getUTCDate()}, ${date.getUTCFullYear()}`;

        tooltip.innerHTML = `<strong>${dayCount}</strong> on ${dateText}`;
        tooltip.classList.add("is-visible");

        const size = event.target.getBoundingClientRect(),
              leftPos = size.left + window.pageXOffset - tooltip.offsetWidth / 2 + size.width / 2,
              topPos = size.bottom + window.pageYOffset - tooltip.offsetHeight - 2 * size.height;

        tooltip.style.top = `${topPos}px`;
        tooltip.style.left = `${leftPos}px`;
      });

      calendarDays[i].addEventListener("mouseleave", () => {
        tooltip.classList.remove("is-visible");
      });
    }
  }

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

      let calendarDays = calendar.querySelectorAll('rect.day'),
          dayCount,
          dayColor,
          dayCountSum = 0,
          activeDays = 0,
          streakDays = 0,
          inStreak = true,
          dateStreakBegin,
          dateStreakEnd;

      for (let i = calendarDays.length - 1; i >= 0; i--) {
        dayCount = parseInt(calendarDays[i].getAttribute('data-count'));

        if (dayCount > 0) {
          dayCountSum += dayCount;
          activeDays++;
        }

        if (dayCount == 0) {
          dayColor = 'rgba(240, 240, 240)';
        } else if (dayCount <= 8) {
          dayColor = 'rgba(100, 250, 100)';
        } else if (dayCount <= 16) {
          dayColor = 'rgba(60, 200, 60)';
        } else if (dayCount <= 24) {
          dayColor = 'rgba(30, 150, 30)';
        } else {
          dayColor = 'rgba(0, 100, 0)';
        }

        calendarDays[i].setAttribute('fill', dayColor);

        if (!inStreak) { continue; }

        if (dayCount > 0) {
          if (dateStreakEnd  === undefined) { dateStreakEnd = new Date(calendarDays[i].getAttribute("data-date")); }
          streakDays++;

        } else if (i < calendarDays.length - 2) {
          inStreak = false;
          dateStreakBegin = new Date(calendarDays[i + 1].getAttribute("data-date"));
        }
      }

      const dateStreak = `${FULL_MONTHS[dateStreakBegin.getUTCMonth()]} ${dateStreakBegin.getUTCDate()} - ${FULL_MONTHS[dateStreakEnd.getUTCMonth()]} ${dateStreakEnd.getUTCDate()}`,
            dateCalendarFull = `${dateString(new Date(calendarDays[0].getAttribute("data-date")))} - ${dateString(new Date(calendarDays[calendarDays.length - 1].getAttribute("data-date")))}`;

      createContribContent({
        first: 'Contributions in the last year',
        second: `${dayCountSum} total`,
        third: dateCalendarFull,
        firstColumn: true
      });

      createContribContent({
        first: 'Average daily contributions',
        second: Number.parseFloat(dayCountSum / activeDays).toFixed(1),
        third: dateCalendarFull
      });

      createContribContent({
        first: 'Current streak',
        second: `${streakDays} days`,
        third: dateStreak
      });

      container.innerHTML = calendar.innerHTML;
      addTooltips(container);

      function createContribContent({first, second, third, firstColumn} = {}) {
        const calendarCol = document.createElement("div");
        calendarCol.classList = 'contrib-column table-column';

        if (firstColumn) { calendarCol.classList.add('contrib-column-first'); }

        calendarCol.innerHTML = `<span class="text-muted">${first}</span>
                                 <span class="contrib-number">${second}</span>
                                 <span class="text-muted">${third}</span>`;
        calendar.appendChild(calendarCol);
      }

      function dateString(date) {
        return `${ABBR_MONTHS[date.getUTCMonth()]} ${date.getUTCDate()}, ${date.getFullYear()}`;
      }
    });
  }

  fetchCalendar();
}

export { createGitCalendar };
