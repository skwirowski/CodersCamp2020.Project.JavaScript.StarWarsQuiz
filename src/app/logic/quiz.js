import { gameMode } from '../components/gameMode'
import { startTime } from './timer'

const quiz = (maxTime) => {
    const startButton = document.querySelector('#red-button');
    //startButton.addEventListener("click", startGame(maxTime))
    startButton.addEventListener("click", function(){
        console.log("Start rozgrywki")
        startTime(maxTime)
    })
}

export { quiz };