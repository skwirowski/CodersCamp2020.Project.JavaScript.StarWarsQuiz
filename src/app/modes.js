import { getRule } from './ruleConstantStrings';
import { renderRanking } from './components/ranking';
import { getScores } from './logic/localStorageScore';
import { getGameModeQuestion } from './gameMode';

export const VEHICLE_MODE = 'Vehicles';
export const PEOPLE_MODE = 'People';
export const SPACESHIPS_MODE = 'Spaceships';
export const MODES = [VEHICLE_MODE, PEOPLE_MODE, SPACESHIPS_MODE];

// Can pass string with mode or Element with textContent
export function setGameMode(mode) {
  mode = mode.textContent || mode;
  window.globalThis.activeGameMode = mode;

  changeRules(mode);
  changeRanking(getScores(mode));
  changeQuestion(mode);
}

export function getGameMode() {
  return window.globalThis.activeGameMode;
}

function changeRules(mode) {
  let ruleBox = document.querySelector('#game-rules-box');

  if (ruleBox) {
    let p = ruleBox.getElementsByTagName('p')[1]; // first one is header
    p.innerText = getRule(mode);
  }
}

function changeRanking(mode) {
  let rankingBox = document.querySelector('#ranking-box');

  if (rankingBox) {
    renderRanking(mode);
  }
}

function changeQuestion(mode) {
  let questionElement = document.querySelector('#question');

  if (questionElement) {
    questionElement.innerHTML = getGameModeQuestion(mode);
  }
}
