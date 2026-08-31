import SectionContainer from '@/components/layouts/SectionContainer';
import HorizontalLine from '@/components/shared/HorizontalLine';
import SocialMedia from '@/components/shared/SocialMedia';
import { aboutData } from '@/data/aboutData';

const AboutSection = () => {
  const headline = aboutData.headline;
  return (
    <SectionContainer
      sectionId='about'
      className='flex flex-col gap-6 lg:gap-12'
    >
      <div className='flex flex-col gap-6 lg:flex-row lg:justify-between'>
        <p className='font-bold text-display-md lg:text-display-xl max-w-189.5'>
          {headline.primary}{' '}
          <span className='text-primary-300'>{headline.highlight}</span>
        </p>
        <div className='flex flex-col justify-between gap-4'>
          <p className='text-md text-neutral-400 lg:text-lg'>
            {aboutData.sectionTag}
          </p>
          <SocialMedia />
        </div>
      </div>
      <HorizontalLine />
      <div className='flex flex-col gap-6 items-center lg:flex-row md:justify-between'>
        <div className='sm:min-w-113.25'>
          <img
            src={aboutData.profileImage.src}
            alt={aboutData.profileImage.alt}
          />
        </div>
        <div className='grid grid-cols-1 sm:grid-cols-2 gap-6 divide-y divide-neutral-900  sm:divide-none'>
          {aboutData.services.map((service) => (
            <div
              key={service.id}
              className='flex flex-col gap-3 lg:gap-6 pb-6 sm:pb-0'
            >
              <div className='size-10 shrink-0'>
                <img src={service.icon} alt={`${service.title} icon`} />
              </div>
              <div className='flex flex-col'>
                <p className='font-bold text-lg lg:text-xl'>{service.title}</p>
                <p className='text-sm text-neutral-400 lg:text-md'>
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </SectionContainer>
  );
};

export default AboutSection;
