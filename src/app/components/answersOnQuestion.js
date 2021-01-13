export const answersOnQuestion = (answers, correctAnswer, checkingAnswer) => {
    const app = document.querySelector('#swquiz-app');
    const container = document.createElement('div');
    container.setAttribute('id', 'answers-container');
    container.setAttribute('data-testid', 'answers-container');
    container.setAttribute('class', 'container-answers');
    let chosenAnswer;
    let ids = ['firstAnswer', 'secondAnswer', 'thirdAnswer', 'fourthAnswer'];
    let buttons = ids.map((idString, index) => {
      let button = document.createElement('input');
      button.setAttribute('type', 'button');
      button.setAttribute('id', idString);
      button.setAttribute('data-testid', idString);
      button.setAttribute('class', 'button button--lighter');
      button.setAttribute('value', `${answers[index]}`);
      return button;
    });
    
    buttons.forEach((element) => {
      container.appendChild(element);
    });
    app.appendChild(container);

    const chosenButton = document.getElementById('answers-container').querySelectorAll('.button--lighter');
    
    for (let i = 0; i < chosenButton.length; i++) {
        chosenButton[i].onclick = checkingAnswer = () => {
            chosenAnswer = chosenButton[i].value;

            if (correctAnswer === chosenAnswer) {
                chosenButton[i].classList.add('button--correct');
                window.setTimeout('window.location.reload()', 500);
            } else {
                chosenButton[i].classList.add('button--wrong');
                window.setTimeout('window.location.reload()', 500);
            }
        }
    }
    
}