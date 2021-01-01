import { mainMenu } from './components/mainMenu.js';
import { redButton } from './redButton';

export const App = ({ options }) => {
  const getData = (element) => {
    return element;
  };
  mainMenu(document.querySelector('.swquiz-header'), getData);
  redButton('play the game');
};
