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

const createContainer = (parent, classHTML) => {
  const container = document.createElement('div');
  container.className = `${parent.className}--${classHTML}`;
  return container;
};

const createMidImage = (url, parent) => {
  const div = document.createElement('div');
  const img = document.createElement('img');
  div.className = `${parent.className}--photoContainer`;
  img.className = `${parent.className}--photo`;
  img.src = url;
  img.alt = 'Middle Photo';
  div.appendChild(img);
  return div;
};

const createDetailedAnswerSection = (parent, textContent) => {
  const div = document.createElement('div');
  div.className = `${parent.className}--detailedAnswers`;
  const p = document.createElement('p');
  p.textContent = textContent;
  div.appendChild(p);
  return div;
};

const isCorrect = (arg) => {
  return arg ? 'success' : 'danger';
};

const createDataTable = (parent, playerAnswers, computerAnswers) => {
  const table = document.createElement('table');
  const tbody = document.createElement('tbody');
  table.className = `${parent.className}--table`;
  const titleRow = `<th>
    <td></td>
    <td>You</td>
    <td>Computer</td>
    <td>Answer</td>
    </th>`;
  table.innerHTML = titleRow;
  for (let ans in playerAnswers) {
    if (
      typeof playerAnswers[ans] === 'object' &&
      typeof computerAnswers[ans] === 'object'
    ) {
      const row = `<tr>
        <td><img src='${playerAnswers[ans].img}' alt='QuestionPhoto'></td>
        <td class=${isCorrect(playerAnswers[ans].isCorrect)}>${
        playerAnswers[ans].answer
      }</td>
        <td class=${isCorrect(computerAnswers[ans].isCorrect)}>${
        computerAnswers[ans].answer
      }</td>
        <td>${computerAnswers[ans].correct}</td>
        </tr>`;
      tbody.innerHTML += row;
    }
  }
  table.appendChild(tbody);
  return table;
};

const mergeAndDisplayMiddleSection = (
  parent,
  playerAnswers,
  computerAnswers,
) => {
  const container = createContainer(parent, 'middleContainer');
  const img = createMidImage(
    '../../../static/assets/ui/MasterYodaLeft.png',
    parent,
  );
  const detailedAnswersSection = createDetailedAnswerSection(
    parent,
    'Detailed answers',
  );
  const table = createDataTable(parent, playerAnswers, computerAnswers);
  container.appendChild(img);
  detailedAnswersSection.appendChild(table);
  container.appendChild(detailedAnswersSection);

  parent.appendChild(container);
};

const createForm = (parent, callback) => {
  const form = document.createElement('form');
  form.addEventListener('submit', callback);
  form.className = `${parent.className}--form`;
  return form;
};

const createInput = (parent) => {
  const input = document.createElement('input');
  input.className = `${parent.className}--nameInput`;
  input.id = 'name';
  input.setAttribute('required', '');
  return input;
};

const createLabel = (parent, target) => {
  const label = document.createElement('label');
  label.className = `${parent.className}--label`;
  label.setAttribute('for', target);
  label.textContent =
    'Please fill your name in order to recive eternal glory in whole Galaxy!';
  return label;
};

const createButton = (parent) => {
  const btn = document.createElement('button');
  btn.className = `${parent.className}--button`;
  btn.setAttribute('type', 'submit');
  btn.textContent = 'MAY THE FORCE BE WITH YOU!';
  return btn;
};

const mergeAndDisplayBottomSection = (parent, callback) => {
  const container = createContainer(parent, 'bottomContainer');
  const form = createForm(parent, callback);
  const input = createInput(parent);
  const label = createLabel(parent, input.id);
  const submitButton = createButton(parent);

  container.appendChild(form);
  form.appendChild(input);
  form.appendChild(label);
  form.appendChild(submitButton);

  parent.appendChild(container);
};

const modalGameOver = (parent, playerAnswers, computerAnswers, callback) => {
  if (typeof playerAnswers !== 'object') {
    throw new TypeError("Second argument isn't an object!");
  }
  if (typeof computerAnswers !== 'object') {
    throw new TypeError("Third argument isn't an object!");
  }
  if (typeof callback !== 'function') {
    throw new TypeError("Fourth argument isn't a function!");
  }
  if (typeof parent !== 'object') {
    throw new TypeError("First argument isn't an object!");
  }
  const modal = document.createElement('section');
  modal.classList.add('swquiz-modal');
  modal.setAttribute('data-testid', 'gameOverModal');

  parent.appendChild(modal);
  createHeader(modal, 'Game Over');
  createSummaryP(modal, playerAnswers, computerAnswers);
  mergeAndDisplayMiddleSection(modal, playerAnswers, computerAnswers);
  mergeAndDisplayBottomSection(modal, callback);
};

export { modalGameOver };
