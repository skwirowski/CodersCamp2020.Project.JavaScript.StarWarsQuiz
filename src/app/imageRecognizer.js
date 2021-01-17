export const imageRecognizer = (img) => {
  const app = document.querySelector('#swquiz-body');
  const oldImage = document.querySelector('.swquiz-app__image');
  if (oldImage) oldImage.remove();
  const imageElement = document.createElement('img');
  let image = "data:image/png;base64," + img;
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