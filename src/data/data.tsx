import {
  AcademicCapIcon,
  ArrowDownTrayIcon,
  BuildingOffice2Icon,
  MapIcon,
  SparklesIcon,
} from '@heroicons/react/24/outline';

import GithubIcon from '../components/Icon/GithubIcon';

import LinkedInIcon from '../components/Icon/LinkedInIcon';

import heroImage from '../images/header-background.webp';
import porfolioImage1 from '../images/portfolio/portfolio-1.png';
import porfolioImage2 from '../images/portfolio/portfolio-2.jpg';
import porfolioImage3 from '../images/portfolio/portfolio-3.jpg';
import porfolioImage4 from '../images/portfolio/portfolio-4.jpg';
import porfolioImage5 from '../images/portfolio/portfolio-5.jpg';
import porfolioImage6 from '../images/portfolio/portfolio-6.jpg';
import porfolioImage7 from '../images/portfolio/portfolio-7.jpg';
import porfolioImage8 from '../images/portfolio/portfolio-8.jpg';

import profilepic from '../images/profilepic.jpg';
import testimonialImage from '../images/testimonial.webp';
import {
  About,
  ContactSection,
  ContactType,
  Hero,
  HomepageMeta,
  PortfolioItem,
  SkillGroup,
  Social,
  TestimonialSection,
  TimelineItem,
} from './dataDef';

/**
 * Page meta data
 */
export const homePageMeta: HomepageMeta = {
  title: 'Lalit Bansal | Python Developer & Operations Engineer',
  description: 'Portfolio of Lalit Bansal, a software engineer specializing in Python automation, Generative AI (RAG), and operational efficiency tools.',
  image: '/og-image.jpg',
};

/**
 * Section definition
 */
export const SectionId = {
  Hero: 'hero',
  About: 'about',
  Contact: 'contact',
  Portfolio: 'portfolio',
  Resume: 'resume',
  Skills: 'skills',
  Stats: 'stats',
  Testimonials: 'testimonials',
} as const;

export type SectionId = (typeof SectionId)[keyof typeof SectionId];

/**
 * Hero section
 */
export const heroData: Hero = {
  imageSrc: heroImage,
  name: `I'm Lalit Bansal.`,
  description: (
    <>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        I'm a Gurugram-based{' '}
        <strong className="text-stone-100">Python Developer and Senior IOT & Operations Executive</strong>, currently
        working at <strong className="text-stone-100">BARC India</strong> , where I build end-to-end automation
        pipelines, monitoring systems, and data-driven tools.
      </p>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        My expertise includes{' '}
        <strong className="text-stone-100">web automation, data scraping, Generative AI (RAG)</strong>, and developing
        <strong className="text-stone-100"> scalable automation solutions</strong> that replace repetitive manual
        workflows with efficient, high-performance systems.
      </p>
    </>
  ),
  actions: [
    {
      href: '/assets/Lalit_Bansal_Python_Developer_Local_AI.pdf',
      text: 'Resume',
      primary: true,
      Icon: ArrowDownTrayIcon,
    },
    {
      href: `#${SectionId.Contact}`,
      text: 'Contact',
      primary: false,
    },
  ],
};

/**
 * About section
 */
export const aboutData: About = {
  profileImageSrc: profilepic,
  description: `With over two years of hands-on experience as a developer, I specialize in transforming complex data challenges into streamlined, automated solutions. From configuring local deep learning environments with NVIDIA GPUs to deploying interactive dashboards, I build tools that save hundreds of manual hours and drive operational efficiency.`,
  aboutItems: [
    {label: 'Location', text: 'Gurugram, India', Icon: MapIcon},
    {label: 'Interests', text: 'Local LLMs, RAG, Automation, Web Scraping, Financial Markets', Icon: SparklesIcon},
    {label: 'Study', text: 'Rajasthan Technical University', Icon: AcademicCapIcon},
    {label: 'Employment', text: 'BARC India', Icon: BuildingOffice2Icon},
  ],
};

/**
 * Skills section
 */
export const skills: SkillGroup[] = [
  {
    name: 'Programming & Libraries',
    skills: [
      {name: 'Python', level: 8},
      {name: 'Pandas & NumPy', level: 8},
      {name: 'PyTorch', level: 5},
      {name: 'Streamlit', level: 8},
    ],
  },
  {
    name: 'Automation & Scraping',
    skills: [
      {name: 'Playwright & Selenium', level: 6},
      {name: 'Multithreading & Asyncio', level: 7},
      {name: 'PyInstaller', level: 8},
    ],
  },
  {
    name: 'Generative AI & NLP',
    skills: [
      {name: 'RAG Architecture', level: 8},
      {name: 'Hugging Face Transformers', level: 8},
      {name: 'Ollama (Local LLMs)', level: 8},
    ],
  },
  {
    name: 'Data Engineering & DBs',
    skills: [
      {name: 'SQL (MSSQL, PostgreSQL)', level: 8},
      {name: 'ETL Pipelines', level: 9},
      {name: 'Snowflake / BigQuery', level: 7},
    ],
  },
];

