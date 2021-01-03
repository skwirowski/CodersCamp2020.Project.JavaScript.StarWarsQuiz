import {gameMode} from './gameMode'
import {redButton} from './redButton'
import {imageRecognizer} from './imageRecognizer'

export const App = ({options}) => {
    gameMode('Who is this Character?')
    redButton('play the game');
    imageRecognizer('c3RhdGljL2Fzc2V0cy9pbWcvbW9kZXMvcGVvcGxlLzM2LmpwZw==')
}
