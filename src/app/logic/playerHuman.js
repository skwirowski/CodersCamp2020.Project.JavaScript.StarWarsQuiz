export class PlayerHuman {
  askQuestion(question, askedQuestion) {
    if (askedQuestion) {
      return askedQuestion(question);
    } else {
      throw new TypeError('Player should get question');
    }
  }

  answerOnQuestion(answer, answerdOnQuestion) {
    if (answerdOnQuestion) {
      answerdOnQuestion(answer);
    } else {
      throw new TypeError('Player should answer on asked question');
    }
  }
}
