'use client';

import { motion } from 'framer-motion';

interface SpinnerProps {
  size?: 'sm' | 'md' | 'lg';
  color?: 'white' | 'purple' | 'blue';
  className?: string;
}

const Spinner = ({
  size = 'md',
  color = 'white',
  className = ''
}: SpinnerProps) => {
  const sizes = {
    sm: 'w-4 h-4',
    md: 'w-6 h-6',
    lg: 'w-8 h-8'
  };

  const colors = {
    white: 'border-white/30 border-t-white',
    purple: 'border-purple-300/30 border-t-purple-400',
    blue: 'border-blue-300/30 border-t-blue-400'
  };

  return (
    <motion.div
      animate={{ rotate: 360 }}
      transition={{
        duration: 1,
        repeat: Infinity,
        ease: 'linear'
      }}
      className={`${sizes[size]} border-2 rounded-full ${colors[color]} ${className}`}
    />
  );
};

export default Spinner;

