function createGitCalendar() {
  fetch(`https://api.bloggify.net/gh-calendar/?username=edgareu1`)
    .then(response => response.text())
    .then(response => {
      document.getElementById('modal-contributions').innerHTML = response;
    })
    .then(function() {
      var modalContributions = document.getElementById('modal-contributions');
      var gitCalendarTitle = modalContributions.querySelector('.js-yearly-contributions h2');
      var gitCalendarContent = modalContributions.querySelector('.js-yearly-contributions .graph-before-activity-overview');

      modalContributions.innerHTML = '';
      modalContributions.appendChild(gitCalendarTitle);
      modalContributions.appendChild(gitCalendarContent);
    });
}

export { createGitCalendar };
