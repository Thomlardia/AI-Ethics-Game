# Decisions
Key decisions that influence the game metrics. These can be:
- **Algorithmic decisions** (affect the recommendation algorithm & AI metrics)
- **Ethical decisions** (affect stakeholder trust and ethical metrics)

## Algorithmic Decisions

### 1) Reduce Infinite Scroll
**Description:** Complaints have been received about the addictive effects of being able to infinitely scroll through the feed. What adjustment shall we make to tackle this issue?.

Choices:
- **soft_limit**
    - Label: Show a gentle "take a break" prompt after 10 items
    - Effects: engagementIntensity: -10

- **hard_limit**
    - Label: Force a break after 10 items
    - Effects: engagementIntensity: -25

- **no_change**
    - Label: Keep infinite scroll unchanged
    - Effects: engagementIntensity: +5

### 2) Political Content Amplification
**Description:** Amplifying political content might contribute to political polarization due to the aggressive personalization of the algorithm. This could create harmful echo chambers and political bubbles. How should the algorithm handle political content?

Choices:
- **remove_political**
    - label: Remove political content from the platform altogether
    - Effects: contentDiversity: -10, engagementIntensity: -10, contentSafetyFilter: +20

- **limit_political**
    - Label: Reduce political content amplification
    - Effects: contentSafetyFilter: +10, engagementIntensity: -5

- **balanced_distribution**
    - Label: Promote diverse political viewpoints
    - Effects: contentDiversity: +10

- **amplify_political**
    - Label: Boost political content engagement
    - Effects: engagementIntensity: +10, contentSafetyFilter: -10

### 3) Creator Discovery Boost
**Description:** How should we determine how much the algorithm promotes smaller or new creators?

Choices:
- **strong_boost**
    - Label: Prioritize small and new creators
    - Effects: contentDiversity: +15, engagementIntensity: -15

- **moderate_boost**
    - Label: Occasionally introduce new creators
    - Effects: contentDiversity: +8

- **no_boost**
    - Label: Focus on proven popular creators
    - Effects: engagementIntensity: +8, contentDiversity: -8

### 4) Data Collection Policy
**Description:** The main source of income of our corporation is advertisements. We collect data from our users and feed this into our algorithm to target ads to specific audiences. More accurate targeting means more revenue. However, we have received many complaints about privacy concerns regarding our collection of user data. How should we handle the collection of user data for personalization and advertising?

Choices:
- **minimal_collection**
    - Label: Collect only essential data
    - Effects: advertisementPrecision: -20, contentSafetyFilter: +5

- **balanced_collection**
    - Label: Collect moderate behavioral data
    - Effects: advertisementPrecision: +10

- **aggressive_collection**
    - Label: Track detailed behavioral signals
    - Effects: advertisementPrecision: +20, engagementIntensity: +5

### 5) Sensational Content Handling
**Description:** Sensational content improves engagement, but too much of it is proven harmful. How should the algorithm treat emotionally provocative or sensational posts?

Choices:
- **strict_downrank**
    - Label: Strongly suppress sensational content
    - Effects: contentSafetyFilter: +15, engagementIntensity: -20

- **mild_downrank**
    - Label: Slightly reduce sensational content
    - Effects: contentSafetyFilter: +8

- **allow_sensational**
    - Label: Let sensational content compete normally
    - Effects: engagementIntensity: +10, contentSafetyFilter: -10

- **boost_sensational**
    - Label: Boost sensational content 
    - Effects: engagementIntensity: +15, contentSafetyFilter: -15

### 6) Recommendation Personalization
**Description:** How narrowly should the algorithm personalize content based on user behavior?

Choices:
- **broad_recommendations**
    - Label: Show broader interest categories
    - Effects: contentDiversity: +12, engagementIntensity: -12

- **balanced_personalization**
    - Label: Balance personalization with exploration
    - Effects: contentDiversity: +6, advertisementPrecision: +5

- **hyper_personalization**
    - Label: Maximize behavioral targeting
    - Effects: engagementIntensity: +12, advertisementPrecision: +10, contentDiversity: -10

### 7) Harmful Misinformation Handling
**Description:** We have received many complaints about the spread of misinformation in our platform. Adjust how aggressively misinformation is detected and limited.

Choices:
- **proactive_removal**
    - Label: Automatically remove flagged misinformation
    - Effects: contentSafetyFilter: +20, engagementIntensity: -10

- **contextual_labels**
    - Label: Add fact-check labels to questionable content
    - Effects: contentSafetyFilter: +10

- **minimal_intervention**
    - Label: Only remove extreme cases
    - Effects: engagementIntensity: +5, contentSafetyFilter: -10

- **no_intervention**
    - Label: Allow misinformation fully
    - Effects: engagementIntensity: +10, contentSafetyFilter: -20

## Ethical Decisions

### 1) Respond to a news report
**Description:** *Journalist:* I’m about to publish a story claiming your platform’s recommendation algorithm encourages addictive use and harms user mental health. Some sources say the company knew about these risks but prioritized engagement anyway.

Before I publish, I want your response. What should I quote from you?.

Choices:
- **apology_statement**
    - Label: We acknowledge these concerns and are committed to improving user well-being and being more transparent about our systems.
    - Effects: publicPressure: -10, investorConfidence: -5

- **deny_and_litigate**
    - Label: These claims are misleading. Our platform reflects user preferences, and we reject allegations that we intentionally harm users.
    - Effects: publicPressure: +10, investorConfidence: +5

