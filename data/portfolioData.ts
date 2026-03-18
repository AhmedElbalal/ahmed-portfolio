export interface Project {
  id: number
  title: string
  description: string
  technologies: string[]
  image: string
  liveUrl: string
  githubUrl: string
  challenge: string
  solution: string
  results: string[]
  performance?: string
  users?: string
  category: string
}

export interface Experience {
  id: number
  company: string
  position: string
  period: string
  description: string[]
  technologies: string[]
}

export interface SkillCategory {
  category: string
  items: {
    name: string
    level: number
  }[]
}

export interface HeroStat {
  number: string
  label: string
}

// Hero Stats
export const heroStats: HeroStat[] = [
  { number: '5+', label: 'Projects Built' },
  { number: '2+', label: 'Years Experience' },
  { number: 'React', label: 'Core Focus' },
  { number: 'UI', label: 'Performance Driven' },
]

// Projects
export const projects: Project[] = [
  {
    id: 5,
    title: 'Shopify / E-commerce Operations Dashboard',
    description:
      'A modern operations dashboard for e-commerce teams to monitor sales, orders, conversion, inventory alerts, and channel performance in one place.',
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Recharts', 'Vite'],
    image: '/images/shopify-dashboard.png',
    liveUrl: 'https://shopify-ops-dashboard.netlify.app/',
    githubUrl: 'https://github.com/AhmedElbalal/shopify-ops-dashboard',
    challenge:
      'Designing a dashboard that surfaces the most important e-commerce KPIs in a clear and scalable way, while keeping the interface fast, readable, and easy to extend.',
    solution:
      'Built a modular React + TypeScript dashboard with reusable KPI cards, chart components, inventory alerts, channel breakdowns, and recent order tables using a clean component structure and realistic operational data.',
    results: [
      'Created a recruiter-friendly real-world product dashboard project',
      'Structured the UI around realistic e-commerce KPIs and workflows',
      'Built reusable, typed components for easier scaling and maintenance',
      'Delivered a responsive interface optimized for readability and fast interaction',
    ],
    performance: '95%',
    users: 'Demo',
    category: 'E-commerce Dashboard',
  },
  {
    id: 2,
    title: 'PulseGrid - Analytics Dashboard',
    description:
      'A real-time analytics SaaS dashboard with data visualization, metrics tracking, and interactive charts for business intelligence.',
    technologies: ['React', 'TypeScript', 'Chart.js', 'CSS3', 'API Integration', 'Responsive Design'],
    image: '/images/pulsegrid.png',
    liveUrl: 'https://eclectic-kringle-726cec.netlify.app/',
    githubUrl: 'https://github.com/AhmedElbalal/pulsegrid',
    challenge:
      'Creating an intuitive analytics dashboard that presents complex data in an easily digestible format with real-time updates and interactive visualizations.',
    solution:
      'Built with React and TypeScript for type safety, integrated Chart.js for data visualization, implemented responsive grid layouts, and created mock API endpoints for realistic data display.',
    results: [
      'TypeScript implementation for better code quality',
      'Interactive charts with smooth animations',
      'Clean, professional UI design',
      'Fully responsive dashboard layout',
    ],
    performance: '94%',
    users: 'Demo',
    category: 'SaaS Dashboard',
  },
  {
    id: 1,
    title: 'EcoShop - Ecommerce Platform',
    description:
      'A modern, responsive e-commerce platform with shopping cart, user authentication, and product management features.',
    technologies: ['React', 'JavaScript', 'CSS3', 'HTML5', 'Context API', 'React Router'],
    image: '/images/ecoshop-screenshot.png',
    liveUrl: 'https://wondrous-fox-0138cc.netlify.app/',
    githubUrl: 'https://github.com/AhmedElbalal/ecoshop-react',
    challenge:
      'Building a fully functional e-commerce platform with cart management, product filtering, and responsive design while maintaining clean code architecture and optimal performance.',
    solution:
      'Implemented React with Context API for state management, created reusable components for products and cart, added search and filter functionality, and ensured mobile-first responsive design with modern CSS practices.',
    results: [
      'Successfully deployed with 100% functionality',
      'Responsive across all device sizes',
      'Clean component architecture for easy maintenance',
      'Optimized images and lazy loading for performance',
    ],
    performance: '92%',
    users: 'Demo',
    category: 'E-commerce',
  },
  {
    id: 3,
    title: 'Uzman Studio - Modern Landing Page',
    description:
      'A sleek, modern landing page for a creative studio with smooth animations, responsive design, and engaging user experience.',
    technologies: ['React', 'CSS3', 'Framer Motion', 'Responsive Design', 'Modern UI/UX'],
    image: '/images/uzman.png',
    liveUrl: 'https://uzmanstudios.netlify.app/',
    githubUrl: 'https://github.com/AhmedElbalal/Uzman-Studio-Website',
    challenge:
      'Designing and developing a visually striking landing page that captures the creative studio\'s brand while ensuring fast loading times and smooth user interactions.',
    solution:
      'Utilized Framer Motion for sophisticated animations, implemented modern CSS techniques including flexbox and grid, optimized images and assets, and created a mobile-first responsive design.',
    results: [
      '95+ Lighthouse performance score',
      'Smooth scroll animations and page transitions',
      'Perfectly responsive across all devices',
      'Fast loading with optimized assets',
    ],
    performance: '96%',
    users: 'Demo',
    category: 'Landing Page',
  },
]

// Experience
export const experiences: Experience[] = [
  {
    id: 1,
    company: 'Oz Tech',
    position: 'Frontend Developer | Shopify & E-commerce',
    period: '2023 - Present',
    description: [
      'Built and updated storefront UI components, product layouts, and responsive pages for e-commerce experiences.',
      'Worked on frontend improvements focused on usability, layout consistency, and smoother customer journeys across desktop and mobile.',
      'Troubleshot technical issues affecting storefront behavior, theme functionality, and overall user experience.',
    ],
    technologies: ['Shopify', 'JavaScript', 'HTML5', 'CSS3', 'Liquid'],
  },
  {
    id: 2,
    company: 'Freelance Projects',
    position: 'Web Developer',
    period: '2022 - 2023',
    description: [
      'Translated design ideas and project requirements into functional, accessible web pages and interactive user interfaces.',
      'Built responsive websites with clean layouts, component-based structure, and attention to performance and cross-browser compatibility.',
      'Worked iteratively on UI improvements based on project goals, usability needs, and visual polish.',
    ],
    technologies: ['JavaScript', 'CSS3', 'HTML5', 'React', 'Git'],
  },
]

// Skills
export const skills: SkillCategory[] = [
  {
    category: 'Frontend Technologies',
    items: [
      { name: 'React', level: 85 },
      { name: 'TypeScript', level: 80 },
      { name: 'JavaScript', level: 90 },
      { name: 'HTML5', level: 95 },
      { name: 'CSS3', level: 90 },
    ],
  },
  {
    category: 'Development Tools',
    items: [
      { name: 'Git', level: 85 },
      { name: 'VS Code', level: 90 },
      { name: 'Figma', level: 75 },
      { name: 'Chrome DevTools', level: 80 },
      { name: 'NPM/Yarn', level: 85 },
    ],
  },
  {
    category: 'Core Concepts',
    items: [
      { name: 'Responsive Design', level: 90 },
      { name: 'Web Performance', level: 80 },
      { name: 'Accessibility', level: 75 },
      { name: 'Cross-browser Compatibility', level: 85 },
      { name: 'SEO Principles', level: 70 },
    ],
  },
]
