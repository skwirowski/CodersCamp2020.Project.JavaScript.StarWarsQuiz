import { createIconHeader } from "./iconHeader"

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
  let parent = document.querySelector('.ranking-box');
  parent.classList.add('box');

  let placeholders = [];
  const places = ['1st', '2nd', '3rd'];

  places.forEach((place, index) => {
    placeholders.push(createEntry(place, scoreList[index]));
  });

  ranking.appendChild(createHeader());
  ranking.appendChild(createRankingHeader());
  placeholders.forEach((item) => ranking.appendChild(item));

  parent.appendChild(ranking);
}

export { ranking };
