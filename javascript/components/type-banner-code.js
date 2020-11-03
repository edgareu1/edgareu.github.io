function typeBannerCode(codeContainer) {
  var codeContent = codeContainer.innerHTML,
      position = 0,
      typeSpeed = 100,
      typeWaitTime = 0,
      newPar = 0,
      newSpan = 0,
      subString = 0,
      endString= 0;

  codeContainer.innerHTML = '';

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
      newSpan.innerHTML += codeContent[position];
      position += 1;
    }

    if (position < codeContent.length - 1) {
      setTimeout(typeCode, typeWaitTime);
    }
  };

  typeCode();
}
