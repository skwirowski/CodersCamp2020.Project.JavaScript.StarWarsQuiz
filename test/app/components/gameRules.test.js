import { renderRules } from '../../../src/app/components/gameRules';
import { screen } from '@testing-library/dom';
import { PEOPLE_MODE } from '../../../src/app/modes';

test('screen has paragraph with rule text', () => {
  document.body.innerHTML = `<div id="swquiz-game-body" class="swquiz-game-body"></div>`;
  renderRules(PEOPLE_MODE);

  let paragraph = document.querySelectorAll('p');
  expect(paragraph).toBeTruthy();
  expect();
});

test('there is an img tag for icon', () => {
  document.body.innerHTML = `<div id="swquiz-game-body" class="swquiz-game-body"></div>`;
  renderRules(PEOPLE_MODE);

  expect(screen.getByTestId('rules-icon')).toBeTruthy();
});

