export const answersOnQuestion = (answers, correctAnswer, checkingAnswer) => {
    const app = document.querySelector('#swquiz-app');
    const container = document.createElement('div');
    const firstAnswer = document.createElement('input');
    const secondAnswer = document.createElement('input');
    const thirdAnswer = document.createElement('input');
    const fourthAnswer = document.createElement('input');

    container.setAttribute('id', 'answers-container');
    container.setAttribute('class', 'container-answers');

    firstAnswer.setAttribute('type', 'button');
    firstAnswer.setAttribute('class', 'button button--lighter');
    firstAnswer.setAttribute('value', `${answers[0]}`);
    secondAnswer.setAttribute('type', 'button');
    secondAnswer.setAttribute('class', 'button button--lighter');
    secondAnswer.setAttribute('value', `${answers[1]}`);
    thirdAnswer.setAttribute('type', 'button');
    thirdAnswer.setAttribute('class', 'button button--lighter');
    thirdAnswer.setAttribute('value', `${answers[2]}`);
    fourthAnswer.setAttribute('type', 'button');
    fourthAnswer.setAttribute('class', 'button button--lighter');
    fourthAnswer.setAttribute('value', `${answers[3]}`);

    container.appendChild(firstAnswer);
    container.appendChild(secondAnswer);
    container.appendChild(thirdAnswer);
    container.appendChild(fourthAnswer);

    app.appendChild(container);


    
}