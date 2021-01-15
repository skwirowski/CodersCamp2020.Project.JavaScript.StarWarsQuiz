import { gameMode } from '../components/gameMode'
import { startTime } from './timer'
import { generateQuestion } from './generatingQuestions/generateQuestion' 
import { answersOnQuestion } from '../components/answersOnQuestion'
import { PlayerHuman } from '../logic/playerHuman'


//działa jak trzeba - no prawie, bo wywołuje tą funkcję wiele razy przy zmianie pozycji menu i odpala się wtedy ona od chuja razy
const quiz = (maxTime = 120000, target = "people") =>{
    const startButton = document.querySelector('#red-button');
    var activeTarget = target === "Spaceships" ?  "starships" : target; 
    startButton.addEventListener("click", async function(){
        console.log("Start rozgrywki")
        const player = new PlayerHuman;
        player.answerOnQuestion("moja odpowiedź")
        console.log(player.getAnswer());
        startTime(maxTime)
        let start = true;
        const timer = setInterval(()=>{
            maxTime = maxTime - 1000;
            
            if(maxTime <= 0) {
            clearInterval(timer)
            start = false;
            console.log("koniec gry")};
        }, 1000)
        const getPlayerAnswer=(element)=>{
            console.log(element)
            return element
        }
       await generateQuestion(activeTarget.toLocaleLowerCase()).then(res=> {            
         //  player.answerOnQuestion(answersOnQuestion(res.answers, res.rightAnswer))
           answersOnQuestion(res.answers, res.rightAnswer, '', getPlayerAnswer) // jak przypisać returna do zmiennej - musi poczekać na ta funkcję i dopiero
           //przypisać do zmiennej, jak to zrobić?
           console.log(res.rightAnswer);     
        })
       // let answerButtons = document.querySelector('.container-answers');
       //let answerButtons = document.querySelector('.container-answers');
        const askNextQuestion = () =>{
            if(start){
                let answerButtons = document.querySelector('.container-answers');
                answerButtons.addEventListener("click", function(){
                    window.setTimeout(function(){
                        generateQuestion(activeTarget.toLocaleLowerCase()).then(res=> {            
                            answersOnQuestion(res.answers, res.rightAnswer, '', getPlayerAnswer)
                            askNextQuestion()
                        })
                    }, 2000);
                })
            //    answerButtons.removeEventListener("click");
            }
        }
       // let answerButtons = document.querySelector('.container-answers');
       askNextQuestion()
       ///działa
      /*  answerButtons.addEventListener("click", function(){
            window.setTimeout(function(){
                generateQuestion(activeTarget.toLocaleLowerCase()).then(res=> {            
                    player.answerOnQuestion(answersOnQuestion(res.answers, res.rightAnswer))  
                 })
                 askNextQuestion()
            }, 2000);
        }) */
       // answersOnQuestion(['Luke', 'Angel', 'Becka', 'John'], 'John');
    })
    console.log(maxTime + " " +activeTarget)
}  


export { quiz };