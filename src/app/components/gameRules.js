import createDiv from "../utils/createDiv";
import { createIconHeader } from "./iconHeader"

function gameRules(textToShow) {
  let parent = document.querySelector('.swquiz-game-body');

  let div = createDiv('game-rules-box', 'game-rules-box');
  div.classList.add('box');

  let textElement = document.createElement('p');
  textElement.textContent = textToShow || "";

  div.appendChild(createIconHeader("Mode Rules", "rules-icon", "./static/assets/icons/school_24px.svg", "Rules icon"));
  div.appendChild(textElement);
  parent.appendChild(div);
}

export { gameRules };
