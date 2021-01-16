import { gameMode } from '../gameMode'
import { startTime } from './timer'
import { generateQuestion } from './generatingQuestions/generateQuestion' 
import { answersOnQuestion } from '../components/answersOnQuestion'
import { PlayerHuman } from '../logic/playerHuman'
import { isAnswerCorrect } from '../components/isAnswerCorrect'
import { playerAnswers } from '../components/mainWindow'
import { modalGameOver } from '../components/modalGameOver'

const testDataHuman = {
    q1: {
      answer: 'Test',
      correct: 'Test',
      isCorrect: true,
      img: '../../static/assets/img/modes/people/1.jpg',
    },
    q2: {
      answer: 'Test',
      correct: 'Test',
      isCorrect: true,
      img: '../../static/assets/img/modes/people/10.jpg',
    },
    q3: {
      answer: 'Test',
      correct: 'Test',
      isCorrect: true,
      img: '../../static/assets/img/modes/people/10.jpg',
    },
    q4: {
      answer: 'Test',
      correct: 'Test',
      isCorrect: true,
      img: '../../static/assets/img/modes/people/10.jpg',
    },
    correct: 1,
    total: 2,
  };
  
  
  const testDataComputer = {
    q1: {
      answer: 'Test2',
      correct: 'Test',
      isCorrect: false,
      img: '../../static/assets/img/modes/people/1.jpg',
    },
    q2: {
      answer: 'Test2',
      correct: 'Test',
      isCorrect: false,
      img: '../../static/assets/img/modes/people/10.jpg',
    },
    q3: {
      answer: 'Test',
      correct: 'Test',
      isCorrect: true,
      img: '../../static/assets/img/modes/people/10.jpg',
    },
    q4: {
      answer: 'Test',
      correct: 'Test',
      isCorrect: true,
      img: '../../static/assets/img/modes/people/10.jpg',
    },
    correct: 0,
    total: 2,
  };

  const modalSubmitCallback = (e) => {
    e.preventDefault();
    console.log('MAY THE FORCE BE WITH YOU!');
    document.querySelector('.swquiz-modal').style.display = 'none';
  };
//działa jak trzeba - no prawie, bo wywołuje tą funkcję wiele razy przy zmianie pozycji menu i odpala się wtedy ona od chuja razy
const quiz = (maxTime = 120000, target = "people") =>{
    const startButton = document.querySelector('#red-button');
    var activeTarget = target === "Spaceships" ?  "starships" : target; 
    startButton.addEventListener("click", function(){
        startTime(maxTime) 
        const timer = setInterval(()=>{
            maxTime = maxTime - 1000;
            if(maxTime <= 0) {
                clearInterval(timer)
               // player1.getAnswer() // tutaj nie ;d
               console.log(playerAnswers) // tutaj wyświetla dobrze
                console.log("koniec gry")
                modalGameOver(
                    document.querySelector('#swquiz-app'),
                    testDataHuman,
                    testDataComputer,
                    modalSubmitCallback,
                  );
            };
        }, 1000)
        generateQuestion(activeTarget.toLocaleLowerCase()).then(res=> {
            answersOnQuestion(res.answers, res.rightAnswer, '', activeTarget.toLocaleLowerCase())
        })
    })

}


export { quiz };