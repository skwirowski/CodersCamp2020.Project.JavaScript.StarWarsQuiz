import { gameMode } from '../components/gameMode'
import { startTime } from './timer'
import { mainMenu } from '../components/mainMenu'

const quiz = (maxTime, target) => {
    const startButton = document.querySelector('#red-button');
  /*  const getData = (element) => {
        console.log(element.innerText)
        return element;
      };
    mainMenu(document.querySelector('.swquiz-header'), getData); */
    console.log(target)
    
    //startButton.addEventListener("click", startGame(maxTime))
    startButton.addEventListener("click", function(){
        console.log("Start rozgrywki")
        startTime(maxTime)
    })
}

export { quiz };