// components/ui/backgrounds/Galaxy.tsx
'use client';

import { useEffect, useRef } from 'react';
import clsx from 'clsx';

interface GalaxyProps {
  className?: string;
  intensity?: 'subtle' | 'medium' | 'strong';
  showOnMobile?: boolean;
  particleCount?: number;
}

export default function Galaxy({ 
  className = '', 
  intensity = 'medium',
  showOnMobile = false,
  particleCount = 100 
}: GalaxyProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size
    const resizeCanvas = () => {
      if (!canvas) return; // Additional null check
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Particle system
    class Particle {
      x: number;
      y: number;
      size: number;
      speedX: number;
      speedY: number;
      opacity: number;
      fadeDirection: number;

      constructor() {
        this.x = Math.random() * (canvas?.width || window.innerWidth);
        this.y = Math.random() * (canvas?.height || window.innerHeight);
        this.size = Math.random() * 2 + 0.5;
        this.speedX = (Math.random() - 0.5) * 0.5;
        this.speedY = (Math.random() - 0.5) * 0.5;
        this.opacity = Math.random() * 0.8 + 0.2;
        this.fadeDirection = Math.random() > 0.5 ? 1 : -1;
      }

      update() {
        if (!canvas) return;
        
        this.x += this.speedX;
        this.y += this.speedY;

        // Fade effect
        this.opacity += this.fadeDirection * 0.005;
        if (this.opacity <= 0.1 || this.opacity >= 0.9) {
          this.fadeDirection *= -1;
        }

        // Wrap around edges
        if (this.x < 0) this.x = canvas.width;
        if (this.x > canvas.width) this.x = 0;
        if (this.y < 0) this.y = canvas.height;
        if (this.y > canvas.height) this.y = 0;
      }

      draw() {
        if (!ctx) return;
        
        ctx.save();
        ctx.globalAlpha = this.opacity;
        ctx.fillStyle = '#60a5fa'; // Blue-400
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      }
    }

    // Create particles
    const particles: Particle[] = [];
    const finalCount = intensity === 'subtle' ? particleCount * 0.5 : 
                      intensity === 'medium' ? particleCount : 
                      particleCount * 1.5;

    for (let i = 0; i < finalCount; i++) {
      particles.push(new Particle());
    }

    // Animation loop
    let animationId: number;
    const animate = () => {
      if (!ctx || !canvas) return;
      
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      particles.forEach(particle => {
        particle.update();
        particle.draw();
      });

      // Draw connections between nearby particles
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 100) {
            ctx.save();
            ctx.globalAlpha = (100 - distance) / 100 * 0.1;
            ctx.strokeStyle = '#3b82f6'; // Blue-500
            ctx.lineWidth = 0.5;
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
            ctx.restore();
          }
        }
      }

      animationId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      if (animationId) {
        cancelAnimationFrame(animationId);
      }
    };
  }, [intensity, particleCount]);

  return (
    <canvas
      ref={canvasRef}
      className={clsx(
        'absolute inset-0 pointer-events-none',
        {
          'hidden md:block': !showOnMobile,
        },
        className
      )}
      style={{ zIndex: -1 }}
    />
  );
}