export const imageRecognizer = (img) => {
    const app = document.querySelector('#swquiz-app')
    const imageDiv = document.createElement('div')
    //btoa('string') - encode a string
    console.log(btoa('static/assets/img/modes/people/36.jpg'))
    //function decodes a string of data which has been encoded using Base64 encoding.
    let image = atob(img) 
    imageDiv.classList.add('swquiz-app__image');
    imageDiv.style.backgroundImage = `url(${image})`
    app.appendChild(imageDiv)
}