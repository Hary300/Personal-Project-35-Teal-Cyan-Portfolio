import { cn } from '@/lib/utils';

interface SectionTitleProps {
  title: string;
  subtitle: string;
  className?: string;
}
const SectionTitle = ({ title, subtitle, className }: SectionTitleProps) => {
  return (
    <div className={cn('flex flex-col gap-2 lg:gap-4', className)}>
      <p className='font-bold text-display-md lg:text-display-2xl'>{title}</p>
      <p className='text-sm lg:text-md text-neutral-400'>{subtitle}</p>
    </div>
  );
};

export default SectionTitle;
