import { cn } from '@/lib/utils';
import type { ReactNode } from 'react';

interface SectionContainerProps {
  children: ReactNode;
  sectionId:
    | 'home'
    | 'about'
    | 'skill'
    | 'projects'
    | 'faq'
    | 'contact'
    | (string & {});
  className?: string;
}

const SectionContainer = ({
  children,
  sectionId,
  className,
}: SectionContainerProps) => {
  return (
    <section
      id={sectionId}
      className={cn(
        'max-w-360 pt-10 pb-10 lg:pt-20 lg:pb-20 px-4 sm:px-10 lg:px-30 mx-auto',
        className
      )}
    >
      {children}
    </section>
  );
};

export default SectionContainer;
