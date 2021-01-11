import { lightSaber, updateSaber } from '../../../src/app/components/lightSaber'
import { screen } from '@testing-library/dom';


test('Light saber component is correctly created', () => {
    document.body.innerHTML = `<div id="swquiz-app"><div class="swquiz-body"></div></div>`;
    lightSaber(120000);
    expect(screen.getByTestId('light-saber-container').className).toBe('light-saber-container');
});


test('Correct light saber width', () => {
    updateSaber(120000);
    expect(screen.getByTestId('light').style.width).toBe('100%');
    updateSaber(60000);
    expect(screen.getByTestId('light').style.width).toBe('50%');
    updateSaber(0);
    expect(screen.getByTestId('light').style.width).toBe('0%');
});
