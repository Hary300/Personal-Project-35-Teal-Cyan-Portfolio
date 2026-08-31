import SectionContainer from '@/components/layouts/SectionContainer';
import SectionTitle from '@/components/shared/SectionTitle';
import { testimonialData } from '@/data/testimonyData';

const TestimonySection = () => {
  const header = testimonialData.header;
  return (
    <SectionContainer sectionId='testimony'>
      <SectionTitle
        title={header.title}
        subtitle={header.subtitle}
        className='text-center'
      />
    </SectionContainer>
  );
};

export default TestimonySection;
