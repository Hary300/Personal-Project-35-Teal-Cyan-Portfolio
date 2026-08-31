import DesktopHeader from '@/components/layouts/DesktopHeader';
import MobileHeader from '@/components/layouts/MobileHeader';
import SectionContainer from '@/components/layouts/SectionContainer';
import CtaButton from '@/components/shared/CtaButton';
import GridBackgroundDecoration from '@/components/shared/GridBackgroundDecoration';
import { heroData } from '@/data/heroData';

const HeroSection = () => {
  const profileData = heroData.profile;
  return (
    <SectionContainer
      sectionId='home'
      className='relative flex flex-col pt-0 lg:pt-0 sm:flex-row-reverse  md:justify-between items-center gap-6 lg:pb-36.5'
    >
      <MobileHeader />
      <DesktopHeader />
      <GridBackgroundDecoration position='top' />
      <div className='max-w-62.75 lg:max-w-85.25 md:shrink-0 sm:-mt-20 md:mt-0'>
        <img
          src={profileData.image.src}
          alt={profileData.image.alt}
          fetchPriority='high'
        />
      </div>
      <div className='flex flex-col sm:mt-20 w-full gap-8 lg:gap-15.5 lg:max-w-171'>
        <div className='flex flex-col gap-4 lg:gap-8'>
          <p className='text-md lg:text-xl text-neutral-25'>
            {profileData.greeting}
          </p>
          <p className='font-bold text-[clamp(48px,calc(2.08vw+41.33px),56px)] lg:text-[clamp(70px,calc(5.03vw+15.67px),80px)] xl:text-[96px] leading-17 lg:leading-20 xl:leading-25'>
            {profileData.role.primary}{' '}
            <span className='font-charm'>{profileData.role.highlight}</span>{' '}
            {profileData.role.secondary}
          </p>
          <p className='text-sm lg:text-lg text-neutral-400'>
            {profileData.bio}
          </p>
        </div>
        <div className='sm:max-w-71.75'>
          <CtaButton>Hire Me</CtaButton>
        </div>
      </div>
    </SectionContainer>
  );
};

export default HeroSection;
