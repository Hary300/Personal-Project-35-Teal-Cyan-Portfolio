import html from '@/assets/icons/tech/html.png';
import css from '@/assets/icons/tech/css.png';
import js from '@/assets/icons/tech/javascript.png';
import react from '@/assets/icons/tech/react.png';
import reactNative from '@/assets/icons/tech/reactNative.png';
import docker from '@/assets/icons/tech/docker.png';
import express from '@/assets/icons/tech/express.png';
import mongodb from '@/assets/icons/tech/mongodb.png';
import next from '@/assets/icons/tech/next.png';
import postgre from '@/assets/icons/tech/postgre.png';
import sequalizer from '@/assets/icons/tech/sequalize.png';
import ts from '@/assets/icons/tech/typescript.png';
import type { Header } from '@/types/headerSection';

interface Skill {
  name: string;
  percentage: number;
  icon: string;
}

interface SkillData {
  header: Header;
  skills: Skill[];
}

export const skillsData: SkillData = {
  header: {
    title: 'Tools I Use to Build',
    subtitle:
      "From code to design — here's the tech that helps me turn ideas into real products.",
  },

  skills: [
    {
      name: 'HTML',
      percentage: 100,
      icon: html,
    },
    {
      name: 'CSS',
      percentage: 90,
      icon: css,
    },
    {
      name: 'Javascript',
      percentage: 90,
      icon: js,
    },
    {
      name: 'Typescript',
      percentage: 80,
      icon: ts,
    },
    {
      name: 'React',
      percentage: 85,
      icon: react,
    },
    {
      name: 'React Native',
      percentage: 75,
      icon: reactNative,
    },
    {
      name: 'Next.js',
      percentage: 80,
      icon: next,
    },
    {
      name: 'Express.js',
      percentage: 80,
      icon: express,
    },
    {
      name: 'Sequelize',
      percentage: 80,
      icon: sequalizer,
    },
    {
      name: 'PostgreSQL',
      percentage: 75,
      icon: postgre,
    },
    {
      name: 'Mongo DB',
      percentage: 75,
      icon: mongodb,
    },
    {
      name: 'Docker',
      percentage: 70,
      icon: docker,
    },
  ],
};
