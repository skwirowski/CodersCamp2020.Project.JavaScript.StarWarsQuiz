import { mainWindow } from '../../../src/app/components/mainWindow';
import { screen } from '@testing-library/dom';

test('screen shows main window with rules', () => {

    document.body.innerHTML = `
    <div class="swquiz-row" id="swquiz-header"></div>
    <div class="swquiz-row" id="swquiz-body"></div>`;

    mainWindow();
    // Test against menu
    expect(document.getElementById('swquiz-header')).toBeTruthy();
    expect(document.getElementById('menuContainer')).toBeTruthy();

    // Test against game body 
    expect(document.getElementById('swquiz-body')).toBeTruthy();

    // Game question
    expect(document.getElementById('swquiz-game-header')).toBeTruthy();
    expect(document.getElementById('question')).toBeTruthy();

    // Game rules
    expect(document.getElementById('swquiz-game-body')).toBeTruthy();
    expect(document.getElementById('game-rules-box')).toBeTruthy();

    // Game white button
    expect(document.getElementById('swquiz-game-footer-left')).toBeTruthy();
    expect(document.getElementById('white-button')).toBeTruthy();

    // Game red button
    expect(document.getElementById('swquiz-game-footer-right')).toBeTruthy();
    expect(document.getElementById('red-button')).toBeTruthy();

    // Left Image
    expect(screen.getByTestId('imgRecognizer')).toBeTruthy();
});

