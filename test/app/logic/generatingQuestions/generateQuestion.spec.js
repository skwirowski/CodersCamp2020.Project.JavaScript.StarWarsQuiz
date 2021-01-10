import {getRandomIdsArray, generateQuestion, getAnswers} from '../../../../src/app/logic/generatingQuestions/generateQuestion'
import { getAnswer } from '../../../../src/app/logic/generatingQuestions/gettingAnswer';
import { getImage } from '../../../../src/app/logic/generatingQuestions/gettingImage';
import { getAvailableIds } from '../../../../src/app/logic/generatingQuestions/gettingAvailableIds';
import {id1Response, id2Response, id3Response, id4Response} from './responses'

jest.mock('../../../../src/app/logic/generatingQuestions/gettingAnswer');
jest.mock('../../../../src/app/logic/generatingQuestions/gettingImage');
jest.mock('../../../../src/app/logic/generatingQuestions/gettingAvailableIds');


//-----mocks-----
getAnswer.mockImplementation(jest.fn((mode, id) => {
  let res;
  switch (id) {
    case 1:
      res = id1Response;
      break;
    case 2:
      res = id2Response;
      break;
    case 3:
      res = id3Response;
      break;
    default:
      res = id4Response;
  }
  return Promise.resolve(res);
}));

getImage.mockImplementation(jest.fn((mode, id) => {
  return Promise.resolve("base64imagestring");
}))


getAvailableIds.mockImplementation(jest.fn((mode) => {
  return [1,2,3,4]
}))

test('Should throw error when avaible ids array is empty', ()=>{
  expect(getAnswers('people', [])).rejects.toEqual(new Error('No avaiable ids'))
})

test('Should have unique indexes', ()=>{
  const randomIds = getRandomIdsArray([11, 21, 32, 44])
  expect(new Set(randomIds).size).toBe(4)
  const randomIds2 = getRandomIdsArray([11, 21, 32, 44, 44])
  expect(new Set(randomIds2).size).toBe(4)
})

test('Correct questions generating', async () => {
  const data = await generateQuestion('people');

  expect(data.image).toBe("base64imagestring")

  const checker = (arr, target) => target.every(v => arr.includes(v));
  expect(checker(data.answers, ["Luke Skywalker","C-3PO", "R2-D2", "Darth Vader"])).toBe(true);

  expect(["Luke Skywalker", "C-3PO", "R2-D2", "Darth Vader"].includes(data.rightAnswer)).toBe(true);
})


test('Throw error from generateQuestion', async () => {
  getImage.mockImplementation(jest.fn((mode, id) => {
    throw new Error('unknown error')
  }))

  expect(generateQuestion('people')).rejects.toEqual(new Error('Error: unknown error'))
})
