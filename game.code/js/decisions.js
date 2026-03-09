// All decisions that can be made.
// Metrics that can be influenced:
  /* 
  AI metrics (1-100)
  contentSafetyFilter     
  contentDiversity       
  engagementIntensity   
  advertisementPrecision

  Ethical metrics (1-100)
  userWellBeing         
  publicPressure        
  investorConfidence    
  advertiserDemand
  */ 

export const decisions = [
  {
    id: "reduce_scroll",
    order: 1,
    title: "Reduce Infinite Scroll",
    type: "algorithmic", // or "ethical"
    description: "Adjust recommendation UX to reduce endless scrolling.",
    choices: [
      {
        id: "soft_limit",
        label: "Show a gentle 'take a break' prompt after 10 items",
        effects: {
          engagementIntensity: -10,
        },
      },
      {
        id: "hard_limit",
        label: "Force a break after 10 items",
        effects: {
          engagementIntensity: -25,
        },
      },
      {
        id: "no_change",
        label: "Keep infinite scroll unchanged",
        effects: {
          engagementIntensity: +5,
          userWellBeing: -10,
        },
      },
    ],
  },

  {
    id: "respond_to_report",
    order: 2,
    title: "Respond to a news report",
    type: "ethical",
    description: "Decide how to react when media calls out the platform.",
    choices: [
      {
        id: "apology_statement",
        label: "Issue a public apology and commit to transparency",
        effects: {
          publicPressure: -10,
          investorConfidence: -5,
        },
      },
      {
        id: "deny_and_litigate",
        label: "Deny allegations and threaten legal action",
        effects: {
          publicPressure: +10,
          investorConfidence: +5,
        },
      },
    ],
  },
];


/**
 * Returns decisions sorted by their `order` field.
 */
export function getDecisionsInOrder() {
  return [...decisions].sort((a, b) => (a.order ?? 0) - (b.order ?? 0));
}

/**
 * Ensures the metric value is always within the range 0–100
 */
function clampMetric(value) {
  return Math.max(0, Math.min(100, value));
}

/**
 * Apply the metric changes of a decision to the game state
 */
function applyEffects(state, effects) {
  for (const [key, delta] of Object.entries(effects || {})) {
    if (typeof state[key] === "number" && typeof delta === "number") {
      state[key] = clampMetric(state[key] + delta);
    }
  }
}

/**
 * Applies a specific choice's effects to the provided game state.
 * Returns true if the decision/choice was applied, false if not found.
 */
export function applyChoiceToState(state, decisionId, choiceId) {
  const decision = decisions.find((d) => d.id === decisionId);
  if (!decision) return false;

  const choice = (decision.choices || []).find((c) => c.id === choiceId);
  if (!choice) return false;

  applyEffects(state, choice.effects);
  return true;
}
