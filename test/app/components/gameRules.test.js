import { gameRules } from '../../../src/app/components/gameRules';
import { screen } from '@testing-library/dom';
import { PEOPLE_MODE_RULE_STRING } from '../../../src/app/ruleConstantStrings';

test('screen has paragraph with rule text', () => {
  document.body.innerHTML = `<div id="swquiz-game-body" class="swquiz-game-body"></div>`;
  gameRules(PEOPLE_MODE_RULE_STRING);

  let paragraph = document.querySelectorAll('p');
  expect(paragraph).toBeTruthy();
  expect();
});

test('there is an img tag for icon', () => {
  document.body.innerHTML = `<div id="swquiz-game-body" class="swquiz-game-body"></div>`;
  gameRules(PEOPLE_MODE_RULE_STRING);

  expect(screen.getByTestId('rules-icon')).toBeTruthy();
});

