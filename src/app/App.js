import { isAnswerCorrect } from './components/isAnswerCorrect'
import { gameMode } from './gameMode'
import { redButton } from './redButton'
import { imageRecognizer } from './imageRecognizer'
import { mainMenu } from './components/mainMenu'
import { generateQuestion } from './logic/generatingQuestions/generateQuestion'


export const App = ({options}) => {
    gameMode('Who is this Character?')
    redButton('play the game');
    imageRecognizer('c3RhdGljL2Fzc2V0cy9pbWcvbW9kZXMvcGVvcGxlLzM2LmpwZw==')
    const getData = (element) => {
      return element;
    };
    mainMenu(document.querySelector('.swquiz-header'), getData);
    generateQuestion('people').then(res=> console.log(res))
}

