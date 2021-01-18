import { doc } from 'prettier';
import { mainWindow } from './components/mainWindow';

export const App = ({ options }) => {
  mainWindow(options.quizMaxTime);
};
