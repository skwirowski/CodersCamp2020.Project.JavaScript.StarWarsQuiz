import { gameMode } from '../components/gameMode'
import { startTime } from './timer'
import { generateQuestion } from './generatingQuestions/generateQuestion' 
import { answersOnQuestion } from '../components/answersOnQuestion'

/*const quiz = (element) =>{
    console.log(element)
    return element;
} */
const quiz = (maxTime = 12000, target = "people") =>{
    var activeTarget = target === "Spaceships" ?  "starships" : target; 
    console.log("Start rozgrywki")
    startTime(maxTime)
        const timer = setInterval(()=>{
            maxTime = maxTime - 1000;
            if(maxTime <= 0) {clearInterval(timer)
            console.log("koniec gry")};
        }, 1000)
        generateQuestion(activeTarget.toLocaleLowerCase()).then(res=> {
           answersOnQuestion(res.answers, res.rightAnswer)
           console.log(res.rightAnswer);
        })
}
//działa jak trzeba - no prawie, bo wywołuje tą funkcję wiele razy przy zmianie pozycji menu i odpala się wtedy ona od chuja razy
/*const quiz = (maxTime = 120000, target = "people") =>{
    const startButton = document.querySelector('#red-button');
    var activeTarget = target === "Spaceships" ?  "starships" : target; 
    startButton.addEventListener("click", function(){
        console.log("Start rozgrywki")
       // let answered = false;
        startTime(maxTime)
        const timer = setInterval(()=>{
            maxTime = maxTime - 1000;
            if(maxTime <= 0) {clearInterval(timer)
            console.log("koniec gry")};
        }, 1000)
        generateQuestion(activeTarget.toLocaleLowerCase()).then(res=> {
           answersOnQuestion(res.answers, res.rightAnswer)
           console.log(res.rightAnswer);
        })
       // answersOnQuestion(['Luke', 'Angel', 'Becka', 'John'], 'John');
    })
    console.log(maxTime + " " +activeTarget)
}  */

/*
const quiz = (maxTime, target) => {
    const startButton = document.querySelector('#red-button');
    var activeTarget = "People"; // za pierwszym razem musi mieć people
    startButton.addEventListener("click", function(){
        console.log("Start rozgrywki")
       // let answered = false;
        startTime(maxTime)
        const timer = setInterval(()=>{
            maxTime = maxTime - 1000;
            if(maxTime <= 0) {clearInterval(timer)
            console.log("koniec gry")};
        }, 1000)
        generateQuestion(activeTarget.toLocaleLowerCase()).then(res=> {
           answersOnQuestion(res.answers, res.rightAnswer)
           console.log(res.rightAnswer);
        })
       // answersOnQuestion(['Luke', 'Angel', 'Becka', 'John'], 'John');
    })
    var menu = document.querySelector(".swquiz-menu")
    menu.addEventListener("click", function(){
        //activeButton()
        activeTarget = activeButton() // teraz activeTarget ma wartość buttona z menu
        activeTarget === "Spaceships" ? activeTarget = "starships" : ''
       // console.log(activeTarget)
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
} */

export { quiz };