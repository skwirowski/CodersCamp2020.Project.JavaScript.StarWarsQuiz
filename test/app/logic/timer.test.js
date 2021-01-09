import {startTime} from  '../../../src/app/logic/timer';
import { screen } from '@testing-library/dom';

test('Stop timer when element does not exist', () => {
    jest.useFakeTimers();
    expect(()=>startTime(20000)).toThrow('Can not attach time left text');
    jest.advanceTimersByTime(5000);
})

test('Correct timer working integral test', () => {
    document.body.innerHTML = `<div id="swquiz-app"><div class="swquiz-body"></div></div>`;
    jest.useFakeTimers();
    startTime(120000);
    expect(screen.getByTestId('timer-text')).not.toBeUndefined();
    expect(screen.getByTestId('timer-text').className).toBe('timer-text');
    expect(screen.getByTestId('timer-text').textContent).toBe('Time Left: 2m 00s');
    jest.advanceTimersByTime(5000);
    expect(screen.getByTestId('timer-text').textContent).toBe('Time Left: 1m 55s');
    jest.advanceTimersByTime(56000);
    expect(screen.getByTestId('timer-text').textContent).toBe('Time Left: 0m 59s');
    jest.advanceTimersByTime(50000);
    expect(screen.getByTestId('timer-text').textContent).toBe('Time Left: 0m 09s');
    jest.advanceTimersByTime(9000);
    expect(screen.getByTestId('timer-text').textContent).toBe('Time Left: 0m 00s');
})

test('time is stopping correctly', () => {
    document.body.innerHTML = `<div id="swquiz-app"><div class="swquiz-body"></div></div>`;
    jest.useFakeTimers();
    startTime(120000);
    jest.advanceTimersByTime(200000);
    expect(screen.getByTestId('timer-text').textContent).toBe('Time Left: 0m 00s');
})