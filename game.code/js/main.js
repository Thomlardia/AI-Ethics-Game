import { gameState } from "./gameState.js";
import { getDecisionsInOrder, applyChoiceToState } from "./decisions.js";
import { checkEnding } from "./endings.js";

/**
 * Runs the game by executing decisions in order.
 * There is no UI logic yet for the user decision input, so the first choice will get picked.
 */
export function runGame() {
  const decisions = getDecisionsInOrder();

  for (const decision of decisions) {
    const choice = pickChoiceForDecision(decision);
    applyChoiceToState(gameState, decision.id, choice.id);

    console.log(`Decision: ${decision.title}`);
    console.log(` Choice: ${choice.label}`);
    console.log("Updated state:", { ...gameState });

    const ending = checkEnding(gameState);
    if (ending) {
      console.log(`Ending reached: ${ending}`);
      break;
    }
  }
}

/**
 * Returns the selected choice for a decision.
 * Needs to be replaced with actual UI logic (buttons, selection, etc.).
 */
function pickChoiceForDecision(decision) {
  // Default: pick the first choice (fallback)
  // Replace with user input in the UI.
  return decision.choices[0];
}

// Auto-start the game when running the code
runGame();
