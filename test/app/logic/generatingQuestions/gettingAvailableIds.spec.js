import { getAvailableIds } from '../../../../src/app/logic/generatingQuestions/gettingAvailableIds';

const STARSHIPS_IDS = [5, 9, 10, 11, 12, 13, 15, 21, 22, 23, 27, 28, 29, 31, 39, 40, 41, 43, 47, 48];
const VEHICLES_IDS = [4, 6, 7, 8, 14, 16, 18, 20, 24, 25, 26, 30, 33, 34, 35, 36, 37, 38, 42];
const PEOPLES_IDS = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83];

test('Should returning correct category avaiable ids array for people', () => {
    const checker = (arr, target) => target.every(v => arr.includes(v));
    const data = getAvailableIds('people');
  
    expect(checker(data, PEOPLES_IDS) && data.length === PEOPLES_IDS.length).toEqual(true);
})

test('Should returning correct category avaiable ids array for vehicles', () => {
    const checker = (arr, target) => target.every(v => arr.includes(v));
    const data = getAvailableIds('vehicles');
  
    expect(checker(data, VEHICLES_IDS) && data.length === VEHICLES_IDS.length).toEqual(true);
})

test('Should returning correct category avaiable ids array for starships', () => {
    const checker = (arr, target) => target.every(v => arr.includes(v));
    const data = getAvailableIds('starships');
  
    expect(checker(data, STARSHIPS_IDS) && data.length === STARSHIPS_IDS.length).toEqual(true);
})

test('Should returning empty array for wrong category', () => {
    const data = getAvailableIds('aaa');
    expect(data.length).toBe(0);
})