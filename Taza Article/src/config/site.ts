export interface SiteConfig {
  name: string;
  tagline: string;
  description: string;
  siteUrl: string;
  defaultOgImage: string;
  author: string;
  niche: string;
  
  // Analytics & Webmaster
  googleAnalyticsId: string; // e.g. 'G-XXXXXXXXXX'
  googleSiteVerification: string; // e.g. 'verification_token'
  
  // Monetization
  adsenseClientId: string; // e.g. 'ca-pub-XXXXXXXXXXXXXXXX'
  adsEnabled: boolean; // Set to true to show live ads or placeholders
  
  // Social & Community
  twitterHandle: string;
  githubRepo: string;
  contactEmail: string;

  // Categories config
  categories: {
    slug: string;
    name: string;
    description: string;
    icon: string;
  }[];
}

export const siteConfig: SiteConfig = {
  name: 'Taza Article',
  tagline: 'Fresh articles, every week',
  description: 'Curated free developer tools, student pack benefits, cloud tiers, and project resources for CS and B.Tech engineering students in India.',
  siteUrl: 'https://tazaarticle.com',
  defaultOgImage: '/images/og-default.svg',
  author: 'Taza Article Editorial Team',
  niche: 'Free tools and resources for CS / B.Tech students in India',

  // Google Analytics & Search Console (Replace with your actual IDs)
  googleAnalyticsId: 'G-PLACEHOLDER', 
  googleSiteVerification: 'GOOGLE-VERIFICATION-PLACEHOLDER',

  // Monetization (AdSense Client ID)
  adsenseClientId: 'ca-pub-XXXXXXXXXXXXXXXX',
  adsEnabled: true, // Toggle ad containers / placeholders

  twitterHandle: '@tazaarticle',
  githubRepo: 'https://github.com/aryanchauhan07/taza-article',
  contactEmail: 'contact@tazaarticle.com',

  categories: [
    {
      slug: 'dev-tools',
      name: 'Developer Tools',
      description: 'Free IDEs, terminal utilities, API testers, and productivity suites for engineering students.',
      icon: '🛠️'
    },
    {
      slug: 'cloud-hosting',
      name: 'Cloud & Databases',
      description: 'Free serverless databases, VPS tiers, and zero-cost hosting platforms for college projects.',
      icon: '☁️'
    },
    {
      slug: 'student-perks',
      name: 'Student Perks & Packs',
      description: 'Unlocking free software, domain names, certifications, and credits using your college .edu / .ac.in email.',
      icon: '🎓'
    },
    {
      slug: 'learning-resources',
      name: 'Learning & DSA',
      description: 'Free high-yield DSA roadmaps, interview preparation platforms, and CS core subject guides.',
      icon: '📚'
    },
    {
      slug: 'project-ideas',
      name: 'Project Blueprints',
      description: 'Step-by-step full-stack project guides and architecture diagrams that impress recruiters.',
      icon: '🚀'
    }
  ]
};
