import { skillsData } from '@/data/skillsData';

const SkillList = () => {
  const skills = skillsData.skills;
  return (
    <div className='h-132.25 overflow-auto  [direction:rtl] w-full max-w-160.5 '>
      <div className='[direction:ltr] flex flex-col divide-y gap-3.75 pl-6.5 border-l'>
        {skills.map((skill) => (
          <div
            key={skill.name}
            className='flex justify-between pb-3.75 items-center'
          >
            <div className='flex items-center gap-4'>
              <div className='w-8.5'>
                <img src={skill.icon} alt={`${skill.name} icon`} />
              </div>
              <p className='text-md lg:text-xl'>{skill.name}</p>
            </div>
            <p className='font-bold text-md lg:text-xl'>{skill.percentage}%</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillList;
