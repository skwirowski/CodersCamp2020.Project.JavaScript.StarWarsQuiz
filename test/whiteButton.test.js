import { whiteButton } from '../src/app/whiteButton';
import { screen } from '@testing-library/dom';
import '@testing-library/jest-dom/extend-expect';

test('button has class button button--white ', () => {
  document.body.innerHTML = `<div id="swquiz-app"></div>`;
  const testText = 'Hall of fame';
  const testIcon = 'static/assets/icons/contacts_24px.png'
  whiteButton(testIcon, testText);
  expect(screen.getByTestId('white-button')).toHaveClass(
    'button button--white ',
  );
});

test('button has text', () => {
  document.body.innerHTML = `<div id="swquiz-app"></div>`;
  const testText = 'Hall of fame';
  const testIcon = 'static/assets/icons/contacts_24px.png'
  whiteButton(testIcon, testText);
  expect(screen.getByTestId('white-button')).not.toBeEmptyDOMElement();
  
});

  test('button has text - Hall of fame', () => {
    document.body.innerHTML = `<div id="swquiz-app"></div>`;
    const testText = 'Hall of fame';
    const testIcon = 'static/assets/icons/contacts_24px.png'
    whiteButton(testIcon,testText);
    expect(screen.getByTestId('white-button')).toHaveTextContent('Hall of fame');
  });


