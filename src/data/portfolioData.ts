import portfolio1 from '@/assets/images/portfolio/portfolio1.webp';
import portfolio2 from '@/assets/images/portfolio/portfolio2.webp';
import portfolio3 from '@/assets/images/portfolio/portfolio3.webp';
import type { Header } from '@/types/headerSection';

export interface ProjectImage {
  src: string;
  alt: string;
}

export interface ProjectItem {
  id: number;
  title: string;
  year: string;
  image: ProjectImage;
  link: string;
}

export interface PortfolioData {
  header: Header;
  projects: ProjectItem[];
}

export const portfolioData: PortfolioData = {
  header: {
    title: 'Bridging Design and Development',
    subtitle:
      'These are real projects where I implemented frontend interfaces with precision and attention to detail.',
  },
  projects: [
    {
      id: 1,
      title: 'Portfolio 1',
      year: '2025',
      image: {
        src: portfolio1,
        alt: 'Willy Nielsen Portfolio Project Preview',
      },
      link: '#',
    },
    {
      id: 2,
      title: 'Portfolio 2',
      year: '2025',
      image: {
        src: portfolio2,
        alt: 'Building Fast Interactive Web Experiences Project Preview',
      },
      link: '#',
    },
    {
      id: 3,
      title: 'Portfolio 3',
      year: '2025',
      image: {
        src: portfolio3,
        alt: 'Delon Lorenzo Portfolio Project Preview',
      },
      link: '#',
    },
  ],
};
