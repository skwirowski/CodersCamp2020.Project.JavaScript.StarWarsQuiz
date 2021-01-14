import { gameMode } from '../components/gameMode'
import { startTime } from './timer'
import { generateQuestion } from './generatingQuestions/generateQuestion' 

const quiz = (maxTime, target) => {
    const startButton = document.querySelector('#red-button');
    var activeTarget = "People"; // za pierwszym razem musi mieć people
    startButton.addEventListener("click", function(){
        console.log("Start rozgrywki")
        startTime(maxTime)
        generateQuestion(activeTarget.toLocaleLowerCase()).then(res=> console.log(res))
    })
    var menu = document.querySelector(".swquiz-menu")
    menu.addEventListener("click", function(){
        //activeButton()
        activeTarget = activeButton() // teraz activeTarget ma wartość buttona z menu
        activeTarget === "Spaceships" ? activeTarget = "starships" : ''
        console.log(activeTarget)
    })
}

const activeButton = () =>{
    const buttons = document.querySelectorAll(".swquiz-menu-button")
      for(var i = 0; i<buttons.length; i++){
          if(buttons[i].classList.contains('active')){
              //console.log(buttons[i].innerText)
              return buttons[i].innerText
          }
      }
}

export { quiz };