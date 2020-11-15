async function createGitCalendar() {
  const moreInfo = 'For more details please check <a href="https://github.com/edgareu1" target="blank">@edgareu1</a>';
  await GitHubCalendar(".calendar", "edgareu1", { responsive: true, tooltips: true, summary_text: moreInfo });

  let contribNumbers = document.querySelectorAll('.calendar .contrib-number');
  contribNumbers[2].innerHTML = contribNumbers[1].innerHTML;
}

export { createGitCalendar };
