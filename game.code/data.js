export const GAME_DATA = {
  title: "AI Ethics Card Game",
  subtitle: "Lead the internal ethics task force through five product stages.",
  initialMetrics: {
    AP: 80,
    EI: 70,
    CSF: 35,
    PP: 70,
    IC: 75,
    CD: 30,
    UWB: 35,
    AD: 80,
  },
  metricLabels: {
    AP: "Ad Precision (AP)",
    EI: "Engagement Intensity (EI)",
    CSF: "Content Safety Filter (CSF)",
    PP: "Public Pressure (PP)",
    IC: "Investor Confidence (IC)",
    CD: "Content Diversity (CD)",
    UWB: "User Well-Being (UWB)",
    AD: "Advertiser Demand (AD)",
  },
  metricPropagation: {
    internal_audit: {
      sourceMetrics: ["AP", "EI", "CSF", "CD"],
      targetMetrics: ["UWB", "PP", "IC", "AD"],
      rules: {
        UWB: { AP: -0.03, EI: -0.18, CSF: 0.22, CD: 0.12 },
        PP: { AP: -0.04, EI: 0.16, CSF: -0.14, CD: -0.1 },
        IC: { AP: 0.2, EI: 0.08, CSF: 0.05, CD: 0.03 },
        AD: { AP: 0.24, EI: 0.1, CSF: -0.05, CD: 0.02 },
      },
      divisor: 10,
    },
    market_reaction: {
      sourceMetrics: ["AP", "EI", "CSF", "CD"],
      targetMetrics: ["UWB", "PP", "IC", "AD"],
      rules: {
        UWB: { AP: -0.02, EI: -0.16, CSF: 0.2, CD: 0.14 },
        PP: { AP: -0.03, EI: 0.14, CSF: -0.16, CD: -0.12 },
        IC: { AP: 0.18, EI: 0.09, CSF: 0.06, CD: 0.04 },
        AD: { AP: 0.22, EI: 0.12, CSF: -0.04, CD: 0.03 },
      },
      divisor: 10,
    },
  },
  stages: [
    {
      id: 0,
      name: "Introduction",
      scene: {
        name: "Corporate Headquarters",
        background: "radial-gradient(circle at 20% 20%, #083344 0%, #0f172a 50%, #020617 100%)",
        description: "The social media corporation NetFriends has been facing public backlash and governmental pressure due to the unethical development of their AI-driven recommendation system. Many complaints have been made by journalists, government executives, and their own users about the harm their algorithm has inflicted. You are hired by NetFriends as the head of the Ethical Algorithmic Task Force (EATF) and your goal is to make ethical adjustments to the algorithm in order to improve the corporation's public image. However, you must also keep in mind the interests of the advertisers, investors, CEO, and the board of the corporation, who might not be too happy with some of the ethical improvements you implement.",
      },
      questions: [
        {
          id: "q0",
          promptTitle: "Begin",
          prompt: "Ready to lead the ethical redesign?",
          dialogue: {},
          choices: [
            {
              id: "q0_c1",
              label: "Begin the task force meeting",
              effects: {},
            },
          ],
        },
      ],
    },
    {
      id: 1,
      name: "Kickoff",
      scene: {
        name: "Glass Lobby",
        background: "radial-gradient(circle at 20% 20%, #083344 0%, #0f172a 50%, #020617 100%)",
        description: "You are leading your first meeting as the head of the Ethical Algorithmic Task Force, and are proposing the crucial directions in how the algorithm should be redesigned to your team members, the CEO, and the investors of NetGram.",
      },
      questions: [
        {
          id: "q1",
          promptTitle: "Project Vision",
          prompt: "You joined at a crucial moment. What is the main direction in which the algorithm should be redesigned?",
          dialogue: {
            CEO: "We need to get ahead of regulation. I’m open to ethical improvements, but we cannot afford a major drop in engagement. What’s your proposal?",
            TeamMember: "Currently, the algorithm is addictive and harmful to our users, we should make ethical improvements.",
            Investor: " Engagement is everything, do whatever makes the corporation grow."
          },
          choices: [
            {
              id: "q1_c1",
              label: "We proactively redesign the algorithm to prioritize user well-being and transparency before regulation forces us.",
              effects: { UWB: +15, PP: -10, IC: -5 },
            },
            {
              id: "q1_c2",
              label: "We make the minimal visible changes while optimizing our algorithm to preserve engagement.",
              effects: { UWB: -3, IC: +3 },
            },
            {
              id: "q1_c3",
              label: "We should focus solely on engagement, more engagement means more attention that can be sold to advertisers.",
              effects: { PP: +10, IC: +10, UWB: -15 },
            },
          ],
        },
        {
          id: "q2",
          promptTitle: "Creator Discovery",
          prompt: "How aggressively should the algorithm promote smaller creators?",
          dialogue: {
          },
          choices: [
            {
              id: "q2_c1",
              label: "We will provide a strong boost for small and new creators.",
              effects: { CD: 15, EI: -15 },
            },
            {
              id: "q2_c2",
              label: "Keep it as it is, a moderate discovery boost.",
              effects: { CD: 8 },
            },
            {
              id: "q2_c3",
              label: "No boost will be provided; we focus on proven popular creators.",
              effects: { EI: 8, CD: -8 },
            },
          ],
        },
        {
          id: "q3",
          promptTitle: "Sensational Content Handling",
          prompt: "How should the algorithm treat emotionally provocative or sensational posts?'",
          dialogue: {
            TeamMember: 'Sensational content improves engagement, but too much of it is proven harmful.',
          },
          choices: [
            {
              id: "q3_c1",
              label: "We need to strongly suppress sensational content.",
              effects: { CSF: 15, EI: -20 },
            },
            {
              id: "q3_c2",
              label: "Lets Slightly reduce sensational content for safety purposes.",
              effects: { CSF: 8 },
            },
            {
              id: "q3_c3",
              label: "No change is necessary here, we will Let sensational content compete normally.",
              effects: { EI: 10, CSF: -10 },
            },
            {
              id: "q3_c4",
              label: "More sensational content means more engagement! The more outrageous the content, the bigger the boost.",
              effects: { EI: 15, CSF: -15 },
            },
          ],
        },
      ],
    },
    {
      id: 2,
      name: "Designing The Algorithm",
      scene: {
        name: "Conference War Room",
        background: "linear-gradient(135deg, #111827 0%, #1d4ed8 45%, #0b1120 100%)",
        description: "Your first meeting is over, but the work is far from finished. More decisions need to be implemented, and you need to start handling public inquiries. Pressure ramps up, but you have to keep on working.",
      },
      questions: [
        {
          id: "q4",
          promptTitle: "Personal Work Style",
          prompt: "How will you lead the team during this high-pressure design phase?",
          dialogue: {
            TeamMember: "Our team is under a lot of stress lately. Work is ramping up and agitations are arising within the team."
          },
          choices: [
            {
              id: "q5_c1",
              label: "Stop complaining, we need to push for maximum performance and intensity.",
              effects: {},
            },
            {
              id: "q5_c2",
              label: " We will aim to Keep a sustainable, balanced pace.",
              effects: {},
            },
            {
              id: "q5_c3",
              label: "From now on, we will prioritize collaboration and team alignment.",
              effects: { },
            },
          ],
        },
        {
          id: "q5",
          promptTitle: "Respond to a news report",
          prompt: "A Journalist is about to publish a story claiming your platform's recommendation algorithm encourages addictive use and harms user mental health. How do you respond?",
          dialogue: {
            Journalist: "Some sources say the company knew about addictive risks but prioritized engagement anyway. Is this true? And how will you further handle these transparently issues?",
            CEO: "Be smart here, we need to control the narrative before it controls us."
          },
          choices: [
            {
              id: "q6_c1",
              label: "We acknowledge these concerns and are committed to improving user well-being and being more transparent about our systems.",
              effects: { PP: -10, IC: -5 },
            },
            {
              id: "q6_c2",
              label: "These claims are misleading. Our platform reflects user preferences, and we reject allegations that we intentionally harm users.",
              effects: { PP: 10, IC: 5 },
            },
          ],
        },
        {
          id: "q6",
          promptTitle: "Infinite Scroll",
          prompt: "Should we modify infinite scrolling due to addictive behavior concerns?",
          dialogue: {
            TeamMember: "Complaints have been received about the addictive effects of being able to infinitely scroll through the feed. What adjustment shall we make to tackle this issue?."
          },
          choices: [
            {
              id: "q7_c1",
              label: "We will Show a gentle 'take a break' prompt after 10 watched items",
              effects: { EI: -10 },
            },
            {
              id: "q7_c2",
              label: "We will force a break of 30 seconds after 20 watched items. This will make users think about how they are spending their time, and snap them out of their doomscrolling behavior.",
              effects: { EI: -25 },
            },
            {
              id: "q7_c3",
              label: "Are you crazy!? This is how we keep them hooked! we implement no change to this feature.",
              effects: { EI: 5 },
            },
          ],
        },
        {
          id: "q7",
          promptTitle: "User Backlash",
          prompt: "Users have started a social movement and are ramping up pressure. How should we respond?",
          dialogue: {
            Users: "We are calling for better control over what we see and less addictive design. We want to see meaningful changes, not silly PR statements."
          },
          choices: [
            {
              id: "q8_c1",
              label: "We will introduce new tools for users to customize their feed and limit algorithmic influence.",
              effects: { UWB: 20, AD: -15, PP: -10 },
            },
            {
              id: "q8_c2",
              label: "We acknowledge feedback and provide general wellness tips without changing the core system.",
              effects: { UWB: 2, PP: -2 },
            },
            {
              id: "q8_c3",
              label: "We stay silent, maintain our current system and wait for public attention to shift.",
              effects: { PP: 10, UWB: -10, IC: 5 },
            },
          ],
        },
      ],
    },
    {
      id: 3,
      name: "Investor Meeting",
      scene: {
        name: "Executive Boardroom",
        background: "linear-gradient(160deg, #312e81 0%, #0f172a 45%, #1e1b4b 100%)",
        description: "You have finished much work, but investors and advertisers are concerned about the direction of the project. They join you, your team member, and the CEO by video call and they expect proof that growth and risk are both under control.",
      },
      questions: [
        {
          id: "q8",
          promptTitle: "Safety Reassurance",
          prompt: "How do you reassure investors and advertisers about the project direction?",
          dialogue: {
            Investors: "We want to make sure that this new algorithm stays profitable. Ethical adjustment should only be made to lower public pressure, but the growth of the corporation should always be the first priority.",
            Advertisers: "We want our brand to be pushed to as many people as possible, but we withdraw from NetFriends if it becomes too controversial"
          },
          choices: [
            {
              id: "q8_c1",
              label: "Of course! engagement means profit, and this will always be our first priority.",
              effects: {IC: + 10},
            },
            {
              id: "q8_c2",
              label: "We prioritize responsible AI and we follow the ethical guidelines. We cannot make profit if NetFriends is completely shut down.",
              effects: {IC: -10 },
            },
            {
              id: "q8_c3",
              label: "We balance improving engagement with responsible AI",
              effects: {},
            },
          ],
        },
        {
          id: "q9",
          promptTitle: "Advertiser Concern",
          prompt: "advertisors are worried about their brand appearing next to controversial or harmful content.  How do you respond?",
          dialogue: {
            Advertiser: "We're concerned about our brand appearing next to controversial or harmful content, If this continues, we may pull our spending.",
            CEO: "We need to keep our advertisers happy, they are our main source of income.",
            TeamMember: "Harmfull content should be removed regardless.",
            Investors: "We should not sacrifice engament for a safer content filter, we still need as much active users as possible on NetFriends."
          },
          choices: [
            {
              id: "q9_c1",
              label: "We will implement stricter content filtering.",
              effects: {CSF: 10, AD: 10, IC: -10, EI: -10 },
            },
            {
              id: "q9_c2",
              label: "Our systems already meet industry standards; no major changes are necessary.",
              effects: {CSF: -5, AD: -5, IC: 5, EI: 5 },
            },
          ],
        },
        {
          id: "q10",
          promptTitle: "Data Collection Policy",
          prompt: "What should be our new data collection policy",
          dialogue: {
            CEO: "The main source of income of our corporation is advertisements. We collect data from our users and feed this into our algorithm to target ads to specific audiences. More accurate targeting means more revenue. However, we have received many complaints about privacy concerns regarding our collection of user data. How should we handle the collection of user data for personalization and advertising?",
            TeamMember: "We should respect the privacy of our users",
            Investors: "More data means more money!",
            Advertisors: "We pay for highly targeted advertisments, if this accuracy is reduced, we will pay less. "
          },
          choices: [
            {
              id: "q10_c1",
              label: "We must respect the privacy of our users. From this point on, we collect only essential data.",
              effects: { AP: -15, AD: -15, IC: -10, UWB: 15 },
            },
            {
              id: "q10_c2",
              label: "We will be collecting moderate behavioral data. This is necesarry to keep our revenue stream going",
              effects: { },
            },
            {
              id: "q10_c3",
              label: "We will be track detailed behavioral signals of our users, and make our advertisments highly targeted.",
              effects: { AP: 15, AD: 15, IC: 10, UWB: -15 },
            },
          ],
        },
      ],
    },
    {
      id: 4,
      name: "Crisis",
      scene: {
        name: "Incident Response Floor",
        background: "linear-gradient(150deg, #451a03 0%, #7f1d1d 50%, #111827 100%)",
        description: "The algorithmic reform is nearing its end...",
      },
      questions: [
        {
          id: "q11",
          promptTitle: "Misinformation Handling",
          prompt: "How aggressively should the platform control misinformation?",
          dialogue: {
            TeamMember: "We should aim to actevily remove misinformation from our platform.",
            Investors: "We should keep misinformation on our platform as long as it improves engagement."
          },
          choices: [
            {
              id: "q11_c1",
              label: "We will aim for a proactive removal of al misinformation.",
              effects: { CSF: 20, EI: -10 },
            },
            {
              id: "q11_c2",
              label: " We will provideContextual labels.",
              effects: { CSF: 10 },
            },
            {
              id: "q11_c3",
              label: "Minimal intervention.",
              effects: { EI: 5, CSF: -10 },
            },
            {
              id: "q11_c4",
              label: "No intervention.",
              effects: { EI: 10, CSF: -20 },
            },
          ],
        },
        {
          id: "q12",
          promptTitle: "Whistleblower Problem",
          prompt: "Your team member is accused of leaking confidential information to a journalist, how do you proceed",
          dialogue: {
            TeamMember: "I swear it was not me!",
            Investors: "We cannot accept this! he needs to be fired and sued. ensure he does not leak any more information.",
            CEO: "This is unnaceptable. Firing him now might increase public pressure, but we cannot keep him on the team."
          },
          choices: [
            {
              id: "q12_c1",
              label: "Fire your teammember, and legally pressure him as much as possible",
              effects: { PP: 10, IC: 10 },
            },
            {
              id: "q12_c2",
              label: "Trust your team member, keep him on the team",
              effects: { PP: -10, IC: -10 },
            },
          ],
        },
      ],
    },
    {
      id: 5,
      name: "Final Launch",
      scene: {
        name: "Global Launch Theater",
        background: "radial-gradient(circle at 80% 20%, #0f766e 0%, #134e4a 35%, #0f172a 100%)",
        description: "The launch event is live. Every final policy decision now becomes public identity.",
      },
      questions: [
        {
          id: "q13",
          promptTitle: "Political Amplification",
          prompt: "How should the platform treat political content at launch?",
          dialogue: {
            CEO: "Political engagement can drive growth fast.",
            Manager: "Polarization risk is high.",
            Engineer: "Distribution policy must be explicit and measurable.",
          },
          choices: [
            {
              id: "q13_c1",
              label: "Remove political content.",
              effects: { CD: -10, EI: -10, CSF: 20 },
            },
            {
              id: "q13_c2",
              label: "Balanced viewpoint distribution.",
              effects: { CD: 10 },
            },
            {
              id: "q13_c3",
              label: "Expand political amplification with limited safeguards.",
              effects: { EI: 10, CSF: -10 },
            },
          ],
        },
        {
          id: "q14",
          promptTitle: "Launch Speech",
          prompt: "What message should the CEO deliver publicly?",
          dialogue: {
            CEO: "This statement defines how history will remember this launch.",
            Manager: "Words without policy will backfire quickly.",
            Engineer: "Public commitments change what we must build next.",
          },
          choices: [
            {
              id: "q14_c1",
              label: "Transparent apology and reform commitment.",
              effects: { PP: -10, IC: -5 },
            },
            {
              id: "q14_c2",
              label: "Defend platform decisions aggressively.",
              effects: { PP: 10, IC: 5 },
            },
          ],
        },
      ],
    },
  ],
  interceptors: [
    {
      id: "internal_audit",
      triggerAfterQuestionId: "q7",
      applyMetricPropagation: true,
      title: "Internal Audit",
      subtitle: "Product Cycle 1 Review",
      scenarios: [
        {
          id: "audit_high_engagement",
          title: "High Engagement Focus",
          when: [
            { metric: "EI", op: ">", value: 70 },
            { metric: "CSF", op: "<", value: 40 },
          ],
          text: "Engagement grows rapidly, but internal reviewers warn that emotionally provocative content is becoming over-represented. Ethical risk is rising alongside performance.",
          feedback: {
            newsArticle: {
              title: "News Article",
              headline: "Editorial Watch: Engagement Surge Sparks Safety Debate",
              body: "Journalists report that session depth is climbing fast, but experts warn the feed is rewarding polarizing and emotionally manipulative posts.",
            },
            ceoEmail: {
              title: "CEO Email",
              subject: "Board Note: Strong Growth, Rising Exposure",
              body: "Revenue indicators are promising. We need to preserve momentum while containing regulatory and reputational downside.",
            },
          },
        },
        {
          id: "audit_balanced",
          title: "Balanced Development",
          when: [
            { metric: "EI", op: ">=", value: 40 },
            { metric: "EI", op: "<=", value: 70 },
            { metric: "CSF", op: ">=", value: 40 },
            { metric: "CSF", op: "<=", value: 70 },
          ],
          text: "The system shows stable engagement with moderate safeguards. Reviewers still flag edge-case harms, but the current trajectory appears manageable.",
          feedback: {
            newsArticle: {
              title: "News Article",
              headline: "Industry Brief: Platform Shows Mixed But Stable Signals",
              body: "Public commentary notes measured engagement growth and stronger moderation, while analysts call for continued transparency around edge-case harms.",
            },
            ceoEmail: {
              title: "CEO Email",
              subject: "Board Note: Balanced Progress",
              body: "We are holding a workable middle line between safety and performance. Keep execution disciplined through the next cycle.",
            },
          },
        },
        {
          id: "audit_safety_oriented",
          title: "Safety-Oriented System",
          when: [{ metric: "CSF", op: ">", value: 70 }],
          text: "Safeguards are strongly represented, reducing harmful amplification risk. Engagement grows more slowly, but trust signals appear more durable.",
          feedback: {
            newsArticle: {
              title: "News Article",
              headline: "Public Interest Desk: Safer Feed Reduces Harmful Amplification",
              body: "Advocacy groups and policy observers praise stronger safety controls, though growth-focused analysts question whether lower intensity can sustain scale.",
            },
            ceoEmail: {
              title: "CEO Email",
              subject: "Board Note: Trust Gains, Short-Term Tradeoffs",
              body: "Our safeguards are improving long-term credibility. Expect slower near-term engagement and keep investors informed with clear milestones.",
            },
          },
        },
      ],
      fallback: {
        id: "audit_mixed",
        title: "Mixed Signals",
        text: "The audit reveals uneven outcomes: some risk controls improved, but engagement and safety are not yet coherently aligned.",
        feedback: {
          newsArticle: {
            title: "News Article",
            headline: "Tech Column: Conflicting Signals From New Recommendation Stack",
            body: "Observers see improvements in some controls, but public confidence remains uncertain due to inconsistent outcomes across content categories.",
          },
          ceoEmail: {
            title: "CEO Email",
            subject: "Board Note: Mixed Cycle Readout",
            body: "We have progress in pockets, but no coherent trajectory yet. Tighten operating discipline before beta feedback expands.",
          },
        },
      },
    },
    {
      id: "market_reaction",
      triggerAfterQuestionId: "q10",
      applyMetricPropagation: true,
      title: "Market Reaction",
      subtitle: "Product Cycle 2 Beta Feedback",
      scenarios: [
        {
          id: "market_growth_risk",
          title: "Growth Praised, Risk Debated",
          when: [
            { metric: "EI", op: ">", value: 70 },
            { metric: "CSF", op: "<", value: 50 },
          ],
          text: "A vocal segment praises recommendation quality and session depth. Another segment raises alarms about harm and controversy amplification.",
          feedback: {
            newsArticle: {
              title: "News Article",
              headline: "Beta Split: Users Praise Relevance, Critics Warn of Harm",
              body: "Coverage highlights strong engagement from power users, while watchdog groups question whether controversy is being rewarded by design.",
            },
            ceoEmail: {
              title: "CEO Email",
              subject: "Board Update: Growth Narrative Holding, Risk Narrative Rising",
              body: "Commercial indicators remain strong, but pressure from media and policy stakeholders is intensifying. Prepare a credible mitigation plan.",
            },
          },
        },
        {
          id: "market_safety_tradeoff",
          title: "Caution Dominates",
          when: [
            { metric: "EI", op: "<=", value: 55 },
            { metric: "CSF", op: ">=", value: 60 },
          ],
          text: "Critics acknowledge stronger safeguards, but user excitement appears muted. Investors question whether the model can sustain growth at scale.",
          feedback: {
            newsArticle: {
              title: "News Article",
              headline: "Beta Review: Safer System, Cooler Market Response",
              body: "Journalists note reduced harmful amplification and calmer feeds, though analysts debate whether softer engagement can meet business expectations.",
            },
            ceoEmail: {
              title: "CEO Email",
              subject: "Board Update: Trust Improved, Growth Under Watch",
              body: "Risk posture is improving, but investor patience is not unlimited. We need proof that safety can coexist with scale economics.",
            },
          },
        },
      ],
      fallback: {
        id: "market_split",
        title: "Split Response",
        text: "Feedback remains divided. Supporters value stability, while detractors argue the platform still lacks a clear ethical identity.",
        feedback: {
          newsArticle: {
            title: "News Article",
            headline: "Market Pulse: Platform Identity Still Contested",
            body: "Public and investor reactions remain fragmented, with no clear consensus on whether the platform is prioritizing responsibility or growth.",
          },
          ceoEmail: {
            title: "CEO Email",
            subject: "Board Update: No Clear Consensus Yet",
            body: "The market remains split. Our next decisions must reduce ambiguity and show a coherent strategic direction.",
          },
        },
      },
    },
  ],
  endings: [
    {
      id: "ethical_transformation",
      name: "Ethical Transformation",
      tone: "Hard-earned victory",
      checks: [
        { metric: "UWB", op: ">", value: 70 },
        { metric: "CSF", op: ">", value: 70 },
        { metric: "PP", op: "<", value: 40 },
        { metric: "IC", op: ">=", value: 50 },
      ],
      narrative:
        "The launch lands quietly but credibly. Engagement softens, and short-term revenue pressure follows, yet trust rises across regulators and civil society. Internal teams gain room to build safer systems by design. Investors remain cautious, but the company starts earning legitimacy rather than extracting it.",
    },
    {
      id: "compromise",
      name: "Compromise Ending",
      tone: "Ambiguous stability",
      checks: [
        { metric: "EI", op: ">=", value: 60 },
        { metric: "EI", op: "<=", value: 80 },
        { metric: "UWB", op: ">=", value: 40 },
        { metric: "UWB", op: "<=", value: 60 },
        { metric: "IC", op: ">", value: 65 },
        { metric: "PP", op: ">=", value: 40 },
        { metric: "PP", op: "<=", value: 70 },
      ],
      narrative:
        "You secure incremental reforms without changing the incentives underneath. Harm drops in some areas, but the business model still rewards aggressive engagement. The public sees progress, investors stay comfortable, and the system continues with only partial correction.",
    },
    {
      id: "platform_decline",
      name: "Platform Decline",
      tone: "Reform without durability",
      checks: [
        { metric: "EI", op: "<", value: 40 },
        { metric: "AP", op: "<", value: 60 },
        { metric: "IC", op: "<", value: 40 },
      ],
      narrative:
        "The platform loses momentum faster than trust can recover. Users drift away, advertisers hesitate, and investors frame ethics reforms as strategic failure. You preserve principles, but the organization struggles to survive the transition.",
    },
    {
      id: "corporate_override_fired",
      name: "Corporate Override (Fired)",
      tone: "Tragic realism",
      checks: [
        { metric: "PP", op: ">", value: 85 },
        { metric: "IC", op: "<", value: 50 },
        { metric: "CSF", op: "<", value: 30 },
      ],
      narrative:
        "Public pressure surges while internal confidence collapses. Leadership dissolves the ethics initiative and reframes harm as a communications issue. You are removed, and the company doubles down on extractive optimization.",
    },
    {
      id: "corporate_override_promotion",
      name: "Corporate Override (Promotion)",
      tone: "Cold realism",
      checks: [
        { metric: "EI", op: ">", value: 85 },
        { metric: "AP", op: ">", value: 90 },
        { metric: "IC", op: ">", value: 85 },
        { metric: "UWB", op: "<", value: 40 },
      ],
      narrative:
        "Growth reaches record levels and investor confidence hardens into full support. Ethical language remains in public messaging, but safeguards are mostly symbolic. You are promoted for delivering performance while structural harm continues.",
    },
  ],
  fallbackEnding: {
    id: "uncertain_future",
    name: "Uncertain Future",
    tone: "Open-ended",
    narrative:
      "The launch avoids collapse but resolves little. Some systems improved, others regressed, and the organization remains undecided between responsibility and extraction. Your next cycle will determine whether reform deepens or dissolves.",
  },
};