/**
 * Portfolio section
 */
export const portfolioItems: PortfolioItem[] = [
  {
    title: 'Internal Operations Dashboard',
    description:
      'A multi-page local Streamlit server featuring a centralized channels database with Excel export capabilities. Includes a custom WMM meter log processor that parses XML to filter missing/incorrect WMIDs and calculates timestamp differences.',
    url: '/projects/internal-dashboard',
    image: porfolioImage1,
  },
  {
    title: 'Automated PV Screenshot Engine',
    description:
      'Part of the Streamlit dashboard ecosystem. Utilizes Asyncio and Playwright to automatically navigate to WMM IP addresses, capture screenshots of meter diagnostics, and calculate operational time differences.',
    url: '/projects/pv-screenshot',
    image: porfolioImage2,
  },
  {
    title: 'On-Premise RAG System',
    description:
      'Currently building a secure, locally-hosted Retrieval-Augmented Generation (RAG) architecture using Ollama and ChromaDB for querying private documents without relying on cloud APIs.',
    url: 'https://huggingface.co/lalitbansal3681',
    image: porfolioImage3,
  },
  {
    title: 'POP Alert Automation Tool',
    description:
      'Designed a multithreaded automation system for WMM meter maintenance, effectively reducing the operational workflow time from ~2 hours down to just 30 minutes.',
    url: 'projects/pop-alert',
    image: porfolioImage4,
  },
  {
    title: 'Daily Watermark Report Scheduler',
    description:
      'Developed a zero-touch scheduler integrating SQL stored procedures and Python to automate daily data extraction and email reporting to leadership via SMTP.',
    url: 'https://drive.google.com/drive/folders/1DqYauU3tBNgIug1URFiuSuuf591x2k6l?usp=sharing',
    image: porfolioImage5,
  },
  {
    title: 'Feedloss Validator Pipeline',
    description:
      'Engineered an automated Excel-to-SQL validation system using Python and Pandas, significantly reducing the daily manual cross-checking effort by approximately 2 hours.',
    url: 'https://drive.google.com/drive/folders/17SMZPn_4Zom8Lz5MdCGmlEtvOd9LS3Hf?usp=sharing',
    image: porfolioImage6,
  },
  {
    title: 'Target E-Commerce Data Analysis',
    description:
      'Analyzed nearly three years of retail data using Google BigQuery to identify e-commerce trends, peak order hours, and overall economic impact.',
    url: 'https://drive.google.com/file/d/109eWDPtHjQ3fAbAdhQ7vMNxnYnngjsEC/view?usp=sharing',
    image: porfolioImage7,
  },
  {
    title: 'Netflix Content Analytics',
    description:
      'Conducted comprehensive data unnesting and manipulation using Pandas to analyze 8,807 Netflix titles, extracting deep insights into viewer preferences and release trends.',
    url: 'https://colab.research.google.com/drive/1Ot8wTR2aOfZ38JASwU7SLvGq8eVxMjle#scrollTo=yYI1RCg2dGZE',
    image: porfolioImage8,
  },
];

/**
 * Resume section -- TODO: Standardize resume contact format or offer MDX
 */
export const education: TimelineItem[] = [
  {
    date: '2025 - 2026',
    location: 'Krish Naik Academy',
    title: 'Ultimate RAG Bootcamp',
    content: (
      <p>
        Comprehensive training and certification focused on Retrieval-Augmented Generation, vector databases, and
        deploying LLMs.
      </p>
    ),
  },
  {
    date: '2024',
    location: 'Scaler',
    title: 'Specialization in Data Science & Machine Learning',
    content: (
      <p>
        Advanced coursework covering statistical techniques, data modeling, and practical machine learning applications.
      </p>
    ),
  },
  {
    date: '2021',
    location: 'Rajasthan Technical University, Kota',
    title: 'Bachelor of Technology (B.Tech)',
    content: <p>Completed undergraduate engineering degree with a focus on analytical problem solving.</p>,
  },
];

