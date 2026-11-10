/**
 * Central portfolio data, generated from Palak's resume (Palak_2026_ABES_Resume.docx).
 * Every fact on the site comes from this file. Update it here and the whole site follows.
 * Nothing here should be added unless it appears on the resume or was confirmed by Palak.
 */
import portrait420 from '../assets/portrait-420.webp';
import portrait720 from '../assets/portrait-720.webp';
import portrait1100 from '../assets/portrait-1100.webp';

export type Palette = { from: string; via: string; to: string; accent: string };

export const profile = {
  fullName: 'Palak Singh',
  displayName: 'Palak Singh',
  firstName: 'PALAK',
  seriesTag: 'THE SERIES',
  /** Fictional studio card shown at the very start of the opening sequence. */
  originalLabel: 'A SINGH ORIGINAL',
  role: 'Software Developer',
  tagline: ['B.Tech CSE Student', 'Software Developer', 'Google Student Ambassador'],
  intro:
    'A B.Tech Computer Science student (CGPA 8.4) and MERN stack developer building full-stack apps with React.js, Node.js and Spring Boot, backed by 750+ solved DSA problems and an AWS Cloud Practitioner certification.',
  email: 'thakurpalaksingh466@gmail.com',
  links: {
    linkedin: 'https://www.linkedin.com/in/palak-singh-088262325',
    github: 'https://github.com/Palak4244',
  },
  githubHandle: 'github.com/Palak4244',
  /** Relative on purpose, so it works on any static host or sub-path. */
  resumePdf: 'assets/Palak_Singh_Resume.pdf',
  resumeFile: 'Palak_Singh_Resume.pdf',
  portrait: {
    src: portrait720,
    srcSet: `${portrait420} 420w, ${portrait720} 720w, ${portrait1100} 1100w`,
    alt: 'Portrait of Palak Singh',
  },
  coreStack: ['React.js', 'Spring Boot', 'Node.js', 'MongoDB', 'AWS'],
};

export const education = [
  {
    school: 'ABES Engineering College',
    place: 'AKTU',
    degree: 'Bachelor of Technology — Computer Science and Engineering',
    period: 'Aug 2024 – Jul 2028',
    score: 'CGPA 8.4',
  },
  {
    school: 'Einstein Public School',
    place: 'CBSE',
    degree: 'Class XII',
    period: '2023',
    score: '83.5%',
  },
  {
    school: 'Einstein Public School',
    place: 'CBSE',
    degree: 'Class X',
    period: '2022',
    score: '93.4%',
  },
];

export const experience = [
  {
    company: 'JPMorgan Chase & Co. (via Forage)',
    role: 'Software Engineering Job Simulation',
    place: 'Virtual',
    period: '2026',
    points: ['Gained hands-on exposure to core software engineering practices through a JPMorgan Chase virtual simulation.'],
  },
  {
    company: 'Tata Group (via Forage)',
    role: 'Cybersecurity Analyst Job Simulation',
    place: 'Virtual',
    period: '2026',
    points: ['Explored cybersecurity analysis fundamentals through a Tata Group virtual simulation program.'],
  },
];

export type Metric = { value: string; label: string };

export type Project = {
  id: string;
  title: string;
  /** Shown as a small badge on the poster. */
  year: string;
  genre: string;
  logline: string;
  stack: string[];
  build: string[];
  features: string[];
  metrics: Metric[];
  github?: string;
  live?: string;
  palette: Palette;
  motif: 'shield' | 'flow' | 'tenants';
};

