import { createIconHeader } from './iconHeader';
import createDiv from '../utils/createDiv';
import { getScores } from '../logic/localStorageScore';
import { attachRulesButtonCallback } from './gameRules';
import { getGameMode } from '../modes';

function createEntry(place, scoreEntry) {
  let nickname = '-',
    correctNumber = '-',
    questionsNumber = '-';

  if (scoreEntry !== undefined) {
    ({ nickname, correctNumber, questionsNumber } = scoreEntry);
  }

  let div = document.createElement('div');
  div.className = 'ranking-row';
  div.innerHTML = `
        <div class="place">
            ${place}
        </div>
        <div class="nickname">
            ${nickname}
        </div>
        <div class="score">
            ${correctNumber} / ${questionsNumber}
        </div>
    `;
  return div;
}

function createRankingHeader() {
  let div = document.createElement('div');
  div.className = 'ranking-row';
  div.style.fontWeight = 'bold';
  div.innerHTML = `
        <div class="place">
           Place
        </div>
        <div class="nickname">
            Player
        </div>
        <div class="score">
            Answered
        </div>
    `;
  return div;
}

function ranking(scoreList) {
  let parent = document.querySelector('#swquiz-game-body');

  let ranking = createDiv('box', 'ranking-box');

  let placeholders = [];
  const places = ['1st', '2nd', '3rd'];

  places.forEach((place, index) => {
    placeholders.push(createEntry(place, scoreList[index]));
  });

  ranking.appendChild(
    createIconHeader(
      'Mode Ranking',
      'ranking-icon',
      './static/assets/ui/contacts_24px.svg',
      'Ranking ico',
    ),
  );
  ranking.appendChild(createRankingHeader());
  placeholders.forEach((item) => ranking.appendChild(item));

  parent.appendChild(ranking);
}

function renderRanking(mode) {
  attachRulesButtonCallback();

  // Remove children of swquiz-game-body
  let gameBodyElement = document.querySelector('#swquiz-game-body');
  gameBodyElement.innerHTML = '';

  // Render ranking for selected mode
  ranking(getScores(mode));
}

function attachRankingButtonCallback() {
  let whiteButton = document.getElementById('white-button');
  if (whiteButton) {
    whiteButton.textContent = 'Hall of fame';
    whiteButton.addEventListener(
      'click',
      function () {
        renderRanking(getGameMode());
      },
      { once: true },
    );
  }
}

export { renderRanking, attachRankingButtonCallback };
