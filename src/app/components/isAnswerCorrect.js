const isAnswerCorrect = (guess, answer) =>{
    if(typeof guess !== "string"){
        throw new Error("Guessed answer isn't string");
    }
    if(typeof answer !== "string"){
        throw new Error("Correct answer isn't string");
    }
    return guess.toLowerCase() === answer.toLowerCase();
}

export {isAnswerCorrect};
