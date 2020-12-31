const VEHICLE_MODE = 'vehicles';
const PEOPLE_MODE = 'people';
const SPACESHIPS_MODE = 'spaceships';
const MODES = [VEHICLE_MODE, PEOPLE_MODE, SPACESHIPS_MODE];

function saveScore(mode, nickname, score) {
  if (!modeIsValid(mode) || !scoreIsValid(score)) return;

  let scores = getScores(mode);

  scores.push({ nickname, score });
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
  return scoreA.score - scoreB.score;
}

function modeIsValid(mode) {
  return MODES.includes(mode);
}

function scoreIsValid(score) {
  if (typeof score !== 'number')
    throw new TypeError('score shall be of type "number"');
  return score >= 0;
}

export { saveScore, getScores, VEHICLE_MODE, PEOPLE_MODE, SPACESHIPS_MODE };
