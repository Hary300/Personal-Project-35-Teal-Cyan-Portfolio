import devWorking from '@/assets/images/dev/devWorking.webp';
import frontDevIcon from '@/assets/icons/aboutMe/frontDevIcon.svg';
import compBaseUIIcon from '@/assets/icons/aboutMe/compBasedUIIcon.svg';
import webPerformIcon from '@/assets/icons/aboutMe/webPerformIcon.svg';
import resDesignIcon from '@/assets/icons/aboutMe/resDesignIcon.svg';

interface Headline {
  primary: string;
  highlight: string;
}

interface ProfileImage {
  src: string;
  alt: string;
}

interface Service {
  id: number;
  title: string;
  description: string;
  icon: string;
}

interface AboutData {
  sectionTag: string;
  headline: Headline;
  profileImage: ProfileImage;
  services: Service[];
}

export const aboutData: AboutData = {
  sectionTag: 'About Me',
  headline: {
    primary:
      'I turn ideas and designs into functional, accessible, and performant websites',
    highlight: 'using modern frontend technologies.',
  },

  profileImage: {
    src: devWorking,
    alt: 'Developer working on laptop',
  },
  services: [
    {
      id: 1,
      title: 'Frontend Development',
      description:
        'I build responsive, accessible, and scalable websites using modern frontend tools and best practices.',
      icon: frontDevIcon,
    },
    {
      id: 2,
      title: 'Web Performance',
      description:
        'I optimize websites for speed and efficiency to ensure smooth experiences across all devices.',
      icon: webPerformIcon,
    },
    {
      id: 3,
      title: 'Component Based UI',
      description:
        'I specialize in crafting reusable UI components that are clean, maintainable, and aligned with design systems.',
      icon: compBaseUIIcon,
    },
    {
      id: 4,
      title: 'Responsive Design',
      description:
        'I ensure that every layout adapts beautifully to different screen sizes — from mobile to desktop.',
      icon: resDesignIcon,
    },
  ],
};
