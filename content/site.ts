export const siteUrl = new URL(process.env.SITE_URL || "https://pickled3.com");

export const site = {
  name: "PickleD³",
  appStoreUrl: "https://apps.apple.com/us/app/pickled3/id6816802935",
  communityUrl: "https://docs.google.com/forms/d/1JbSmSY_A9PRrcdiUJ_dJlr5eHQyGjXVutvDYWjYHX8c/viewform",
  instagram: "https://www.instagram.com/pickle_d3/",
  tiktok: "https://www.tiktok.com/@pickle_d3?_r=1&_t=ZT-9BbUPGsME3i",
  hero: {
    heading: "Make every practice",
    emphasis: "matter.",
    description: "Stop guessing what to practice. Improve your pickleball game with personalized drills, purposeful training sessions, and a roadmap built around your goals.",
  },
  previews: [
    {
      title: "Personalized sessions",
      image: "/product/skill-mix.png",
      width: 696, height: 370,
      alt: "Sample skill profile with forehand, backhand and footwork rings.",
      caption: "Your questionnaire answers help shape which skills and sessions come first.",
    },
    {
      title: "Drill library",
      image: "/product/drill-library.png",
      width: 740, height: 375,
      alt: "Drill list showing Crosscourt Dink Control and Down-the-Line Dinks with Speedups.",
      caption: "Find drills that fit your goals, group size, and available time.",
    },
    {
      title: "Training roadmap",
      image: "/product/roadmap.png",
      width: 740, height: 375,
      alt: "Roadmap design preview showing training activities along a timeline.",
      caption: "We’re exploring a practice timeline so you can plan your next session and look back on your progress.",
    },
  ],
} as const;
