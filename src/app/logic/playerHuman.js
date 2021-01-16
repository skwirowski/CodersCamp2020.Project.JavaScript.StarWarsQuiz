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
}
