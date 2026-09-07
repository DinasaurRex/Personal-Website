import type { ComponentType } from 'react';
import {
  Code2,
  Cpu,
  ExternalLink,
  FileText,
  GraduationCap,
  Leaf,
  Mail,
  Satellite,
  Wrench,
} from 'lucide-react';

export const profileLinks = [
  {
    label: 'Email',
    href: 'mailto:dina07.saab@gmail.com',
    icon: Mail,
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/dinasaab/',
    icon: ExternalLink,
  },
  {
    label: 'GitHub',
    href: 'https://github.com/DinasaurRex',
    icon: Code2,
  },
] satisfies Array<{
  label: string;
  href: string;
  icon: ComponentType<{ className?: string }>;
}>;

export const artImages = [
  {
    src: '/images/moon-clouds.png',
    alt: 'Dreamy blue and purple clouds with glowing birds, stars, and a crescent moon.',
    title: 'soft sky',
    size: 'wide',
  },
  {
    src: '/images/coastal-road.png',
    alt: 'Calm coastal road illustration with a yellow car by blue water.',
    title: 'quiet motion',
    size: 'wide',
  },
  {
    src: '/images/pixel-shelter.png',
    alt: 'Pixel-art shelter tucked in warm trees with a small cat resting in front.',
    title: 'pixel shelter',
    size: 'small',
  },
  {
    src: '/images/pink-shop.png',
    alt: 'Pixel-art storefront under a large pink flowering tree.',
    title: 'warm storefront',
    size: 'small',
  },
  {
    src: '/images/dusk-town.png',
    alt: 'Blue dusk town illustration with lit windows, mountains, and a crescent moon.',
    title: 'blue hour',
    size: 'wide',
  },
];

export const featureProjects = [
  {
    name: 'Henry Jr.',
    type: 'Remote controlled companion',
    description:
      'A four-wheel ESP32 robot that connects motors, CAD, electronics, and embedded C++ into a working mobile platform.',
    icon: Cpu,
  },
  {
    name: 'Self-sustainable garden',
    type: '1 x 3 m automated build',
    description:
      'An Arduino-based garden with soil-moisture sensing, time-based watering, and autonomous environmental control.',
    icon: Leaf,
  },
  {
    name: 'BuildWith',
    type: 'Full-stack student platform',
    description:
      'A Next.js, TypeScript, Tailwind, and Supabase app for finding projects, competitions, teammates, and opportunities.',
    icon: Code2,
  },
];

export const resumeSections = [
  {
    heading: 'Education',
    icon: GraduationCap,
    items: [
      {
        title: 'McGill University',
        meta: 'B.Eng. Electrical Engineering, expected Dec 2029',
        body: 'J.W. McConnell Scholarship and Community Leadership Entrance Award.',
      },
      {
        title: 'John Abbott College',
        meta: 'Science DEC, GPA 4.0, May 2026',
        body: 'Coursework in calculus, statistics, programming, linear algebra, mechanics, waves and optics, electricity, and magnetism.',
      },
    ],
  },
  {
    heading: 'Experience',
    icon: Wrench,
    items: [
      {
        title: 'MCommercial',
        meta: 'Administrative Assistant and Web Developer, Aug 2020 - Present',
        body: 'Replaced the company Wix website with a full-stack platform, built with Next.js, React, TypeScript, Tailwind CSS, and Supabase. Increased website traffic by 35% while also handling financial records, bookkeeping, data entry, and confidential documentation.',
      },
      {
        title: 'College Beaubois',
        meta: 'Tech Squad Leader, Aug 2019 - Jun 2024',
        body: 'Led a 10-member technical team for 1,500+ students and faculty, created programming activities for about 120 students, resolved 50+ classroom hardware and software issues, and made technical tutorials including one with 5,500+ views.',
      },
    ],
  },
  {
    heading: 'Projects',
    icon: Satellite,
    items: [
      {
        title: 'Henry Jr.',
        meta: 'ESP32 robot',
        body: 'Designed and prototyped a four-wheel remote controlled robot with Wi-Fi communication from an iPad interface.',
      },
      {
        title: 'Self-sustainable garden',
        meta: 'Arduino environmental system',
        body: 'Built a 1 x 3 m automated garden used by about 10 students and faculty, with sensing, control logic, and watering automation.',
      },
      {
        title: 'BuildWith',
        meta: 'Full-stack web application',
        body: 'Created a student opportunity platform with authentication, database integration, role management, and dynamic project pages.',
      },
    ],
  },
];

export const skills = [
  'Python',
  'C/C++',
  'JavaScript',
  'TypeScript',
  'PostgreSQL',
  'HTML/CSS',
  'Git',
  'GitHub',
  'Arduino IDE',
  'Next.js',
  'React',
  'Tailwind CSS',
  'Supabase',
  'ESP32',
  'Raspberry Pi',
  'Arduino',
  'Sensors',
  'Motor control',
  'Onshape CAD',
];

export const directorySites = [
  {
    name: 'BuildWith',
    href: 'https://buildwith.littlerayofdina.com',
    label: 'Student project platform',
    description:
      'A full-stack app that helps students find projects, competitions, teammates, and chances to build together.',
    image: '/images/coastal-road.png',
    status: 'Live',
    icon: ExternalLink,
  },
  {
    name: 'McGillTrack',
    href: 'https://tracker.littlerayofdina.com/',
    label: 'Academic tracker',
    description:
      'A private-by-default tracker for assignments, grades, weekly schedules, notes, and service hours.',
    image: '/images/dusk-town.png',
    status: 'Private draft',
    icon: FileText,
  },
  {
    name: 'DinasaurRex on GitHub',
    href: 'https://github.com/DinasaurRex',
    label: 'Code shelf',
    description:
      'A growing collection of web, hardware, and learning projects as they move from experiments into finished builds.',
    image: '/images/pink-shop.png',
    status: 'Ongoing',
    icon: Code2,
  },
];
