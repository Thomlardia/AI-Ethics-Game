// Check ending logic.
// example: 

export function checkEnding(state) {
  // Example ending: high trust + high user well-being
  if (state.trust > 70 && state.userWellBeing > 65) {
    return "Ethical Transformation";
  }

  return null;
}
