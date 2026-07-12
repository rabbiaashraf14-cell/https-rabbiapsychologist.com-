
export const locationScoringModel = {
  maxScore: 100,
  categories: [
    { name: 'Overseas Pakistani family relevance', points: 20 },
    { name: 'International and expatriate family relevance', points: 15 },
    { name: 'International-school relevance', points: 15 },
    { name: 'English, Urdu or Arabic accessibility', points: 10 },
    { name: 'Parent-guidance market potential', points: 15 },
    { name: 'Report-review and school-guidance potential', points: 10 },
    { name: 'Time-zone compatibility', points: 5 },
    { name: 'Search and content opportunity', points: 5 },
    { name: 'Legal and service feasibility', points: 5 }
  ],
  rules: {
    high: 1.0,
    medium: 0.5,
    low: 0.1,
    unknown: 0
  }
};
