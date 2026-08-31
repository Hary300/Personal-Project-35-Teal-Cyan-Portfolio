import type { Header } from '@/types/headerSection';
import airtasker from '@/assets/images/company/airtasker.png';
import docker from '@/assets/images/company/docker.png';
import netflix from '@/assets/images/company/netflix.png';
import spotify from '@/assets/images/company/spotify.png';
import zoom from '@/assets/images/company/zoom.png';

export interface CompanyLogo {
  src: string;
  alt: string;
}

export interface ExperienceItem {
  id: number;
  role: string;
  period: string;
  description: string;
  companyLogo: CompanyLogo;
}

export interface ExperienceData {
  header: Header;
  experiences: ExperienceItem[];
}

export const experienceData: ExperienceData = {
  header: {
    title: 'My Journey in Tech',
    subtitle:
      'From small gigs to real-world challenges — each experience helped me grow as a builder and problem-solver.',
  },
  experiences: [
    {
      id: 1,
      role: 'Frontend Developer',
      period: '2025-Present',
      description:
        'Built responsive web interfaces using modern frameworks like React.js, ensuring seamless integration with backend systems. Optimized performance, implemented accessible designs, and delivered clean, reusable code to enhance user experience and scalability.',
      companyLogo: {
        src: airtasker,
        alt: 'Airtasker Logo',
      },
    },
    {
      id: 2,
      role: 'Frontend Developer',
      period: '2025-Present',
      description:
        'Built responsive web interfaces using modern frameworks like React.js, ensuring seamless integration with backend systems. Optimized performance, implemented accessible designs, and delivered clean, reusable code to enhance user experience and scalability.',
      companyLogo: {
        src: docker,
        alt: 'Docker Logo',
      },
    },
    {
      id: 3,
      role: 'Frontend Developer',
      period: '2025-Present',
      description:
        'Built responsive web interfaces using modern frameworks like React.js, ensuring seamless integration with backend systems. Optimized performance, implemented accessible designs, and delivered clean, reusable code to enhance user experience and scalability.',
      companyLogo: {
        src: netflix,
        alt: 'Netflix Logo',
      },
    },
    {
      id: 4,
      role: 'Frontend Developer',
      period: '2024-2025',
      description:
        'Developed interactive dashboard modules and reusable UI components. Collaborated closely with backend engineers and UI/UX designers to deliver high-quality, pixel-perfect web interfaces.',
      companyLogo: {
        src: zoom,
        alt: 'Zoom Logo',
      },
    },
    {
      id: 5,
      role: 'Junior Frontend Developer',
      period: '2023-2024',
      description:
        'Assisted in building responsive landing pages, fixing UI bugs, and optimizing web page load speeds across multiple client projects using modern JavaScript and CSS frameworks.',
      companyLogo: {
        src: spotify,
        alt: 'Spotify Logo',
      },
    },
  ],
};
