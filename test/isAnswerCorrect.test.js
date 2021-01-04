import {isAnswerCorrect} from "../src/app/components/isAnswerCorrect";
import '@testing-library/jest-dom/extend-expect';

test("Throw error when guessed answer isn't string.",()=>{
    const foo = 2;
    expect(function(){isAnswerCorrect(foo,"answer");}).toThrow(new Error("TypeError"));
})

test("Throw error when correct answer isn't string.",()=>{
    const foo = 2;
    expect(function(){isAnswerCorrect("guess",foo);}).toThrow(new Error("TypeError"));
})

test("Function return true if answers match.",()=>{
    expect(isAnswerCorrect("correct","correct")).toBe(true);
})

test("Function return false if answers match.",()=>{
    expect(isAnswerCorrect("incorrect","correct")).toBe(false);
})
