import { NavLink, FeatureItem, JourneyPhase } from '@/types';

export const NAVBAR_LINKS: NavLink[] = [
  { label: 'Home', href: '/' },
  { label: 'About Us', href: '/about' },
  { label: 'Partners', href: '/partners' },
  { label: 'Apply', href: '/apply' },
  { label: 'Download App', href: '/download' },
  { label: 'Contact Us', href: '/contact' },
];

export const HERO_CONTENT = {
  title: 'Your Circle of Trust and Support',
  subheading: 'Supporting caregivers through trusted resources,\naccessible services, and meaningful partnerships.',
  primaryCTA: 'Explore Resources',
  secondaryCTA: 'Join the Community',
};

export const MISSION_CONTENT = {
  title: 'Our Mission',
  description: 'Cultivating a sanctuary of support for caregivers and families, reducing cognitive load, and providing clear, trustworthy guidance every step of the way.',
};

export const SERVICES_CONTENT: FeatureItem[] = [
  {
    id: 'digital-enrollment',
    title: 'Digital Enrollment',
    description: 'Seamless onboarding process designed for clarity and ease of use.',
    icon: 'how_to_reg',
    actionText: 'Explore',
    actionHref: '/apply',
  },
  {
    id: 'trusted-resources',
    title: 'Trusted Resources',
    description: 'Vetted information and guides to empower your caregiving journey.',
    icon: 'library_books',
    actionText: 'Browse Library',
    actionHref: '/',
  },
  {
    id: 'partner-network',
    title: 'Partner Network',
    description: 'Connect with verified professionals and support organizations.',
    icon: 'handshake',
    actionText: 'View Network',
    actionHref: '/',
  },
  {
    id: 'simplified-journey',
    title: 'Simplified Care Journey',
    description: 'Making support more accessible by bringing services, information, and enrollment into one platform.',
    icon: 'route',
    actionText: 'Join Waiting List',
  },
];

export const PARTNERSHIP_CONTENT = {
  badge: 'Featured Partnership',
  title: 'Stronger Together with Samadhan NGO',
  description: 'We are proud to partner with Samadhan NGO to bring localized, expert support directly to the communities that need it most. Together, we are bridging the gap between digital resources and on-the-ground care.',
  ctaText: 'Learn more about our partnership',
  imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDFLCdEHiuR_wViIqcyGtueW64ss1bQU5SRN-CmLPBwOL6mNF2Y99Sm2-n8zl5SeWp-6NHtxYASCyRMX0NG-hXwn5TjNAgLQ1sI5ke1fJRBtBaDKyrYw7Y_9ASoDYj_8uM4P02_44blto1CA8ECTYMZlqPUiCnZ3ZOEM6L0spoV0wbooaRQLebcoHvdYYICPz1mfr4mbRfNo_YBrorKrlyf6RoiaOlSWfNbHTPraLa5YA10YzWozhMVBGoMzG2JMtdEPMEOaSbFEueQ',
};

export const JOURNEY_CONTENT: JourneyPhase[] = [
  {
    phase: 'Phase 1',
    title: 'Extensive Research',
    description: 'Understanding the real needs of caregivers through deep-dive interviews and surveys.',
    badge: 'Research',
  },
  {
    phase: 'Phase 2',
    title: 'Seed Grant Award',
    description: 'Secured initial funding to bring the AbleCircle vision to life.',
    badge: 'Funding',
  },
  {
    phase: 'Phase 3',
    title: 'Samadhan Partnership',
    description: 'Launched our first major pilot program integrating local NGO services.',
    badge: 'Partnership',
  },
  {
    phase: 'Present',
    title: 'Continuous Development',
    description: 'Iterating based on user feedback to build the ultimate caregiving platform.',
    badge: 'Active',
    isCurrent: true,
  },
];

export const FOOTER_COPY = {
  copyright: '© 2024 AbleCircle. All rights reserved. Built with empathy for caregivers.',
};

export const FOOTER_LINKS = [
  {
    title: 'Company',
    links: [
      { label: 'About Us', href: '/about' },
      { label: 'Careers', href: '/' },
      { label: 'Contact Us', href: '/contact' },
    ],
  },
  {
    title: 'Resources',
    links: [
      { label: 'FAQ', href: '/' },
      { label: 'Resource Library', href: '/' },
      { label: 'Partnerships', href: '/partners' },
      { label: 'Accessibility', href: '/' },
    ],
  },
  {
    title: 'Legal',
    links: [
      { label: 'Privacy Policy', href: '/' },
      { label: 'Terms of Service', href: '/' },
      { label: 'Security & Safety', href: '/' },
    ],
  },
];

export const DOWNLOAD_CONTENT = {
  badge: 'Mobile Application',
  title: 'Access Support Anywhere',
  description: 'Stay connected with resources, updates, and support services through the AbleCircle mobile experience. Check applications, review feedback, and keep touchpoints active.',
  primaryCTA: 'Download App',
  features: [
    'Instant notification updates on application statuses',
    'Direct document scanning & upload via secure phone camera',
    'Offline resource reading capability',
  ],
};

