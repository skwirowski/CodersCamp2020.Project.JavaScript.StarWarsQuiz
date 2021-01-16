import { updateTimeText, timeLeftText } from '../components/timeLeftText'
import { lightSaber, updateSaber } from '../components/lightSaber'
import { modalGameOver } from '../components/modalGameOver'
import { playerAnswers, computerAnswers } from '../components/mainWindow'

const modalSubmitCallback = (e) => {
    e.preventDefault();
    console.log('MAY THE FORCE BE WITH YOU!');
    document.querySelector('.swquiz-modal').style.display = 'none';
};

export const startTime = (maxTime) => {
    if(maxTime <= 0) return;
    timeLeftText(maxTime);
    lightSaber(maxTime);
    const timer = setInterval(()=>{
        maxTime = maxTime - 1000;
        try {
            updateTimeText(maxTime);
            updateSaber(maxTime);
        }
        catch (err) {
            clearInterval(timer);
        }
        if(maxTime <= 0) {
            clearInterval(timer);
            modalGameOver(
                document.querySelector('#swquiz-app'),
                playerAnswers,
                computerAnswers,
                modalSubmitCallback,
            );
        }
    }, 1000)
}