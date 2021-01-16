import { generateQuestion } from '../logic/generatingQuestions/generateQuestion'
import { PlayerHuman } from '../logic/playerHuman'
import { playerAnswers, computerAnswers } from './mainWindow'
import { isAnswerCorrect } from '../components/isAnswerCorrect'
import { imageRecognizer } from '../imageRecognizer';
import { playerComputer } from '../logic/playerComputer'


let nextQuestion = {};
let computerPlayer = new playerComputer
//export const answersOnQuestion = (answers, correctAnswer, checkingAnswer, target, firstImage) => {
export const answersOnQuestion = (answerObject, target) => {    
    const app = document.querySelector('#swquiz-game-body');
   /* player.countAnswers = player.countAnswers++
    console.log("Przekazany obiekt " + player.countAnswers) */
    const container = document.createElement('div');
    container.setAttribute('id', 'answers-container');
    container.setAttribute('data-testid', 'answers-container');
    container.setAttribute('class', 'container-answers');
    let chosenAnswer;
    let ids = ['firstAnswer', 'secondAnswer', 'thirdAnswer', 'fourthAnswer'];
    let buttons = ids.map((idString, index) => {
      let button = document.createElement('input');
      button.setAttribute('type', 'button');
      button.setAttribute('id', idString);
      button.setAttribute('data-testid', idString);
      button.setAttribute('class', 'button button--lighter');
      button.setAttribute('value', `${answerObject.answers[index]}`);
      return button;
    });
    
    buttons.forEach((element) => {
      container.appendChild(element);
    });
    app.appendChild(container);

    const chosenButton = document.getElementById('answers-container').querySelectorAll('.button--lighter');
    chosenButton.forEach(button=>{
        button.addEventListener('click', function(){
            chosenAnswer = button.value;
            let returnImage = answerObject.image || nextQuestion.image
            playerAnswers.push({answer: chosenAnswer, correct: answerObject.rightAnswer, isCorrect: isAnswerCorrect(chosenAnswer, answerObject.rightAnswer), img:`data:image/png;base64,${returnImage}`})
           // computerAnswers.push(computerPlayer.chooseRandom(answerObject.answers))
            let computerAnswer;
            computerAnswer = computerPlayer.chooseRandom(answerObject.answers)
            computerAnswers.push({answer: computerAnswer, correct: answerObject.rightAnswer, isCorrect: isAnswerCorrect(computerAnswer, answerObject.rightAnswer), img:`data:image/png;base64,${returnImage}`})
            if (answerObject.rightAnswer === chosenAnswer) {
                button.classList.add('button--correct');
            } 
            else {
                button.classList.add('button--wrong');
            }
            window.setTimeout(function(){
                container.remove();
                answersOnQuestion(nextQuestion, target)
                imageRecognizer(nextQuestion.image)
             console.log(nextQuestion.image)
            }, 1000);

            generateQuestion(target).then(res=> {
                nextQuestion = res;
            })
            button.removeEventListener('click')
        })
    })
    

   /* for (let i = 0; i < chosenButton.length; i++) {
        chosenButton[i].onclick = checkingAnswer = () => {
            chosenAnswer = chosenButton[i].value;

            if (correctAnswer === chosenAnswer) {
                chosenButton[i].classList.add('button--correct');
                window.setTimeout(function(){
                    container.remove()
                 }, 1900);
            } else {
                chosenButton[i].classList.add('button--wrong');
                window.setTimeout(function(){
                       container.remove()
                   }, 1900);
            }
            window.setTimeout(function(){
                generateQuestion(target).then(res=> {
                    answersOnQuestion(res.answers, res.rightAnswer, '', target)
                })
            }, 1900)
        }
    } */
    
}