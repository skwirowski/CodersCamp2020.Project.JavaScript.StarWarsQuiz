import {
  PEOPLE_MODE,
  VEHICLE_MODE,
  SPACESHIPS_MODE,
} from '../../../src/app/modes';
import { getScores, saveScore } from '../../../src/app/logic/localStorageScore';

describe('LocalStorageScore saveScore() and getScore()', () => {
  describe.each([
    [PEOPLE_MODE, 'Bob', 100, 10, 1],
    [VEHICLE_MODE, 'Beth', 31, 10, 1],
    [SPACESHIPS_MODE, 'Penny', 12, 10, 1],
    ['invalidMode', 'Spencer', 64, 10, 0],
    [SPACESHIPS_MODE, 'Josh', -12, 10, 0],
  ])(
    'Adding score when no entries',
    (mode, nickname, correctNumber, questionsNumber, expected) => {
      beforeEach(() => {
        localStorage.clear();
      });

      test(`Score table in mode ${mode} has ${expected} entries`, () => {
        saveScore(mode, nickname, correctNumber, questionsNumber);
        expect(getScores(mode).length).toBe(expected);
      });

      test(`Sum of all tables entries equals ${expected}`, () => {
        saveScore(mode, nickname, correctNumber, questionsNumber);
        expect(
          getScores(PEOPLE_MODE).length +
            getScores(VEHICLE_MODE).length +
            getScores(SPACESHIPS_MODE).length,
        ).toBe(expected);
      });
    },
  );

  test('Should throw an error if correctNumber is not type of number', () => {
    expect(() => {
      saveScore(PEOPLE_MODE, 'Lucy', '12', 12);
    }).toThrow('score shall be of type "number"');
  });

  test('Add multiple scores', () => {
    const mode = PEOPLE_MODE;

    saveScore(mode, 'Bob', 12, 30);
    saveScore(mode, 'Nancy', 10, 30);
    saveScore(mode, 'Nandor', 17, 30);
    saveScore(mode, 'Lucy', 15, 30);

    const scores = getScores(mode);

    expect(scores.length === 3);
    expect(
      scores[0].nickname === 'Lucy' &&
        scores[0].correctNumber === 17 &&
        scores[0].questionsNumber === 30 &&
        scores[0].percentage === (100 * 17) / 30,
    );
    expect(
      scores[1].nickname === 'Nandor' &&
        scores[1].correctNumber === 17 &&
        scores[1].questionsNumber === 30 &&
        scores[1].percentage === (100 * 17) / 30,
    );
    expect(
      scores[2].nickname === 'Bob' &&
        scores[2].correctNumber === 12 &&
        scores[2].percentage === (100 * 12) / 30,
    );
  });
});
