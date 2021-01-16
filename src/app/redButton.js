export const redButton = (text) => {
  const app = document.getElementById('swquiz-game-footer-right');
  const button = document.createElement('button');
  let buttonText = document.createTextNode(`${text}`);
  button.setAttribute('id', 'red-button');
  button.setAttribute('class', 'button button--red button--uppercase');
  button.setAttribute('data-testid', 'red-button');
  button.appendChild(buttonText);
  app.appendChild(button);
};

// TODO: remove this
export const whiteButton = (text) => {
  const app = document.getElementById('swquiz-game-footer-left');
  const button = document.createElement('button');
  let buttonText = document.createTextNode(`${text}`);
  button.setAttribute('id', 'white-button');
  button.setAttribute('class', 'button button--red button--uppercase');
  // button.setAttribute('data-testid', 'white-button');
  button.appendChild(buttonText);
  app.appendChild(button);
};
