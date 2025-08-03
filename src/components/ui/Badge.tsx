'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface BadgeProps {
  children: ReactNode;
  variant?: 'default' | 'primary' | 'secondary' | 'success' | 'warning' | 'error';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  icon?: ReactNode;
}

const Badge = ({
  children,
  variant = 'default',
  size = 'md',
  className = '',
  icon
}: BadgeProps) => {
  const baseClasses = 'inline-flex items-center gap-2 font-medium rounded-full backdrop-blur-sm border transition-all duration-300';
  
  const variants = {
    default: 'bg-white/10 border-white/20 text-white/90',
    primary: 'bg-purple-500/20 border-purple-400/30 text-purple-300',
    secondary: 'bg-blue-500/20 border-blue-400/30 text-blue-300',
    success: 'bg-green-500/20 border-green-400/30 text-green-300',
    warning: 'bg-yellow-500/20 border-yellow-400/30 text-yellow-300',
    error: 'bg-red-500/20 border-red-400/30 text-red-300'
  };

  const sizes = {
    sm: 'px-2 py-1 text-xs',
    md: 'px-3 py-1.5 text-sm',
    lg: 'px-4 py-2 text-base'
  };

  const iconSizes = {
    sm: 'w-3 h-3',
    md: 'w-4 h-4',
    lg: 'w-5 h-5'
  };

  return (
    <motion.span
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      whileHover={{ scale: 1.05 }}
      className={`${baseClasses} ${variants[variant]} ${sizes[size]} ${className}`}
    >
      {icon && (
        <span className={iconSizes[size]}>{icon}</span>
      )}
      {children}
    </motion.span>
  );
};

export default Badge;

