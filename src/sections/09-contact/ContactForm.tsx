import { contactSchema, type ContactSchema } from '@/schemas/contactSchema';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Button } from '@/components/ui/button';
import { IoMail } from 'react-icons/io5';
import { useState } from 'react';
import { contactData } from '@/data/contactData';
import { modalData, type ModalData } from '@/data/modalData';
import InputField from './InputField';
import ContactModal from './ContactModal';

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactSchema>({
    defaultValues: {
      name: '',
      email: '',
      subject: '',
      message: '',
    },
    resolver: zodResolver(contactSchema),
  });
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const onSubmit = async (data: ContactSchema) => {
    try {
      setIsLoading(true);
      await new Promise((resolve) => setTimeout(resolve, 2000));
      setIsSuccess(true);
      reset();
      console.log(data);
    } catch (error) {
      setIsSuccess(false);
      console.log(error);
    } finally {
      setIsLoading(false);
      setIsOpen(true);
    }
  };

  const modalKey: keyof ModalData = isSuccess ? 'success' : 'error';
  const modal = modalData[modalKey];

  const formFields = contactData.form.fields;
  return (
    <>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className='flex flex-col gap-4 lg:gap-5'
      >
        {/* <Button onClick={() => setIsOpen(true)}>Modal Test</Button> */}
        {formFields.map((field) => {
          const errorMessage = errors[field.name]?.message;
          return (
            <InputField
              key={field.name}
              register={register}
              name={field.name}
              label={field.label}
              placeholder={field.placeholder}
              type={field.type}
              errorMessage={errorMessage}
            />
          );
        })}
        <Button
          type='submit'
          variant={'secondary'}
          disabled={isSubmitting || isLoading}
          className='flex gap-2'
        >
          <IoMail />
          <p>
            {isSubmitting || isLoading ? 'Sending...' : 'Send Message'}
          </p>{' '}
        </Button>
      </form>
      <ContactModal
        isOpen={isOpen}
        onOpenChange={(isOpen) => setIsOpen(isOpen)}
        modal={modal}
      />
    </>
  );
};

export default ContactForm;
