// Function that creates the git calendar
// Inspired on the 'Bloggify/github-calendar' library
// at https://github.com/Bloggify/github-calendar
function createGitCalendar() {
  // Variables:
  //   fullMonths:        Ordered list of the full months names
  //   abbrMonths:        Ordered list of the abbreviated months names
  //   calendarContainer: DOM container for the calendar
  const fullMonths = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
    abbrMonths = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    calendarContainer = document.querySelector('.calendar');

  // Fecth the calendar data, edit and display it, and then add the tooltip
  fetch(`https://api.bloggify.net/gh-calendar/?username=edgareu1`)
  .then(response => response.text())
  .then(response => {
    // Variable to hold the calendar before inserting it into the DOM
    // Using a div as a container because with a fragment the 'innerHTML'
    // method is not supported
    let calendar = document.createElement('div');

    calendar.innerHTML = response;
    // Select the relevant elements
    calendar = calendar.querySelector('.js-yearly-contributions');
    // Remove the unnecessary elements
    calendar.querySelector('h2').remove();
    calendar.querySelector('#user-activity-overview').remove();
    // Personalize the 'more details' anchor content
    const modeDetails =
      `For more details please check my
      <a href="https://github.com/edgareu1"
         target="blank" title="GitHub profile - Source code repository"
         class="inline-anchor">
        <span class="hover-underline closer-underline">GitHub profile</span>
      </a>`;
    calendar.querySelector('.contrib-footer .float-left').innerHTML = modeDetails;

    // If the calendar did not load, try it again
    if (calendar.querySelector('include-fragment')) {
      setTimeout(createGitCalendar(), 500);
    // Otherwise improve its content and style
    } else {
      // Variables:
      //   calendarSVG:          SVG element containing the calendar info
      //   calendarDays:         Day elements on the SVG element
      //   calendarSVGWidth:     Width of the calendarSVG element
      //   calendarSVGHeight:    Height of the calendarSVG element
      //   dayCount, dayColor... Variables used to quantify the calendar stats
      const calendarSVG = calendar.querySelector('svg.js-calendar-graph-svg'),
        calendarDays = calendarSVG.querySelectorAll('rect.day'),
        calendarSVGWidth = calendarSVG.getAttribute('width'),
        calendarSVGHeight = calendarSVG.getAttribute('height');
      let dayCount,
        dayColor,
        dayCountSum = 0,
        activeDays = 0,
        streakDays = 0,
        inStreak = true,
        dateStreakBegin,
        dateStreakEnd;

      // Make the calendar style responsive
      calendarSVG.removeAttribute('height');
      calendarSVG.setAttribute('width', '100%');
      calendarSVG.setAttribute('viewBox', '0 0 ' + calendarSVGWidth + ' ' + calendarSVGHeight);

      // Quantify the statistical variables
      // Iterate over the calendar days from the end to the beginning
      for (let i = calendarDays.length - 1; i >= 0; i--) {
        dayCount = parseInt(calendarDays[i].getAttribute('data-count'));
        if (dayCount > 0) {
          dayCountSum += dayCount;
          activeDays++;
        }
        // Choose the color of the day
        if (dayCount === 0) {
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
        // Add colors to the calendar day
        calendarDays[i].setAttribute('fill', dayColor);
        // If not in a streak, skip the quantifying of the streak variable
        if (!inStreak) { continue; }
        // Quantify the streak variable
        if (dayCount > 0) {
          if (dateStreakEnd  === undefined) {
            dateStreakEnd = new Date(calendarDays[i].getAttribute('data-date'));
          }
          streakDays++;
          // Give one day as a error margin
          // I usually only commit at the end each the day; That would mean the
          // streak would be zero if I had yet to commited that day
        } else if (i < calendarDays.length - 1) {
          inStreak = false;
          dateStreakBegin = new Date(calendarDays[i + 1].getAttribute('data-date'));
        }
      }

      // Date period inside of which the contributions were made
      const calendarDatePeriod =
        dateAbbrString(new Date(calendarDays[0].getAttribute('data-date')))
        + ' - '
        + dateAbbrString(new Date(calendarDays[calendarDays.length - 1].getAttribute('data-date')));

      // Create and append into the DOM the first 'contribution-stats' column
      createContribContent({
        first: 'Contributions in the last year',
        second: `${dayCountSum} total`,
        third: calendarDatePeriod,
        firstColumn: true
      });
      // Create and append into the DOM the second 'contribution-stats' column
      createContribContent({
        first: 'Average daily contributions',
        second: Number.parseFloat(dayCountSum / activeDays).toFixed(1),
        third: calendarDatePeriod
      });
      // Create and append into the DOM the third 'contribution-stats' column
      createContribContent({
        first: 'Current streak',
        second: `${streakDays} days`,
        third: `${dateFullString(dateStreakBegin)} - ${dateFullString(dateStreakEnd)}`
      });
      // Add the calendar into the document
      calendarContainer.innerHTML = calendar.innerHTML;
      // Add the tooltips animation to the calendar
      addTooltips();

      // Function that adds a 'contribution-stats' column to the bottom
      // of the calendar
      // Arguments (inside an object):
      //   first:       Text to put in the first span
      //   second:      Text to put in the second span
      //   third:       Text to put in the third span
      //   firstColumn: Boolean identifying if this is the first column
      function createContribContent({first, second, third, firstColumn} = {}) {
        // Create a column to hold the information
        const calendarCol = document.createElement('div');

        // Add the relevant classes to the column
        calendarCol.classList = 'contrib-column table-column';
        if (firstColumn) { calendarCol.classList.add('contrib-column-first'); }
        // Add the relevant content
        calendarCol.innerHTML =
          `<span class="text-muted">${first}</span>
          <span class="contrib-number">${second}</span>
          <span class="text-muted">${third}</span>`;
        // Append the column into the calendar
        calendar.appendChild(calendarCol);
      }
    }
  });

  // Function that transforms a date into string in an abbreviation format
  // eg: 'Dec 1, 2020'
  function dateAbbrString(date) {
    return `${abbrMonths[date.getUTCMonth()]} ${date.getUTCDate()}, ${date.getFullYear()}`;
  }

  // Function that transforms a date into string in a full format
  // eg: 'December 1'
  function dateFullString(date) {
    return `${fullMonths[date.getUTCMonth()]} ${date.getUTCDate()}`;
  }

  // Function that, on hover, adds tooltips to each calendar day
  function addTooltips() {
    // Variables:
    //   tooltip:      Create an element to hold the tooltip
    //   calendarDays: List of the days to add the event listener to
    const tooltip = document.createElement('div'),
      calendarDays = document.querySelectorAll('rect.day');

    // Add the tooltip to the document
    tooltip.classList.add('day-tooltip');
    calendarContainer.appendChild(tooltip);

    // Add a tooltip for each calendar day
    for (let i = 0; i < calendarDays.length; i++) {
      // Uppon hovering over a calendar day, show the tooltip with the relevant
      // day information
      calendarDays[i].addEventListener('mouseenter', (event) => {
        const dateText = dateAbbrString(new Date(event.target.getAttribute('data-date')));
        let dayCount = event.target.getAttribute('data-count');

        // Quantify the number of contributions as a string
        if (dayCount === '0') {
          dayCount = 'No contributions';
        } else if (dayCount === '1') {
          dayCount = '1 contribution';
        } else {
          dayCount = `${dayCount} contributions`;
        }
        // Add the text to the tooltip and make it visible
        tooltip.innerHTML = `<strong>${dayCount}</strong> on ${dateText}`;
        tooltip.classList.add('is-visible');

        const size = event.target.getBoundingClientRect(),
          leftPos = size.left + window.pageXOffset - tooltip.offsetWidth / 2 + size.width / 2,
          topPos = size.bottom + window.pageYOffset - tooltip.offsetHeight - 2 * size.height;

        // Position the tooltip at the top of the respective calendar day
        tooltip.style.top = `${topPos}px`;
        tooltip.style.left = `${leftPos}px`;
      });

      // Uppon taking the mouse off a calendar day, hide the tooltip
      calendarDays[i].addEventListener('mouseleave', () => {
        tooltip.classList.remove('is-visible');
      });
    }
  }
}

export { createGitCalendar }
