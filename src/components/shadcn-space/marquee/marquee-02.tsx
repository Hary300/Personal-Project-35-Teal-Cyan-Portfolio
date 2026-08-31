import { Marquee } from '@/components/shadcn-space/animations/marquee';
import { heroData } from '@/data/heroData';
import cyanStar from '@/assets/images/star.svg';

export default function TickerBanner() {
  const tickerBannerData = heroData.tickerBanner;

  return (
    <>
      <Marquee className='[--duration:20s] py-3 bg-primary-300'>
        {tickerBannerData.map((item, index) => (
          <div key={index} className='flex items-center gap-4'>
            <span className='font-bold text-xl lg:text-display-xl'>{item}</span>
            <div className='size-9.5 lg:size-15'>
              <img src={cyanStar} alt='cyan star' />
            </div>
          </div>
        ))}
      </Marquee>
    </>
  );
}
