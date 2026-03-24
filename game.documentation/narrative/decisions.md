# Decisions
Key decisions that influence the game metrics. These can be:
- **Algorithmic decisions** (affect the recommendation algorithm & AI metrics)
- **Ethical decisions** (affect stakeholder trust and ethical metrics)

## Algorithmic Decisions

### 1) Reduce Infinite Scroll
**Description:** *Ethics Team Member*: Complaints have been received about the addictive effects of being able to infinitely scroll through the feed. What adjustment shall we make to tackle this issue?.

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
**Description:** *Ethics Team Member*:  Amplifying political content might contribute to political polarization due to the aggressive personalization of the algorithm. This could create harmful echo chambers and political bubbles. How should the algorithm handle political content?

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
**Description:** *Ethics Team Member*: How should we determine how much the algorithm promotes smaller or new creators?

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
**Description:** *Ethics Team Member*: The main source of income of our corporation is advertisements. We collect data from our users and feed this into our algorithm to target ads to specific audiences. More accurate targeting means more revenue. However, we have received many complaints about privacy concerns regarding our collection of user data. How should we handle the collection of user data for personalization and advertising?

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
**Description:** *Ethics Team Member*: Sensational content improves engagement, but too much of it is proven harmful. How should the algorithm treat emotionally provocative or sensational posts?

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
**Description:** *Ethics Team Member*: How narrowly should the algorithm personalize content based on user behavior?

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
**Description:** *Ethics Team Member*: We have received many complaints about the spread of misinformation in our platform. Adjust how aggressively misinformation is detected and limited.

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



### 3) CEO Strategic Direction
**Description:** *CEO:* We need to get ahead of regulation. I’m open to ethical improvements, but we cannot afford a major drop in engagement. What’s your proposal?

Choices:
- **preemptive_reform**
    - Label: We proactively redesign the algorithm to prioritize user well-being and transparency before regulation forces us.
    - Effects: UWB: +15, PP: -10, IC: -5

- **defensive_optimization**
    - Label: We make the minimal visible changes while optimizing our algorithm to preserve engagement.
    - Effects: UWB: -3, IC: +3

- **agressive_optimaziation**
    - Label: We should focus solely on engagement, more engagement means more attention that can be sold to advertisors.
    - Effects: PP: +10, IC: +10, UWB: -15

---

### 4) Advertiser Concern
**Description:** *Major Advertiser:* We’re worried about our brand appearing next to controversial or harmful content. If this continues, we may pull our spending.

Choices:
- **strict_brand_safety_controls**
    - Label: We implement stricter content filtering and give advertisers more control over ad placement.
    - Effects: CSF: +20, AD: +10, EI: -5, UWB: +5

- **maintain_current_system**
    - Label: Our systems already meet industry standards; no major changes are necessary.
    - Effects: AD: -10, IC: +3, PP: +5

- **advertiser_tiering**
    - Label: Offer premium brand-safe placement tiers with stricter controls for concerned advertisers.
    - Effects: AD: +5, IC: +5, CSF: +10

---

### 5) Government Inquiry
**Description:** *Government Executive:* We are investigating whether your algorithm amplifies harmful content and undermines public welfare. Will you cooperate and provide transparency?

Choices:
- **full_transparency**
    - Label: We will cooperate fully, share data, and support regulatory oversight.
    - Effects: PP: -15, IC: -20

- **limited_cooperation**
    - Label: We will comply with legal requirements but protect proprietary systems and data.
    - Effects: PP: -5, IC: -5

- **strategic_lobbying**
    - Label: Engage policymakers to shape upcoming regulation in a more favorable direction.
    - Effects: IC: +15, PP: +5 

- **Defimation**
    - label: That is defimation of our company!! We will sue you!!!
    - Effects: PP: +15, IC: +10

---

### 6) User Backlash
**Description:** *Users (via trending campaign):* Many users are calling for better control over what they see and less addictive design. They want meaningful change, not PR statements.

Choices:
- **user_control_features**
    - Label: We will introduce tools for users to customize their feed and limit algorithmic influence.
    - Effects: UWB: +20, AD: -15, PP: -10

- **surface_level_response**
    - Label: We acknowledge feedback and provide general wellness tips without changing the core system.
    - Effects: UWB: +2, PP: -2

- **ignore_backlash**
    - Label: Maintain current system and wait for public attention to shift.
    - Effects: PP: +10, UWB: -10, IC: +5

---

### 7) CTO Technical Constraints
**Description:** *CTO:* Major algorithmic changes could destabilize the system and reduce performance. We need to be careful with large-scale adjustments.

Choices:
- **safe_implementation**
    - Label: We roll out ethical improvements gradually with extensive testing to maintain system stability.
    - Effects: CSF: +10, EI: -5, IC: +5

- **rapid_overhaul**
    - Label: We push a comprehensive redesign quickly to address ethical concerns immediately.
    - Effects: CSF: +20, UWB: +15, EI: -15, IC: -10

- **technical_debt_focus**
    - Label: Prioritize refactoring the system first to enable safer ethical improvements later.
    - Effects: IC: +5, CSF: +5, EI: -2

---

### 8) Board Pressure
**Description:** *Board Member:* Shareholders are concerned about declining margins. Ethical improvements are fine, but not at the expense of profitability.

Choices:
- **balance_ethics_and_profit**
    - Label: We pursue ethical improvements while maintaining core revenue drivers.
    - Effects: EI: -5, UWB: +5, IC: +5

- **profit_first_strategy**
    - Label: We prioritize financial performance and delay costly ethical changes.
    - Effects: EI: +5, IC: +10, UWB: -10, PP: +10

- **cost_neutral_ethics**
    - Label: Implement only those ethical changes that do not materially impact margins.
    - Effects: UWB: +3, IC: +7, EI: -2