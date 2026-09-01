import SectionContainer from '@/components/layouts/SectionContainer';
import SectionTitle from '@/components/shared/SectionTitle';
import { testimonialData } from '@/data/testimonyData';
import { cn } from '@/lib/utils';
import { TiStarFullOutline } from 'react-icons/ti';
import { IoMdQuote } from 'react-icons/io';

const TestimonySection = () => {
  const header = testimonialData.header;
  const testimonials = testimonialData.testimonials;
  return (
    <SectionContainer
      sectionId='testimony'
      className='flex flex-col gap-6 lg:gap-12'
    >
      <SectionTitle
        title={header.title}
        subtitle={header.subtitle}
        className='text-center'
      />
      <div className='grid grid-cols-1 lg:grid-cols-3 gap-5'>
        {testimonials.map((testimonial) => (
          <div
            key={testimonial.id}
            className={cn(
              'p-px',
              testimonial.stat === '8X'
                ? 'bg-linear-to-br from-[#149BB0] to-[#22252B]'
                : 'bg-neutral-900',
              testimonial.stat === '8X'
                ? 'lg:row-span-2'
                : testimonial.stat === '3X'
                  ? 'lg:col-span-2'
                  : ''
            )}
          >
            <div
              className={cn(
                'flex flex-col justify-between gap-6 p-5 h-full bg-black',
                testimonial.stat === '8X'
                  ? 'bg-linear-to-br from-[#149BB033]  to-transparent'
                  : 'bg-black'
              )}
            >
              <div className='flex flex-col gap-2'>
                {testimonial.stat && (
                  <p className='font-bold text-display-sm lg:text-display-lg'>
                    {testimonial.stat}
                  </p>
                )}
                {testimonial.headline && (
                  <p className='font-semibold text-lg lg:font-bold lg:text-display-xs'>
                    {testimonial.headline}
                  </p>
                )}
                <div className='flex gap-0.75 lg:gap-1'>
                  {Array.from({ length: testimonial.rating }).map(
                    (_, index) => (
                      <TiStarFullOutline
                        key={index}
                        className='size-4 lg:size-6 text-secondary-100'
                      />
                    )
                  )}
                </div>
                <p className='text-neutral-400 text-sm lg:text-md'>
                  {testimonial.content}
                </p>
              </div>

              <div className='flex flex-col gap-2 lg:gap-4'>
                <div className='size-12 shrink-0 rounded-full overflow-hidden'>
                  <img src={testimonial.author.avatar} alt='author avatar' />
                </div>
                <div className='flex justify-between items-center'>
                  <div className='flex flex-col '>
                    <p className='font-semibold text-sm lg:text-md'>
                      {testimonial.author.name}
                    </p>
                    <p className='text-sm lg:text-md'>
                      {testimonial.author.role}
                    </p>
                  </div>
                  <IoMdQuote className='size-12 text-neutral-900' />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </SectionContainer>
  );
};

export default TestimonySection;
