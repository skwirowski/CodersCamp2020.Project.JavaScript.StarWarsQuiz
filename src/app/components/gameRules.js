import createDiv from '../utils/createDiv';
import { createIconHeader } from './iconHeader';
import { attachRankingButtonCallback } from './ranking';
import { getGameMode } from '../modes';
import { getRule } from '../ruleConstantStrings';
import { whiteButton } from './whiteButton';

function gameRules(textToShow) {
  let parent = document.querySelector('.swquiz-game-body');

  let div = createDiv('game-rules-box', 'game-rules-box');
  div.classList.add('box');

  let textElement = document.createElement('p');
  textElement.textContent = textToShow || '';

  div.appendChild(
    createIconHeader(
      'Mode Rules',
      'rules-icon',
      './static/assets/icons/school_24px.svg',
      'Rules icon',
    ),
  );
  div.appendChild(textElement);
  parent.appendChild(div);
}

function renderRules(mode) {
  attachRankingButtonCallback();

  // Remove children of swquiz-game-body
  let gameBodyElement = document.querySelector('#swquiz-game-body');
  gameBodyElement.innerHTML = '';

  // Render rules for selected mode
  gameRules(getRule(mode));
}

function attachRulesButtonCallback() {
  let footerLeft = document.getElementById('swquiz-game-footer-left');
  if (footerLeft) {
    footerLeft.innerHTML = '';

    whiteButton('static/assets/icons/school_24px.svg', 'Show rules');
    let whiteBtn = document.getElementById('white-button');

    whiteBtn.addEventListener(
      'click',
      function () {
        renderRules(getGameMode());
      },
      { once: true },
    );
  }
}

export { renderRules, attachRulesButtonCallback };
