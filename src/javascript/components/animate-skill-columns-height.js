// Function that keeps the same height for the Skills section column headers
function animateSkillColumnsHeight() {
  // Array of the 3 skills column headers
  const skillsHeaders =
    document.querySelectorAll(".skills-content .skills-header");

  // Update the height of the last 2 column headers to be equal to the first;
  // The first column headers will always be the highest
  function updateHeight() {
    skillsHeaders[1].style.height = skillsHeaders[0].offsetHeight + "px";
    skillsHeaders[2].style.height = skillsHeaders[0].offsetHeight + "px";
  }

  // Update the height
  updateHeight();

  // Update the height after each window resize
  window.addEventListener("resize", () => {
    updateHeight();
  });
}

export { animateSkillColumnsHeight };
