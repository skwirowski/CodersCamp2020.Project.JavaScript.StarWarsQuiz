import {imageRecognizer} from '../src/app/imageRecognizer'
import { screen } from '@testing-library/dom'
import '@testing-library/jest-dom/extend-expect';

test('Should add div element to DOM, should have class sqwuiz-app__image', () => {
    document.body.innerHTML = `
    <div id="swquiz-app">
    </div>
    `
    imageRecognizer('c3RhdGljL2Fzc2V0cy9pbWcvbW9kZXMvcGVvcGxlLzM2LmpwZw==')

    expect(screen.getByTestId('imgRecognizer')).toHaveClass('swquiz-app__image')
    expect(screen.getByTestId('imgRecognizer')).toBeInstanceOf(HTMLElement)
}) 

test('should be empty div and have background-style', () => {
    document.body.innerHTML = `
    <div id="swquiz-app">
    </div>
    `
    imageRecognizer('c3RhdGljL2Fzc2V0cy9pbWcvbW9kZXMvcGVvcGxlLzM2LmpwZw==')
    const imageBas64 = atob('c3RhdGljL2Fzc2V0cy9pbWcvbW9kZXMvcGVvcGxlLzM2LmpwZw==') 
    expect(screen.getByTestId('imgRecognizer')).toBeEmptyDOMElement()
    expect(screen.getByTestId('imgRecognizer')).toHaveStyle(`background-image: url('${imageBas64}');`)

})