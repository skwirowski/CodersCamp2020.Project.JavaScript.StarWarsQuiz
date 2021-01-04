const isAnswerCorrect = (guess, answer) =>{
    if(typeof guess !== "string"){
        throw new Error("TypeError");
    }
    if(typeof answer !== "string"){
        throw new Error("TypeError");
    }
    return guess.toLowerCase() === answer.toLowerCase();
}

export {isAnswerCorrect};
