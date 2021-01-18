import { doc } from 'prettier';
import { mainWindow } from './components/mainWindow';
import {modalGameOver} from './components/modalGameOver';
import { playerAnswers, computerAnswers } from './components/mainWindow'


export const App = ({ options }) => {
  mainWindow(options.quizMaxTime);
//   modalGameOver(
//     document.querySelector('#swquiz-app'),
//     playerAnswers,
//     computerAnswers,
//     function(){},
// );
};
