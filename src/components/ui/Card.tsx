'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface CardProps {
  children: ReactNode;
  className?: string;
  variant?: 'default' | 'glass' | 'gradient' | 'solid';
  hover?: boolean;
  padding?: 'sm' | 'md' | 'lg';
  rounded?: 'sm' | 'md' | 'lg' | 'xl';
}

const Card = ({
  children,
  className = '',
  variant = 'default',
  hover = true,
  padding = 'md',
  rounded = 'lg'
}: CardProps) => {
  const baseClasses = 'transition-all duration-300';
  
  const variants = {
    default: 'bg-white/5 backdrop-blur-lg border border-white/10',
    glass: 'bg-white/10 backdrop-blur-xl border border-white/20',
    gradient: 'bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg border border-white/10',
    solid: 'bg-slate-800 border border-slate-700'
  };

  const paddings = {
    sm: 'p-4',
    md: 'p-6',
    lg: 'p-8'
  };

  const roundings = {
    sm: 'rounded-lg',
    md: 'rounded-xl',
    lg: 'rounded-2xl',
    xl: 'rounded-3xl'
  };

  const hoverClasses = hover ? 'hover:border-white/20 hover:shadow-2xl hover:shadow-purple-500/10' : '';

  return (
    <motion.div
      whileHover={hover ? { scale: 1.02 } : {}}
      className={`${baseClasses} ${variants[variant]} ${paddings[padding]} ${roundings[rounded]} ${hoverClasses} ${className}`}
    >
      {children}
    </motion.div>
  );
};

export default Card;

