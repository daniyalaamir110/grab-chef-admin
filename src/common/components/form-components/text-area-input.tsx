import React from 'react';

interface CustomTextAreaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  required?: boolean;
  error?: boolean;
  helperText?: string;
}

const TextArea: React.FC<CustomTextAreaProps> = ({
  label,
  required,
  className,
  error,
  helperText,
  ...rest
}) => {
  return (
    <div className='flex flex-col gap-2'>
      <div className='flex gap-1'>
        <label className='text-sm'>{label}</label>
        {required && <span className='text-red-500'>*</span>}
      </div>
      <textarea
        className={`border rounded-lg p-4 focus:border focus:outline-primary duration-200 min-h-[200px] ${className ? className : ''}`}
        {...rest}
      ></textarea>
      {error && <p className='text-red-500 text-sm'>{helperText}</p>}
    </div>
  );
};

export default TextArea;
