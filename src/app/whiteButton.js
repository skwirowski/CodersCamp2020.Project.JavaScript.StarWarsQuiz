export const whiteButton = (icone , text) => {
    const app = document.querySelector('#btn-wht');
    const button = document.createElement('button');
    const paragraph = document.createElement("p");
    let buttonText = document.createTextNode(`${text}`);
    let img = new Image();
    img.src = icone;
    paragraph.appendChild(img);
    paragraph.appendChild(buttonText);
    button.setAttribute('class', 'button button--white ');
    button.appendChild(paragraph);
    app.appendChild(button);
}