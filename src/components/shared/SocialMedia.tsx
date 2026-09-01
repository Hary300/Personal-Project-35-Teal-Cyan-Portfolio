import { contactData } from '@/data/contactData';
import { Button } from '../ui/button';

const SocialMedia = () => {
  const socialMediaItems = contactData.info.socialMedia.items;
  return (
    <div className='flex gap-3 lg:gap-4'>
      {socialMediaItems.map((item) => {
        const Icon = item.icon;
        return (
          <Button
            asChild
            variant='outline'
            size='icon'
            key={item.id}
            className='rounded-full border border-neutral-800 aspect-square shrink-0 flex justify-center items-center'
          >
            <a href={item.url} target='_blank' rel='noopener noreferrer'>
              <Icon />
            </a>
          </Button>
        );
      })}
    </div>
  );
};

export default SocialMedia;
