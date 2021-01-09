import { getScores, saveScore } from '../../../src/app/logic/localStorageScore';
import { ranking } from '../../../src/app/components/ranking';
import { screen } from '@testing-library/dom';
import '@testing-library/jest-dom/extend-expect';
import { PEOPLE_MODE } from '../../../src/app/modes';

test('screen has four items of ranking-row', () => {
  document.body.innerHTML = `<div id="ranking-box" class="ranking-box"></div>`;
  ranking(getScores());

  let rows = document.querySelectorAll('.ranking-row');
  expect(rows.length).toBe(4);
  expect();
});

test('there is an img tag for icon', () => {
  document.body.innerHTML = `<div id="ranking-box" class="ranking-box"></div>`;
  ranking(getScores());

  expect(screen.getByTestId('ranking-icon')).toBeTruthy();
});

test('there is Lucy and Nancy in HTML', () => {
  document.body.innerHTML = `<div id="ranking-box" class="ranking-box"></div>`;
  saveScore(PEOPLE_MODE, 'Nancy', 12, 30);
  saveScore(PEOPLE_MODE, 'Lucy', 14, 30);

  ranking(getScores(PEOPLE_MODE));

  let nicknames = document.querySelectorAll('.nickname');
  let scores = document.querySelectorAll('.score');

  expect(nicknames[1].textContent.includes('Lucy')).toBeTruthy();
  expect(nicknames[2].textContent.includes('Nancy')).toBeTruthy();
  expect(nicknames[3].textContent.includes('-')).toBeTruthy();
  expect(scores[1].textContent.includes('14 / 30')).toBeTruthy();
  expect(scores[2].textContent.includes('12 / 30')).toBeTruthy();
  expect(scores[3].textContent.includes('- / -')).toBeTruthy();
});
