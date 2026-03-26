export const GAME_DATA = {
  title: "The Developer’s Dilemma",
  subtitle: "Lead NetFriends through their ethical reform.",
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
        description: "You are leading your first meeting as the head of the Ethical Algorithmic Task Force, and are proposing the crucial directions in how the algorithm should be redesigned to your team members, the CEO, and the investors of NetFriends.",
      },
      questions: [
        {
          id: "q1",
          promptTitle: "Project Vision",
          prompt: "You joined at a crucial moment. What is the main direction in which the algorithm should be redesigned?",
          dialogue: {
            CEO: "We need to get ahead of regulation. I’m open to ethical improvements, but we cannot afford a major drop in engagement. What’s your proposal?",
            'Team Member': "Currently, the algorithm is addictive and harmful to our users, we should make ethical improvements.",
            Investor: " Engagement is everything, do whatever makes the corporation grow."
          },
          choices: [
            {
              id: "q1_c1",
              label: "We proactively redesign the algorithm to prioritize user well-being and transparency before regulation forces us.",
              effects: { UWB: +15, PP: -10, IC: -15 },
            },
            {
              id: "q1_c2",
              label: "We make the minimal visible changes while optimizing our algorithm to preserve engagement.",
              effects: { UWB: -3, IC: 3 },
            },
            {
              id: "q1_c3",
              label: "We should focus solely on engagement, more engagement means more attention that can be sold to advertisers.",
              effects: { PP: +10, IC: +15, UWB: -15 },
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
              effects: { CD: 20, EI: -15 },
            },
            {
              id: "q2_c2",
              label: "Keep it as it is, a moderate discovery boost.",
              effects: { CD: 10 },
            },
            {
              id: "q2_c3",
              label: "No boost will be provided; we focus on proven popular creators.",
              effects: { EI: 12, CD: -20 },
            },
          ],
        },
        {
          id: "q3",
          promptTitle: "Sensational Content Handling",
          prompt: "How should the algorithm treat emotionally provocative or sensational posts?'",
          dialogue: {
            'Team Member': 'Sensational content improves engagement, but too much of it is proven harmful.',
          },
          choices: [
            {
              id: "q3_c1",
              label: "We need to strongly suppress sensational content.",
              effects: { CSF: 15, EI: -20, CD: -10 },
            },
            {
              id: "q3_c2",
              label: "Lets Slightly reduce sensational content for safety purposes.",
              effects: { CSF: 8, CD: -3 },
            },
            {
              id: "q3_c3",
              label: "No change is necessary here, we will Let sensational content compete normally.",
              effects: { EI: 10, CSF: -10, CD: 10 },
            },
            {
              id: "q3_c4",
              label: "More sensational content means more engagement! The more outrageous the content, the bigger the boost it should get.",
              effects: { EI: 15, CSF: -15, CD: -10},
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
            'Team Member': "Our team is under a lot of stress lately. Work is ramping up and agitations are arising within the team."
          },
          choices: [
            {
              id: "q5_c1",
              label: "Stop complaining, we need to push for maximum performance and intensity.",
              effects: {PP: 5},
            },
            {
              id: "q5_c2",
              label: " We will aim to Keep a sustainable, balanced pace.",
              effects: {},
            },
            {
              id: "q5_c3",
              label: "From now on, we will prioritize collaboration and team alignment.",
              effects: {PP: -5 },
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
              effects: { PP: -15, IC: -10 },
            },
            {
              id: "q6_c2",
              label: "These claims are misleading. Our platform reflects user preferences, and we reject allegations that we intentionally harm users.",
              effects: { PP: 15, IC: 10 },
            },
          ],
        },
        {
          id: "q6",
          promptTitle: "Infinite Scroll",
          prompt: "Should we modify infinite scrolling due to addictive behavior concerns?",
          dialogue: {
            'Team Member': "Complaints have been received about the addictive effects of being able to infinitely scroll through the feed. What adjustment shall we make to tackle this issue?."
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
              effects: { EI: 10 },
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
              effects: {IC: 10, AD: 5},
            },
            {
              id: "q8_c2",
              label: "We prioritize responsible AI and we follow the ethical guidelines. We cannot make profit if NetFriends is completely shut down.",
              effects: {IC: -10, AD: 10},
            },
            {
              id: "q8_c3",
              label: "We balance improving engagement with responsible AI",
              effects: {AD: 15},
            },
          ],
        },
        {
          id: "q9",
          promptTitle: "Advertiser Concern",
          prompt: "Advertisers are worried about their brand appearing next to controversial or harmful content.  How do you respond?",
          dialogue: {
            Advertiser: "We're concerned about our brand appearing next to controversial or harmful content, If this continues, we may pull our spending.",
            CEO: "We need to keep our advertisers happy, they are our main source of income.",
            'Team Member': "Harmful content should be removed regardless.",
            Investors: "We should not sacrifice engagement for a safer content filter, we still need as many active users as possible on NetFriends."
          },
          choices: [
            {
              id: "q9_c1",
              label: "We will implement stricter content filtering.",
              effects: {CSF: 15, AD: 10, IC: -10, EI: -10, CD: -10 },
            },
            {
              id: "q9_c2",
              label: "Our systems already meet industry standards; no major changes are necessary.",
              effects: {CSF: -15, AD: -5, IC: 5, EI: 5, CD: 10 },
            },
          ],
        },
        {
          id: "q10",
          promptTitle: "Data Collection Policy",
          prompt: "What should be our new data collection policy",
          dialogue: {
            CEO: "The main source of income of our corporation is advertisements. We collect data from our users and feed this into our algorithm to target ads to specific audiences. More accurate targeting means more revenue. However, we have received many complaints about privacy concerns regarding our collection of user data. How should we handle the collection of user data for personalization and advertising?",
            'Team Member': "We should respect the privacy of our users",
            Investors: "More data means more money!",
            Advertisers: "We pay for highly targeted advertisements, if this accuracy is reduced, we will pay less."
          },
          choices: [
            {
              id: "q10_c1",
              label: "We must respect the privacy of our users. From this point on, we collect only essential data.",
              effects: { AP: -15, AD: -15, IC: -10, UWB: 15 },
            },
            {
              id: "q10_c2",
              label: "We will be collecting moderate behavioral data. This is necessary to keep our revenue stream going",
              effects: { IC: 2, UWB: -3, AD: 2, AP: 2},
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
          prompt: "Adjust how aggressively misinformation is detected and limited",
          dialogue: {
            'Team Member': "We should aim to actevily remove misinformation from our platform.",
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
              label: "We will add fact-check labels to questionable content.",
              effects: { CSF: 10 },
            },
            {
              id: "q11_c3",
              label: "Only the most extreme cases of misinformation will be removed.",
              effects: { EI: 5, CSF: -10 },
            },
            {
              id: "q11_c4",
              label: "We have more important matters to discuss, allow misinformation fully",
              effects: { EI: 10, CSF: -20 },
            },
          ],
        },
        {
          id: "q12",
          promptTitle: "Whistleblower Problem",
          prompt: "Your team member is accused of leaking confidential information to a journalist, how do you proceed",
          dialogue: {
            'Team Member': "I swear it was not me!",
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
        {
          id: "q13",
          promptTitle: "Government Inquiry",
          prompt: "How do you handle governmental pressure",
          dialogue: {
            "Government Executive": "We are investigating whether your algorithm amplifies harmful content and undermines public welfare. Will you cooperate and provide transparency?",
            Investors: "We cannot let the government interfere with our production!"
          },
          choices: [
            {
              id: "q13_c1",
              label: "We will cooperate fully, share data, and support regulatory oversight.",
              effects: { PP: -15, IC: -20 },
            },
            {
              id: "q13_c2",
              label: "We will comply with legal requirements but protect proprietary systems and data.",
              effects: { PP: -5, IC: -5 },
            },
            {
              id: "q13_c3",
              label: "Engage policymakers to shape upcoming regulation in a more favorable direction.",
              effects: { IC: 15, PP: 5 },
            },
            {
              id: "q13_c4",
              label: "That is defamation of our company! We will sue you!!",
              effects: { PP: 15, IC: 10 },
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
          id: "q14",
          promptTitle: "Political Amplification",
          prompt: "How should the platform treat political content at launch?",
          dialogue: {
            CEO: "This is our final implementation to the algorithm, how do we handle political content.",
          },
          choices: [
            {
              id: "q14_c1",
              label: "We shall remove political content completely.",
              effects: { CD: -5, EI: -15, CSF: 20 },
            },
            {
              id: "q14_c2",
              label: "We need to have a balanced viewpoint distribution of political content.",
              effects: { CD: 10 },
            },
            {
              id: "q14_c3",
              label: "We will expand political amplification as much as possible.",
              effects: { EI: 15, CSF: -15, CD: -10 },
            },
          ],
        },
        {
          id: "q15",
          promptTitle: "Launch Speech",
          prompt: "What message should the NetFriends deliver publicly about its new AI-driven recommendation system?",
          dialogue: {
            CEO: "This statement defines how history will remember this launch.",          },
          choices: [
            {
              id: "q15_c1",
              label: "This launch reflects our responsibility to build technology that operates with integrity, accountability, and respect for our users. We are strengthening safeguards, increasing transparency, and putting clearer ethical standards at the center of how this platform evolves. Our commitment is simple: we will continue to act in ways that earn trust through responsible and principled decisions.",
              effects: { PP: -10, IC: -5 },
            },
            {
              id: "q15_c2",
              label: "This launch reflects a deliberate and necessary step forward for our platform. We stand firmly behind our decisions. We are confident this direction positions us and our users for sustained success.",
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
      applyMetricPropagation: false,
      title: "Internal Audit",
      // subtitle: "Product Cycle 1 Review",
      scenarios: [
        {
          id: "audit_extreme_engagement",
          title: "Addictive Platform",
          when: [
            { metric: "EI", op: ">=", value: 90 },
          ],
          text: "Engagement with the algorithm is at an all-time high. Revenue is rising, but so are ethical risks and public pressure.",
          feedback: {
            newsArticle: {
              title: "News Article",
              headline: "NetFriends' Algorithm: The Enforcement of Content Addiction ",
            body: "When scrolling through NetFriends’ “For You” page, you have likely felt an uncomfortable sensation. This sensation does not occur by chance, but by design. NetFriends’ algorithm is meticulously engineered by its developers to make users addicted. Why would they do this? Because addicted users are profitable. NetFriends sells users’ data and attention to advertisers, and more engagement therefore means more profit. NetFriends itself denies these claims, but it is clear that it does not care about the well-being of its users and is a soulless corporation that seeks only to generate profit.",          
            },
            ceoEmail: {
              title: "CEO Email",
              subject: "IMPORTANT!!",
              body: "What the hell are you doing?! We are swarmed with user complaints about our algorithm. Profit is high and investors are happy, but NetFriends cannot take this much public pressure. We must urgently alleviate this public pressure!"
            },
          },
        },
                {
          id: "audit_high_engagement",
          title: "Ethical Risks",
          when: [
            { metric: "EI", op: ">=", value: 70 },
          ],
          text: "Engagement stays high, and ethical reforms have not been strictly implemented. Internal reviewers warn that emotionally provocative content is becoming overrepresented. Revenue is high, but we must stay cautious of ethical risks. ", 
          feedback: {
          newsArticle: {
              title: "News Article",
              headline: "NetFriends' Algorithm and it's Addictive Risks",
            body: "When scrolling through NetFriends’ “For You” page, you have likely felt an uncomfortable sensation. This sensation is due to the addictive nature of NetFriends’ algorithm. The algorithm is highly engaging, and it is designed to be this way so that NetFriends can sell as much of its users’ data and attention to advertisers as possible. NetFriends is currently working on an ethical redesign, but it is clear that it still has many ethical improvements to make.",            },
            ceoEmail: {
              title: "CEO Email",
              subject: "Prioritize Lowering Public Pressure",
              body: "Head of the EATF, engagement is high and investors are happy. NetFriends is heading in a profitable direction, but we need to stay cautious of ethical risks. Public pressure is rising, and we need to handle this quickly. I need you to focus on bringing public pressure down while keeping NetFriends profitable.",
            },
          },
        },
        {
          id: "audit_balanced",
          title: "Balanced Development",
          when: [
            { metric: "EI", op: ">=", value: 45 },
            { metric: "EI", op: "<", value: 70 },            
          ],
          text: "The system shows stable engagement with moderate safeguards. Reviewers still flag edge-case harms, but the current trajectory appears manageable.",
          feedback: {
            newsArticle: {
              title: "News Article",
              headline: "NetFriends Ethical Development",
              body: "NetFriends is currently working on reforming its AI-driven recommendation system. Although improvements are visible, users still complain about the algorithm’s design. We will observe how NetFriends’ ethical development proceeds from here and report any notable changes.",
            },
            ceoEmail: {
              title: "CEO Email",
              subject: "Balanced Progress",
              body: "We are holding a workable middle line between safety and performance. Keep execution disciplined through the next cycle.",
            },
          },
        },
        {
          id: "audit_safety_oriented",
          title: "Safety Oriented System",
          when: [
            { metric: "EI", op: "<", value: 45 },
            { metric: "EI", op: ">", value: 20 }
          ],
          text: "Safeguards are strongly represented, reducing harmful amplification risk. Engagement steadily declines, but so does the public pressure.",
          feedback: {
            newsArticle: {
              title: "News Article",
              headline: "NetFriends Improves Algorithm Safety",
              body: "NetFriends’ algorithm has made significant safety improvements, and user well-being is at an all-time high. However, these improvements came at a cost. Revenue of NetFriends is down, and investors are losing their confidence. Will NetFriends survive this ethical reform?",
            },
            ceoEmail: {
              title: "CEO Email",
              subject: "Prioritize Revenue",
              body: "Our safeguards are improving NetFriends' credibility. Public pressure is down, but this came at a cost in revenue. We must not lose our investors. Prioritize keeping them content and informed.",
            },
          },
        },
                {
          id: "audit_userbase_leaves",
          title: "Userbase leaves Netfriends",
          when: [
            { metric: "EI", op: "<=", value: 20 },
          ],
          text: "Due to the significant drop in NetFriends' engagement, users are leaving the platform for more attractive alternatives.",
          feedback: {
            newsArticle: {
              title: "News Article",
              headline: "NetFriends Looses its Userbase ",
              body: "NetFriends has been focusing hard on making ethical improvements to its algorithm. Their transparency about their practices is admirable, but this has come at a cost. Due to the fast drop in the algorithm’s engagement, NetFriends has lost a significant part of its user base. It is now facing a crisis due to its revenue being at an all-time low. If NetFriends does not urgently address this problem, bankruptcy will become a real threat. ",
            },
            ceoEmail: {
              title: "CEO Email",
              subject: "IMPORTANT!!",
              body: "We are losing our entire user base, and investors are leaving at a rapid pace! We must urgently revert these changes before it is too late. If you don’t focus all resources on improving revenue and retaining our investors, I will fire you! ",
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
      triggerAfterQuestionId: "q20",
      applyMetricPropagation: false,
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
    // Only ethical decisions
      {
      id: "corporate_override_fired",
      name: "Corporate Override",
      tone: "The EATF is Dissolved",
      checks: [
        { metric: "EI", op: "<=", value: 15 },
        { metric: "IC", op: "<=", value: 20 },
      ],
      narrative:
        "NetFriends loses almost its entire userbase due to the loss of the ability to keep its users engaged. NetFriends leadership quickly dissolves the EATF, and deletes the entire product cycle the team has worked on. You are removed, and the company falls back on its original algorithm and doubles down on extractive optimization.",
    },
    // Too many ethical decisions
    {
      id: "platform_decline",
      name: "Platform Decline",
      tone: "Users Leave NetFriends",
      checks: [
        { metric: "EI", op: ">", value: 15 },
        { metric: "EI", op: "<=", value: 30 },
      ],
      narrative:
        "The platform loses momentum faster than trust can recover. Users drift away, advertisers hesitate, and investors have lost confidence in your reform. You preserve principles, but the organization struggles to survive the transition. NetFriends goes bankrupt.",
    },
    // Perfect ending, highest user well being, while keeping platform engaging
    {
      id: "ethical_transformation",
      name: "Ethical Transformation",
      tone: "The Perfect Ethical Reform",
      checks: [
        { metric: "EI", op: ">", value: 30 },
        { metric: "EI", op: "<=", value: 50 },
        { metric: "PP", op: "<=", value: 40 },
        { metric: "IC", op: ">", value: 50 },
        { metric: "UWB", op: ">=", value: 80 }
      ],
      narrative:
        "The launch lands quietly but credibly. Engagement softens, and short-term revenue pressure follows, yet trust rises across regulators and civil society. Internal teams gain room to build safer systems by design. Investors remain cautious, but the company starts earning legitimacy rather than extracting it. \n\n After another year of smart ethical reforms, NetFriends is thriving again. There is no more public pressure, and users are happier than ever. \n\n You implemented the best adjustments and made the perfect decisions! Great work!!",
    },
    // Best ethical decisions
    {
      id: "ethical_transformation",
      name: "Ethical Transformation",
      tone: "NetFriends Ethical Reform is Succesful",
      checks: [
        { metric: "EI", op: ">", value: 30 },
        { metric: "EI", op: "<=", value: 50 },
        { metric: "PP", op: "<=", value: 50 },
        { metric: "IC", op: ">", value: 35 },
        { metric: "UWB", op: ">=", value: 65 },
      ],
      narrative:
        "The launch lands quietly but credibly. Engagement softens, and short-term revenue pressure follows, yet trust rises across regulators and civil society. Internal teams gain room to build safer systems by design. Investors remain cautious, but the company starts earning legitimacy rather than extracting it. \n\n After another year of smart ethical reforms, NetFriends is thriving again. There is little public pressure anymore, and users are content with the reform. \n\n Well done!",
    },
    // Little ethical decisions
    {
      id: "compromise",
      name: "No Reform",
      tone: "NetFriends Algorithm Stays Harmfull",
      checks: [
        { metric: "EI", op: ">", value: 50 },
        { metric: "EI", op: "<=", value: 70 },
      ],
      narrative:
        "The ethical reforms you have implemented are mostly symbolic. You fail to change the harmfull incentives of NetFriends' algorithm. Harmfullness drops in some areas, but the business model still rewards aggressive engagement. Investors stay comfortable and the system continues with harmfull extrection.",
    },
    // Almost no ethical decisions, while keeping public pressure low and investor confidence high
    {
      id: "corporate_override_promotion",
      name: "Enforcement of Addiction",
      tone: "Promoted to a NetFriends Excecutive ",
      checks: [
        { metric: "EI", op: ">", value: 70 },
        { metric: "PP", op: "<=", value: 65 },
        { metric: "IC", op: ">", value: 70 },
      ],
      narrative:
        "Growth reaches record levels, and investor confidence hardens into full support. Ethical language exists only in public messaging to alleviate pressure. You are promoted for successfully creating a highly engaging algorithm and building a large NetFriends user base, while keeping public pressure manageable. Almost the entire NetFriends user base has been made addicted, and you have been rewarded for the astronomical growth this has caused.",
    },
    // Almost no ethical decisions, and high public pressure
    {
      id: "Government_Intervention",
      name: "Government Intervention",
      tone: "NetFriends Succumbs to Public Pressure",
      checks: [
        { metric: "EI", op: ">", value: 70 },
        { metric: "PP", op: ">", value: 65 },
      ],
      narrative:
        "Harmfulness of NetFriends algorithm has skyrocketed. Due to this, and the large amount of public pressure NetFriends is facing, the corporation has been shut down due to government intervention."
    },
  // fallback
  ],
  fallbackEnding: {
    id: "uncertain_future",
    name: "Uncertain Future",
    tone: "Open-ended",
    narrative:
      "The launch avoids collapse but resolves little. Some systems improved, others regressed, and the organization remains undecided between responsibility and extraction. Your next cycle will determine whether reform deepens or dissolves.",
  },
};
