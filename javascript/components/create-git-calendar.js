// Function that creates the git calendar using the 'Bloggify/github-calendar' library
// Added a small change to personalize it
async function createGitCalendar() {
  // Make the 'Current streak' equal to the 'Longest streak'
  // Should wait for the git calendar to be created (previous step)
  // As I contribute everyday but usually only pull at the end of the day, it could present misleading information
  const fullMonths = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

  let listDays = document.querySelectorAll('.calendar rect.day'),
      dayCount = 0,
      sum = 0,
      streak = 0,
      inStreak = true,
      dateBeginStreak,
      dateEndStreak;

  for (let i = listDays.length - 1; i >= 0; i--) {
    dayCount = parseInt(listDays[i].getAttribute('data-count'));
    sum += dayCount;

    if (!inStreak) { continue; }

    if (dayCount > 0) {
      if (dateEndStreak  === undefined) { dateEndStreak = new Date(listDays[i].getAttribute("data-date")); }
      streak++
    } else if (i < listDays.length - 2) {
      inStreak = false;
      dateBeginStreak = new Date(listDays[i + 1].getAttribute("data-date"));
    }
  }

  const contribNumbers = document.querySelectorAll('.calendar .contrib-number'),
        textMuted = document.querySelectorAll('.calendar .text-muted'),
        dateStreak = `${fullMonths[dateBeginStreak.getUTCMonth()]} ${dateBeginStreak.getUTCDate()} - ${fullMonths[dateEndStreak.getUTCMonth()]} ${dateEndStreak.getUTCDate()}`;

  contribNumbers[0].innerHTML = sum + ' total';
  contribNumbers[1].innerHTML = streak + ' days';
  contribNumbers[2].innerHTML = streak + ' days';

  textMuted[3].innerHTML = dateStreak;
  textMuted[5].innerHTML = dateStreak;
}

export { createGitCalendar };