export const projects: Project[] = [
  {
    id: 'pratibhapath',
    title: 'Pratibhapath',
    year: 'Live',
    genre: 'AI • Full-Stack • ATS',
    logline: 'A full-stack AI resume analyzer with an ATS scoring engine that checks resumes against job requirements.',
    stack: ['React.js', 'Spring Boot', 'REST API'],
    build: [
      'Engineered a full-stack resume analysis platform with an ATS scoring engine that evaluates resumes against job requirements.',
      'Implemented an in-app resume editing module that lets users update and re-score their resume in real time.',
      'Designed a React.js frontend integrated with a Spring Boot REST API backend, deployed live on Vercel.',
      'Integrated an AI-powered suggestion feature to enhance resume content.',
    ],
    features: [
      'ATS scoring against job requirements',
      'In-app resume editor with real-time re-scoring',
      'AI-powered content suggestions',
      'React.js + Spring Boot REST API',
      'Deployed live on Vercel',
    ],
    metrics: [
      { value: 'ATS', label: 'resume scoring engine' },
      { value: 'Live', label: 're-scoring as you edit' },
      { value: 'AI', label: 'content suggestions' },
    ],
    live: 'https://pratibha-path-jswa.vercel.app',
    palette: { from: '#2a0610', via: '#7a0f24', to: '#0b0710', accent: '#ff3d5a' },
    motif: 'shield',
  },
  {
    id: 'budget-planner',
    title: 'Budget Planner App',
    year: 'Live',
    genre: 'Frontend • Finance • JavaScript',
    logline: 'A responsive app to track income, expenses and monthly budgets with real-time calculations.',
    stack: ['HTML', 'CSS', 'JavaScript'],
    build: [
      'Built a responsive frontend application to track income, expenses and monthly budgets.',
      'Implemented dynamic UI components and real-time budget calculations using HTML, CSS and JavaScript.',
      'Deployed and hosted the application via GitHub Pages for public access.',
    ],
    features: [
      'Income and expense tracking',
      'Monthly budgets',
      'Real-time budget calculations',
      'Responsive layout',
      'Hosted on GitHub Pages',
    ],
    metrics: [
      { value: '3', label: 'tracked: income, expenses, budgets' },
      { value: 'Live', label: 'real-time calculations' },
    ],
    live: 'https://palak4244.github.io/Budget-Planner',
    palette: { from: '#1a0d02', via: '#8a4a07', to: '#0a0806', accent: '#ffb547' },
    motif: 'flow',
  },
];

export type Achievement = {
  id: string;
  title: string;
  org: string;
  detail: string;
  laurel: string;
  link?: string;
};

export const achievements: Achievement[] = [
  {
    id: 'google-sa',
    title: 'Google Student Ambassador',
    org: 'Google',
    detail: 'Representing Google’s student community and programs on campus.',
    laurel: 'Ambassador',
  },
  {
    id: 'competitive-coding',
    title: '750+ Problems Solved',
    org: 'LeetCode • CodeChef',
    detail: 'LeetCode: 150+ problems and a regular in Biweekly Contests. CodeChef: 600+ problems.',
    laurel: 'Competitive Coding',
  },
  {
    id: 'codechef',
    title: '2★ · Gold Badge',
    org: 'CodeChef',
    detail: 'Rating 1505 and a Gold Badge in DSA.',
    laurel: 'DSA Gold Badge',
  },
  {
    id: 'pragati',
    title: 'Pragati Cohort 9.0',
    org: 'Infosys Springboard',
    detail: 'Selected for Pragati Cohort 9.0.',
    laurel: 'Selected',
  },
  {
    id: 'ncc',
    title: 'Top 5 · Obstacle Training',
    org: 'NCC · TSC Camp',
    detail: 'NCC cadet recognized for discipline and consistent execution under pressure.',
    laurel: 'NCC Cadet',
  },
  {
    id: 'athletics',
    title: '200m Silver Medal',
    org: 'AKTU Zonal Sports Meet 2025',
    detail: 'Plus multiple gold and silver medals in intercollege and other athletics competitions.',
    laurel: 'Athletics',
  },
];

export type Certification = { issuer: string; name: string; link: string };

export const certifications: Certification[] = [
  { issuer: 'AWS', name: 'AWS Cloud Practitioner Essentials', link: 'https://drive.google.com/file/d/1gw56gdApPLTQzZHvzGCGlC72012cOGtD/view?usp=drive_link' },
  { issuer: 'NPTEL', name: 'Machine Learning and Deep Learning: Fundamentals and Applications (IIT Guwahati)', link: 'https://drive.google.com/file/d/1QPvfLdIyIDKxewFwxkHhBavWKL87UtvC/view?usp=sharing' },
  { issuer: 'NPTEL', name: 'Blockchain and its Applications (IIT Kharagpur)', link: 'https://drive.google.com/file/d/1B49zIi2bTjWP2OdDyGOriAYs6Q5Ke1L3/view?usp=drive_link' },
  { issuer: 'JPMorgan Chase', name: 'Software Engineering Job Simulation', link: 'https://drive.google.com/file/d/1cTPeTMM9qmr78kDGUKYWa5hYH7JCjWUs/view?usp=drive_link' },
  { issuer: 'Tata Group', name: 'Cybersecurity Analyst Job Simulation', link: 'https://drive.google.com/file/d/1fC5u9lAFqZF9mEIkUuyAS7IiWWOCp1NR/view?usp=drive_link' },
];

