// Function that creates the git calendar
// Inspired on the 'Bloggify/github-calendar' repository
// at https://github.com/Bloggify/github-calendar
function createGitCalendar() {
  // Variables:
  //   fullMonths:        Ordered list of the full months names
  //   abbrMonths:        Ordered list of the abbreviated months names
  //   calendarContainer: DOM container for the calendar
  //   calendarHelper:    Create a calendar mokup before adding it into the DOM
  //     Using a div as a container because the 'innerHTML' method is not
  //     supported with a fragment
  const fullMonths = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ],
    abbrMonths = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
    calendarContainer = document.querySelector(".calendar");
  let calendarHelper = document.createElement("div");

  // Fecth the calendar data, edit and display it, and then add the tooltip
  fetch(`https://api.bloggify.net/gh-calendar/?username=edgareu1`)
    .then((response) => response.text())
    .then((response) => {
      calendarHelper.innerHTML = response;
      // Select the relevant element
      calendarHelper = calendarHelper.querySelector(".js-yearly-contributions");
      // Remove the unnecessary elements
      calendarHelper.querySelector("h2").remove();
      calendarHelper.querySelector("#user-activity-overview").remove();
      // Personalize the 'more details' anchor content
      const modeDetails = `For more details please check my
        <a href="https://github.com/edgareu1"
          target="blank" title="GitHub profile - Source code repository"
          class="inline-anchor">
          <span class="hover-underline closer-underline">GitHub profile</span>
        </a>`;
      calendarHelper.querySelector(
        ".contrib-footer .float-left"
      ).innerHTML = modeDetails;

      // If the calendar did not load, try it again
      if (calendarHelper.querySelector("include-fragment")) {
        setTimeout(createGitCalendar(), 500);
        // Otherwise improve its content and style
      } else {
        // Make the calendar element responsive
        makeCalendarResponsive();
        // Add statistic information to the calendar
        addCalendarStats();
        // Add the tooltip animation to the calendar
        addTooltip();
      }
    })
    .catch((error) => {
      console.log("There was an error loading the GitHub calendar: ", error);
      // If there was an error, try it again
      setTimeout(createGitCalendar(), 2000);
    });

  // Function that transforms a date into a string in an abbreviation format
  // eg: 'Dec 1, 2020'
  function dateAbbrString(date) {
    return `${
      abbrMonths[date.getUTCMonth()]
    } ${date.getUTCDate()}, ${date.getFullYear()}`;
  }

  // Function that transforms a date into a string in a full format
  // eg: 'December 1'
  function dateFullString(date) {
    return `${fullMonths[date.getUTCMonth()]} ${date.getUTCDate()}`;
  }

  // Function that turns the calendar style responsive
  function makeCalendarResponsive() {
    // Variables:
    //   calendarSVG:       SVG element containing the calendar info
    //   calendarSVGWidth:  Width of the calendarSVG element
    //   calendarSVGHeight: Height of the calendarSVG element
    const calendarSVG = calendarHelper.querySelector(".js-calendar-graph-svg"),
      calendarSVGWidth = calendarSVG.getAttribute("width"),
      calendarSVGHeight = calendarSVG.getAttribute("height");

    // Make the calendar element responsive
    calendarSVG.removeAttribute("height");
    calendarSVG.setAttribute("width", "100%");
    calendarSVG.setAttribute(
      "viewBox",
      "0 0 " + calendarSVGWidth + " " + calendarSVGHeight
    );
  }

  // Function that adds statistic information to the calendar
  function addCalendarStats() {
    // Variables:
    //   calendarDays:    Day elements on the calendar
    //   dayCount:        Number of contributions in the day
    //   dayColor:        Color to give the day element
    //   dayCountSum:     Sum of the contributions made in the year
    //   activeDays:      Number of days contributions were made
    //   streakDays:      Number of days in the current streak
    //   inStreak:        Boolean to identify if the current streak still goes
    //   dateStreakBegin: Date of when the current streak begins
    //   dateStreakEnd:   Date of when the current streak ends
    const calendarDays = calendarHelper.querySelectorAll("rect.day");
    let dayCount,
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
      // Get the number of contributions of the day
      dayCount = parseInt(calendarDays[i].getAttribute("data-count"));
      if (dayCount > 0) {
        dayCountSum += dayCount;
        activeDays++;
      }
      // Choose the color of the day
      if (dayCount === 0) {
        dayColor = "var(--color-calendar-graph-day-bg)";
      } else if (dayCount <= 8) {
        dayColor = "var(--color-calendar-graph-day-L1-bg)";
      } else if (dayCount <= 16) {
        dayColor = "var(--color-calendar-graph-day-L2-bg)";
      } else if (dayCount <= 24) {
        dayColor = "var(--color-calendar-graph-day-L3-bg)";
      } else {
        dayColor = "var(--color-calendar-graph-day-L4-bg)";
      }
      // Add the color to the calendar day
      calendarDays[i].setAttribute("fill", dayColor);
      // If not in a streak, skip the quantification of the streak variables
      if (!inStreak) {
        continue;
      }
      // Quantify the streak variables
      if (dayCount > 0) {
        if (dateStreakEnd === undefined) {
          dateStreakEnd = new Date(calendarDays[i].getAttribute("data-date"));
        }
        streakDays++;
        // One day as an error margin; As I usually only commit at the end
        // of the day, that would mean the streak would be zero if I had yet
        // to commited that day
      } else if (i < calendarDays.length - 1) {
        inStreak = false;
        dateStreakBegin = new Date(
          calendarDays[i + 1].getAttribute("data-date")
        );
      }
    }

    // Date period inside of which the contributions were made
    const calendarDatePeriod =
      dateAbbrString(new Date(calendarDays[0].getAttribute("data-date"))) +
      " - " +
      dateAbbrString(
        new Date(
          calendarDays[calendarDays.length - 1].getAttribute("data-date")
        )
      );

    // Create and append into the DOM the first 'contribution-stats' column
    createContribContent({
      first: "Contributions in the last year",
      second: `${dayCountSum} total`,
      third: calendarDatePeriod,
      firstColumn: true,
    });
    // Create and append into the DOM the second 'contribution-stats' column
    createContribContent({
      first: "Average daily contributions",
      second: Number.parseFloat(dayCountSum / activeDays).toFixed(1),
      third: calendarDatePeriod,
    });
    // Create and append into the DOM the third 'contribution-stats' column
    createContribContent({
      first: "Current streak",
      second: `${streakDays} days`,
      third: `${dateFullString(dateStreakBegin)} - ${dateFullString(
        dateStreakEnd
      )}`,
    });
    // Add the calendar to the DOM
    calendarContainer.innerHTML = calendarHelper.innerHTML;
  }

  // Function that adds a 'contribution-stats' column to the bottom
  // of the calendar
  // Arguments (inside an object):
  //   first:       Text to put in the first span
  //   second:      Text to put in the second span
  //   third:       Text to put in the third span
  //   firstColumn: Boolean identifying if it is the first column
  function createContribContent({ first, second, third, firstColumn } = {}) {
    // Create a column to hold the information
    const calendarCol = document.createElement("div");

    // Add the relevant classes to the column
    calendarCol.classList = "contrib-column table-column";
    if (firstColumn) {
      calendarCol.classList.add("contrib-column-first");
    }
    // Add the relevant content
    calendarCol.innerHTML = `<span class="text-muted">${first}</span>
      <span class="contrib-number">${second}</span>
      <span class="text-muted">${third}</span>`;
    // Append the column into the calendar
    calendarHelper.appendChild(calendarCol);
  }

  // Function that, on hover, adds tooltips to each calendar day
  function addTooltip() {
    // Variables:
    //   tooltip:      Create an element to hold the tooltip
    //   calendarDays: List of the days to which add the tooltip
    const tooltip = document.createElement("div"),
      calendarDays = document.querySelectorAll("rect.day");

    tooltip.classList.add("day-tooltip");
    // Add the tooltip to the DOM
    calendarContainer.appendChild(tooltip);

    // Add a tooltip to each calendar day
    for (let i = 0; i < calendarDays.length; i++) {
      // Uppon hovering over a calendar day, show the tooltip with the relevant
      // information
      calendarDays[i].addEventListener("mouseenter", (event) => {
        // Variables:
        //   dateText: Date of the day abbreviated
        //   dayCount: Number of contributions of the day
        const dateText = dateAbbrString(
          new Date(event.target.getAttribute("data-date"))
        );
        let dayCount = event.target.getAttribute("data-count");

        // Quantify the number of contributions as a string
        if (dayCount === "0") {
          dayCount = "No contributions";
        } else if (dayCount === "1") {
          dayCount = "1 contribution";
        } else {
          dayCount = `${dayCount} contributions`;
        }
        // Add the text to the tooltip and make it visible
        tooltip.innerHTML = `<strong>${dayCount}</strong> on ${dateText}`;
        tooltip.classList.add("is-visible");

        // Variables:
        //   size:    Size and position of the day element
        //   topPos:  Distance of the tooltip from the top of the page
        //   leftPos: Distance of the tooltip from the left of the page
        const size = event.target.getBoundingClientRect(),
          topPos =
            size.bottom +
            window.pageYOffset -
            tooltip.offsetHeight -
            2 * size.height,
          leftPos =
            size.left +
            window.pageXOffset -
            tooltip.offsetWidth / 2 +
            size.width / 2;

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
}

export { createGitCalendar };
