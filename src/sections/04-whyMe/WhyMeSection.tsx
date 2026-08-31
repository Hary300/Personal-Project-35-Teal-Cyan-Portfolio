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
        <div className='grid grid-cols-[2fr_1fr_1fr] lg:grid-cols-3 font-bold text-white'>
          <div className='px-2 sm:px-4 lg:px-6 py-3 lg:py-4.5 border-b'>
            {whyMeData.tableHeaders.skill}
          </div>
          <div className='px-2 sm:px-4 lg:px-6 py-3 lg:py-4.5 bg-primary-400 border-b border-white/40'>
            {whyMeData.tableHeaders.withMe}
          </div>
          <div className='px-2 sm:px-4 lg:px-6 py-3 lg:py-4.5 border-b'>
            {whyMeData.tableHeaders.other}
          </div>
        </div>
        <div className='flex flex-col'>
          {whyMeData.features.map((feature, index) => (
            <div
              key={index}
              className={cn(
                'grid grid-cols-[2fr_1fr_1fr] lg:grid-cols-3 items-center '
              )}
            >
              <div
                className={cn(
                  'text-xs sm:text-sm lg:tex-lg px-2 sm:px-4 lg:px-6 py-3 lg:py-4.5 wrap-break-word text-neutral-25',
                  index !== whyMeData.features.length - 1 && 'border-b'
                )}
              >
                {feature.skill}
              </div>
              <div
                className={cn(
                  'bg-primary-400 px-2 sm:px-4 lg:px-6 py-3 lg:py-4.5 flex items-center h-full',
                  index !== whyMeData.features.length - 1 &&
                    'border-b border-white/40'
                )}
              >
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
              <div
                className={cn(
                  'px-2 sm:px-4 lg:px-6 py-3 lg:py-4.5 flex items-center h-full',
                  index !== whyMeData.features.length - 1 && 'border-b'
                )}
              >
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
