import SectionContainer from '@/components/layouts/SectionContainer';
import SectionTitle from '@/components/shared/SectionTitle';
import { experienceData } from '@/data/experienceData';

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';

import { TbBriefcase2 } from 'react-icons/tb';
import HorizontalLine from '@/components/shared/HorizontalLine';

const ExperienceSection = () => {
  const header = experienceData.header;
  const experiences = experienceData.experiences;
  return (
    <SectionContainer
      sectionId='experience'
      className='flex flex-col gap-6 lg:gap-12'
    >
      <SectionTitle title={header.title} subtitle={header.subtitle} />
      <Carousel
        opts={{
          align: 'start',
        }}
        className='w-full flex flex-col gap-4 lg:gap-12 '
      >
        <CarouselContent>
          {experiences.map((experience, index) => (
            <CarouselItem
              key={index}
              className='basis-1/1 md:basis-1/2 lg:basis-0 lg:min-w-141'
            >
              <div className='relative border p-4 lg:p-5 flex flex-col gap-5 h-full'>
                <div className='flex justify-between items-center'>
                  <div className='flex flex-col gap-1'>
                    <p className='font-bold text-md lg:text-xl'>
                      {experience.role}
                    </p>
                    <p className='text-sm lg:text-md'>{experience.period}</p>
                  </div>
                  <TbBriefcase2 className='size-6' />
                </div>
                <HorizontalLine />
                <p className='text-sm lg:text-md text-neutral-400'>
                  {experience.description}
                </p>
                <div className='max-w-[128px]'>
                  <img
                    src={experience.companyLogo.src}
                    alt={experience.companyLogo.alt}
                  />
                </div>
                <div className='absolute h-17 w-0.75 bg-primary-300 left-0 top-6' />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <div className='flex gap-3'>
          <CarouselPrevious className='static' />
          <CarouselNext className='static' />
        </div>
      </Carousel>
    </SectionContainer>
  );
};

export default ExperienceSection;
