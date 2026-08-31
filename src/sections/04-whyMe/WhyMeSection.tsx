import SectionContainer from '@/components/layouts/SectionContainer';
import GridBackgroundDecoration from '@/components/shared/GridBackgroundDecoration';
import SectionTitle from '@/components/shared/SectionTitle';
import { whyMeData } from '@/data/whyMeData';
import { cn } from '@/lib/utils';
import { FiCheck } from 'react-icons/fi';
import { RxCross2 } from 'react-icons/rx';

const WhyMeSection = () => {
  const header = whyMeData.header;

  return (
    <SectionContainer
      sectionId='why-me'
      className='flex flex-col gap-6 lg:gap-12 relative'
    >
      <SectionTitle
        title={header.title}
        subtitle={header.subtitle}
        className='text-center'
      />

      <div className='w-full border p-3 lg:p-6 bg-black'>
        <div className='grid grid-cols-[2fr_1fr_1fr] lg:grid-cols-3 font-bold border-b  text-white'>
          <div className='px-2 sm:px-4 lg:px-6 py-3 lg:py-4.5'>
            {whyMeData.tableHeaders.skill}
          </div>
          <div className='px-2 sm:px-4 lg:px-6 py-3 lg:py-4.5 bg-primary-400'>
            {whyMeData.tableHeaders.withMe}
          </div>
          <div className='px-2 sm:px-4 lg:px-6 py-3 lg:py-4.5'>
            {whyMeData.tableHeaders.other}
          </div>
        </div>
        <div className='flex flex-col divide-y'>
          {whyMeData.features.map((feature, index) => (
            <div
              key={index}
              className={cn(
                'grid grid-cols-[2fr_1fr_1fr] lg:grid-cols-3 items-center '
              )}
            >
              <div className='text-xs sm:text-sm lg:tex-lg px-2 sm:px-4 lg:px-6 py-3 lg:py-4.5 wrap-break-word'>
                {feature.skill}
              </div>
              <div className='bg-primary-400 px-2 sm:px-4 lg:px-6 py-3 lg:py-4.5 h-full flex justify-center items-center'>
                {feature.withMe ? (
                  <div className='size-5.5 rounded-full flex justify-center items-center bg-white shrink-0'>
                    <FiCheck className='size-3.5 text-primary-400 stroke-3' />
                  </div>
                ) : (
                  <div className='size-5.5 rounded-full flex justify-center items-center bg-neutral-700 shrink-0'>
                    <RxCross2 className='size-3.5 text-neutral-950 stroke-1' />
                  </div>
                )}
              </div>
              <div className='px-2 sm:px-4 lg:px-6 py-3 lg:py-4.5 h-full flex justify-center items-center'>
                {feature.other ? (
                  <div className='size-5.5 rounded-full flex justify-center items-center bg-white shrink-0'>
                    <FiCheck className='size-3.5 text-primary-400 stroke-3' />
                  </div>
                ) : (
                  <div className='size-5.5 rounded-full flex justify-center items-center bg-neutral-700 shrink-0'>
                    <RxCross2 className='size-3.5 text-neutral-950 stroke-1' />
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      <GridBackgroundDecoration position='bottom' />
    </SectionContainer>
  );
};

export default WhyMeSection;
