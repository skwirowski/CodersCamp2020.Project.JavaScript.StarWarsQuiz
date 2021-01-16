export class playerComputer {
    chooseRandom(possibleAnswers) {
        let random = Math.floor(Math.random() * 4) + 0;
        let computerAnswer = possibleAnswers[random];
        return computerAnswer;
    }
}