export type Skill = { name: string; mono: string; note?: string };
export type SkillCategory = { id: string; title: string; subtitle: string; skills: Skill[] };

export const skillCategories: SkillCategory[] = [
  {
    id: 'languages',
    title: 'Languages',
    subtitle: 'Core programming languages',
    skills: [
      { name: 'Java', mono: 'Jv' },
      { name: 'C++', mono: 'C+' },
      { name: 'JavaScript', mono: 'Js' },
      { name: 'HTML/CSS', mono: 'Ht' },
    ],
  },
  {
    id: 'backend',
    title: 'Backend',
    subtitle: 'REST APIs & server-side logic',
    skills: [
      { name: 'Spring Boot', mono: 'Sb' },
      { name: 'Node.js', mono: 'No' },
      { name: 'REST APIs', mono: 'Ap' },
    ],
  },
  {
    id: 'frontend',
    title: 'Frontend',
    subtitle: 'Interfaces & the web platform',
    skills: [
      { name: 'React.js', mono: 'Re' },
      { name: 'Tailwind CSS', mono: 'Tw' },
      { name: 'HTML/CSS', mono: 'Ht' },
    ],
  },
  {
    id: 'cloud',
    title: 'Cloud & Database',
    subtitle: 'Infrastructure & data',
    skills: [
      { name: 'AWS', mono: 'Aw', note: 'Certified' },
      { name: 'MongoDB', mono: 'Mg' },
    ],
  },
  {
    id: 'tools',
    title: 'Tools & Platforms',
    subtitle: 'Shipping the work',
    skills: [
      { name: 'Git', mono: 'Gt' },
      { name: 'GitHub', mono: 'Gh' },
      { name: 'VS Code', mono: 'Vs' },
      { name: 'Vercel', mono: 'Vc' },
      { name: 'Render', mono: 'Rn' },
    ],
  },
];

/**
 * Factual cross-references shown when a skill card is hovered/tapped:
 * where the skill appears in the projects, certifications or achievements on the resume.
 */
export const skillEvidence: Record<string, string[]> = {
  'React.js': ['Pratibhapath'],
  'Spring Boot': ['Pratibhapath'],
  'REST APIs': ['Pratibhapath'],
  JavaScript: ['Budget Planner App'],
  'HTML/CSS': ['Budget Planner App'],
  AWS: ['AWS Cloud Practitioner Essentials'],
  GitHub: ['Budget Planner App (GitHub Pages)'],
  Vercel: ['Pratibhapath (deployed live)'],
};

export type Episode = {
  code: string;
  title: string;
  description: string;
  tags: string[];
  runtime: string;
  palette: Palette;
};

export type Season = {
  number: number;
  title: string;
  period: string;
  synopsis: string;
  episodes: Episode[];
};

const crimson: Palette = { from: '#24060b', via: '#6e0d1d', to: '#09070a', accent: '#ff3d5a' };
const amber: Palette = { from: '#1c1003', via: '#6b3c06', to: '#0a0806', accent: '#ffb547' };
const ocean: Palette = { from: '#04121f', via: '#0f4c6e', to: '#05080d', accent: '#4cc9ff' };
const violet: Palette = { from: '#120822', via: '#3d1a6e', to: '#07060c', accent: '#b98bff' };
const jade: Palette = { from: '#03150f', via: '#0d5a40', to: '#050a08', accent: '#46e3a8' };

