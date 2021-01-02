export class playerHuman {
    askQuestion(question, askedQuestion) {
        if(askedQuestion) {
            return askedQuestion(question);
        } else {
            throw new TypeError('Player should ask question');
        }
    }

    answerOnQuestion(answer, answerdOnQuestion) {
        if(answerdOnQuestion) {
            answerdOnQuestion(answer);
        } else {
            throw new TypeError('Player should answer on asked question');
        }
    }
}