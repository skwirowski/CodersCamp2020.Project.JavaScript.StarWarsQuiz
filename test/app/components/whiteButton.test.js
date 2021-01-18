import { whiteButton } from '../../../src/app/components/whiteButton';
import { screen } from '@testing-library/dom';
import '@testing-library/jest-dom/extend-expect';

test('button has class button button--white ', () => {
  document.body.innerHTML = `<div id="swquiz-game-footer-left"></div>`;
  const testText = 'Hall of fame';
  const testIcon = 'static/assets/icons/contacts_24px.svg'
  whiteButton(testIcon, testText);
  expect(screen.getByTestId('white-button')).toHaveClass(
    'button button--white ',
  );
});

test('button has text', () => {
  document.body.innerHTML = `<div id="swquiz-game-footer-left"></div>`;
  const testText = 'Hall of fame';
  const testIcon = 'static/assets/icons/contacts_24px.svg'
  whiteButton(testIcon, testText);
  expect(screen.getByTestId('white-button')).not.toBeEmptyDOMElement();
});

test('button has text - Hall of fame', () => {
  document.body.innerHTML = `<div id="swquiz-game-footer-left"></div>`;
  const testText = 'Hall of fame';
  const testIcon = 'static/assets/icons/contacts_24px.svg'
  whiteButton(testIcon,testText);
  expect(screen.getByTestId('white-button')).toHaveTextContent('Hall of fame');
});

test('button has icon', () => {
  document.body.innerHTML = `<div id="swquiz-game-footer-left"></div>`;
  const testText = 'Hall of fame';
  const testIcon = 'static/assets/icons/contacts_24px.svg'
  whiteButton(testIcon, testText);
  let button = screen.getByTestId('white-button');
  expect(button.querySelector('img')).toBeTruthy();
});
