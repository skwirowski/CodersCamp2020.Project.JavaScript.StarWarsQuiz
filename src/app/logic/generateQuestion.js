const STARSHIPS_IDS = [5, 9, 10, 11, 12, 13, 15, 21, 22, 23, 27, 28, 29, 31, 39, 40, 41, 43, 47, 48];
const VEHICLES_IDS = [4, 6, 7, 8, 14, 16, 18, 20, 24, 25, 26, 30, 33, 34, 35, 36, 37, 38, 42];
const PEOPLES_IDS = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83];

import { getAnswer } from './gettingAnswer'

const getAnswers = async (mode, idsArray) => {
    const answers = [];
    for (const id of idsArray) {
        const data = await getAnswer(mode, id);
        answers.push(data.name);
    }
    return answers;
}

export const getImage = async (mode, id) => {
    const image = await fetch(`static/assets/img/modes/${mode}/${id}.jpg`)
    const blob = await image.blob();
    return Buffer.from(await blob.arrayBuffer()).toString('base64');
}

export const getRandomIdsArray = (avibleIds) => {
    const randomIds = [];
    for (let i = 0; i < 4; i++) {
        let randomId = avibleIds[Math.floor(Math.random() * avibleIds.length)];
        if (randomIds.includes(randomId)) {
            i--;
            continue;
        }
        randomIds.push(randomId);
    }
    return randomIds;
}

const getAvibleIds = (mode) => {
    switch (mode) {
        case 'people':
            return PEOPLES_IDS;
        case 'starships':
            return STARSHIPS_IDS;
        case 'vehicles':
            return VEHICLES_IDS;
        default:
            return console.log('mode is incorrect')
    }
}


export const generateQuestion = async (mode) => {
    const avibleIds = getAvibleIds(mode);
    if(!avibleIds) return;
    try {
        const randomIds = getRandomIdsArray(avibleIds);
        const rightAnswerIndex = Math.floor(Math.random() * randomIds.length);
        const answers = await getAnswers(mode, randomIds);
        base64Image = await getImage(mode, randomIds[rightAnswerIndex]);
        return {
            image: base64Image,
            answers,
            rightAnswer: answers[rightAnswerIndex]
        }

    } catch (error) {
        console.log(error);
    }
}
