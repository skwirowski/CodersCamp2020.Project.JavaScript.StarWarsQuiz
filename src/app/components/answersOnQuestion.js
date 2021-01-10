export const answersOnQuestion = (answers, correctAnswer, checkingAnswer) => {
    const app = document.querySelector('#swquiz-app');
    const container = document.createElement('div');
    const firstAnswer = document.createElement('input');
    const secondAnswer = document.createElement('input');
    const thirdAnswer = document.createElement('input');
    const fourthAnswer = document.createElement('input');
    let chosenAnswer;
    container.setAttribute('id', 'answers-container');
    container.setAttribute('data-testid', 'answers-container');
    container.setAttribute('class', 'container-answers');

    firstAnswer.setAttribute('type', 'button');
    firstAnswer.setAttribute('id', 'firstAnswer');
    firstAnswer.setAttribute('data-testid', 'firstAnswer');
    firstAnswer.setAttribute('class', 'button button--lighter');
    firstAnswer.setAttribute('value', `${answers[0]}`);
    secondAnswer.setAttribute('type', 'button');
    secondAnswer.setAttribute('id', 'secondAnswer');
    secondAnswer.setAttribute('data-testid', 'secondAnswer');
    secondAnswer.setAttribute('class', 'button button--lighter');
    secondAnswer.setAttribute('value', `${answers[1]}`);
    thirdAnswer.setAttribute('type', 'button');
    thirdAnswer.setAttribute('id', 'thirdAnswer');
    thirdAnswer.setAttribute('data-testid', 'thirdAnswer');
    thirdAnswer.setAttribute('class', 'button button--lighter');
    thirdAnswer.setAttribute('value', `${answers[2]}`);
    fourthAnswer.setAttribute('type', 'button');
    fourthAnswer.setAttribute('id', 'fourthAnswer');
    fourthAnswer.setAttribute('data-testid', 'fourthAnswer');
    fourthAnswer.setAttribute('class', 'button button--lighter');
    fourthAnswer.setAttribute('value', `${answers[3]}`);

    container.appendChild(firstAnswer);
    container.appendChild(secondAnswer);
    container.appendChild(thirdAnswer);
    container.appendChild(fourthAnswer);

    app.appendChild(container);

    const chosenButton = document.getElementById('answers-container').querySelectorAll('.button--lighter');
    
    for(let i = 0; i < chosenButton.length; i++) {
        chosenButton[i].onclick = checkingAnswer = () => {
            console.log(chosenButton[i].value)
            chosenAnswer = chosenButton[i].value;
            console.log(correctAnswer === chosenAnswer);
            if(correctAnswer === chosenAnswer) {
                chosenButton[i].classList.add('button--correct');
                window.setTimeout('window.location.reload()', 500);
            } else {
                chosenButton[i].classList.add('button--wrong');
                window.setTimeout('window.location.reload()', 500);
            }
        }
    }
    
}