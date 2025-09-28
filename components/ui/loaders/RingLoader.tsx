// components/ui/loaders/RingLoader.tsx
'use client';

import { useEffect } from 'react';
import clsx from 'clsx';

interface RingLoaderProps {
  size?: number;
  color?: string;
  speed?: number;
  className?: string;
  strokeWidth?: number;
}

export default function RingLoader({
  size = 40,
  color = '#2563eb',
  speed = 1,
  className = '',
  strokeWidth = 4
}: RingLoaderProps) {
  useEffect(() => {
    // Cargar el web component solo en el cliente
    if (typeof window !== 'undefined') {
      import('ldrs/ring');
    }
  }, []);

  return (
    <div className={clsx('flex items-center justify-center', className)}>
      <l-ring
        size={size}
        stroke={strokeWidth}
        bg-opacity="0.1"
        speed={speed}
        color={color}
      />
    </div>
  );
}

// Fallback CSS por si acaso
export function RingLoaderCSS({
  size = 40,
  color = '#2563eb',
  speed = 1,
  className = '',
  strokeWidth = 4
}: RingLoaderProps) {
  const animationDuration = `${1 / speed}s`;

  return (
    <div className={clsx('flex items-center justify-center', className)}>
      <div
        className="animate-spin rounded-full border-solid"
        style={{
          width: `${size}px`,
          height: `${size}px`,
          borderWidth: `${strokeWidth}px`,
          borderColor: `${color}20`,
          borderTopColor: color,
          animationDuration,
        }}
      />
    </div>
  );
}