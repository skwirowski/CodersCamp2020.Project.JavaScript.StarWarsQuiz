
import { isAnswerCorrect } from './components/isAnswerCorrect'
import { gameMode } from './components/gameMode'
import { redButton } from './redButton'
import { imageRecognizer } from './imageRecognizer'
import { mainMenu } from './components/mainMenu'
import { answersOnQuestion } from './components/answersOnQuestion'
import { generateQuestion } from './logic/generatingQuestions/generateQuestion'
import { modalGameOver } from './components/modalGameOver';
import { quiz } from './logic/quiz'
import { PlayerHuman } from './logic/playerHuman'


export const playerAnswers = [];
export const player1 = new PlayerHuman
let target;
const getData = (element) => {
  target = element.innerText;
  return element;
}

const modalSubmitCallback = (e) => {
  e.preventDefault();
  console.log('MAY THE FORCE BE WITH YOU!');
  document.querySelector('.swquiz-modal').style.display = 'none';
};

export const App = ({ options }) => {
  gameMode('Who is this Character?');
  redButton('play the game');
  imageRecognizer('c3RhdGljL2Fzc2V0cy9pbWcvbW9kZXMvcGVvcGxlLzM2LmpwZw==');

  mainMenu(document.querySelector('.swquiz-header'), getData);
 /*const startButton = document.querySelector('#red-button');
 startButton.addEventListener("click", function(){ */
   quiz(options.quizMaxTime, target)
 //}) 
 /* modalGameOver(
    document.querySelector('#swquiz-app'),
    testDataHuman,
    testDataComputer,
    modalSubmitCallback,
  ); */
  //quiz(options.quizMaxTime)
  //generateQuestion('starships').then(res=> console.log(res))
};
