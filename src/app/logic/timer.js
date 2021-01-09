import { updateTimeText, timeLeftText } from '../components/TimeLeftText'

let timeLeft;

export const startTime = (maxTime) => {
    timeLeftText(maxTime);
    timeLeft = maxTime;
    const timer = setInterval(()=>{
        maxTime = maxTime - 1000;
        try {
            updateTimeText(maxTime);
        }
        catch (err) {
            clearInterval(timer);
        }
        if(maxTime <= 0) clearInterval(timer);
    }, 1000)
}