const CONSTANT_TEXT = 'Time Left: ';

export const timeLeftText = (maxTime) => {
    const timeText = document.createElement('div')
    timeText.classList.add('timer-text');
    timeText.setAttribute('data-testid', 'timer-text');
    timeText.textContent = CONSTANT_TEXT + convertTime(maxTime);
    try {
        document.querySelector('#swquiz-app .swquiz-row').appendChild(timeText);
    } catch (err)  {
        throw new Error('Can not attach time left text')
    }
}

export const updateTimeText = (newTime) => {
    const textTime = document.querySelector('.timer-text');
    if(!textTime) {
        throw new Error('There is not time text element');
    } 
    textTime.textContent = CONSTANT_TEXT + convertTime(newTime);
}

export const convertTime = (timeInMilisec) => {
  const minutes = Math.floor(timeInMilisec / 60000);
  const seconds = ((timeInMilisec % 60000) / 1000).toFixed(0);
  return minutes + "m " + (seconds < 10 ? '0' : '') + seconds + "s";
}