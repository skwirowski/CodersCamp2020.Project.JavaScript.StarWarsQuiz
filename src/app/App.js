import { gameMode } from './gameMode';
import { redButton } from './redButton';
import { imageRecognizer } from './imageRecognizer';
import { mainMenu } from './components/mainMenu';
import { modalGameOver } from './components/modalGameOver';

const testDataHuman = {
  q1:{
    answer:"Test",
    correct: "Test", 
    isCorrect: true
  },
  correct: 1, 
  total: 1
};

const testDataComputer = {
  q1:{
    answer:"Test", 
    correct: "Test2", 
    isCorrect: false
  },
  correct: 0, 
  total: 1
}

export const App = ({ options }) => {
  gameMode('Who is this Character?');
  redButton('play the game');
  imageRecognizer('c3RhdGljL2Fzc2V0cy9pbWcvbW9kZXMvcGVvcGxlLzM2LmpwZw==');
  const getData = (element) => {
    return element;
  };
  mainMenu(document.querySelector('.swquiz-header'), getData);
  modalGameOver(testDataHuman,testDataComputer);
};
