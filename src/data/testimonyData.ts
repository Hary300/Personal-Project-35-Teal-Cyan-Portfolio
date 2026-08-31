import type { Header } from '@/types/headerSection';

interface Author {
  name: string;
  role: string;
  avatar: string;
}

interface Testimonial {
  id: number;
  stat?: string;
  headline?: string;
  rating: number;
  content: string;
  author: Author;
  featured?: boolean;
}

interface TestimonyData {
  header: Header;
  testimonials: Testimonial[];
}

export const testimonialData: TestimonyData = {
  header: {
    title: 'Trusted Voices',
    subtitle:
      'Here’s what people say about working with me — across projects, teams, and timelines.',
  },
  testimonials: [
    {
      id: 1,
      stat: '8X',
      headline: 'More users converted after redesign',
      rating: 5,
      content:
        'Working with Edwin has been a fantastic experience. His attention to detail and commitment to quality are evident in every project. He consistently delivers results that exceed expectations, making him a valuable asset to any team.',
      author: {
        name: 'Pablo Stanley',
        role: 'Product Manager at Finovate',
        avatar:
          'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80',
      },
      featured: true,
    },
    {
      id: 2,
      stat: '3X',
      headline: 'Improved user engagement and sign-ups',
      rating: 5,
      content:
        "Edwin's expertise in frontend development is remarkable. He brings creativity and innovation to the table, ensuring that every project is not only functional but also visually appealing.",
      author: {
        name: 'Pablo Stanley',
        role: 'Product Manager at Finovate',
        avatar:
          'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80',
      },
    },
    {
      id: 3,
      rating: 5,
      content:
        "Edwin's work ethic and dedication are truly inspiring. He approaches challenges with a positive attitude and consistently finds effective solutions.",
      author: {
        name: 'Pablo Stanley',
        role: 'Product Manager at Finovate',
        avatar:
          'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80',
      },
    },
    {
      id: 4,
      rating: 5,
      content:
        'Edwin has a unique ability to transform complex ideas into user-friendly designs. His contributions have significantly enhanced our projects.',
      author: {
        name: 'Pablo Stanley',
        role: 'Product Manager at Finovate',
        avatar:
          'https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=crop&w=200&q=80',
      },
    },
  ],
};
