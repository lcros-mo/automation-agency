// components/ui/animations/TrueFocus.tsx
'use client';

import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import clsx from 'clsx';

interface TrueFocusProps {
  text: string;
  className?: string;
  speed?: number;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  color?: string;
  autoStart?: boolean;
}

export default function TrueFocus({ 
  text, 
  className = '', 
  speed = 1, 
  size = 'lg',
  color = 'white',
  autoStart = true 
}: TrueFocusProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  const sizeClasses = {
    sm: 'text-2xl md:text-3xl',
    md: 'text-3xl md:text-4xl',
    lg: 'text-4xl md:text-5xl',
    xl: 'text-5xl md:text-6xl'
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && autoStart) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, [autoStart]);

  useEffect(() => {
    if (!isVisible) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % text.length);
    }, 150 / speed);

    return () => clearInterval(interval);
  }, [isVisible, text.length, speed]);

  const renderText = () => {
    return text.split('').map((char, index) => {
      const isInFocus = Math.abs(index - currentIndex) <= 2;
      const distance = Math.abs(index - currentIndex);
      
      return (
        <motion.span
          key={index}
          initial={{ opacity: 0.3, filter: 'blur(3px)' }}
          animate={{
            opacity: isInFocus ? 1 : 0.3,
            filter: isInFocus ? 'blur(0px)' : `blur(${distance}px)`,
            color: isInFocus ? color : `${color}80`,
          }}
          transition={{
            duration: 0.3,
            ease: 'easeOut'
          }}
          className="inline-block"
        >
          {char === ' ' ? '\u00A0' : char}
        </motion.span>
      );
    });
  };

  return (
    <div ref={containerRef} className={clsx('font-bold', sizeClasses[size], className)}>
      {renderText()}
    </div>
  );
}