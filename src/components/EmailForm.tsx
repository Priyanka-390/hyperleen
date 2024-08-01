"use client"
import React, { useState, useEffect } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { PrimaryButton } from './common/Buttons';

interface IFormInput {
  email: string;
}

const schema = yup.object({
  email: yup.string().email('Invalid email address').required('Email is required'),
}).required();

const EmailForm: React.FC = () => {
  const [successMessage, setSuccessMessage] = useState<string | null>(null);
  const { register, handleSubmit, formState: { errors }, reset } = useForm<IFormInput>({
    resolver: yupResolver(schema),
  });

  const onSubmit: SubmitHandler<IFormInput> = data => {
    console.log(data);
    setSuccessMessage('Your email has been successfully submitted!');
    reset();
  };

  useEffect(() => {
    if (successMessage) {
      const timer = setTimeout(() => {
        setSuccessMessage(null);
      }, 3000); // Clear the success message after 3 seconds

      return () => clearTimeout(timer);
    }
  }, [successMessage]);

  return (
    <div className='max-w-[493px] mx-auto'>
      <form onSubmit={handleSubmit(onSubmit)} className="flex justify-center gap-3.5 mb-2 items-start">
        <div className="max-w-[323px] w-full">
          <input
            type="email"
            placeholder="Your e-mail"
            className={`focus:outline-none bg-black bg-opacity-5 p-4 rounded-2xl w-full text-base placeholder:text-dark-grey text-dark-grey font-poppins leading-150 ${errors.email ? 'border border-red-500' : ''}`}
            {...register('email')}
          />
          {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
        </div>
        <PrimaryButton text="Submit Now" href="" arialLabel="submit" />
      </form>
      {successMessage && <p className="text-green-500 text-sm">{successMessage}</p>}
    </div>
  );
};

export default EmailForm;
