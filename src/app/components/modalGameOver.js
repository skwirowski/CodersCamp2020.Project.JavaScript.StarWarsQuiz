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
    const div = document.createElement("div");
    const img = document.createElement("img");
    div.className = `${parent.className}--photoContainer`
    img.className = `${parent.className}--photo`;
    img.src = url;
    img.alt = "Middle Photo";
    div.appendChild(img);
    return div;
}

const createDetailedAnswerSection = (parent,textContent) =>{
    const div = document.createElement("div");
    div.className = `${parent.className}--detailedAnswers`;
    const p = document.createElement("p");
    p.textContent = textContent;
    div.appendChild(p);
    return div;
}

const isCorrect = (arg) =>{
  return arg ? "success" : "danger";
}

const createDataTable = (parent, playerAnswers, computerAnswers) =>{
    const table = document.createElement("table");
    const tbody = document.createElement("tbody");
    table.className = `${parent.className}--table`;
    const titleRow = `<th>
    <td></td>
    <td>You</td>
    <td>Computer</td>
    <td>Answer</td>
    </th>`
    table.innerHTML = titleRow;
    for(let ans in playerAnswers){
      if(typeof playerAnswers[ans] === "object" && typeof computerAnswers[ans] === "object"){
        const row = `<tr>
        <td><img src='${playerAnswers[ans].img}' alt='QuestionPhoto'></td>
        <td class=${isCorrect(playerAnswers[ans].isCorrect)}>${playerAnswers[ans].answer}</td>
        <td class=${isCorrect(computerAnswers[ans].isCorrect)}>${computerAnswers[ans].answer}</td>
        <td>${computerAnswers[ans].correct}</td>
        </tr>`
        tbody.innerHTML += row;
      }
    }
    table.appendChild(tbody);
    return table;
}

const mergeAndDisplayMiddleSection = (parent, playerAnswers, computerAnswers) =>{
    const midContainer = createMidContainer(parent);
    const img = createMidImage("../../../static/assets/ui/MasterYodaLeft.png", parent);
    const detailedAnswersSection = createDetailedAnswerSection(parent, "Detailed answers");
    const table = createDataTable(parent, playerAnswers, computerAnswers);
    midContainer.appendChild(img);
    detailedAnswersSection.appendChild(table);
    midContainer.appendChild(detailedAnswersSection);

    parent.appendChild(midContainer);
}

const modalGameOver = (playerAnswers, computerAnswers) => {
  const modal = document.createElement('section');
  modal.classList.add('swquiz-modal');

  document.querySelector('#swquiz-app').appendChild(modal);
  createHeader(modal, 'Game Over');
  createSummaryP(modal,playerAnswers,computerAnswers);
  mergeAndDisplayMiddleSection(modal,playerAnswers,computerAnswers);

};

export { modalGameOver };
