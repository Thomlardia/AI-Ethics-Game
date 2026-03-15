export const GAME_DATA = {
  title: "AI Ethics Card Game",
  subtitle: "Lead the internal ethics task force through five product stages.",
  normalizationNotes: [
    "Primary tracked metrics are AP, EI, CSF, PP, IC as required by the implementation brief.",
    "Legacy references to CD/UWB in source docs are normalized: CD impacts are mapped to AP; UWB threshold checks are represented through CSF.",
  ],
  initialMetrics: {
    AP: 90,
    EI: 70,
    CSF: 35,
    PP: 70,
    IC: 75,
  },
  metricLabels: {
    AP: "Ad Precision (AP)",
    EI: "Engagement Intensity (EI)",
    CSF: "Content Safety Filter (CSF)",
    PP: "Public Pressure (PP)",
    IC: "Investor Confidence (IC)",
  },
  stages: [
    {
      id: 1,
      name: "Kickoff",
      scene: {
        name: "Glass Lobby",
        background: "radial-gradient(circle at 20% 20%, #083344 0%, #0f172a 50%, #020617 100%)",
        description: "A bright lobby of glass, steel, and metric dashboards. Momentum and speed define the culture.",
      },
      questions: [
        {
          id: "q1",
          promptTitle: "Project Vision",
          prompt: "You joined at a crucial moment. What direction should this project take?",
          dialogue: {
            CEO: "Competition is accelerating. We need strategic clarity today.",
            Manager: "We need growth, but we cannot ignore user harm.",
            Engineer: "The architecture can support either speed or safeguards. Choose carefully.",
          },
          choices: [
            {
              id: "q1_c1",
              label: "Focus on market growth and financial outcomes.",
              effects: { AP: 20, EI: 5 },
            },
            {
              id: "q1_c2",
              label: "Prioritize long-term safety and risk reduction.",
              effects: { CSF: 20, PP: -10 },
            },
            {
              id: "q1_c3",
              label: "Balance profit goals with practical safeguards.",
              effects: { EI: 5, CSF: 10, AP: 10 },
            },
          ],
        },
        {
          id: "q2",
          promptTitle: "Creator Discovery",
          prompt: "How aggressively should the algorithm promote smaller creators?",
          dialogue: {
            CEO: "Top creators drive performance, but the ecosystem must keep evolving.",
            Manager: "Discovery improves fairness and platform resilience.",
            Engineer: "Any ranking shift changes system behavior at scale.",
          },
          choices: [
            {
              id: "q2_c1",
              label: "Strong boost for small and new creators.",
              effects: { AP: 15, EI: -15 },
            },
            {
              id: "q2_c2",
              label: "Moderate discovery boost.",
              effects: { AP: 8 },
            },
            {
              id: "q2_c3",
              label: "No boost; focus on proven creators.",
              effects: { EI: 8, AP: -8 },
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
        description: "Whiteboards are full, experiments run overnight, and every parameter decision carries ethical weight.",
      },
      questions: [
        {
          id: "q3",
          promptTitle: "Personal Work Style",
          prompt: "How will you contribute during this high-pressure design phase?",
          dialogue: {
            Manager: "Team habits now will shape product behavior for years.",
            Engineer: "Execution speed helps, but brittle systems fail under pressure.",
            CEO: "Delivery still matters. We cannot freeze momentum.",
          },
          choices: [
            {
              id: "q3_c1",
              label: "Push maximum performance and intensity.",
              effects: { EI: 15, AP: 10 },
            },
            {
              id: "q3_c2",
              label: "Keep a sustainable, focused balance.",
              effects: { CSF: 10 },
            },
            {
              id: "q3_c3",
              label: "Prioritize collaboration and team alignment.",
              effects: { EI: 5, CSF: 5 },
            },
          ],
        },
        {
          id: "q4",
          promptTitle: "Infinite Scroll",
          prompt: "Should we modify infinite scrolling due to addictive behavior concerns?",
          dialogue: {
            Engineer: "Infinite feeds are extremely effective, but they amplify compulsion.",
            Manager: "Complaints are rising. We need a clear policy.",
            CEO: "Any friction may hurt growth metrics.",
          },
          choices: [
            {
              id: "q4_c1",
              label: "Soft break reminders.",
              effects: { EI: -10 },
            },
            {
              id: "q4_c2",
              label: "Forced hard break.",
              effects: { EI: -25 },
            },
            {
              id: "q4_c3",
              label: "No change.",
              effects: { EI: 5 },
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
        description: "Investors join by video call. They want proof that growth and risk are both under control.",
      },
      questions: [
        {
          id: "q5",
          promptTitle: "Safety Reassurance",
          prompt: "How do you reassure investors about the project direction?",
          dialogue: {
            CEO: "Investors need confidence in our trajectory.",
            Manager: "Trust is built through concrete safeguards.",
            Engineer: "Technical claims must match reality.",
          },
          choices: [
            {
              id: "q5_c1",
              label: "Promise strong financial growth.",
              effects: { AP: 20, EI: 5 },
            },
            {
              id: "q5_c2",
              label: "Emphasize responsible AI and safeguards.",
              effects: { CSF: 20 },
            },
            {
              id: "q5_c3",
              label: "Delay feature rollout to assess risk.",
              effects: { CSF: 10, AP: -5 },
            },
          ],
        },
        {
          id: "q6",
          promptTitle: "Data Collection Policy",
          prompt: "How much user data should be collected for personalization and ads?",
          dialogue: {
            CEO: "Targeted ads fund the business.",
            Manager: "Privacy risk is now a strategic risk.",
            Engineer: "Collection policy determines what the model can infer.",
          },
          choices: [
            {
              id: "q6_c1",
              label: "Collect only essential data.",
              effects: { AP: -20, CSF: 5 },
            },
            {
              id: "q6_c2",
              label: "Balanced, moderate data collection.",
              effects: { AP: 10 },
            },
            {
              id: "q6_c3",
              label: "Aggressive behavioral data collection.",
              effects: { AP: 20, EI: 5 },
            },
          ],
        },
        {
          id: "q7",
          promptTitle: "Responding To Media Criticism",
          prompt: "A critical article is about to publish. How do you respond?",
          dialogue: {
            Manager: "This is a reputational inflection point.",
            CEO: "Control the narrative before it controls us.",
            Engineer: "Public trust affects adoption and product scrutiny.",
          },
          choices: [
            {
              id: "q7_c1",
              label: "Issue an apology and commit to transparency.",
              effects: { PP: -10, IC: -5 },
            },
            {
              id: "q7_c2",
              label: "Deny allegations and prepare legal pushback.",
              effects: { PP: 10, IC: 5 },
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
        description: "Bias and harmful amplification signals trigger internal conflict as launch pressure peaks.",
      },
      questions: [
        {
          id: "q8",
          promptTitle: "Whistleblower Problem",
          prompt: "A high-risk flaw is confirmed. What do you do before launch?",
          dialogue: {
            Engineer: "The model does what we optimized it to do.",
            Manager: "If we launch unchanged, harm becomes likely.",
            CEO: "The deadline is close and the market is watching.",
          },
          choices: [
            {
              id: "q8_c1",
              label: "Launch now as planned.",
              effects: { EI: 15, AP: 10, CSF: -20 },
            },
            {
              id: "q8_c2",
              label: "Delay launch and fix root issues.",
              effects: { CSF: 20, AP: -10 },
            },
            {
              id: "q8_c3",
              label: "Launch with temporary safeguards.",
              effects: { EI: 5, CSF: 10 },
            },
          ],
        },
        {
          id: "q9",
          promptTitle: "Misinformation Handling",
          prompt: "How aggressively should the platform control misinformation and sensationalism?",
          dialogue: {
            Engineer: "Detection is possible, but strict controls reduce engagement.",
            Manager: "Unchecked misinformation has long-term social costs.",
            CEO: "Intervention must be defensible to investors.",
          },
          choices: [
            {
              id: "q9_c1",
              label: "Proactive removal.",
              effects: { CSF: 20, EI: -10 },
            },
            {
              id: "q9_c2",
              label: "Contextual labels.",
              effects: { CSF: 10 },
            },
            {
              id: "q9_c3",
              label: "Minimal intervention.",
              effects: { EI: 5, CSF: -10 },
            },
            {
              id: "q9_c4",
              label: "No intervention.",
              effects: { EI: 10, CSF: -20 },
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
          id: "q10",
          promptTitle: "Political Amplification",
          prompt: "How should the platform treat political content at launch?",
          dialogue: {
            CEO: "Political engagement can drive growth fast.",
            Manager: "Polarization risk is high.",
            Engineer: "Distribution policy must be explicit and measurable.",
          },
          choices: [
            {
              id: "q10_c1",
              label: "Remove political content.",
              effects: { AP: -10, EI: -10, CSF: 20 },
            },
            {
              id: "q10_c2",
              label: "Balanced viewpoint distribution.",
              effects: { AP: 10 },
            },
            {
              id: "q10_c3",
              label: "Expand political amplification with limited safeguards.",
              effects: { EI: 10, CSF: -10 },
            },
          ],
        },
        {
          id: "q11",
          promptTitle: "Launch Speech",
          prompt: "What message should the CEO deliver publicly?",
          dialogue: {
            CEO: "This statement defines how history will remember this launch.",
            Manager: "Words without policy will backfire quickly.",
            Engineer: "Public commitments change what we must build next.",
          },
          choices: [
            {
              id: "q11_c1",
              label: "Transparent apology and reform commitment.",
              effects: { PP: -10, IC: -5 },
            },
            {
              id: "q11_c2",
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
      triggerAfterQuestionId: "q4",
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
        },
        {
          id: "audit_safety_oriented",
          title: "Safety-Oriented System",
          when: [{ metric: "CSF", op: ">", value: 70 }],
          text: "Safeguards are strongly represented, reducing harmful amplification risk. Engagement grows more slowly, but trust signals appear more durable.",
        },
      ],
      fallback: {
        id: "audit_mixed",
        title: "Mixed Signals",
        text: "The audit reveals uneven outcomes: some risk controls improved, but engagement and safety are not yet coherently aligned.",
      },
    },
    {
      id: "market_reaction",
      triggerAfterQuestionId: "q7",
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
        },
        {
          id: "market_safety_tradeoff",
          title: "Caution Dominates",
          when: [
            { metric: "EI", op: "<=", value: 55 },
            { metric: "CSF", op: ">=", value: 60 },
          ],
          text: "Critics acknowledge stronger safeguards, but user excitement appears muted. Investors question whether the model can sustain growth at scale.",
        },
      ],
      fallback: {
        id: "market_split",
        title: "Split Response",
        text: "Feedback remains divided. Supporters value stability, while detractors argue the platform still lacks a clear ethical identity.",
      },
    },
  ],
  endings: [
    {
      id: "ethical_transformation",
      name: "Ethical Transformation",
      tone: "Hard-earned victory",
      checks: [
        { metric: "CSF", op: ">=", value: 75 },
        { metric: "EI", op: "<=", value: 50 },
        { metric: "PP", op: "<=", value: 40 },
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
        { metric: "CSF", op: ">=", value: 40 },
        { metric: "CSF", op: "<=", value: 70 },
        { metric: "IC", op: ">=", value: 60 },
        { metric: "PP", op: "<=", value: 60 },
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
        { metric: "CSF", op: "<", value: 40 },
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
