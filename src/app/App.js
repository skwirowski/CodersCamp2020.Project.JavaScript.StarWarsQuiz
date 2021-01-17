import { doc } from 'prettier';
import { startTime } from './logic/timer';
import { generateQuestion } from './logic/generatingQuestions/generateQuestion';
import { modalGameOver } from './components/modalGameOver';
import { mainWindow } from './components/mainWindow';

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

export const App = ({ options }) => {
  mainWindow(options.quizMaxTime);
};
