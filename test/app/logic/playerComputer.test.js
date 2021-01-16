import { playerComputer } from '../../../src/app/logic/playerComputer';

describe("Correct computer random answer", () => {
    const player = new playerComputer();
    it("Correct random answer", () => {
        const answers = ['abc', 'def', 'ghi', 'jkl'];
        const randomAnswer  = player.chooseRandom(answers);
        expect((answers).includes(randomAnswer)).toBe(true);
    });
});