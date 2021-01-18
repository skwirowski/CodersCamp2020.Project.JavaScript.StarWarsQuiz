import { imageRecognizer } from '../../../src/app/components/imageRecognizer';
import { screen } from '@testing-library/dom';
import '@testing-library/jest-dom/extend-expect';

test('Should add div element to DOM, should have class sqwuiz-app__image', () => {
  document.body.innerHTML = `
    <div id="swquiz-body">
    </div>
    `;
  imageRecognizer('c3RhdGljL2Fzc2V0cy9pbWcvbW9kZXMvcGVvcGxlLzM2LmpwZw==');

  expect(screen.getByTestId('imgRecognizer')).toHaveClass('swquiz-app__image');
  expect(screen.getByTestId('imgRecognizer')).toBeInstanceOf(HTMLElement);
});

test('should be empty img element', () => {
  document.body.innerHTML = `
    <div id="swquiz-body">
    </div>
    `;
  imageRecognizer('c3RhdGljL2Fzc2V0cy9pbWcvbW9kZXMvcGVvcGxlLzM2LmpwZw==');
  const imageBas64 = atob(
    'c3RhdGljL2Fzc2V0cy9pbWcvbW9kZXMvcGVvcGxlLzM2LmpwZw==',
  );
  expect(screen.getByTestId('imgRecognizer')).toBeEmptyDOMElement();
  expect(screen.getByTestId('imgRecognizer').tagName).toBe('IMG');
});