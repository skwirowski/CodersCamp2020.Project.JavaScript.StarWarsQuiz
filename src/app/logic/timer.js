import { updateTimeText, timeLeftText } from '../components/timeLeftText'
import { lightSaber, updateSaber } from '../components/lightSaber'
import { modalGameOver } from '../components/modalGameOver'

const modalSubmitCallback = (e) => {
    e.preventDefault();
    console.log('MAY THE FORCE BE WITH YOU!');
    document.querySelector('.swquiz-modal').style.display = 'none';
};

const testDataHuman = {
    q1: {
      answer: 'Test',
      correct: 'Test',
      isCorrect: true,
      img: '../../static/assets/img/modes/people/1.jpg',
    },
    q2: {
      answer: 'Test',
      correct: 'Test',
      isCorrect: true,
      img: '../../static/assets/img/modes/people/10.jpg',
    },
    q3: {
      answer: 'Test',
      correct: 'Test',
      isCorrect: true,
      img: '../../static/assets/img/modes/people/10.jpg',
    },
    q4: {
      answer: 'Test',
      correct: 'Test',
      isCorrect: true,
      img: '../../static/assets/img/modes/people/10.jpg',
    },
    correct: 1,
    total: 2,
  };
  
  
  const testDataComputer = {
    q1: {
      answer: 'Test2',
      correct: 'Test',
      isCorrect: false,
      img: '../../static/assets/img/modes/people/1.jpg',
    },
    q2: {
      answer: 'Test2',
      correct: 'Test',
      isCorrect: false,
      img: '../../static/assets/img/modes/people/10.jpg',
    },
    q3: {
      answer: 'Test',
      correct: 'Test',
      isCorrect: true,
      img: '../../static/assets/img/modes/people/10.jpg',
    },
    q4: {
      answer: 'Test',
      correct: 'Test',
      isCorrect: true,
      img: '../../static/assets/img/modes/people/10.jpg',
    },
    correct: 0,
    total: 2,
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
                testDataHuman,
                testDataComputer,
                modalSubmitCallback,
            );

        }
    }, 1000)
}