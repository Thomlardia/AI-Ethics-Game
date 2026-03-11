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
    description: "Complaints have been received about the addictive effects of being able to infinitely scroll through the feed. What adjustment shall we make to tackle this issue?",
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
        },
      },
    ],
  },

  {
    id: "political_amplification",
    order: 2,
    title: "Political Content Amplification",
    type: "algorithmic",
    description: "Amplifying political content might contribute to political polarization due to the aggressive personalization of the algorithm. This could create harmful echo chambers and political bubbles. How should the algorithm handle political content?",
    choices: [
      {
        id: "remove_political",
        label: "Remove political content from the platform altogether",
        effects: {
          contentDiversity: -10,
          engagementIntensity: -10,
          contentSafetyFilter: +20,
        },
      },
      {
        id: "limit_political",
        label: "Reduce political content amplification",
        effects: {
          contentSafetyFilter: +10,
          engagementIntensity: -5,
        },
      },
      {
        id: "balanced_distribution",
        label: "Promote diverse political viewpoints",
        effects: {
          contentDiversity: +10,
        },
      },
      {
        id: "amplify_political",
        label: "Boost political content engagement",
        effects: {
          engagementIntensity: +10,
          contentSafetyFilter: -10,
        },
      },
    ],
  },

  {
    id: "creator_boost",
    order: 3,
    title: "Creator Discovery Boost",
    type: "algorithmic",
    description: "How should we determine how much the algorithm promotes smaller or new creators?",
    choices: [
      {
        id: "strong_boost",
        label: "Prioritize small and new creators",
        effects: {
          contentDiversity: +15,
          engagementIntensity: -15,
        },
      },
      {
        id: "moderate_boost",
        label: "Occasionally introduce new creators",
        effects: {
          contentDiversity: +8,
        },
      },
      {
        id: "no_boost",
        label: "Focus on proven popular creators",
        effects: {
          engagementIntensity: +8,
          contentDiversity: -8,
        },
      },
    ],
  },

  {
    id: "data_collection",
    order: 4,
    title: "Data Collection Policy",
    type: "algorithmic",
    description: "The main source of income of our corporation is advertisements. We collect data from our users and feed this into our algorithm to target ads to specific audiences. More accurate targeting means more revenue. However, we have received many complaints about privacy concerns regarding our collection of user data. How should we handle the collection of user data for personalization and advertising?",
    choices: [
      {
        id: "minimal_collection",
        label: "Collect only essential data",
        effects: {
          advertisementPrecision: -20,
          contentSafetyFilter: +5,
        },
      },
      {
        id: "balanced_collection",
        label: "Collect moderate behavioral data",
        effects: {
          advertisementPrecision: +10,
        },
      },
      {
        id: "aggressive_collection",
        label: "Track detailed behavioral signals",
        effects: {
          advertisementPrecision: +20,
          engagementIntensity: +5,
        },
      },
    ],
  },

  {
    id: "sensational_handling",
    order: 5,
    title: "Sensational Content Handling",
    type: "algorithmic",
    description: "Sensational content improves engagement, but too much of it is proven harmful. How should the algorithm treat emotionally provocative or sensational posts?",
    choices: [
      {
        id: "strict_downrank",
        label: "Strongly suppress sensational content",
        effects: {
          contentSafetyFilter: +15,
          engagementIntensity: -20,
        },
      },
      {
        id: "mild_downrank",
        label: "Slightly reduce sensational content",
        effects: {
          contentSafetyFilter: +8,
        },
      },
      {
        id: "allow_sensational",
        label: "Let sensational content compete normally",
        effects: {
          engagementIntensity: +10,
          contentSafetyFilter: -10,
        },
      },
      {
        id: "boost_sensational",
        label: "Boost sensational content",
        effects: {
          engagementIntensity: +15,
          contentSafetyFilter: -15,
        },
      },
    ],
  },

  {
    id: "recommendation_personalization",
    order: 6,
    title: "Recommendation Personalization",
    type: "algorithmic",
    description: "How narrowly should the algorithm personalize content based on user behavior?",
    choices: [
      {
        id: "broad_recommendations",
        label: "Show broader interest categories",
        effects: {
          contentDiversity: +12,
          engagementIntensity: -12,
        },
      },
      {
        id: "balanced_personalization",
        label: "Balance personalization with exploration",
        effects: {
          contentDiversity: +6,
          advertisementPrecision: +5,
        },
      },
      {
        id: "hyper_personalization",
        label: "Maximize behavioral targeting",
        effects: {
          engagementIntensity: +12,
          advertisementPrecision: +10,
          contentDiversity: -10,
        },
      },
    ],
  },

  {
    id: "misinformation_handling",
    order: 7,
    title: "Harmful Misinformation Handling",
    type: "algorithmic",
    description: "We have received many complaints about the spread of misinformation in our platform. Adjust how aggressively misinformation is detected and limited.",
    choices: [
      {
        id: "proactive_removal",
        label: "Automatically remove flagged misinformation",
        effects: {
          contentSafetyFilter: +20,
          engagementIntensity: -10,
        },
      },
      {
        id: "contextual_labels",
        label: "Add fact-check labels to questionable content",
        effects: {
          contentSafetyFilter: +10,
        },
      },
      {
        id: "minimal_intervention",
        label: "Only remove extreme cases",
        effects: {
          engagementIntensity: +5,
          contentSafetyFilter: -10,
        },
      },
      {
        id: "no_intervention",
        label: "Allow misinformation fully",
        effects: {
          engagementIntensity: +10,
          contentSafetyFilter: -20,
        },
      },
    ],
  },

  {
    id: "respond_to_report",
    order: 8,
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