export const experience: TimelineItem[] = [
  {
    date: 'April 2026 - Present',
    location: 'BARC India',
    title: 'Senior Executive – IoT & Operations',
    content: (
      <ul className="list-disc list-inside flex flex-col gap-2">
        <li>
          Leading critical IoT operations and enterprise automation initiatives for WMM monitoring and broadcaster
          support systems.
        </li>

        <li>
          Developed multiple high-impact automation platforms including the POP Alert Tool, Watermark Scheduler, and
          Feedloss Validator, reducing manual operational effort by nearly 70–80%.
        </li>

        <li>
          Preparing and managing monthly WMM Operations reports and PPT shared directly with CTOs, CEOs, and senior
          technology leadership teams.
        </li>

        <li>
          Managing validation and monitoring workflows for escalation email configurations across approximately 23,000+
          production channel records.
        </li>

        <li>
          Currently contributing to the implementation of an automated broadcaster escalation mail system to improve
          operational response and incident communication workflows.
        </li>

        <li>
          Engineered automated ETL pipelines to extract outage data from emails, transform structured tabular datasets
          using Pandas, and validate records against MSSQL databases.
        </li>

        <li>
          Built high-performance WMM log analyzers capable of processing 4-second resolution meter logs for watermark
          detection, downtime analysis, and operational diagnostics.
        </li>

        <li>
          Recognized with Two-Time BARC Quarterly Awards (Q1 FY24-25, Q2 FY25-26) for delivering high-impact automation
          and operational excellence initiatives.
        </li>
      </ul>
    ),
  },
  {
    date: 'Mar 2024 - Present',
    location: 'BARC India',
    title: ' Executive – IoT & Operations',
    content: (
      <ul className="list-disc list-inside flex flex-col gap-2">
        <li>
          Supported day-to-day WMM operations, outage validation workflows, and broadcaster monitoring activities across
          large-scale production systems.
        </li>

        <li>
          Automated repetitive operational workflows using Python, Pandas, Playwright, and SQL-based validation
          pipelines.
        </li>

        <li>
          Assisted in building internal monitoring dashboards and operational reporting systems using Streamlit and
          Excel automation.
        </li>

        <li>
          Improved operational efficiency by developing data-processing utilities for log analysis, outage verification,
          and channel-level diagnostics.
        </li>

        <li>
          Collaborated with engineering and operations teams to streamline production workflows and reduce manual
          intervention across monitoring systems.
        </li>
      </ul>
    ),
  },
  {
    date: 'May 2023 - Mar 2024',
    location: 'Pharmint PTE LTD',
    title: 'Management Trainee',
    content: (
      <ul className="list-disc list-inside flex flex-col gap-2">
        <li>
          Analyzed 2 million Import-Export Pharmaceutical Trade records, resulting in a 15% improvement in supplier
          discovery.
        </li>
        <li>Streamlined complex data processing workflows, successfully reducing total analysis time by 30%.</li>
        <li>
          Developed and maintained interactive Tableau dashboards for effective stakeholder communication and
          decision-making.
        </li>
      </ul>
    ),
  },
];

/**
 * Testimonial section
 */
export const testimonial: TestimonialSection = {
  imageSrc: testimonialImage,
  testimonials: [
    {
      name: 'BARC India Leadership',
      text: 'Recognized with the BARC Quarterly Award (Q2 FY25-26) and received Senior VP Kudos for outstanding contribution to the WM Monitoring team — for designing and developing the Pop-up Alert Tool.',
      image: 'https://www.barcindia.co.in/assets/images/barc-logo.png',
    },
    {
      name: 'BARC India Leadership',
      text: 'Recognized with the BARC Quarterly Award (Q1 FY24-25)  for our team’s dedication to maintaining 99.95% uptime and expertly managing infrastructure.',
      image: 'https://www.barcindia.co.in/assets/images/barc-logo.png',
    },
  ],
};

/**
 * Contact section
 */

export const contact: ContactSection = {
  headerText: 'Get in touch.',
  description:
    'Whether you want to discuss Python automation, Generative AI deployments, or operational data engineering, feel free to reach out!',
  items: [
    {
      type: ContactType.Email,
      text: 'lb36813681@gmail.com',
      href: 'mailto:b36813681@gmail.com',
    },
    {
      type: ContactType.Location,
      text: 'Gurugram, Haryana, India',
      href: 'https://maps.app.goo.gl/p32bnQ9of5eux5DTA',
    },
    {
      type: ContactType.Github,
      text: 'Lalitbanssal',
      href: 'https://github.com/Lalitbanssal',
    },
  ],
};

/**
 * Social items
 */
export const socialLinks: Social[] = [
  {label: 'Github', Icon: GithubIcon, href: 'https://github.com/Lalitbanssal'},
  {label: 'LinkedIn', Icon: LinkedInIcon, href: 'https://www.linkedin.com/in/lalit-bansal-4586511a0/'},
  {label: 'Hugging Face', Icon: SparklesIcon, href: 'https://huggingface.co/lalitbansal3681'},
];
