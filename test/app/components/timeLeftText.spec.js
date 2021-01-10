import { timeLeftText, convertTime, updateTimeText } from '../../../src/app/components/timeLeftText';
import { screen } from '@testing-library/dom';


test('updating time trow error when Time left component does not exist', () => {
    expect(()=>updateTimeText(20000)).toThrow(new Error('There is not time text element'));
})

test('TextLeft component is correctly created', () => {
    document.body.innerHTML = `<div id="swquiz-app"><div class="swquiz-body"></div></div>`;
    timeLeftText(120000);
    expect(screen.getByTestId('timer-text').className).toBe('timer-text');
    expect(screen.getByTestId('timer-text').textContent).toBe('Time Left: 2m 00s');
});

test('updating time is working correctly',() =>{
    updateTimeText(20000);
    expect(screen.getByTestId('timer-text').textContent).toBe('Time Left: 0m 20s');
})

test('Correct time converting', () => {
    const time1 = convertTime(60000);
    const time2 = convertTime(5000);
    const time3 = convertTime(100000);
    const time4 = convertTime(120000);
    const time5 = convertTime(20000);
    expect(time1).toBe('1m 00s');
    expect(time2).toBe('0m 05s');
    expect(time3).toBe('1m 40s');
    expect(time4).toBe('2m 00s');
    expect(time5).toBe('0m 20s');
})