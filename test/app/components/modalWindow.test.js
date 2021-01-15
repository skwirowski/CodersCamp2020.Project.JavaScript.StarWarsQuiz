import { modalWindow } from '../../../src/app/components/modalWindow';
import '@testing-library/jest-dom/extend-expect';

 
test('First argument should be a component', () => {
  const firstArg = '';
  const closeFunc = jest.fn();
  expect(() => modalWindow(firstArg, closeFunc)).toThrowError('First argument should be a HTML element')
})

test('Second argument should be a function', () => {
    const firstArg = document.createElement('div');
    const closeFunc = 'function';
    expect(() => modalWindow(firstArg, closeFunc)).toThrowError('Second argument should be a function')
})

test('Args are correct', () => {
    document.body.innerHTML = `<div id="swquiz-app"></div>`;
    const firstArg = document.createElement('div');
    const closeFunc = jest.fn();
    expect(modalWindow(firstArg, closeFunc)).toBeInstanceOf(HTMLElement);
})