import { PlayerHuman } from '../../../src/app/logic/playerHuman';

describe('playerHuman logic checking', () => {
  const player = new PlayerHuman();
  let question;
  let answer;

  it('Player got a question, then askedQuestion should be called with question as parameter', () => {
    const askedQuestion = jest.fn();
    player.askQuestion(question, askedQuestion);
    expect(askedQuestion).toBeCalledWith(question);
  });

  it("Player didn't got a question, throw err - Player should get question", () => {
    try {
      expect(player.askQuestion()).toBeCalledWith(question);
    } catch (error) {
      expect(error.message).toBe('Player should get question');
    }
  });

  it('Player should answered on question, then answerdOnQuestion should be called with answer as parameter', () => {
    const answerdOnQuestion = jest.fn();
    player.answerOnQuestion(answer, answerdOnQuestion);
    expect(answerdOnQuestion).toBeCalledWith(answer);
  });

  it("Player didn't answered on question, throw err - Player should answer on asked question", () => {
    try {
      expect(player.answerOnQuestion()).toBeCalledWith(answer);
    } catch (error) {
      expect(error.message).toBe('Player should answer on asked question');
    }
  });
});
