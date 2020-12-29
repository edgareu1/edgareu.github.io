// Function that creates the git calendar
// Inspired on the 'Bloggify/github-calendar' library
function createGitCalendar() {
  const FULL_MONTHS = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
        ABBR_MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

  // Function that transforms a date into string in an abbreviation format
  // eg: 'Dec 1, 2020'
  function dateAbbrString(date) {
    return `${ABBR_MONTHS[date.getUTCMonth()]} ${date.getUTCDate()}, ${date.getFullYear()}`;
  }

  // Function that transforms a date into string in a full format
  // eg: 'December 1'
  function dateFullString(date) {
    return `${FULL_MONTHS[date.getUTCMonth()]} ${date.getUTCDate()}`;
  }

  // Function that, on hover, adds tooltips to each calendar day
  function addTooltips(container) {
    const tooltip = document.createElement("div"),
          calendarDays = document.querySelectorAll('rect.day');

    // Add the tooltip to the document
    tooltip.classList.add("day-tooltip");
    container.appendChild(tooltip);

    // Add a tooltip for each calendar day
    for (let i = 0; i < calendarDays.length; i++) {
      // Uppon hovering over a calendar day, show the tooltip with the relevant day information
      calendarDays[i].addEventListener("mouseenter", (event) => {
        let dayCount = event.target.getAttribute("data-count");

        // Quantify the number of contributions as a string
        if (dayCount === "0") {
          dayCount = "No contributions";
        } else if (dayCount === "1") {
          dayCount = "1 contribution";
        } else {
          dayCount = `${dayCount} contributions`;
        }

        const dateText = dateAbbrString(new Date(event.target.getAttribute("data-date")));

        // Add the text to the tooltip and make it visible
        tooltip.innerHTML = `<strong>${dayCount}</strong> on ${dateText}`;
        tooltip.classList.add("is-visible");

        const size = event.target.getBoundingClientRect(),
              leftPos = size.left + window.pageXOffset - tooltip.offsetWidth / 2 + size.width / 2,
              topPos = size.bottom + window.pageYOffset - tooltip.offsetHeight - 2 * size.height;

        // Position the tooltip at the top of the respective calendar day
        tooltip.style.top = `${topPos}px`;
        tooltip.style.left = `${leftPos}px`;
      });

      // Uppon taking the mouse off a calendar day, hide the tooltip
      calendarDays[i].addEventListener("mouseleave", () => {
        tooltip.classList.remove("is-visible");
      });
    }
  }

  fetch(`https://api.bloggify.net/gh-calendar/?username=edgareu1`)
  .then(response => response.text())
  .then(response => {
    let calendarHelper = document.createElement("div"),
        container = document.querySelector('.calendar');

    // Remove the unnecessary elements
    calendarHelper.innerHTML = response;
    calendarHelper.querySelector('h2').remove();
    calendarHelper.querySelector('#user-activity-overview').remove();

    let calendar = calendarHelper.querySelector(".js-yearly-contributions");

    // Improve the 'more details' anchor content
    const modeDetails = 'For more details please check my <a href="https://github.com/edgareu1" target="blank" class="inline-anchor">GitHub profile</a>';
    calendar.querySelector(".contrib-footer .float-left").innerHTML = modeDetails;

    // If the calendar does not load, try again
    if (calendar.querySelector("include-fragment")) {
      setTimeout(createGitCalendar(), 500);

    // Otherwise improve its style and content
    } else {
      let calendarSVG = calendar.querySelector("svg.js-calendar-graph-svg"),
          width = calendarSVG.getAttribute("width"),
          height = calendarSVG.getAttribute("height");

      // Make the calendar style responsive
      calendarSVG.removeAttribute("height");
      calendarSVG.setAttribute("width", "100%");
      calendarSVG.setAttribute("viewBox", "0 0 " + width + " " + height);

      let calendarDays = calendar.querySelectorAll('rect.day'),
          dayCount,
          dayColor,
          dayCountSum = 0,
          activeDays = 0,
          streakDays = 0,
          inStreak = true,
          dateStreakBegin,
          dateStreakEnd;

      // Quantify the statistical variables
      // Iterate over the calendar days from the end to the beginning
      for (let i = calendarDays.length - 1; i >= 0; i--) {
        dayCount = parseInt(calendarDays[i].getAttribute('data-count'));

        if (dayCount > 0) {
          dayCountSum += dayCount;
          activeDays++;
        }

        // Choose the color of the day
        if (dayCount == 0) {
          dayColor = 'var(--color-calendar-graph-day-bg)';
        } else if (dayCount <= 8) {
          dayColor = 'var(--color-calendar-graph-day-L1-bg)';
        } else if (dayCount <= 16) {
          dayColor = 'var(--color-calendar-graph-day-L2-bg)';
        } else if (dayCount <= 24) {
          dayColor = 'var(--color-calendar-graph-day-L3-bg)';
        } else {
          dayColor = 'var(--color-calendar-graph-day-L4-bg)';
        }

        // Add colors to the calendar days
        calendarDays[i].setAttribute('fill', dayColor);

        // If not in a streak, skip the quantifying of the streak statistical variables
        if (!inStreak) { continue; }

        if (dayCount > 0) {
          if (dateStreakEnd  === undefined) {
            dateStreakEnd = new Date(calendarDays[i].getAttribute("data-date"));
          }
          streakDays++;

        } else if (i < calendarDays.length - 2) {
          inStreak = false;
          dateStreakBegin = new Date(calendarDays[i + 1].getAttribute("data-date"));
        }
      }

      const calendarDatePeriod = dateAbbrString(new Date(calendarDays[0].getAttribute("data-date")))
                                 + ' - '
                                 + dateAbbrString(new Date(calendarDays[calendarDays.length - 1].getAttribute("data-date")));

      // Create the first 'contribution-stats' column
      createContribContent({
        first: 'Contributions in the last year',
        second: `${dayCountSum} total`,
        third: calendarDatePeriod,
        firstColumn: true
      });

      // Create the second 'contribution-stats' column
      createContribContent({
        first: 'Average daily contributions',
        second: Number.parseFloat(dayCountSum / activeDays).toFixed(1),
        third: calendarDatePeriod
      });

      // Create the third 'contribution-stats' column
      createContribContent({
        first: 'Current streak',
        second: `${streakDays} days`,
        third: `${dateFullString(dateStreakBegin)} - ${dateFullString(dateStreakEnd)}`
      });

      container.innerHTML = calendar.innerHTML; // Add the calendar to the document
      addTooltips(container);                   // Add tooltips to the calendar

      // Function that adds a 'contribution-stats' column to the bottom of the calendar
      function createContribContent({first, second, third, firstColumn} = {}) {
        const calendarCol = document.createElement("div");
        calendarCol.classList = 'contrib-column table-column';

        if (firstColumn) { calendarCol.classList.add('contrib-column-first'); }

        calendarCol.innerHTML = `<span class="text-muted">${first}</span>
                                 <span class="contrib-number">${second}</span>
                                 <span class="text-muted">${third}</span>`;

        calendar.appendChild(calendarCol);
      }
    }
  });
}

export { createGitCalendar }
