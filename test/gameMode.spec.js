import { gameMode } from '../src/app/gameMode';
import { screen } from '@testing-library/dom';
import '@testing-library/jest-dom/extend-expect';

test('Should add div element to DOM.', () => {
  document.body.innerHTML = `
    <div id="swquiz-app">
    </div>
    `;
  const text = 'Test question';
  gameMode(text);

  expect(screen.getByTestId('question')).toHaveClass('question');
  expect(screen.getByTestId('question')).toBeInstanceOf(HTMLElement);
});

test('Should add question to div with ID question', () => {
  document.body.innerHTML = `
    <div id="swquiz-app">
    </div>
    `;
  const text = 'Test question';
  gameMode(text);
  expect(screen.getByTestId('question')).toHaveTextContent(text);
});
