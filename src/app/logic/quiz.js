import { startTime } from './timer'
import { generateQuestion } from './generatingQuestions/generateQuestion' 
import { answersOnQuestion } from '../components/answersOnQuestion'
import { getGameMode } from '../modes'
import { imageRecognizer } from '../imageRecognizer' 

const quiz = (maxTime = 120000) =>{
    const startButton = document.querySelector('#red-button');
    let activeTarget
    startButton.addEventListener("click", function(){
        activeTarget = getGameMode()
        activeTarget === "Spaceships" ? activeTarget = "starships" : ""
        const rulesBox = document.querySelector('.game-rules-box')
        const whiteButton = document.querySelector('#white-button')
        const defaultPhoto = document.querySelector('.swquiz-app__image')
        const ranking = document.querySelector('#ranking-box');
        if(ranking) ranking.style.display = "none"
        if(rulesBox) rulesBox.style.display = "none"
        startButton.style.display = "none"
        whiteButton.style.display = "none"
        defaultPhoto.style.display = "none"
        document.querySelector('.question').style.display = "none";
        document.querySelector('.swquiz-game-footer').style.display = "none"
        document.querySelector('.lds-ring').style.display = "block";
        
        generateQuestion(activeTarget.toLocaleLowerCase()).then(res=> {
            imageRecognizer(res.image);
            answersOnQuestion(res, activeTarget.toLocaleLowerCase());
            startTime(maxTime);
            document.querySelector('.question').style.display = "flex";
            document.querySelector('.lds-ring').style.display = "none";
        })
    })

}


export { quiz };