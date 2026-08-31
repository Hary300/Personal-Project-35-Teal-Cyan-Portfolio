import SectionContainer from '@/components/layouts/SectionContainer';
import SectionTitle from '@/components/shared/SectionTitle';
import { faqData } from '@/data/faqData';

const FaqSection = () => {
  const header = faqData.header;
  return (
    <SectionContainer sectionId='faq'>
      <SectionTitle title={header.title} subtitle={header.subtitle} />
    </SectionContainer>
  );
};

export default FaqSection;
