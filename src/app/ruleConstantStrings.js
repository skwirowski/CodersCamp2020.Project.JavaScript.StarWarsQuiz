import { PEOPLE_MODE, VEHICLE_MODE, SPACESHIPS_MODE } from './modes';

export const PEOPLE_MODE_RULE_STRING =
  'You have one minute (1m) to answer as many questions as possible. ' +
  'During the game on each question you need to select who from Star ' +
  'Wars is showed on the left (Jar Jar Binks right now) from available options';

export const VEHICLES_MODE_RULE_STRING =
  'You have one minute (1m) to answer as many questions as possible. ' +
  'During the game on each question you need to select which ' +
  'vehicle from Star Wars is showed on the left.';

export const STARSHIPS_MODE_RULE_STRING =
  'You have one minute (1m) to answer as many questions as possible. ' +
  'During the game on each question you need to select which ' +
  ' starship from Star Wars is showed on the left.';

export const getRule = (gameMode) => {
  switch (gameMode) {
    case PEOPLE_MODE:
      return PEOPLE_MODE_RULE_STRING;
    case VEHICLE_MODE:
      return VEHICLES_MODE_RULE_STRING;
    case SPACESHIPS_MODE:
      return STARSHIPS_MODE_RULE_STRING;
    default:
      throw new Error('Selected game mode does not exist!');
  }
};
