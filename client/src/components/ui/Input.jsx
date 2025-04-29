import React from 'react';
import { clsx } from 'clsx';

const Input = ({ 
  type = 'text',
  label,
  error,
  fullWidth = false,
  className = '',
  ...props 
}) => {
  const baseInputStyles = 'rounded-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary';
  
  const inputClasses = clsx(
    baseInputStyles,
    error ? 'border-red-500 focus:border-red-500 focus:ring-red-500' : '',
    fullWidth ? 'w-full' : '',
    className
  );
  
  return (
    <div className={fullWidth ? 'w-full' : ''}>
      {label && (
        <label className="mb-1 block text-sm font-medium text-gray-700">
          {label}
        </label>
      )}
      <input 
        type={type} 
        className={inputClasses} 
        {...props} 
      />
      {error && (
        <p className="mt-1 text-sm text-red-600">{error}</p>
      )}
    </div>
  );
};

export default Input; 