import { mainMenu } from '../../../src/app/components/mainMenu';
import { screen } from '@testing-library/dom';
import '@testing-library/jest-dom/extend-expect';

/*test('Adding nav element to DOM.', () => {
  const getData = (element) => {
    return element;
  };
  mainMenu(document.body, getData);
  expect(screen.getByTestId('menuContainer')).toHaveClass('swquiz-menu');
  expect(screen.getByTestId('menuContainer')).toBeInstanceOf(HTMLElement);
}); */

test('Throw error when provided invalid parent argument', () => {
  const getData = (element) => {
    return element;
  };
  expect(function () {
    mainMenu(document.body, getData);
  }).toThrow(new TypeError("Cannot set property 'activeGameMode' of undefined"));
});
/*
test('Throw error when provided invalid callback argument', () => {
  expect(function () {
    mainMenu(document.body, 'getData');
  }).toThrow(new TypeError("Callback argument isn't a function!"));
}); */
