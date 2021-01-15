export const gameMode = (text) => {
  const app = document.getElementById('swquiz-game-header');
  const questionDiv = document.createElement('div');

  questionDiv.id = 'question';
  questionDiv.className = 'question';
  questionDiv.setAttribute('data-testid', 'question');
  let questionText = document.createTextNode(`MODE: ${text}`);
  questionDiv.appendChild(questionText);
  app.appendChild(questionDiv);
};
