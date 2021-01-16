import { getAnswer } from './gettingAnswer'
import { getImage } from './gettingImage'
import { getAvailableIds } from './gettingAvailableIds'

export const generateQuestion = async (mode) => {
    try {
        const availableIds = getAvailableIds(mode);
        const randomIds = getRandomIdsArray(availableIds);
        const rightAnswerIndex = Math.floor(Math.random() * randomIds.length);
        const answers = await getAnswers(mode, randomIds);
        const base64Image = await getImage(mode, randomIds[rightAnswerIndex]);
        console.log({image: base64Image,
            answers,
            rightAnswer: answers[rightAnswerIndex]})
        return {
            image: base64Image,
            answers,
            rightAnswer: answers[rightAnswerIndex]
        }

    } catch (error) {
        throw new Error(error)
    }
}


export const getAnswers = async (mode, idsArray) => {
    if (idsArray.length===0) throw new Error('No avaiable ids')
    const answers = [];
    for (const id of idsArray) {
        const data = await getAnswer(mode, id);
        answers.push(data.name);
    }
    return answers;
}

export const getRandomIdsArray = (availableIds) => {
    const randomIds = [];
    for (let i = 0; i < 4; i++) {
        let randomId = availableIds[Math.floor(Math.random() * availableIds.length)];
        if (randomIds.includes(randomId)) {
            i--;
            continue;
        }
        randomIds.push(randomId);
    }
    return randomIds;
}
