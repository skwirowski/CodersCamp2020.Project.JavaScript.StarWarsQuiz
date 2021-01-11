import { updateTimeText, timeLeftText } from '../components/timeLeftText'
import { lightSaber, updateSaber } from '../components/lightSaber'

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
        if(maxTime <= 0) clearInterval(timer);
    }, 1000)
}