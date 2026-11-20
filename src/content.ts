// All site copy lives here. Replace the [BRACKETED] placeholders with real values.

export const site = {
  accent: '#F0A23B', // alternatives from the design: #7FB8F5, #8FD6A8, #E98B6D
  available: true, // shows the "Open to remote backend roles" badge
  domain: 'ravshanbek.dev',
  firstName: 'Ravshanbek',
  surname: 'Tursunbayev',
  tagline:
    'Backend developer in Tashkent. I build the parts nobody sees — schemas, queries, scheduled jobs, and the locks that keep them honest.',
  cvUrl: '[CV LINK]',
  city: 'Tashkent',
  timezone: 'UTC+5',
};

export const nav = ['about', 'experience', 'projects', 'stack', 'contact'];

export const me: [string, string][] = [
  ['role', 'Backend developer'],
  ['based_in', 'Tashkent, Uzbekistan'],
  ['works_at', 'ARM'],
  ['core_stack', '{Node.js, NestJS, PostgreSQL}'],
  ['also_speaks', '{C#/.NET, React, Swift}'],
  ['digging_into', 'isolation levels, locking'],
];

export const about = {
  heading: 'Not a straight line, and better for it.',
  paragraphs: [
    "I'm a backend-focused full-stack developer. Most of my work is in Node.js, TypeScript and NestJS on top of PostgreSQL, and my background in C#/.NET still shapes how I structure code — clear layers, explicit contracts, nothing clever that the next person has to decode.",
    "Right now I work at ARM, the digital transformation center under Uzbekistan's Ministry of Agriculture, on a large existing NestJS codebase. Day to day that means designing schemas, writing migrations that are safe to run twice, and building scheduled jobs that don't trip over each other when several instances run at once.",
    'I grew up in Andijon, started university at Inha in Tashkent, then spent four years living and working in South Korea (2018–2022). I came back, finished my degree, and have been building software full time since. That path taught me to learn fast and to finish what I start.',
  ],
};

export type Job = {
  period: string;
  where?: string;
  title: string;
  summary: string;
  highlights?: string[];
};

export const experience: Job[] = [
  {
    period: '2026 — present',
    where: 'Tashkent',
    title: 'Node.js Developer · ARM',
    summary:
      'Agrosanoatni Raqamlashtirish Markazi — digital transformation for the Ministry of Agriculture.',
    highlights: [
      'Designed a per-year sequential numbering system in PostgreSQL using an atomic counter table, safe under concurrent writes.',
      'Wrote idempotent SQL migrations for permission seeding that can be re-run without side effects.',
      'Built cron jobs with distributed locking so scheduled work runs exactly once across instances.',
    ],
  },
  {
    period: '[YEAR] — [YEAR]',
    where: '~1 year',
    title: 'Node.js Backend Developer · AMC Bridge',
    summary:
      'Backend development for international enterprise clients, including a sustainability platform and an event design product.',
  },
  {
    period: '[YEAR]',
    where: 'Freelance · remote',
    title: 'Full-Stack Developer · Mi Amor Flora',
    summary:
      'Built a flower delivery site for a Berlin-based business with a Node.js backend and React frontend.',
  },
  {
    period: 'Earlier',
    title: 'iOS Developer',
    summary:
      'Native iOS development in Swift — where I first learned to ship software to real users.',
  },
];

export type Project = {
  label: string;
  name: string;
  description: string;
  tags: string[];
  url?: string;
};

export const projects: Project[] = [
  {
    label: 'startup · in progress',
    name: 'FindMed',
    description:
      'A specialist finder so anyone — in a city or a remote village — can find the right doctor for themselves or their family. MVP covers search and doctor profiles, with regions and districts modelled for fast location filtering.',
    tags: ['NestJS', 'Prisma', 'PostgreSQL'],
  },
  {
    label: 'v1 · deployed',
    name: 'FindMed on .NET',
    description:
      'The first version: a .NET 8 API with a React/TypeScript frontend, shipped to Render on a Neon PostgreSQL database with multi-stage Docker builds, EF Core migrations and proper secrets management.',
    tags: ['.NET 8', 'React', 'Docker', 'Neon'],
  },
  {
    label: 'client · Berlin',
    name: 'miamorflora.de',
    description:
      'Online flower ordering and delivery for a Berlin florist — catalogue, orders and the backend behind them.',
    tags: ['Node.js', 'React'],
    url: 'https://miamorflora.de',
  },
];

export const stack = [
  { group: 'Backend', items: 'Node.js, TypeScript, NestJS, Express, C# / .NET' },
  { group: 'Data', items: 'PostgreSQL, Redis, Prisma, TypeORM, Knex, EF Core' },
  { group: 'Frontend & mobile', items: 'React, Angular, Swift / iOS' },
  { group: 'Infra', items: 'Docker, multi-stage builds, Render, Neon' },
];

export const studying =
  'PostgreSQL internals — transaction isolation levels, row and advisory locks, functions and procedures — and the distributed-systems patterns that sit on top of them.';

export const education = {
  school: 'Inha University in Tashkent',
  detail: '[DEGREE, e.g. B.Sc. in Computer Science] · [GRADUATION YEAR]',
};

export const contacts = [
  { label: 'email', value: '[YOUR EMAIL]', href: 'mailto:[YOUR EMAIL]' },
  { label: 'github', value: '[@HANDLE]', href: '[GITHUB URL]' },
  { label: 'linkedin', value: '[PROFILE]', href: '[LINKEDIN URL]' },
  { label: 'telegram', value: '[@HANDLE]', href: '[TELEGRAM URL]' },
];
