import SectionContainer from '@/components/layouts/SectionContainer';
import SectionTitle from '@/components/shared/SectionTitle';
import { experienceData } from '@/data/experienceData';

const ExperienceSection = () => {
  const header = experienceData.header;
  return (
    <SectionContainer sectionId='experience'>
      <SectionTitle title={header.title} subtitle={header.subtitle} />
    </SectionContainer>
  );
};

export default ExperienceSection;
