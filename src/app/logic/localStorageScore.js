import { MODES } from '../modes';

function saveScore(mode, nickname, correctNumber, questionsNumber) {
  if (
    !modeIsValid(mode) ||
    !numberIsValid(correctNumber) ||
    !numberIsValid(questionsNumber)
  )
    return;

  let scores = getScores(mode);
  let percentage = (100 * correctNumber) / questionsNumber;

  scores.push({ nickname, correctNumber, questionsNumber, percentage });
  scores.sort(compareScores);

  if (scores.length === 4) {
    scores.pop();
  }
  localStorage.setItem(mode, JSON.stringify(scores));
}

function getScores(mode) {
  const scores = JSON.parse(localStorage.getItem(mode) || '[]');
  return scores;
}

function compareScores(scoreA, scoreB) {
  return scoreB.percentage - scoreA.percentage;
}

function modeIsValid(mode) {
  return MODES.includes(mode);
}

function numberIsValid(number) {
  if (typeof number !== 'number')
    throw new TypeError('Passed variable shall be of type "number"');
  return number >= 0;
}

export { saveScore, getScores };
