import { switchOfStyles } from '../../../src/app/logic/quiz'
import '@testing-library/jest-dom/extend-expect';

test('Screen should not display this components', ()=>{
    document.body.innerHTML = `
    <div class="swquiz-row" id="swquiz-header"></div>
    <div class="swquiz-row" id="swquiz-body">
      <div class="swquiz-game" id="swquiz-game">
        <div class="game-rules-box"></div>
        <div class="swquiz-game-footer-left" id="swquiz-game-footer-left">
            <button id="white-button"></button>
        </div>
        <div class="swquiz-game-footer-right" id="swquiz-game-footer-right">
        </div>
      </div>
    </div>`;

    const turnOf = ['#white-button', '.game-rules-box', '.swquiz-game-footer-right']

    switchOfStyles(turnOf);

    expect(document.querySelector('#white-button')).toHaveStyle('display: none');

    expect(document.querySelector('.game-rules-box')).toHaveStyle('display: none');

    expect(document.querySelector('.swquiz-game-footer-right')).toHaveStyle('display: none');
})