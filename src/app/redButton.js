export const redButton = (text) => {
    const app = document.querySelector('#swquiz-app');
    const button = document.createElement('button');
    button.setAttribute('id', 'red-button')
    button.setAttribute('class', 'button button--red');
    button.innerText(`${text}`);
    app.appendChild(button);
}