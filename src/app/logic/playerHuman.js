export class PlayerHuman {
  constructor(){
    this.playerAnswer = "";
    this.countAnswers = 0;
    this.correctAnswers = 0;
  }
  addAnswer(correct){
    if(correct){
      this.correctAnswers = this.correctAnswers + 1
    }
    this.countAnswers = this.countAnswers + 1;
  } 

  setAnswerOnQuestion(answer){
    this.playerAnswer = answer;
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
