import { startTime } from './timer'
import { generateQuestion } from './generatingQuestions/generateQuestion' 
import { answersOnQuestion } from '../components/answersOnQuestion'
import { getGameMode } from '../modes'
import { imageRecognizer } from '../components/imageRecognizer' 

const quiz = (maxTime = 120000) =>{
    const startButton = document.querySelector('#red-button');
    let activeTarget
    startButton.addEventListener("click", function(){
        activeTarget = getGameMode()
        activeTarget === "Spaceships" ? activeTarget = "starships" : ""
        const rulesBox = document.querySelector('.game-rules-box')
        const ranking = document.querySelector('#ranking-box');
        if(ranking) ranking.style.display = "none"
        if(rulesBox) rulesBox.style.display = "none"
        startButton.style.display = "none"
        switchOfStyles(['.question', '.swquiz-game-footer', '.swquiz-game-footer-left',
        '.swquiz-game-footer-right', '#white-button', '.swquiz-app__image'])
        document.querySelector('.lds-ring').style.display = "block";
        document.querySelector('.swquiz-game').style.gridTemplateRows = "0.1fr 0.8fr"
        generateQuestion(activeTarget.toLocaleLowerCase()).then(res=> {
            startTime(maxTime);
            imageRecognizer(res.image);
            answersOnQuestion(res, activeTarget.toLocaleLowerCase());   
            document.querySelector('.question').style.display = "flex";
            document.querySelector('.lds-ring').style.display = "none";
        })
    })
}

const switchOfStyles = (arr) =>{
    arr.forEach(item=>{
        document.querySelector(item).style.display = "none"
    })
}


export { quiz, switchOfStyles };