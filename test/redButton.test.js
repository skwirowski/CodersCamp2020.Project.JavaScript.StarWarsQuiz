import { redButton } from '../src/app/redButton'
import { screen } from '@testing-library/dom'
import '@testing-library/jest-dom/extend-expect';

test('button has class button button--red button--uppercase', () => {
    document.body.innerHTML = `<div id="swquiz-app"></div>`;
    const testText = 'play the game';
    redButton(testText);
    expect(screen.getByTestId('red-button')).toHaveClass('button button--red button--uppercase');
})

test('button has text', () => {
    document.body.innerHTML = `<div id="swquiz-app"></div>`;
    const testText = 'play the game';
    redButton(testText);
    expect(screen.getByTestId('red-button')).not.toBeEmptyDOMElement();
})

test('button has text - play the game', () => {
    document.body.innerHTML = `<div id="swquiz-app"></div>`;
    const testText = 'play the game';
    redButton(testText);
    expect(screen.getByTestId('red-button')).toHaveTextContent('play the game');
})


