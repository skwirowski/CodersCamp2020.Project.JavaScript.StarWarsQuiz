
import { isAnswerCorrect } from './components/isAnswerCorrect'
import { gameMode } from './gameMode'
import { redButton } from './redButton'
import { imageRecognizer } from './imageRecognizer'
import { mainMenu } from './components/mainMenu'
import { answersOnQuestion } from './components/answersOnQuestion'
import { startTime } from './logic/timer'
import { generateQuestion } from './logic/generatingQuestions/generateQuestion'
import { modalGameOver } from './components/modalGameOver';

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


const getData = (element) => {
  return element;
};

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
  modalGameOver(
    document.querySelector('#swquiz-app'),
    testDataHuman,
    testDataComputer,
    modalSubmitCallback,
  );
  startTime(options.quizMaxTime)
  generateQuestion('people').then(res=> console.log(res))
};
