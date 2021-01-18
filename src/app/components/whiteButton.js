export const whiteButton = (icone , text) => {
    console.log(`${icone} ${text}`);
    const app = document.getElementById('swquiz-game-footer-left');
    const button = document.createElement('button');
    const paragraph = document.createElement("p");
    let buttonText = document.createTextNode(`${text}`);
    let img = new Image();
    img.src = icone;
    paragraph.appendChild(buttonText);
    button.setAttribute('class', 'button button--white icon-button');
    button.setAttribute('id', 'white-button');
    button.setAttribute('data-testid', 'white-button');
    button.appendChild(img);
    button.appendChild(paragraph);
    app.appendChild(button);
}