export const seasons: Season[] = [
  {
    number: 1,
    title: 'The Beginning',
    period: '2022 – 2023',
    synopsis: 'School years at Einstein Public School, CBSE.',
    episodes: [
      {
        code: 'S01 E01',
        title: 'The Foundation',
        description: 'Class X (CBSE) at Einstein Public School, finishing with 93.4%.',
        tags: ['Class X', 'CBSE'],
        runtime: '2022',
        palette: amber,
      },
      {
        code: 'S01 E02',
        title: 'The Next Level',
        description: 'Class XII (CBSE) at Einstein Public School, finishing with 83.5%.',
        tags: ['Class XII', 'CBSE'],
        runtime: '2023',
        palette: ocean,
      },
    ],
  },
  {
    number: 2,
    title: 'Enter: Computer Science',
    period: '2024 – Present',
    synopsis: 'B.Tech in Computer Science and Engineering at ABES Engineering College (AKTU), plus contests, NCC and the athletics track.',
    episodes: [
      {
        code: 'S02 E01',
        title: 'The Engineer',
        description: 'B.Tech in Computer Science and Engineering at ABES Engineering College, running at a CGPA of 8.4.',
        tags: ['B.Tech', 'CSE', 'CGPA 8.4'],
        runtime: 'Aug 2024 – Jul 2028',
        palette: violet,
      },
      {
        code: 'S02 E02',
        title: 'The Problem Solver',
        description: '750+ DSA problems across LeetCode and CodeChef, a 2-star rating (1505) and a Gold Badge on CodeChef.',
        tags: ['DSA', 'LeetCode', 'CodeChef'],
        runtime: '750+ problems',
        palette: jade,
      },
      {
        code: 'S02 E03',
        title: 'The Cadet',
        description: 'NCC cadet recognized for discipline and consistent execution under pressure. Top 5 in Obstacle Training at the TSC Camp.',
        tags: ['NCC', 'Discipline'],
        runtime: 'National Cadet Corps',
        palette: crimson,
      },
      {
        code: 'S02 E04',
        title: 'The Sprinter',
        description: 'Silver medal in the 200m race at the AKTU Zonal Sports Meet 2025, plus multiple gold and silver medals in athletics.',
        tags: ['Athletics', '200m'],
        runtime: '2025',
        palette: amber,
      },
    ],
  },
  {
    number: 3,
    title: 'Building Real Products',
    period: 'Now streaming',
    synopsis: 'Two Originals: an AI resume analyzer and a budget planner, both live on the web.',
    episodes: [
      {
        code: 'S03 E01',
        title: 'The AI Builder',
        description: 'Pratibhapath, a full-stack ATS resume analyzer with real-time re-scoring and AI suggestions.',
        tags: ['React.js', 'Spring Boot', 'REST API'],
        runtime: 'Live on Vercel',
        palette: crimson,
      },
      {
        code: 'S03 E02',
        title: 'The Planner',
        description: 'Budget Planner App, a responsive tracker for income, expenses and monthly budgets.',
        tags: ['HTML', 'CSS', 'JavaScript'],
        runtime: 'Live on GitHub Pages',
        palette: amber,
      },
    ],
  },
  {
    number: 4,
    title: 'Industry & Community',
    period: '2026',
    synopsis: 'Virtual job simulations, cloud and blockchain certifications, and a seat in the Google student community.',
    episodes: [
      {
        code: 'S04 E01',
        title: 'The Simulation',
        description: 'JPMorgan Chase Software Engineering and Tata Group Cybersecurity Analyst job simulations, both via Forage.',
        tags: ['JPMorgan Chase', 'Tata Group', 'Forage'],
        runtime: '2026',
        palette: ocean,
      },
      {
        code: 'S04 E02',
        title: 'The Cloud',
        description: 'AWS Cloud Practitioner Essentials, plus NPTEL courses in Blockchain (IIT Kharagpur) and Machine Learning and Deep Learning (IIT Guwahati, Elite).',
        tags: ['AWS', 'NPTEL', 'Blockchain', 'ML & DL'],
        runtime: '2026',
        palette: violet,
      },
      {
        code: 'S04 E03',
        title: 'The Ambassador',
        description: 'Google Student Ambassador, and selected for Pragati Cohort 9.0 by Infosys Springboard.',
        tags: ['Google', 'Infosys Springboard'],
        runtime: 'Community',
        palette: jade,
      },
    ],
  },
];

export type TopPick = { label: string; title: string; detail: string; palette: Palette };

export const topPicks: TopPick[] = [
  { label: 'Problems solved', title: '750+', detail: 'LeetCode 150+ • CodeChef 600+', palette: crimson },
  { label: 'The AI Original', title: 'Pratibhapath', detail: 'ATS resume scoring • live on Vercel', palette: amber },
  { label: 'Community', title: 'Google Student Ambassador', detail: 'Google student community', palette: ocean },
  { label: 'Cloud credential', title: 'AWS Cloud Practitioner', detail: 'Cloud Practitioner Essentials', palette: violet },
  { label: 'CodeChef', title: '2★ · 1505', detail: 'Gold Badge in DSA', palette: jade },
  { label: 'Selected', title: 'Pragati Cohort 9.0', detail: 'Infosys Springboard', palette: crimson },
  { label: 'On the track', title: '200m Silver', detail: 'AKTU Zonal Sports Meet 2025', palette: amber },
  { label: 'Discipline', title: 'NCC Top 5', detail: 'Obstacle Training, TSC Camp', palette: ocean },
  { label: 'Industry exposure', title: 'JPMorgan Chase', detail: 'Software Engineering Job Simulation', palette: violet },
  { label: 'Academics', title: 'CGPA 8.4', detail: 'B.Tech CSE, ABES Engineering College', palette: jade },
];

