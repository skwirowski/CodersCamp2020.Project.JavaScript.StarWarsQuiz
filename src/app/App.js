import { gameMode } from './gameMode';
import { redButton } from './redButton';
import { mainMenu } from './components/mainMenu';

export const App = ({ options }) => {
  gameMode('Who is this Character?');
  redButton('play the game');
  const getData = (element) => {
    return element;
  };
  mainMenu(document.querySelector('.swquiz-header'), getData);
};
