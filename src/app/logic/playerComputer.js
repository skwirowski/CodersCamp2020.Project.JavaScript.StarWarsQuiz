export class playerComputer {
    //possibleAnswers should be array type
    chooseRandom(possibleAnswers) {
        let min = 0;
        let max = 3;
        let random = Math.floor(Math.random() * (max - min + 1)) + min;
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
