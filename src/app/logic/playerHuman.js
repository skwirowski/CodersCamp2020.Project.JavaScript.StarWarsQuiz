export class PlayerHuman {
  constructor(){
    this.playerAnswer = [];
  }
  addAnswer(answer){
    this.playerAnswer.push(answer);
  } 
  
  getAnswer(){
    return this.playerAnswer
  }

  askQuestion(question, askedQuestion) {
    if (askedQuestion) {
      return askedQuestion(question);
    } else {
      throw new TypeError('Player should get question');
    }
  }

 /* answerOnQuestion(answer, answerdOnQuestion) {
    if (answerdOnQuestion) {
      answerdOnQuestion(answer);
    } else {
      throw new TypeError('Player should answer on asked question');
    }
  } */
}
