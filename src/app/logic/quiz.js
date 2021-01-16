import { gameMode } from '../gameMode'
import { startTime } from './timer'
import { generateQuestion } from './generatingQuestions/generateQuestion' 
import { answersOnQuestion } from '../components/answersOnQuestion'
import { PlayerHuman } from '../logic/playerHuman'
import { isAnswerCorrect } from '../components/isAnswerCorrect'
import { playerAnswers } from '../components/mainWindow'
import { modalGameOver } from '../components/modalGameOver'
import { getGameMode } from '../modes'
import { imageRecognizer } from '../imageRecognizer' 
//działa jak trzeba - no prawie, bo wywołuje tą funkcję wiele razy przy zmianie pozycji menu i odpala się wtedy ona od chuja razy
const quiz = (maxTime = 120000) =>{
    const startButton = document.querySelector('#red-button');
    let activeTarget
    startButton.addEventListener("click", function(){
        activeTarget = getGameMode()
        activeTarget === "Spaceships" ? activeTarget = "starships" : ""
        const rulesBox = document.querySelector('.game-rules-box')
        const whiteButton = document.querySelector('#white-button')
        const defaultPhoto = document.querySelector('.swquiz-app__image')
        rulesBox.style.display = "none"
        startButton.style.display = "none"
        whiteButton.style.display = "none"
        defaultPhoto.style.display = "none"

        startTime(maxTime);
        generateQuestion(activeTarget.toLocaleLowerCase()).then(res=> {
            imageRecognizer(res.image)
            answersOnQuestion(res.answers, res.rightAnswer, '', activeTarget.toLocaleLowerCase(), res.image)
        })
    })

}


export { quiz };