import { navLinks } from '@/data/navLinks';
import { cn } from '@/lib/utils';
import { useEffect, useState } from 'react';
import { RxCross1, RxHamburgerMenu } from 'react-icons/rx';

const MobileHeader = () => {
  const [isMenuShown, setIsMenuShown] = useState(false);

  const mobileNavLinks = navLinks.filter((link) => link.label !== 'Hary');

  useEffect(() => {
    if (isMenuShown) {
      document.documentElement.classList.add('overflow-hidden');
    } else {
      document.documentElement.classList.remove('overflow-hidden');
    }
  }, [isMenuShown]);

  const handleLinkClick = () => {
    setIsMenuShown(false);
  };

  const handleHamburgerButtonClick = () => {
    setIsMenuShown((prev) => !prev);
  };

  return (
    <header
      className={cn(
        'md:hidden top-4 fixed -translate-x-1/2 left-1/2   w-[calc(100%-2rem)]  z-50',
        'transition-[height] duration-300 ease-in-out',
        isMenuShown ? 'h-[calc(100%-2rem)]' : 'h-12'
      )}
    >
      <nav
        className={cn(
          'top-4 px-4 backdrop-blur-2xl bg-black/20 flex flex-col gap-4 py-2 rounded-2xl cursor-pointer',
          'transition-[height] duration-300 ease-in-out overflow-hidden',
          isMenuShown ? 'h-full' : 'h-12'
        )}
      >
        <div className='flex justify-between items-center'>
          <a
            href='#home'
            className='font-bold text-xl'
            onClick={handleLinkClick}
          >
            Hary
          </a>
          <div onClick={handleHamburgerButtonClick}>
            {isMenuShown ? (
              <RxCross1 className='size-6 stroke-1' />
            ) : (
              <RxHamburgerMenu className='size-6 stroke-1' />
            )}
          </div>
        </div>
        {isMenuShown && (
          <ul className='w-full flex flex-col gap-4'>
            {mobileNavLinks.map((link) => (
              <li key={link.id}>
                <a
                  href={link.href}
                  className='text-md hover:text-primary-300 hover:underline '
                  onClick={handleLinkClick}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        )}
      </nav>
    </header>
  );
};

export default MobileHeader;
