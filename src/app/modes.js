export const VEHICLE_MODE = 'Vehicles';
export const PEOPLE_MODE = 'People';
export const SPACESHIPS_MODE = 'Spaceships';
export const MODES = [VEHICLE_MODE, PEOPLE_MODE, SPACESHIPS_MODE];

// Can pass string with mode or Element with textContent
export function setGameMode(mode) {
  mode = mode.textContent || mode;
  window.globalThis.activeGameMode = mode;
}

export function getGameMode() {
  return window.globalThis.activeGameMode;
}
