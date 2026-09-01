import type { FieldType, Label } from '@/data/contactData';
import type { FieldValues, Path, UseFormRegister } from 'react-hook-form';

interface InputFieldProps<T extends FieldValues> {
  register: UseFormRegister<T>;
  name: Path<T>;
  label: Label;
  placeholder: string;
  errorMessage?: string;
  type: FieldType;
}

const InputField = <T extends FieldValues>({
  register,
  name,
  label,
  placeholder,
  type,
  errorMessage,
}: InputFieldProps<T>) => {
  return (
    <div className='flex flex-col gap-1.5'>
      <div className='flex justify-between items-center'>
        <label htmlFor={name} className='text-sm'>
          {label}
        </label>
        {errorMessage && (
          <p className='text-red-500 text-xs font-light'>{errorMessage}</p>
        )}
      </div>
      {type === 'textarea' ? (
        <textarea
          id={name}
          {...register(name)}
          rows={5}
          placeholder={placeholder}
          className='border px-4 py-2 focus:outline-0'
        ></textarea>
      ) : (
        <input
          type={type}
          {...register(name)}
          placeholder={placeholder}
          className='border px-4 py-2 focus:outline-0'
        />
      )}
    </div>
  );
};

export default InputField;
