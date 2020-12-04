// Function that creates the code typing animation on the app banner
function typeBannerCode() {
  var codeContainer = document.querySelector('.banner-code-container');

  // The codeContent variable holds the HTML code to display
  var codeContent = '<p><span class="color3">const </span><span class="color2">edgar </span><span class="color1">= </span><span class="color3">new </span><span class="color4">Person</span><span class="color1">(</span><span class="color7">"Edgar"</span><span class="color1">) ;</span></p><p><span class="color2">edgar</span><span class="color1">.</span><span class="color6">greetings</span><span class="color1">( ) ;</span></p><p><span class="color5">// Hi, I\'m Edgar and this is my life!</span></p><p><span class="color2">edgar</span><span class="color1">.</span><span class="color6">beginBachelorDegree</span><span class="color1">(</span><span class="color7">"Management"</span><span class="color1">) ;</span></p><p><span class="color2">edgar</span><span class="color1">.</span><span class="color6">addSkills</span><span class="color1">(</span><span class="color7">"Economics"</span><span class="color1">, </span><span class="color7">"Mathematics"</span><span class="color1">, </span><span class="color7">"Business Law"</span><span class="color1">, </span><span class="color7">"Marketing"</span><span class="color1">) ;</span></p><p><span class="color2">edgar</span><span class="color1">.</span><span class="color6">addAcademicAward</span><span class="color1">(</span><span class="color7">"3% Best Student Award"</span><span class="color1">) ;</span></p><p><span class="color2">edgar</span><span class="color1">.</span><span class="color6">finishBachelorDegree</span><span class="color1">( ) ;</span></p><p><span class="color5">// Edgar finished his bachelor\'s degree in Management in the 3% top students!</span></p><p><span class="color2">edgar</span><span class="color1">.</span><span class="color6">beginMasterDegree</span><span class="color1">(</span><span class="color7">"Finance"</span><span class="color1">) ;</span></p><p><span class="color2">edgar</span><span class="color1">.</span><span class="color6">addSkills</span><span class="color1">(</span><span class="color7">"Finance"</span><span class="color1">, </span><span class="color7">"Financial Analysis"</span><span class="color1">, </span><span class="color7">"Accounting"</span><span class="color1">, </span><span class="color7">"Tax Law"<span class="color1">) ;</span></p><p><span class="color2">edgar</span><span class="color1">.</span><span class="color6">beginWorking</span><span class="color1">(</span><span class="color7">"Accounting Office"</span><span class="color1">) ;</span></p><p><span class="color2">edgar</span><span class="color1">.</span><span class="color6">addProfessionalAchievement</span><span class="color1">(</span><span class="color7">"Automated accounting process"</span><span class="color1">) ;</span></p><p><span class="color2">edgar</span><span class="color1">.</span><span class="color6">stopWorking</span><span class="color1">( ) ;</span></p><p><span class="color5">// Edgar worked 1.5 years as an accountant, having automated the accounting process!</span></p><p><span class="color2">edgar</span><span class="color1">.</span><span class="color6">addAcademicAward</span><span class="color1">(</span><span class="color7">"Best Master\'s Student"</span><span class="color1">) ;</span></p><p><span class="color2">edgar</span><span class="color1">.</span><span class="color6">finishMasterDegree</span><span class="color1">( ) ;</span></p><p><span class="color5">// Edgar finished his master\'s degree in Finance as the best student!</span></p><p><span class="color2">edgar</span><span class="color1">.</span><span class="color6">beginTraveling</span><span class="color1">(</span><span class="color7">"Europe"</span><span class="color1">) ;</span></p><p><span class="color5">// Edgar began a gap year of travelling by Europe!</span></p><p><span class="color6">covidAppears</span><span class="color1">( ) ;</span></p><p><span class="color5">// Edgar is forced to stop travelling!</span></p><p><span class="color2">edgar</span><span class="color1">.</span><span class="color6">acessLifeGoals</span><span class="color1">( ) ;</span></p><p><span class="color5">// Edgar is acessing his life goals...</span></p><p><span class="color5">// Edgar decided to change his life and learn how to code!</span></p><p><span class="color2">edgar</span><span class="color1">.</span><span class="color6">beginCodingBootcamp</span><span class="color1">( ) ;</span></p><p><span class="color2">edgar</span><span class="color1">.</span><span class="color6">addSkills</span><span class="color1">(</span><span class="color7">"Ruby"</span><span class="color1">, </span><span class="color7">"Ruby on Rails"</span><span class="color1">, </span><span class="color7">"JavaScript"</span><span class="color1">, </span><span class="color7">"HTML"</span><span class="color1">) ;</span></p><p><span class="color2">edgar</span><span class="color1">.</span><span class="color6">createProjects</span><span class="color1">(</span><span class="color7">"Artisan"</span><span class="color1">, </span><span class="color7">"Hook"</span><span class="color1">) ;</span></p><p><span class="color2">edgar</span><span class="color1">.</span><span class="color6">finishCodingBootcamp</span><span class="color1">( ) ;</span></p><p><span class="color5">// Edgar finished the coding bootcamp having built several minor apps and 2 major ones!</span></p><p><span class="color2">edgar</span><span class="color1">.</span><span class="color6">farewell</span><span class="color1">( ) ;</span></p><p><span class="color5">// This was my life!</span></p><p><span class="color5">// For more details check the curriculum section!</span></p>',
      position = 0,
      typeSpeed = 50,
      typeWaitTime = 0,
      newPar = 0,
      newSpan = 0,
      subString = 0,
      endString = 0;

  // Function that types a certain character of the codeContent variable (depending on the position variable)
  // It recursively calls itself to write the whole codeContent
  function typeCode() {
    // If the next character is an element...
    if (codeContent[position] == "<") {
      typeWaitTime = 0;

      // If it is a paragraph opening...
      if (codeContent[position + 1] == "p") {
        newPar = document.createElement("p");
        codeContainer.appendChild(newPar);
        position += 3;

      // If it is a span opening...
      } else if (codeContent[position + 1] == "s") {
        newSpan = document.createElement("span");
        newSpan.className = `color${codeContent[position + 18]}`;
        newPar.appendChild(newSpan);
        position += 21;

      // If it is a closing element...
      } else if (codeContent[position + 1] == "/") {
        // If it is a paragraph...
        if (codeContent[position + 2] == "p") {
          position += 4;

        // If it is a span...
        } else if (codeContent[position + 2] == "s") {
          position += 7;
        }
      }

    // Otherwise add a character to the HTML
    } else {
      typeWaitTime = (Math.random() * typeSpeed) + 20;

      // If the element is a comment, type the whole comment
      if (codeContent.slice(position, position + 2) == "//") {
        subString = codeContent.substring(position);
        endString = subString.indexOf("<");
        newSpan.innerHTML += subString.slice(0, endString);
        position += endString;

      // Otherwise type a single character
      } else {
        newSpan.innerHTML += codeContent[position];
        position += 1;
      }
    }

    // If the HTML written is still not finished, recursively call the function for the next character (with a delay to
    // simulate the typing animation)
    if (position < codeContent.length - 1) {
      setTimeout(typeCode, typeWaitTime);

    // Otherwise, add the blinking caret animation in a new line
    } else {
      addBlinkCaret();
    }
  };

  // Function that adds a blinking caret (in a new line) to the codeContainer
  function addBlinkCaret() {
    newPar = document.createElement("p");
    newPar.style.animation = 'blink-caret 1s step-end infinite';  // Blinking animation in the stylesheets/components
    newPar.style.color = 'transparent';
    newPar.innerHTML = '.';

    // Append it to the codeContainer
    codeContainer.appendChild(newPar);
  }

  addBlinkCaret();  // Add the blinking caret animation

  // After 3.5s begin the typing animation
  setTimeout(() => {
    codeContainer.innerHTML = '';
    typeCode();
  }, 1400);
}

export { typeBannerCode };
