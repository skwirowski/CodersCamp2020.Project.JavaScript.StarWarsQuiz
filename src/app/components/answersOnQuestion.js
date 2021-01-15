export const answersOnQuestion = (answers, correctAnswer, checkingAnswer, callback) => {
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
              //  console.log(chosenButton[i].value) /// to przekezać do player.answerOnQuestion()
                window.setTimeout(function(){
                    //container.style.display = 'none'
                    container.remove()
            }, 1900);
            callback(this);
         //   return chosenButton[i].value;
            } else {
                chosenButton[i].classList.add('button--wrong');
             //   console.log(chosenButton[i].value)
                window.setTimeout(function(){
                 //   container.style.display = 'none'
                    container.remove()
                }, 1900);
                callback(this);
              //  return chosenButton[i].value;
                //window.setTimeout('window.location.reload()', 500);
            }
        } 
    }
    
}