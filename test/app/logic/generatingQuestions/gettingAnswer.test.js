import { getAnswer } from '../../../../src/app/logic/generatingQuestions/gettingAnswer';
import { id1Response } from './responses'

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve(id1Response),
  })
);

test('Correct converting response', async ()=>{
    const data = await getAnswer();
    expect(typeof data).toBe('object');
    expect('name' in data).toBe(true);
})