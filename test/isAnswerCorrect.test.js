import {isAnswerCorrect} from "../src/app/components/isAnswerCorrect";
import '@testing-library/jest-dom/extend-expect';

test("Throw error when guessed answer isn't string.",()=>{
    const foo = 2;
    expect(function(){isAnswerCorrect(foo,"answer");}).toThrow(new TypeError("Guessed answer isn't string"));
})

test("Throw error when correct answer isn't string.",()=>{
    const foo = 2;
    expect(function(){isAnswerCorrect("guess",foo);}).toThrow(new TypeError("Guessed answer isn't string"));
})

test("Function return true if answers match.",()=>{
    expect(isAnswerCorrect("correct","correct")).toBe(true);
})

test("Function return false if answers match.",()=>{
    expect(isAnswerCorrect("incorrect","correct")).toBe(false);
})
