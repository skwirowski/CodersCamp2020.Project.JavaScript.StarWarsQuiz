import { PEOPLE_MODE, VEHICLE_MODE, SPACESHIPS_MODE } from './modes'

export const VEHICLE_MODE_QUESTION_STRING = 'MODE: Do you recognize this vehicle?';
export const PEOPLE_MODE_QUESTION_STRING = 'MODE: Who is this Character?';
export const STARSHIPS_MODE_QUESTION_STRING = 'MODE: Do you recognize this starship?';

export const gameMode = (text) => {
  const app = document.getElementById('swquiz-game-header');
  const questionDiv = document.createElement('div');

  questionDiv.id = 'question';
  questionDiv.className = 'question';
  questionDiv.setAttribute('data-testid', 'question');
  let questionText = document.createTextNode(`MODE: ${text}`);
  questionDiv.appendChild(questionText);
  app.appendChild(questionDiv);
};

export const getGameModeQuestion = (gameMode) => {
  switch(gameMode) {
    case PEOPLE_MODE:
      return PEOPLE_MODE_QUESTION_STRING
    case VEHICLE_MODE:
      return VEHICLE_MODE_QUESTION_STRING;
    case SPACESHIPS_MODE:
      return STARSHIPS_MODE_QUESTION_STRING;
    default:
      throw new Error('Selected game mode does not exist!');
  } 
} 