import SectionContainer from '@/components/layouts/SectionContainer';
import CtaButton from '@/components/shared/CtaButton';
import SectionTitle from '@/components/shared/SectionTitle';
import { skillsData } from '@/data/skillsData';
import SkillList from './SkillList';

const SkillSection = () => {
  const header = skillsData.header;
  return (
    <SectionContainer
      sectionId='skill'
      className='flex flex-col gap-6 sm:flex-row sm:justify-between'
    >
      <div className='lg:max-w-91.75 flex flex-col justify-between gap-6'>
        <SectionTitle title={header.title} subtitle={header.subtitle} />
        <CtaButton>Send Message</CtaButton>
      </div>
      <SkillList />
    </SectionContainer>
  );
};

export default SkillSection;
