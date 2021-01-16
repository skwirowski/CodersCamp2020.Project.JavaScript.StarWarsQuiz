import { modalGameOver } from '../../../src/app/components/modalGameOver';
import { screen } from '@testing-library/dom';
import '@testing-library/jest-dom/extend-expect';

test('Adding Game over modal to DOM', () => {
  const callback = () => true;
  const firstArg = [];
  const secondArg = [];
  modalGameOver(document.body, firstArg, secondArg, callback);
  expect(screen.getByTestId('gameOverModal')).toHaveClass('swquiz-modal');
  expect(screen.getByTestId('gameOverModal')).toBeInstanceOf(HTMLElement);
});

test('Throw error when provided invalid first argument', () => {
  const callback = () => true;
  const firstArg = [];
  const secondArg = [];
  expect(function () {
    modalGameOver(document.bodysss, firstArg, secondArg, callback);
  }).toThrow(new TypeError("First argument isn't an object!"));
});

test('Throw error when provided invalid second argument', () => {
  const callback = () => true;
  const secondArg = 'Joda';
  const thirdArg = [];
  expect(function () {
    modalGameOver(document.body, secondArg, thirdArg, callback);
  }).toThrow(new TypeError("Second argument isn't an object!"));
});

test('Throw error when provided invalid third argument', () => {
  const callback = () => true;
  const secondArg = [];
  const thirdArg = 'Joda';
  expect(function () {
    modalGameOver(document.body, secondArg, thirdArg, callback);
  }).toThrow(new TypeError("Third argument isn't an object!"));
});

test('Throw error when provided invalid callback', () => {
  const callback = 'functiion';
  const secondArg = [];
  const thirdArg = [];
  expect(function () {
    modalGameOver(document.body, secondArg, thirdArg, callback);
  }).toThrow(new TypeError("Fourth argument isn't a function!"));
});
