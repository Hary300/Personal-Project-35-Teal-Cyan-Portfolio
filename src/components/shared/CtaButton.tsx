import type { ReactNode } from 'react';
import { Button } from '../ui/button';
import { IoMail } from 'react-icons/io5';

interface CtaButtonProps {
  children: ReactNode;
}

const CtaButton = ({ children }: CtaButtonProps) => {
  return (
    <Button asChild className='flex gap-2 lg:gap-2.25 items-center'>
      <a href='#contact'>
        <IoMail /> {children}
      </a>
    </Button>
  );
};

export default CtaButton;
