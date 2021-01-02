// Function that creates the code typing animation on the app banner
function typeBannerCode() {
  var codeContainer = document.querySelector('.banner-code-container');

  // The codeContent variable holds the simplified HTML code to display
  // <c> represents a code element
  // <s> represents a HTML span element
  // <s1> is a span of color: white
  // <s2> is a span of color: rgba(140, 220, 254, 1)
  // <s3> is a span of color: rgba(30,  100, 200, 1)
  // <s4> is a span of color: rgba(78,  188, 124, 1)
  // <s5> is a span of color: rgba(220, 220, 139, 1)
  // <s6> is a span of color: rgba(216, 128, 92,  1)
  // <k> represents a comment
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
      endStringIndex = 0;

  codeContent = codeContent.join('');

  // Function that types a certain character of the codeContent variable (depending on the position variable)
  // It recursively calls itself to type the whole codeContent
  function typeCode() {
    // If the next character is an element...
    if (codeContent[position] === '<') {
      typeWaitTime = 0;

      // If it is a code element opening...
      if (codeContent[position + 1] === 'c') {
        addTerminalPrefix();

        // Add a code element to the codeContainer
        newCode = document.createElement('code');
        newPar.appendChild(newCode);

      // If it is a span element opening...
      } else if (codeContent[position + 1] === 's') {
        newSpan = document.createElement('span');
        newSpan.className = `color${codeContent[position + 2]}`;
        newCode.appendChild(newSpan);
        position += 4;

      // If it is a comment element opening...
      // Type the whole comment
      } else if (codeContent[position + 1] === 'k') {
        newPar = document.createElement('p');
        subString = codeContent.substring(position + 3);
        endStringIndex = subString.indexOf('<');
        newPar.innerHTML += subString.slice(0, endStringIndex);
        codeContainer.appendChild(newPar);
        position += 3 + endStringIndex;

      // If it is a closing element...
      } else if (codeContent[position + 1] === '/') {
        position += 4;
      }

    // Otherwise add a character to the HTML
    } else {
      typeWaitTime = (Math.random() * typeSpeed) + 20;
      newSpan.innerHTML += codeContent[position];
      position += 1;
    }

    // If the code typing animation is still not finished, recursively call the function for the
    // next character (with a delay to simulate the typing animation)
    if (position < codeContent.length - 1) {
      setTimeout(typeCode, typeWaitTime);

    // Otherwise, add the blinking caret animation in a new line
    } else {
      addTerminalPrefix();
      addBlinkCaret();
    }
  };

  // Function that adds a new line to the codeContainer with a terminal prefix
  function addTerminalPrefix() {
    newPar = document.createElement('p');
    codeContainer.appendChild(newPar);
    position += 3;

    newSpan = document.createElement('span');
    newSpan.className = 'color1';
    newSpan.innerHTML = '> ';
    newPar.appendChild(newSpan);
  }

  // Function that adds a blinking caret to the last line of the codeContainer
  function addBlinkCaret() {
    newPar.style.animation = 'blink-caret 1s step-end infinite';  // Blinking animation in the stylesheets/components
    newSpan.classList.add('blink-caret');
  }

  // Function that removes the blinking caret
  function removeBlinkCaret() {
    newPar.style.animation = '';
    newSpan.classList.remove('blink-caret');
  }

  addTerminalPrefix();  // Add a terminal prefix to the codeContainer
  addBlinkCaret();      // Add the blinking caret animation

  // After 1.4s begin the typing animation
  setTimeout(() => {
    removeBlinkCaret(); // Remove the blinking caret animation

    // Add a code element to the codeContainer (position already at +3)
    newCode = document.createElement('code');
    newPar.appendChild(newCode);

    typeCode(); // Create the code typing animation
  }, 1400);
}

export { typeBannerCode };
