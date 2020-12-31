import * as LS from '../../../src/app/components/localStorageScore';

describe('LocalStorageScore saveScore() and getScore()', () => {
  describe.each([
    [LS.PEOPLE_MODE, 'Bob', 100, 1],
    [LS.VEHICLE_MODE, 'Beth', 31, 1],
    [LS.SPACESHIPS_MODE, 'Penny', 12, 1],
    ['invalidMode', 'Spencer', 64, 0],
    [LS.SPACESHIPS_MODE, 'Josh', -12, 0],
  ])('Adding score when no entries', (mode, nickname, score, expected) => {
    beforeEach(() => {
      localStorage.clear();
    });

    test(`Score table in mode ${mode} has ${expected} entries`, () => {
      LS.saveScore(mode, nickname, score);
      expect(LS.getScores(mode).length).toBe(expected);
    });

    test(`Sum of all tables entries equals ${expected}`, () => {
      LS.saveScore(mode, nickname, score);
      expect(
        LS.getScores(LS.PEOPLE_MODE).length +
          LS.getScores(LS.VEHICLE_MODE).length +
          LS.getScores(LS.SPACESHIPS_MODE).length,
      ).toBe(expected);
    });
  });

  test('Should throw an error if score is not type of number', () => {
    expect(() => {
      LS.saveScore(LS.PEOPLE_MODE, 'Lucy', '12');
    }).toThrow('score shall be of type "number"');
  });

  test('Add multiple scores', () => {
    const mode = LS.PEOPLE_MODE;

    LS.saveScore(mode, 'Bob', 12);
    LS.saveScore(mode, 'Nancy', 10);
    LS.saveScore(mode, 'Nandor', 17);
    LS.saveScore(mode, 'Lucy', 17);

    const scores = LS.getScores(mode);

    expect(scores.length === 3);
    expect(scores[0].nickname === 'Lucy' && scores[0].score === 17);
    expect(scores[1].nickname === 'Nandor' && scores[1].score === 17);
    expect(scores[2].nickname === 'Bob' && scores[2].score === 12);
  });
});
