// Function that updates the navbar dimensions
// Links will either be displayed in the navbar or in a box after pressing the show-more button
// Arguments:
//   linksList: List of the navbar links
//   moreLink:  Show-more button
function updateDimensionsNavbar(linksList, moreLink) {
  // If the users window has 750px or less of width, implement the show-more button
  if (window.innerWidth <= 750) {
    linksList.classList.add('content-hidden');
    moreLink.style.display = 'flex';

  // Otherwise, display the navbar links as a list
  } else {
    linksList.classList.remove('content-hidden', 'show');
    moreLink.style.display = 'none';
  }
}

export { updateDimensionsNavbar }
