import SectionContainer from '@/components/layouts/SectionContainer';
import SectionTitle from '@/components/shared/SectionTitle';
import { portfolioData } from '@/data/portfolioData';

const PortfolioSection = () => {
  const header = portfolioData.header;
  const projects = portfolioData.projects;
  return (
    <SectionContainer
      sectionId='projects'
      className='flex flex-col gap-6 lg:gap-12'
    >
      <SectionTitle
        title={header.title}
        subtitle={header.subtitle}
        className='text-center'
      />
      <div className='flex flex-wrap gap-5 justify-center'>
        {projects.map((project) => (
          <div
            key={project.id}
            className='flex flex-col gap-4 max-w-90.25 lg:max-w-96.5'
          >
            <div className=' overflow-hidden rounded-md'>
              <img src={project.image.src} alt={project.image.alt} />
            </div>
            <div>
              <p className='font-semibold text-lg lg:font-bold lg:text-xl text-white'>
                {project.title}
              </p>
              <p className='text-sm lg:text-md text-neutral-400'>
                {project.year}
              </p>
            </div>
          </div>
        ))}
      </div>
    </SectionContainer>
  );
};

export default PortfolioSection;
