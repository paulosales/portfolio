export interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  url: string;
  snapshot: string;
  category: 'Productivity' | 'Developer Tools' | 'Education';
  tags: string[];
  highlights: string[];
  featured?: boolean;
}

export const projects: Project[] = [
  {
    id: 'email-signature-generator',
    title: 'HTML Email Signature Generator',
    subtitle: 'Professional, cross-client email signatures',
    description:
      'A streamlined tool to generate responsive and polished HTML email signatures. Designed for 100% compatibility across Gmail, Outlook, Apple Mail, and Thunderbird with real-time live preview and instant clipboard export.',
    url: 'https://gerador-assinatura.paulosales.com.br/',
    snapshot: '/screenshots/gerador-assinatura.png',
    category: 'Productivity',
    tags: ['React', 'TypeScript', 'HTML Email Standards', 'Responsive Design', 'Productivity'],
    highlights: [
      'Universal email client compatibility (Gmail, Outlook, Apple Mail)',
      'Real-time live visual editor & instant copy to clipboard',
      'Exportable as raw HTML or downloadable .html file',
      'Client-side execution with zero external tracking'
    ],
    featured: true
  },
  {
    id: 'digital-business-card',
    title: 'Digital Business Card Generator',
    subtitle: 'Browser-based digital cards & vCard sharing',
    description:
      'Create and personalize interactive digital business cards directly within your browser. Includes real-time card design customizer, social contact channels, and offline-capable client-side persistence.',
    url: 'https://card-generator.paulosales.com.br/view',
    snapshot: '/screenshots/card-generator.png',
    category: 'Productivity',
    tags: ['React', 'TypeScript', 'Networking', 'LocalStorage', 'Client-Side'],
    highlights: [
      'Interactive live card styling & avatar preview',
      'Direct social & communication quick links (WhatsApp, Email, Web)',
      '100% browser-based with zero server storage requirement',
      'Fast shareable digital profile'
    ],
    featured: true
  },
  {
    id: 'processo-gerador-cnj',
    title: 'Gerador de Número de Processo Judicial',
    subtitle: 'CNJ standard judicial lawsuit number generator',
    description:
      'Generates syntactically valid judicial lawsuit numbers following the official Conselho Nacional de Justiça (CNJ) standard format. Ideal for legaltech developers, QA teams, and staging system testing.',
    url: 'https://processogerador.paulosales.com.br/',
    snapshot: '/screenshots/processogerador.png',
    category: 'Developer Tools',
    tags: ['LegalTech', 'CNJ Standard', 'Algorithms', 'QA Testing', 'Developer Tool'],
    highlights: [
      'Official CNJ modulo 97 check-digit validation algorithm',
      'Keyboard shortcuts (Cmd+C / G) for high-efficiency testing workflows',
      'Customizable branch of justice and court district options',
      'Designed specifically for test automation & QA environments'
    ],
    featured: true
  },
  {
    id: 'nb-gerador-inss',
    title: 'Gerador de Número do Benefício (NB)',
    subtitle: 'INSS benefit number generator for software testing',
    description:
      'Generates valid Brazilian Social Security (INSS) benefit numbers with official check-digit calculation. Supports both formatted (xxx.xxx.xxx-x) and unformatted output for fintech & social system validation.',
    url: 'https://nbgerador.paulosales.com.br/',
    snapshot: '/screenshots/nbgerador.png',
    category: 'Developer Tools',
    tags: ['FinTech', 'INSS', 'Modulo 11 Algorithm', 'Testing & QA', 'Developer Tool'],
    highlights: [
      'Modulo 11 check-digit algorithmic calculation',
      'Both formatted and raw digit generation in parallel',
      'One-click clipboard copying with native keyboard shortcuts',
      'Essential utility for fintech & social security integration tests'
    ],
    featured: true
  },
  {
    id: 'canada-citizenship-quiz',
    title: 'Canada Citizenship Quiz & Tests',
    subtitle: 'Interactive test prep with 60 practice tests & flashcards',
    description:
      'A comprehensive study platform for the Canadian Citizenship Test based on the official "Discover Canada" study guide. Includes 60 modular practice tests, 220+ flashcards, pass/fail grading, and progress tracking.',
    url: 'https://canadiancitizenship.paulosales.com/',
    snapshot: '/screenshots/canadiancitizenship.png',
    category: 'Education',
    tags: ['EdTech', 'React', 'Quiz Platform', 'Flashcards', 'Progress Tracking'],
    highlights: [
      '60 modular practice tests with official 15/20 (75%) pass criteria',
      '220+ interactive flashcard study mode with immediate feedback',
      'Automatic offline progress tracking saved in browser',
      'Categorized topics covering Canadian history, symbols, regions & rights'
    ],
    featured: true
  }
];
