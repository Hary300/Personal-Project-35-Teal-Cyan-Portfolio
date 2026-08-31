import type { Header } from '@/types/headerSection';

interface TableHeader {
  skill: string;
  withMe: string;
  other: string;
}

interface Feature {
  skill: string;
  withMe: boolean;
  other: boolean;
}

export interface WhyMeData {
  header: Header;
  tableHeaders: TableHeader;
  features: Feature[];
}

export const whyMeData: WhyMeData = {
  header: {
    title: 'Not Your Typical Frontend Developer',
    subtitle:
      'I care about how it looks, how it works, and how it feels — all at once',
  },
  tableHeaders: {
    skill: 'Skill',
    withMe: 'With Me',
    other: 'Other',
  },
  features: [
    {
      skill: 'React Expert',
      withMe: true,
      other: false,
    },
    {
      skill: 'Pixel Perfect',
      withMe: true,
      other: false,
    },
    {
      skill: 'TypeScript Proficiency',
      withMe: true,
      other: false,
    },
    {
      skill: 'Clean, Maintainable Code',
      withMe: true,
      other: false,
    },
    {
      skill: 'Performance Optimization',
      withMe: true,
      other: false,
    },
    {
      skill: 'Responsive Website',
      withMe: true,
      other: false,
    },
    {
      skill: 'UI Design Proficiency (Figma)',
      withMe: true,
      other: false,
    },
  ],
};
