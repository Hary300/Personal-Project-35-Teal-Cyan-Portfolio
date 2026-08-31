import type { Header } from '@/types/headerSection';
import airtasker from '@/assets/images/company/airtasker.png';
import docker from '@/assets/images/company/docker.png';
import netflix from '@/assets/images/company/netflix.png';
import spotify from '@/assets/images/company/spotify.png';
import zoom from '@/assets/images/company/zoom.png';

interface Experience {
  id: string;
  period: string;
  role: string;
  company: string;
  logo: string;
  description: string;
}

interface ExperiencesData {
  header: Header;
  experiences: Experience[];
}

export const experienceData: ExperiencesData = {
  header: {
    title: 'Experiences That Shaped Me!',
    subtitle:
      'From startups to side projects, every step has been a chance to learn, build, and level up.',
  },
  experiences: [
    {
      id: 'airtasker',
      period: '2025 - Present',
      role: 'Frontend Developer',
      company: 'Airbnb',
      logo: airtasker,
      description:
        'Built responsive web interfaces using modern frameworks like React.js, ensuring seamless integration with backend systems. Optimized performance, implemented accessible designs, and delivered clean, reusable code to enhance user experience and scalability.',
    },
    {
      id: 'docker',
      period: '2025 - Present',
      role: 'Frontend Developer',
      company: 'Airtasker',
      logo: docker,
      description:
        'Built responsive web interfaces using modern frameworks like React.js, ensuring seamless integration with backend systems. Optimized performance, implemented accessible designs, and delivered clean, reusable code to enhance user experience and scalability.',
    },
    {
      id: 'netflix',
      period: '2025 - Present',
      role: 'Frontend Developer',
      company: 'Slack',
      logo: netflix,
      description:
        'Built responsive web interfaces using modern frameworks like React.js, ensuring seamless integration with backend systems. Optimized performance, implemented accessible designs, and delivered clean, reusable code to enhance user experience and scalability.',
    },
    {
      id: 'spotify',
      period: '2025 - Present',
      role: 'Frontend Developer',
      company: 'Slack',
      logo: spotify,
      description:
        'Built responsive web interfaces using modern frameworks like React.js, ensuring seamless integration with backend systems. Optimized performance, implemented accessible designs, and delivered clean, reusable code to enhance user experience and scalability.',
    },
    {
      id: 'zoom',
      period: '2025 - Present',
      role: 'Frontend Developer',
      company: 'Slack',
      logo: zoom,
      description:
        'Built responsive web interfaces using modern frameworks like React.js, ensuring seamless integration with backend systems. Optimized performance, implemented accessible designs, and delivered clean, reusable code to enhance user experience and scalability.',
    },
  ],
};
