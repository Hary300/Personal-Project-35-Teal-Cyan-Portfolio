import type { Header } from '@/types/headerSection';

export interface FaqItem {
  id: number;
  question: string;
  answer: string;
}

export interface FaqData {
  header: Header;
  faqs: FaqItem[];
}

export const faqData: FaqData = {
  header: {
    title: 'Still Got Questions?',
    subtitle:
      "I've listed answers to questions I often get as a frontend developer.",
  },

  faqs: [
    {
      id: 1,
      question: 'Do you work on freelance or remote projects?',
      answer:
        'Yes, I am open to freelance work and full-time remote opportunities worldwide.',
    },
    {
      id: 2,
      question: 'What technologies do you work with?',
      answer:
        'I mainly work with HTML, CSS, JavaScript, and frameworks like React, Next.js, and Vue. I also have experience using Tailwind CSS, TypeScript, and working with APIs.',
    },
    {
      id: 3,
      question: 'Can you convert Figma or Sketch designs into code?',
      answer:
        'Absolutely! I specialize in converting Figma, Sketch, or Adobe XD designs into pixel-perfect, responsive HTML/CSS or React components.',
    },
    {
      id: 4,
      question: 'Do you collaborate with backend developers or teams?',
      answer:
        'Yes, I frequently work alongside backend developers, integrating RESTful APIs and GraphQL to build seamless end-to-end features.',
    },
    {
      id: 5,
      question: 'Are you available for full-time roles?',
      answer:
        'Yes, I am actively looking for full-time frontend developer roles and am ready to start immediately.',
    },
    {
      id: 6,
      question: 'How do you handle performance optimization?',
      answer:
        'I optimize web applications by utilizing code splitting, image optimization, lazy loading, lazy rendering components, and minimizing dynamic re-renders.',
    },
    {
      id: 7,
      question: 'What is your typical project workflow?',
      answer:
        'My workflow starts with reviewing the design and requirements, setting up the component architecture, coding with test-driven precision, and gathering feedback for continuous iteration.',
    },
  ],
};
