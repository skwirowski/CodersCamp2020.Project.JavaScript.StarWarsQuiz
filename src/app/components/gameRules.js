import { createIconHeader } from "./iconHeader"

function gameRules(textToShow) {
  let parent = document.querySelector('.swquiz-game-body');
  parent.classList.add('box');

  let textElement = document.createElement('p');
  textElement.textContent = textToShow || "";

  parent.appendChild(createIconHeader("Mode Rules", "rules-icon", "./static/assets/icons/school_24px.svg", "Rules icon"));
  parent.appendChild(textElement);
}

export { gameRules };
