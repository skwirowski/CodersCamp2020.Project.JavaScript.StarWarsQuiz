import { gameMode } from '../gameMode'
import { startTime } from './timer'
import { generateQuestion } from './generatingQuestions/generateQuestion' 
import { answersOnQuestion } from '../components/answersOnQuestion'
import { PlayerHuman } from '../logic/playerHuman'
import { isAnswerCorrect } from '../components/isAnswerCorrect'
import { playerAnswers } from '../components/mainWindow'
import { modalGameOver } from '../components/modalGameOver'
import { getGameMode } from '../modes'


  // const modalSubmitCallback = (e) => {
  //   e.preventDefault();
  //   console.log('MAY THE FORCE BE WITH YOU!');
  //   document.querySelector('.swquiz-modal').style.display = 'none';
  // };
//działa jak trzeba - no prawie, bo wywołuje tą funkcję wiele razy przy zmianie pozycji menu i odpala się wtedy ona od chuja razy
const quiz = (maxTime = 120000) =>{
    const startButton = document.querySelector('#red-button');
    let activeTarget
    startButton.addEventListener("click", function(){
        activeTarget = getGameMode()
        activeTarget === "Spaceships" ? activeTarget = "starships" : ""
        console.log(activeTarget)
        startTime(maxTime);
        generateQuestion(activeTarget.toLocaleLowerCase()).then(res=> {
            answersOnQuestion(res.answers, res.rightAnswer, '', activeTarget.toLocaleLowerCase())
        })
    })

}


export { quiz };