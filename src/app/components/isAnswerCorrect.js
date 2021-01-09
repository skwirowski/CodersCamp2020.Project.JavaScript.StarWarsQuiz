const isAnswerCorrect = (guess, answer) => {
  if (typeof guess !== 'string') {
    throw new TypeError("Guessed answer isn't string");
  }
  if (typeof answer !== 'string') {
    throw new TypeError("Guessed answer isn't string");
  }
  return guess.toLowerCase() === answer.toLowerCase();
};

export { isAnswerCorrect };
