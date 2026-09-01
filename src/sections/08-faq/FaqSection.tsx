import SectionContainer from '@/components/layouts/SectionContainer';
import SectionTitle from '@/components/shared/SectionTitle';
import { faqData } from '@/data/faqData';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { useState } from 'react';
import devAvatar from '@/assets/images/dev/devAvatar.png';
import { TbMessage } from 'react-icons/tb';
import { cn } from '@/lib/utils';

const FaqSection = () => {
  const [isActiveFaq, setIsActiveFaq] = useState<number | null>(null);
  const header = faqData.header;
  const faqs = faqData.faqs;

  const handleFaqCardClick = (faqId: number) => {
    setIsActiveFaq(faqId);
  };
  return (
    <SectionContainer sectionId='faq'>
      <Carousel
        opts={{
          align: 'start',
        }}
        className='w-full flex flex-col gap-6 lg:gap-12'
      >
        <div className='flex flex-col gap-6.25 lg:flex-row lg:justify-between '>
          <SectionTitle title={header.title} subtitle={header.subtitle} />
          <div className='flex gap-3'>
            <CarouselPrevious className='static' />
            <CarouselNext className='static' />
          </div>
        </div>

        <CarouselContent>
          {faqs.map((faq) => (
            <CarouselItem
              key={faq.id}
              className={cn(
                'basis-1/1 md:basis-1/2 lg:basis-0 lg:min-w-63 min-h-116.5',
                faq.id === isActiveFaq && 'lg:min-w-94.75'
              )}
            >
              <div
                className={cn(
                  'p-3.75 lg:p-5 border h-full flex flex-col justify-between hover:bg-neutral-950 cursor-pointer',
                  faq.id === isActiveFaq &&
                    'bg-primary-400 hover:bg-primary-400'
                )}
                onClick={() => handleFaqCardClick(faq.id)}
              >
                <div className='flex items-center justify-between'>
                  {faq.id === isActiveFaq && (
                    <div className='size-20 shrink-0 rounded-full overflow-hidden bg-primary-300 flex justify-end items-end'>
                      <img
                        src={devAvatar}
                        alt='dev avatar'
                        className='max-w-[74.69px]'
                      />
                    </div>
                  )}

                  <TbMessage className='size-10' />
                </div>

                <div className='flex flex-col gap-2.5 lg:gap-3'>
                  <p className='font-semibold text-display-xs lg:text-display-sm'>
                    {faq.question}
                  </p>
                  {faq.id === isActiveFaq && (
                    <p className='font-medium text-sm lg:text-md'>
                      {faq.answer}
                    </p>
                  )}
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </SectionContainer>
  );
};

export default FaqSection;
