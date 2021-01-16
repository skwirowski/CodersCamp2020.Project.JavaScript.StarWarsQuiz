import createDiv from '../utils/createDiv';
import { redButton, whiteButton } from '../redButton'; // TODO: remove white button
import { gameMode } from '../gameMode';
import { getGameMode, setGameMode } from '../modes';
import { mainMenu } from '../components/mainMenu';
import { imageRecognizer } from '../imageRecognizer';
import { renderRules } from './gameRules';
import { quiz } from '../logic/quiz'
import { getImage } from '../logic/generatingQuestions/gettingImage'

export const playerAnswers = [];
function fillMainWindowHTML() {
  let quizBody = document.getElementById('swquiz-body');

  let quizGame = createDiv('swquiz-game', 'swquiz-game');
  let quizGameHeader = createDiv('swquiz-game-header', 'swquiz-game-header');
  let quizGameBody = createDiv('swquiz-game-body', 'swquiz-game-body');
  let quizGameFooterLeft = createDiv(
    'swquiz-game-footer-left',
    'swquiz-game-footer-left',
  );
  let quizGameFooterRight = createDiv(
    'swquiz-game-footer-right',
    'swquiz-game-footer-right',
  );

  quizGame.appendChild(quizGameHeader);
  quizGame.appendChild(quizGameBody);
  quizGame.appendChild(quizGameFooterLeft);
  quizGame.appendChild(quizGameFooterRight);

  quizBody.appendChild(quizGame);
}

async function mainWindow(maxTime) {
  fillMainWindowHTML();

  mainMenu(document.getElementById('swquiz-header'), setGameMode);

  redButton('play the game');
  whiteButton('Hall of fame');
  gameMode('Who is this Character?');
  const default64Image = await getImage('people', 36)
  imageRecognizer(default64Image)
  renderRules(getGameMode());
  
  quiz(6000)
}

export { mainWindow };
