export const redButton = (text) => {
    const app = document.querySelector('#swquiz-app');
    const button = document.createElement('button');
    let buttonText = document.createTextNode(`${text}`);
    button.setAttribute('id', 'red-button');
    button.setAttribute('class', 'button button--red button--uppercase');
    button.setAttribute('data-testid', 'red-button');
    button.appendChild(buttonText);
    app.appendChild(button);
}