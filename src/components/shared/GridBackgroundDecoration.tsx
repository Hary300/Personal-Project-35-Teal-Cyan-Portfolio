import gridPatternTopLeft from '@/assets/images/background/gridPatternTopLeft.png';
// import gridPatternBottomLeft from '@/assets/images/background/gridPatternBottomLeft.png';
import { cn } from '@/lib/utils';

interface GridBackgroundDecorationProps {
  position: 'top' | 'bottom';
}

const GridBackgroundDecoration = ({
  position,
}: GridBackgroundDecorationProps) => {
  return (
    <div className='absolute inset-0 -z-1 overflow-hidden'>
      <div
        className={cn(
          'absolute inset-0 from-[#149BB0CC] to-transparent',
          position === 'top'
            ? 'bg-radial-[600px_500px_at_5%_0%] lg:bg-radial-[1000px_600px_at_5%_0%]'
            : 'lg:bg-radial-[1000px_600px_at_5%_100%]'
        )}
      ></div>
      <div className='relative w-[894.17px]'>
        {/* <div
          className='absolute inset-x-0 bg-radial-[at_0%_0%] from-white to-transparent h-182.25 mask-[100%_auto] lg:mask-[120%_auto] lg:[-webkit-mask-size:120%_auto]'
          style={{
            maskImage: `url(${position === 'top' ? gridPatternTopLeft : gridPatternBottomLeft})`,
            WebkitMaskImage: `url(${position === 'top' ? gridPatternTopLeft : gridPatternBottomLeft})`,
            maskPosition: '-20px 0, 0 0',
            WebkitMaskPosition: '-20px 0, 0 0',
            maskRepeat: 'no-repeat',
            WebkitMaskRepeat: 'no-repeat',
            maskComposite: 'intersect',
            WebkitMaskComposite: 'source-in',
          }}
        /> */}
        <img
          src={gridPatternTopLeft}
          alt='grid pattern'
          className='max-w-175 lg:max-w-250 lg:scale-120 w-full h-full lg:object-[0_-20px]'
        />
      </div>
    </div>
  );
};

export default GridBackgroundDecoration;
