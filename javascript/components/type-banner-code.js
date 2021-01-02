// Function that creates the code typing animation on the app banner
function typeBannerCode() {
  var codeContainer = document.querySelector('.banner-code-container');

  // The codeContent variable holds the HTML code to display
  var codeContent = [
        '<c><s3>const </s><s2>edgar </s><s1>= </s><s3>new </s><s4>Person</s><s1>(</s><s6>"Edgar"</s><s1>) ;</s></c>',
        '<c><s2>edgar</s><s1>.</s><s5>greetings</s><s1>( ) ;</s></c>',
        '<k>Hi, I\'m Edgar and this is my life!</k>',
        '<c><s2>edgar</s><s1>.</s><s5>beginBachelorDegree</s><s1>(</s><s6>"Management"</s><s1>) ;</s></c>',
        '<c><s2>edgar</s><s1>.</s><s5>addSkills</s><s1>(</s><s6>"Economics"</s><s1>, </s><s6>"Mathematics"</s><s1>, </s><s6>"Business Law"</s><s1>, </s><s6>"Marketing"</s><s1>) ;</s></c>',
        '<c><s2>edgar</s><s1>.</s><s5>addAcademicAward</s><s1>(</s><s6>"3% Best Students"</s><s1>) ;</s></c>',
        '<c><s2>edgar</s><s1>.</s><s5>completeBachelorDegree</s><s1>( ) ;</s></c>',
        '<k>Edgar completed his bachelor\'s degree in Management in the top 3% of the students!</k>',
        '<c><s2>edgar</s><s1>.</s><s5>beginMasterDegree</s><s1>(</s><s6>"Finance"</s><s1>) ;</s></c>',
        '<c><s2>edgar</s><s1>.</s><s5>addSkills</s><s1>(</s><s6>"Finance"</s><s1>, </s><s6>"Statistics"</s><s1>, </s><s6>"Accounting"</s><s1>, </s><s6>"Tax Law"<s1>) ;</s></c>',
        '<c><s2>edgar</s><s1>.</s><s5>beginWorking</s><s1>(</s><s6>"Accounting Office"</s><s1>) ;</s></c>',
        '<c><s2>edgar</s><s1>.</s><s5>addProfessionalAchievement</s><s1>(</s><s6>"Automated accounting process"</s><s1>) ;</s></c>',
        '<c><s2>edgar</s><s1>.</s><s5>stopWorking</s><s1>( ) ;</s></c>',
        '<k>Edgar worked 1.5 years as an accountant, having automated the accounting process!</k>',
        '<c><s2>edgar</s><s1>.</s><s5>addAcademicAward</s><s1>(</s><s6>"Best Student"</s><s1>) ;</s></c>',
        '<c><s2>edgar</s><s1>.</s><s5>completeMasterDegree</s><s1>( ) ;</s></c>',
        '<k>Edgar completed his master\'s degree in Finance as the best student!</k>',
        '<c><s2>edgar</s><s1>.</s><s5>beginTraveling</s><s1>(</s><s6>"Europe"</s><s1>) ;</s></c>',
        '<k>Edgar began a gap year of travelling around Europe!</k>',
        '<c><s5>covidAppears</s><s1>( ) ;</s></c>',
        '<k>Edgar is forced to stop travelling!</k>',
        '<c><s2>edgar</s><s1>.</s><s5>acessLifeGoals</s><s1>( ) ;</s></c>',
        '<k>Edgar is acessing his life goals...</k>',
        '<k>Edgar decided to change his life and learn how to code!</k>',
        '<c><s2>edgar</s><s1>.</s><s5>beginCodingBootcamp</s><s1>( ) ;</s></c>',
        '<c><s2>edgar</s><s1>.</s><s5>addSkills</s><s1>(</s><s6>"Ruby on Rails"</s><s1>, </s><s6>"JavaScript"</s><s1>, </s><s6>"HTML"</s><s1>, </s><s6>"CSS"</s><s1>) ;</s></c>',
        '<c><s2>edgar</s><s1>.</s><s5>createProjects</s><s1>(</s><s6>"Artisan"</s><s1>, </s><s6>"Hook"</s><s1>) ;</s></c>',
        '<c><s2>edgar</s><s1>.</s><s5>completeCodingBootcamp</s><s1>( ) ;</s></c>',
        '<k>Edgar completed the bootcamp having built several minor apps and 2 major ones!</k>',
        '<c><s2>edgar</s><s1>.</s><s5>farewell</s><s1>( ) ;</s></c>',
        '<k>This was my life!</k>',
        '<k>For more details check the curriculum section!</k>'
      ],
      position = 0,
      typeSpeed = 50,
      typeWaitTime = 0,
      newPar = 0,
      newSpan = 0,
      newCode = 0,
      subString = 0,
      endString = 0;

  codeContent = codeContent.join('');

  // Function that types a certain character of the codeContent variable (depending on the position variable)
  // It recursively calls itself to write the whole codeContent
  function typeCode() {
    // If the next character is an element...
    if (codeContent[position] == "<") {
      typeWaitTime = 0;

      // If it is a paragraph opening...
      if (codeContent[position + 1] == "c") {
        addTerminalPrefix();

        newCode = document.createElement("code");
        newPar.appendChild(newCode);

      // If it is a span opening...
      } else if (codeContent[position + 1] == "s") {
        newSpan = document.createElement("span");
        newSpan.className = `color${codeContent[position + 2]}`;
        newCode.appendChild(newSpan);
        position += 4;

      } else if (codeContent[position + 1] == "k") {
        newPar = document.createElement("p");
        typeWaitTime = 0;
        subString = codeContent.substring(position + 3);
        endString = subString.indexOf("<");
        newPar.innerHTML += subString.slice(0, endString);
        position += 3 + endString;
        codeContainer.appendChild(newPar);

      // If it is a closing element...
      } else if (codeContent[position + 1] == "/") {
        position += 4;
      }

    // Otherwise add a character to the HTML
    } else {
      typeWaitTime = (Math.random() * typeSpeed) + 20;
      newSpan.innerHTML += codeContent[position];
      position += 1;
    }

    // If the HTML written is still not finished, recursively call the function for the next character (with a delay to
    // simulate the typing animation)
    if (position < codeContent.length - 1) {
      setTimeout(typeCode, typeWaitTime);

    // Otherwise, add the blinking caret animation in a new line
    } else {
      addTerminalPrefix();
      addBlinkCaret();
    }
  };

  function addTerminalPrefix() {
    newPar = document.createElement("p");
    codeContainer.appendChild(newPar);
    position += 3;

    newSpan = document.createElement("span");
    newSpan.className = 'color1';
    newSpan.innerHTML = '> ';
    newPar.appendChild(newSpan);
  }

  // Function that adds a blinking caret (in a new line) to the codeContainer
  function addBlinkCaret() {
    newPar.style.animation = 'blink-caret 1s step-end infinite';  // Blinking animation in the stylesheets/components
    newSpan.classList.add('blink-caret');
  }

  function removeBlinkCaret() {
    newPar.style.animation = '';
    newSpan.classList.remove('blink-caret');
  }

  addTerminalPrefix();
  addBlinkCaret();  // Add the blinking caret animation

  // After 1.4s begin the typing animation
  setTimeout(() => {
    removeBlinkCaret();

    newCode = document.createElement("code");
    newPar.appendChild(newCode);

    typeCode();
  }, 1400);
}

export { typeBannerCode };
