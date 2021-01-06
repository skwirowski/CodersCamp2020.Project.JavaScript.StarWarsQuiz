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

function createHeader() {
  let div = document.createElement('div');
  div.className = 'icon-header';
  div.setAttribute('data-testid', 'icon-header');
  div.innerHTML = `
        <img data-testid='ranking-icon' src="./static/assets/ui/contacts_24px.svg" alt="Ranking icon">
        <p>Mode Ranking</p>
    `;
  return div;
}

function ranking(scoreList) {
  let parent = document.querySelector('.ranking-box');

  let placeholders = [];
  const places = ['1st', '2nd', '3rd'];

  for (let place = 0; place < places.length; ++place) {
    placeholders.push(createEntry(places[place], scoreList[place]));
  }

  parent.appendChild(createHeader());
  parent.appendChild(createRankingHeader());
  placeholders.forEach((item) => parent.appendChild(item));
}

export { ranking };
