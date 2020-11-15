// Function that creates the git calendar using the 'Bloggify/github-calendar' library
// Added a small change to personalize it
async function createGitCalendar() {
  // Create the git calendar
  const moreInfo = 'For more details please check <a href="https://github.com/edgareu1" target="blank">@edgareu1</a>';
  await GitHubCalendar(".calendar", "edgareu1", { responsive: true, tooltips: true, summary_text: moreInfo });

  // Make the 'Current streak' equal to the 'Longest streak'
  // Should wait for the git calendar to be created (previous step)
  // As I contribute everyday but usually only pull at the end of the day, it could present misleading information
  let contribNumbers = document.querySelectorAll('.calendar .contrib-number');
  contribNumbers[2].innerHTML = contribNumbers[1].innerHTML;
}

export { createGitCalendar };
