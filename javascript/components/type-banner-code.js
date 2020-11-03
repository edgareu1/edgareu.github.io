function typeBannerCode() {
  var codeContainer = document.querySelector('.banner-code-container');

  var codeContent = '<p><span class="color3">let </span><span class="color2">edgar </span><span class="color1">= </span><span class="color3">new </span><span class="color4">Person</span><span class="color1">(</span><span class="color2">name </span><span class="color1">= </span><span class="color7">"Edgar"</span><span class="color1">) ;</span></p><p><span class="color2">edgar</span><span class="color1">.</span><span class="color6">greeting</span><span class="color1">( ) ;</span></p><p><span class="color5">// Hi, I\'m Edgar and this is my life!</span></p><p><span class="color2">edgar</span><span class="color1">.</span><span class="color6">skipAge</span><span class="color1">(</span><span class="color8">18</span><span class="color1">) ;</span></p><p><span class="color5">// Edgar is now 18 years old!</span></p><p><span class="color2">edgar</span><span class="color1">.</span><span class="color6">beginBachelorDegree</span><span class="color1">(</span><span class="color7">"Management"</span><span class="color1">) ;</span></p><p><span class="color2">edgar</span><span class="color1">.</span><span class="color6">addSkills</span><span class="color1">(</span><span class="color7">"Economics"</span><span class="color1">, </span><span class="color7">"Mathematics"</span><span class="color1">, </span><span class="color7">"Business Law"</span><span class="color1">, </span><span class="color7">"Marketing"</span><span class="color1">) ;</span></p><p><span class="color2">edgar</span><span class="color1">.</span><span class="color6">addAcademicAward</span><span class="color1">(</span><span class="color7">"3% Best Student Award"</span><span class="color1">) ;</span></p><p><span class="color2">edgar</span><span class="color1">.</span><span class="color6">finishBachelorDegree</span><span class="color1">( ) ;</span></p><p><span class="color5">// Edgar finished his bachelor\'s degree in Management in the 3% top students!</span></p><p><span class="color2">edgar</span><span class="color1">.</span><span class="color6">beginMasterDegree</span><span class="color1">(</span><span class="color7">"Finance"</span><span class="color1">) ;</span></p><p><span class="color2">edgar</span><span class="color1">.</span><span class="color6">addSkills</span><span class="color1">(</span><span class="color7">"Finance"</span><span class="color1">, </span><span class="color7">"Financial Analysis"</span><span class="color1">, </span><span class="color7">"Accounting"</span><span class="color1">, </span><span class="color7">"Tax Law"<span class="color1">) ;</span></p><p><span class="color2">edgar</span><span class="color1">.</span><span class="color6">beginWorking</span><span class="color1">(</span><span class="color7">"Accounting Office"</span><span class="color1">) ;</span></p><p><span class="color2">edgar</span><span class="color1">.</span><span class="color6">addProfessionalAchievement</span><span class="color1">(</span><span class="color7">"Automated accounting process"</span><span class="color1">) ;</span></p><p><span class="color2">edgar</span><span class="color1">.</span><span class="color6">stopWorking</span><span class="color1">( ) ;</span></p><p><span class="color5">// Edgar worked during a year and a half in accounting having automated the company\'s accounting process!</span></p><p><span class="color2">edgar</span><span class="color1">.</span><span class="color6">addAcademicAward</span><span class="color1">(</span><span class="color7">"Best Master\'s Student"</span><span class="color1">) ;</span></p><p><span class="color2">edgar</span><span class="color1">.</span><span class="color6">finishMasterDegree</span><span class="color1">( ) ;</span></p><p><span class="color5">// Edgar finished his master\'s degree in Finance as the best student!</span></p>',
      position = 0,
      typeSpeed = 50,
      typeWaitTime = 0,
      newPar = 0,
      newSpan = 0,
      subString = 0,
      endString= 0;

  var typeCode = function() {
    if (codeContent[position] == "<") {
      typeWaitTime = 0;

      if (codeContent[position + 1] == "p") {
        newPar = document.createElement("p");
        codeContainer.appendChild(newPar);
        position += 3;
      } else if (codeContent[position + 1] == "s") {
        newSpan = document.createElement("span");
        newSpan.className = `color${codeContent[position + 18]}`;
        newPar.appendChild(newSpan);
        position += 21;
      } else if (codeContent[position + 1] == "/") {
        if (codeContent[position + 2] == "p") {
          position += 4;
        } else if (codeContent[position + 2] == "s") {
          position += 7;
        }
      }
    } else {
      typeWaitTime = (Math.random() * typeSpeed) + 20;

      if (codeContent.slice(position, position + 2) == "//") {
        subString = codeContent.substring(position);
        endString = subString.indexOf("<");
        newSpan.innerHTML += subString.slice(0, endString);
        position += endString;
      } else {
        newSpan.innerHTML += codeContent[position];
        position += 1;
      }
    }

    if (position < codeContent.length - 1) {
      setTimeout(typeCode, typeWaitTime);
    }
  };

  typeCode();
}

export { typeBannerCode };
