'use client';

import { motion } from 'framer-motion';

interface ProgressProps {
  value: number;
  max?: number;
  size?: 'sm' | 'md' | 'lg';
  color?: 'purple' | 'blue' | 'green' | 'yellow' | 'red';
  showValue?: boolean;
  className?: string;
  animated?: boolean;
}

const Progress = ({
  value,
  max = 100,
  size = 'md',
  color = 'purple',
  showValue = false,
  className = '',
  animated = true
}: ProgressProps) => {
  const percentage = Math.min((value / max) * 100, 100);

  const sizes = {
    sm: 'h-2',
    md: 'h-3',
    lg: 'h-4'
  };

  const colors = {
    purple: 'bg-gradient-to-r from-purple-500 to-purple-600',
    blue: 'bg-gradient-to-r from-blue-500 to-blue-600',
    green: 'bg-gradient-to-r from-green-500 to-green-600',
    yellow: 'bg-gradient-to-r from-yellow-500 to-yellow-600',
    red: 'bg-gradient-to-r from-red-500 to-red-600'
  };

  return (
    <div className={`w-full ${className}`}>
      {showValue && (
        <div className="flex justify-between items-center mb-2">
          <span className="text-white/70 text-sm">Progress</span>
          <span className="text-white font-medium text-sm">{Math.round(percentage)}%</span>
        </div>
      )}
      
      <div className={`w-full bg-white/10 rounded-full overflow-hidden ${sizes[size]}`}>
        <motion.div
          initial={animated ? { width: 0 } : { width: `${percentage}%` }}
          animate={{ width: `${percentage}%` }}
          transition={{ duration: animated ? 1 : 0, ease: 'easeOut' }}
          className={`h-full ${colors[color]} rounded-full relative overflow-hidden`}
        >
          {animated && (
            <motion.div
              animate={{
                x: ['0%', '100%', '0%']
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: 'linear'
              }}
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
            />
          )}
        </motion.div>
      </div>
    </div>
  );
};

export default Progress;

