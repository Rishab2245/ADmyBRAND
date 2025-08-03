'use client';

import { motion } from 'framer-motion';
import { ReactNode, forwardRef } from 'react';

interface InputProps {
  type?: 'text' | 'email' | 'password' | 'number' | 'tel' | 'url';
  placeholder?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string;
  disabled?: boolean;
  required?: boolean;
  label?: string;
  error?: string;
  icon?: ReactNode;
  iconPosition?: 'left' | 'right';
  size?: 'sm' | 'md' | 'lg';
}

const Input = forwardRef<HTMLInputElement, InputProps>(({
  type = 'text',
  placeholder,
  value,
  onChange,
  className = '',
  disabled = false,
  required = false,
  label,
  error,
  icon,
  iconPosition = 'left',
  size = 'md'
}, ref) => {
  const baseClasses = 'w-full bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-white placeholder-white/60 focus:outline-none focus:border-purple-400 focus:ring-2 focus:ring-purple-400/20 transition-all duration-300';
  
  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-4 py-3 text-base',
    lg: 'px-6 py-4 text-lg'
  };

  const iconSizes = {
    sm: 'w-4 h-4',
    md: 'w-5 h-5',
    lg: 'w-6 h-6'
  };

  const disabledClasses = disabled ? 'opacity-50 cursor-not-allowed' : '';
  const errorClasses = error ? 'border-red-400 focus:border-red-400 focus:ring-red-400/20' : '';

  return (
    <div className="w-full">
      {label && (
        <motion.label
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="block text-white font-medium mb-2"
        >
          {label}
          {required && <span className="text-red-400 ml-1">*</span>}
        </motion.label>
      )}
      
      <div className="relative">
        {icon && iconPosition === 'left' && (
          <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white/60">
            <div className={iconSizes[size]}>{icon}</div>
          </div>
        )}
        
        <motion.input
          ref={ref}
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          disabled={disabled}
          required={required}
          whileFocus={{ scale: 1.02 }}
          className={`${baseClasses} ${sizes[size]} ${disabledClasses} ${errorClasses} ${
            icon && iconPosition === 'left' ? 'pl-12' : ''
          } ${
            icon && iconPosition === 'right' ? 'pr-12' : ''
          } ${className}`}
        />
        
        {icon && iconPosition === 'right' && (
          <div className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white/60">
            <div className={iconSizes[size]}>{icon}</div>
          </div>
        )}
      </div>
      
      {error && (
        <motion.p
          initial={{ opacity: 0, y: -5 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-red-400 text-sm mt-2"
        >
          {error}
        </motion.p>
      )}
    </div>
  );
});

Input.displayName = 'Input';

export default Input;

