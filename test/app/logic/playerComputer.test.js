import { playerComputer } from '../../../src/app/logic/playerComputer';

describe("Checks logic for player Computer", () => {
    const player = new playerComputer();
    let question;
    let answer;

    it("Player got a question, then askedQuestion should be called with question as parameter", () => {
        const askedQuestion = jest.fn();
        player.askQuestion(question, askedQuestion);
        expect(askedQuestion).toBeCalledWith(question);
    });

    it("Player didn't got a question, throw err - Player should get question", () => {
        try {
            expect(player.askQuestion()).toBeCalledWith(question);
        } catch (error) {
            expect(error.message).toBe('Player -computer- should get question');
        }
    });

    it("Player should answered on question, then answerdOnQuestion should be called with answer as parameter", () => {
        const answeredQuestion = jest.fn();
        player.answerQuestion(answer, answeredQuestion);
        expect(answeredQuestion).toBeCalledWith(answer);
    });

    it("Player didn't answered on question, throw err - Player should answer on asked question", () => {
        try {
            expect(player.answerQuestion()).toBeCalledWith(answer);
        } catch (error) {
            expect(error.message).toBe('Player -computer- should generate random answer');
        }
    });
});