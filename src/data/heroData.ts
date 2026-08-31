import devTagCardImg from '@/assets/images/dev/devTagCard.webp';

interface Role {
  primary: string;
  highlight: string;
  secondary: string;
}

interface CtaButton {
  label: string;
  icon: string;
  href: string;
}

interface Image {
  src: string;
  alt: string;
}

interface Profile {
  greeting: string;
  role: Role;
  bio: string;
  ctaButton: CtaButton;
  image: Image;
}

interface HeroData {
  profile: Profile;
  tickerBanner: string[];
}

export const heroData: HeroData = {
  profile: {
    greeting: "Hi, I'm Hary",
    role: {
      primary: 'FRONT',
      highlight: 'END',
      secondary: 'DEVELOPER',
    },
    bio: 'Passionate about frontend development, I focus on crafting digital products that are visually polished, performance-optimized, and deliver a consistent experience across all platforms.',
    ctaButton: {
      label: 'Hire Me',
      icon: 'mail',
      href: '#contact',
    },
    image: {
      src: devTagCardImg,
      alt: 'Hary Frontend Developer Portrait',
    },
  },
  tickerBanner: [
    'App Development',
    'Website Development',
    'Pixel Perfect',
    'React Expert',
  ],
};
