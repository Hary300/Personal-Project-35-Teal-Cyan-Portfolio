import SectionContainer from '@/components/layouts/SectionContainer';
import { contactData } from '@/data/contactData';
import ContactForm from './ContactForm';
import SocialMedia from '@/components/shared/SocialMedia';
import verticalSlats from '@/assets/images/background/verticalSlats.webp';

const ContactSection = () => {
  const highlight = contactData.form.highlightedTitle;
  const parts = contactData.form.title.split(highlight);
  const subtitle = contactData.form.subtitle;
  const infoDetails = contactData.info.details;

  return (
    <SectionContainer
      sectionId='contact'
      className={`relative flex flex-col lg:flex-row gap-6 lg:gap-10`}
    >
      <div className='flex flex-col gap-6 flex-1 border p-4 lg:p-10 bg-black'>
        <div className='flex flex-col gap-2 lg:gap-4'>
          <p className='font-bold text-display-md lg:text-display-2xl'>
            {parts[0]} <span className='text-primary-300'>{highlight}</span>{' '}
            {parts[1]}
          </p>
          <p className='text-neutral-400 text-sm lg:text-md'>{subtitle}</p>
        </div>
        <ContactForm />
      </div>
      <div className='flex-1 flex flex-col justify-between gap-6'>
        <div className='flex flex-col  gap-4 lg:gap-5'>
          {infoDetails.map((detail) => (
            <div
              key={detail.label}
              className='flex flex-col gap-0.5 lg:gap-3 pb-4 lg:pb-5 border-b'
            >
              <p className='font-semibold text-md lg:text-xl'>{detail.label}</p>
              <p className='text-sm lg:text-md text-neutral-400'>
                {detail.value}
              </p>
            </div>
          ))}
          <div className='flex flex-col gap-4 lg:gap-5 '>
            <p className='font-semibold text-md lg:text-xl'>
              {contactData.info.socialMedia.label}
            </p>
            <SocialMedia />
          </div>
        </div>
        <p className='font-bold text-display-xl lg:text-display-3xl'>
          {contactData.watermarkText}
        </p>
      </div>
      <div className='absolute bottom-0 left-0 -z-1 w-500 lg:w-auto'>
        <div className='absolute inset-x-0 h-10 lg:h-100 bg-linear-to-b from-black to-transparent' />
        <img src={verticalSlats} alt='vertical slats pattern' />
      </div>
    </SectionContainer>
  );
};

export default ContactSection;
