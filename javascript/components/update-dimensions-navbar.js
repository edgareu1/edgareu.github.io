function updateDimensionsNavbar(linksList, moreLink) {
  if (window.innerWidth <= 750) {
    linksList.classList.add('content-hidden');
    moreLink.style.display = 'flex';
  } else {
    linksList.classList.remove('content-hidden', 'show');
    moreLink.style.display = 'none';
  }
}
