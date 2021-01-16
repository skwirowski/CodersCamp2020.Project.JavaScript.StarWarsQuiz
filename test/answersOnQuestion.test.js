import { answersOnQuestion } from '../src/app/components/answersOnQuestion';
import { fireEvent, screen } from '@testing-library/dom';
import '@testing-library/jest-dom/extend-expect';

 
test('div has class - container-answers', () => {
  document.body.innerHTML = `<div id="swquiz-game-body"></div>`;
  answersOnQuestion({answers: ['Luke', 'Angel', 'Becka', 'John'], rightAnswer: 'Luke', image: 'abc'}, 'people');
  expect(screen.getByTestId('answers-container')).toHaveClass('container-answers');
});

test('div has buttons inside', () => {
    // document.body.innerHTML = `<div id="swquiz-app"></div>`;
    //answersOnQuestion({answers: ['Luke', 'Angel', 'Becka', 'John'], rightAnswer: 'John', image: 'abc'}, 'people');
    expect(screen.getByTestId('answers-container')).not.toBeEmptyDOMElement(); 
});

test('Correct answer was cliked', () => {
    // document.body.innerHTML = `<div id="swquiz-app"></div>`;
    //answersOnQuestion({answers: ['Luke', 'Angel', 'Becka', 'John'], rightAnswer: 'John', image: 'abc'}, 'people');
    const button = document.getElementById('firstAnswer');
    fireEvent.click(button);
    expect(screen.getByTestId('firstAnswer')).toHaveClass('button button--lighter button--correct'); 
});

test('Wrong answer was cliked', () => {
    document.body.innerHTML = `<div id="swquiz-game-body"></div>`;
    answersOnQuestion({answers: ['Luke', 'Angel', 'Becka', 'John'], rightAnswer: 'Angel', image: 'abc'}, 'people');
    const button = document.getElementById('firstAnswer');
    fireEvent.click(button);
    expect(screen.getByTestId('firstAnswer')).toHaveClass('button button--lighter button--wrong'); 
});


