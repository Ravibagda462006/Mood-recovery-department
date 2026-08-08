const state = {
  mood: null,
  recoveryChoice: null
};

export function setMood(mood) {
  state.mood = mood;
}

export function getMood() {
  return state.mood;
}

export function setRecoveryChoice(choice) {
  state.recoveryChoice = choice;
}

export function getRecoveryChoice() {
  return state.recoveryChoice;
}