/** Slides for the "▶ Play Intro" cinematic sequence. */
export type IntroSlide = { kicker: string; title: string; lines: string[]; chips?: string[] };

export const introSlides: IntroSlide[] = [
  {
    kicker: 'Education',
    title: 'B.Tech · CSE',
    lines: ['ABES Engineering College (AKTU)', 'Aug 2024 – Jul 2028'],
    chips: ['CGPA 8.4'],
  },
  {
    kicker: 'Skills',
    title: 'Full-stack, end to end.',
    lines: ['Java, C++, JavaScript · React.js, Tailwind CSS', 'Spring Boot, Node.js · MongoDB, AWS'],
    chips: ['React.js', 'Spring Boot', 'Node.js', 'MongoDB', 'AWS'],
  },
  {
    kicker: 'Projects',
    title: 'Two Originals',
    lines: ['Pratibhapath: ATS resume analyzer with AI suggestions', 'Budget Planner: income, expenses and monthly budgets'],
  },
  {
    kicker: 'Problem solving',
    title: '750+ problems',
    lines: ['LeetCode 150+ · CodeChef 600+', 'CodeChef 2★ (1505) with a Gold Badge in DSA'],
  },
  {
    kicker: 'Community',
    title: 'Google Student Ambassador',
    lines: ['Pragati Cohort 9.0 · Infosys Springboard', 'NCC Cadet · AKTU 200m Silver Medal'],
  },
  {
    kicker: 'Certified',
    title: 'Certified & simulated',
    lines: ['AWS Cloud Practitioner Essentials · NPTEL Blockchain · NPTEL ML & DL', 'JPMorgan Chase and Tata Group job simulations'],
  },
];

export type ProfileId = 'palak' | 'recruiter' | 'developer' | 'creative';
export type SectionId = 'about' | 'journey' | 'originals' | 'picks' | 'skills' | 'moments' | 'story';

export const viewerProfiles: {
  id: ProfileId;
  name: string;
  blurb: string;
  color: string;
  order: SectionId[];
}[] = [
  {
    id: 'palak',
    name: 'Palak',
    blurb: 'The full series, in order',
    color: '#e5132b',
    order: ['about', 'journey', 'originals', 'picks', 'skills', 'moments', 'story'],
  },
  {
    id: 'recruiter',
    name: 'Recruiter',
    blurb: 'Resume, achievements & skills first',
    color: '#4cc9ff',
    order: ['story', 'moments', 'skills', 'originals', 'about', 'journey', 'picks'],
  },
  {
    id: 'developer',
    name: 'Developer',
    blurb: 'Projects, stack & GitHub first',
    color: '#46e3a8',
    order: ['originals', 'skills', 'journey', 'moments', 'about', 'picks', 'story'],
  },
  {
    id: 'creative',
    name: 'Creative',
    blurb: 'The story arc & highlights first',
    color: '#ffb547',
    order: ['journey', 'picks', 'originals', 'moments', 'about', 'skills', 'story'],
  },
];

export const sectionMeta: Record<SectionId, { nav: string; card: string; meta: string; palette: Palette }> = {
  about: { nav: 'About', card: 'About Me', meta: 'The Pilot • Education & experience', palette: violet },
  journey: { nav: 'Journey', card: 'My Journey', meta: `${seasons.length} Seasons • ${seasons.reduce((n, s) => n + s.episodes.length, 0)} Episodes`, palette: amber },
  originals: { nav: 'Originals', card: 'My Projects', meta: `${projects.length} Originals • Live`, palette: crimson },
  picks: { nav: 'Top Picks', card: 'Top Picks', meta: 'Top 10 from the resume', palette: jade },
  skills: { nav: 'Skills', card: 'My Skills', meta: `${skillCategories.length} Categories`, palette: ocean },
  moments: { nav: 'Moments', card: 'My Achievements', meta: `${achievements.length} Moments • ${certifications.length} Certifications`, palette: crimson },
  story: { nav: 'Resume', card: 'The Full Story', meta: 'Resume • View & download', palette: violet },
};
