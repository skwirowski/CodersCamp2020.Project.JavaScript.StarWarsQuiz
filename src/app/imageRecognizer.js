export const imageRecognizer = (img) => {
  const app = document.getElementById('swquiz-body');
  const imageElement = document.createElement('img');
  //btoa('string') - encode a string
  //function decodes a string of data which has been encoded using Base64 encoding.
  let image = atob(img);
  imageElement.classList.add(
    'swquiz-app__image',
    'swquiz-row-left',
    'swquiz-sw-image',
  );
  imageElement.setAttribute('data-testid', 'imgRecognizer');
  imageElement.src = `${image}`;
  imageElement.alt = 'Image of people vehicle or spaceship';
  app.appendChild(imageElement);
};