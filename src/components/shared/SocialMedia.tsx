import { contactData } from '@/data/contactData';
import { Button } from '../ui/button';

const SocialMedia = () => {
  const socialMediaItems = contactData.info.socialMedia.items;
  return (
    <div className='flex gap-3 lg:gap-4 order-1 sm:order-2'>
      {socialMediaItems.map((item) => {
        const Icon = item.icon;
        return (
          <Button
            asChild
            variant='outline'
            key={item.id}
            className='rounded-full border border-neutral-800 aspect-square shrink-0 size-10 flex justify-center items-center'
          >
            <a href={item.url} target='_blank'>
              <Icon className='text-neutral-25/90' />
            </a>
          </Button>
        );
      })}
    </div>
  );
};

export default SocialMedia;
