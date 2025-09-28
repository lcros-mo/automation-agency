// components/ui/animations/GradientText.tsx
'use client';

import { motion } from 'framer-motion';
import clsx from 'clsx';

interface GradientTextProps {
  text: string;
  className?: string;
  colors?: string[];
  animated?: boolean;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  hover?: boolean;
}

export default function GradientText({ 
  text, 
  className = '', 
  colors = ['#2563eb', '#7c3aed'], // Blue to Purple
  animated = true,
  size = 'md',
  hover = false
}: GradientTextProps) {
  const sizeClasses = {
    sm: 'text-lg md:text-xl',
    md: 'text-xl md:text-2xl',
    lg: 'text-2xl md:text-3xl',
    xl: 'text-3xl md:text-4xl'
  };

  const gradientStyle = {
    background: `linear-gradient(45deg, ${colors.join(', ')})`,
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text',
  };

  const animatedStyle = animated ? {
    ...gradientStyle,
    backgroundSize: '200% 200%',
    animation: 'gradientMove 3s ease-in-out infinite',
  } : gradientStyle;

  if (hover) {
    return (
      <motion.span
        className={clsx('font-bold', sizeClasses[size], className)}
        style={gradientStyle}
        whileHover={{
          scale: 1.05,
          transition: { duration: 0.2 }
        }}
        onHoverStart={() => {
          // Add dynamic gradient animation on hover
        }}
      >
        {text}
        <style jsx>{`
          @keyframes gradientMove {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
          }
        `}</style>
      </motion.span>
    );
  }

  return (
    <span
      className={clsx('font-bold', sizeClasses[size], className)}
      style={animatedStyle}
    >
      {text}
      {animated && (
        <style jsx>{`
          @keyframes gradientMove {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
          }
        `}</style>
      )}
    </span>
  );
}