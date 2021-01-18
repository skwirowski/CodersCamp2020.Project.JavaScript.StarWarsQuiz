import { doc } from 'prettier';
import { startTime } from './logic/timer';
import { generateQuestion } from './logic/generatingQuestions/generateQuestion';
import { modalGameOver } from './components/modalGameOver';
import { computerAnswers, mainWindow, playerAnswers } from './components/mainWindow';

const testDataHuman = [
  {
    answer: 'Test',
    correct: 'Test',
    isCorrect: true,
    img: '../../static/assets/img/modes/people/1.jpg',
  },
  {
    answer: 'Test',
    correct: 'Test',
    isCorrect: true,
    img: '../../static/assets/img/modes/people/10.jpg',
  },
  {
    answer: 'Test',
    correct: 'Test',
    isCorrect: true,
    img: '../../static/assets/img/modes/people/10.jpg',
  },
  {
    answer: 'Test',
    correct: 'Test',
    isCorrect: true,
    img: '../../static/assets/img/modes/people/10.jpg',
  },  
];

const testDataComputer = [
  {
    answer: 'Test2',
    correct: 'Test',
    isCorrect: false,
    img: '../../static/assets/img/modes/people/1.jpg',
  },
  {
    answer: 'Test2',
    correct: 'Test',
    isCorrect: false,
    img: '../../static/assets/img/modes/people/10.jpg',
  },
  {
    answer: 'Test',
    correct: 'Test',
    isCorrect: true,
    img: '../../static/assets/img/modes/people/10.jpg',
  },
  {
    answer: 'Test',
    correct: 'Test',
    isCorrect: true,
    img: '../../static/assets/img/modes/people/10.jpg',
  },
];


const modalSubmitCallback = (e) => {
  e.preventDefault();
  console.log('MAY THE FORCE BE WITH YOU!');
  document.querySelector('.swquiz-modal').style.display = 'none';
};

export const App = ({ options }) => {
  mainWindow(options.quizMaxTime);
};
