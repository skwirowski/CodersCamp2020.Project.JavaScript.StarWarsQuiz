import { generateQuestion } from '../logic/generatingQuestions/generateQuestion'
import { PlayerHuman } from '../logic/playerHuman'
import { playerAnswers } from './mainWindow'
import { isAnswerCorrect } from '../components/isAnswerCorrect'


let nextQuestion = {};

export const answersOnQuestion = (answers, correctAnswer, checkingAnswer, target) => {
    const app = document.querySelector('#swquiz-app');
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
      button.setAttribute('value', `${answers[index]}`);
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
            playerAnswers.push({ans: chosenAnswer, truthy: isAnswerCorrect(chosenAnswer, correctAnswer)})


            if (correctAnswer === chosenAnswer) {
                button.classList.add('button--correct');
            } 
            else {
                button.classList.add('button--wrong');
            }
            
            window.setTimeout(function(){
                container.remove();
                answersOnQuestion(nextQuestion.answers, nextQuestion.rightAnswer, '', target)
            }, 1000);

            generateQuestion(target).then(res=> {
                nextQuestion = res;
            })
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