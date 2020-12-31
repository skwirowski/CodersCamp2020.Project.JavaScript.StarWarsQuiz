const isAnswerCorrect = (guess,correct) =>{
    if(typeof guess !== "string"){
        throw new Error("Guessed answer isn't string");
    }
    if(typeof correct !== "string"){
        throw new Error("Correct answer isn't string");
    }
    return guess.toLowerCase() === correct.toLowerCase();
}

export {isAnswerCorrect};