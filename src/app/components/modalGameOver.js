const createHeader = (parent, textContent) => {
  const h1 = document.createElement('h1');
  h1.textContent = textContent;
  h1.className = `${parent.className}--header`;
  parent.appendChild(h1);
};

const createSummaryP = (parent, playerAnswers, computerAnswers) => {
  const p = document.createElement('p');
  p.className = `${parent.className}--paragraph`;
  p.textContent = `The force is strong in you young Padawan! 
    During 1 minute you have answered ${playerAnswers.correct} / ${playerAnswers.total} questions. 
    And Google quessed ${computerAnswers.correct} / ${computerAnswers.total}.`;
  parent.appendChild(p);
};

const createMidContainer = (parent) =>{
    const container = document.createElement("div");
    container.className = `${parent.className}--middleContainer`;
    return container;
}

const createMidImage = (url, parent) =>{
    const img = document.createElement("img");
    img.className = `${parent.className}--photo`;
    img.src = url;
    img.alt = "Middle Photo";
    return img;
}

const createDetailedAnswerSection = (parent) =>{
    const div = document.createElement("div");
    div.className = `${parent.className}--detailedAnswers`;
    return div;
}

const createDataTable = (playerAnswers, computerAnswers) =>{
    const table = document.createElement("table");

}

const mergeAndDisplayMiddleSection = (parent, playerAnswers, computerAnswers) =>{
    const midContainer = createMidContainer(parent);
    const img = createMidImage("../../../static/assets/ui/MasterYodaLeft.png", parent);
    const detailedAnswersSection = createDetailedAnswerSection(parent);
}

const modalGameOver = (playerAnswers, computerAnswers) => {
  const modal = document.createElement('section');
  modal.classList.add('swquiz-modal');

  document.querySelector('#swquiz-app').appendChild(modal);
  createHeader(modal, 'Game Over');
  createSummaryP(modal,playerAnswers,computerAnswers);
    

};

export { modalGameOver };
