import { navLinks } from '@/data/navLinks';
import { cn } from '@/lib/utils';

const DesktopHeader = () => {
  return (
    <header className='hidden md:flex items-center fixed bg-black/20 backdrop-blur-2xl rounded-full h-12 px-6 top-8 left-1/2 -translate-x-1/2 z-50'>
      <nav>
        <ul className='flex gap-6 justify-between items-center'>
          {navLinks.map((link) => (
            <li key={link.id}>
              <a
                href={link.href}
                className={cn(
                  'text-md hover:text-primary-300 cursor-pointer hover:underline',
                  link.label === 'Hary' && 'font-bold text-xl'
                )}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default DesktopHeader;
