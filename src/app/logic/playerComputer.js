export class playerComputer {
    //possibleAnswers should be array type
    chooseRandom(possibleAnswers) {
        let random = Math.floor(Math.random() * (3 - 0 + 1)) + 0;
        let computerAnswer = possibleAnswers[random];
        return computerAnswer;
    }

    askQuestion(question, askedQuestion) {
        if(askedQuestion) {
            return askedQuestion(question);
        } else {
            throw new TypeError('Player -computer- should get question');
        }
    }

    //answer should be equal to newplayer.chooseRandom(array with possible answers)
    answerQuestion(answer, answeredQuestion) {
        if(answeredQuestion) {
            answeredQuestion(answer);
        } else {
            throw new TypeError('Player -computer- should generate random answer');
        }
    }
}
