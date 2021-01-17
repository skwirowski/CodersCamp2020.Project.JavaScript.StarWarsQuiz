import { mainWindow } from '../../../src/app/components/mainWindow';
import { screen } from '@testing-library/dom';

test('screen shows main window with rules', () => {
  document.body.innerHTML = `
    <div class="swquiz-row" id="swquiz-header"></div>
    <div class="swquiz-row" id="swquiz-body">
      <div id="swquiz-game-body">
        <img data-testid="imgRecognizer" src=".."/>
      </div>
    </div>`;

  mainWindow();
  // Test against menu
  expect(document.querySelector('#menuContainer')).toBeTruthy();

  // Test against game body
  expect(document.querySelector('#swquiz-body')).toBeTruthy();

  // Game question
  expect(document.querySelector('#swquiz-game-header')).toBeTruthy();
  expect(document.querySelector('#question')).toBeTruthy();

  // Game rules
  expect(document.querySelector('#swquiz-game-body')).toBeTruthy();

  // Game white button
  expect(document.querySelector('#swquiz-game-footer-left')).toBeTruthy();
  expect(document.querySelector('#white-button')).toBeTruthy();

  // Game red button
  expect(document.querySelector('#swquiz-game-footer-right')).toBeTruthy();
  expect(document.querySelector('#red-button')).toBeTruthy();

  // Left Image
  expect(screen.getByTestId('imgRecognizer')).toBeTruthy();
});
