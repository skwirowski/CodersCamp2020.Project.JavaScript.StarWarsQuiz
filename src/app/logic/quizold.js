import { gameMode } from '../components/gameMode'
import { startTime } from './timer'
import { generateQuestion } from './generatingQuestions/generateQuestion' 
import { answersOnQuestion } from '../components/answersOnQuestion'
import { PlayerHuman } from '../logic/playerHuman'
import { isAnswerCorrect } from '../components/isAnswerCorrect'


//działa jak trzeba - no prawie, bo wywołuje tą funkcję wiele razy przy zmianie pozycji menu i odpala się wtedy ona od chuja razy
const quiz = (maxTime = 120000, target = "people") =>{
    const startButton = document.querySelector('#red-button');
    var activeTarget = target === "Spaceships" ?  "starships" : target; 
    startButton.addEventListener("click", async function(){
        console.log("Start rozgrywki")
        const player = new PlayerHuman;
        player.setAnswerOnQuestion("moja odpowiedź")
        player.playerAnswer = "inna"
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

        const askNextQuestion = (correctAnswer) =>{
            console.log(player.correctAnswers)
            console.log(player.countAnswers)
            if(start){
                let answerButtons = document.querySelector('.container-answers');
         /*       Array.from(answerButtons).filter(button => {
                    button.classList.contains('button--correct')
                }) */
                answerButtons.addEventListener("click", function(){
                    const chosenButton = document.getElementById('answers-container').querySelectorAll('.button--lighter');
                    for (let i = 0; i < chosenButton.length; i++) {
                       // console.log(chosenButton[i].value)                       
                        if(chosenButton[i].classList.contains('button--correct')){
                            console.log(isAnswerCorrect(chosenButton[i].value, correctAnswer))
                            console.log("prawidłowa!")
                            player.correctAnswers++
                        }
                    } 
                    player.countAnswers++
                    window.setTimeout(function(){
                        generateQuestion(activeTarget.toLocaleLowerCase()).then(async res=> {            
                      //      player.setAnswerOnQuestion(await answersOnQuestion(res.answers, res.rightAnswer))
                            player.playerAnswer = await answersOnQuestion(res.answers, res.rightAnswer)
                            askNextQuestion()
                        })
                    }, 2000);
                })
            //    answerButtons.removeEventListener("click");
            }
        }
       await generateQuestion(activeTarget.toLocaleLowerCase()).then(async res=> {            
         //  player.answerOnQuestion(answersOnQuestion(res.answers, res.rightAnswer))
           player.setAnswerOnQuestion(await answersOnQuestion(res.answers, res.rightAnswer)) // jak przypisać returna do zmiennej - musi poczekać na ta funkcję i dopiero
           //przypisać do zmiennej, jak to zrobić?
           console.log(res.rightAnswer);     
           askNextQuestion(res.rightAnswer)
        })
       // let answerButtons = document.querySelector('.container-answers');
       //let answerButtons = document.querySelector('.container-answers');

       // let answerButtons = document.querySelector('.container-answers');
       player.getAnswer()
       //askNextQuestion()
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