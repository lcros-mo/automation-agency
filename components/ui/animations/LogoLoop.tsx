// components/ui/animations/LogoLoop.tsx
'use client';

import { useEffect, useRef } from 'react';

interface TechItem {
  name: string;
}

interface LogoLoopProps {
  items: TechItem[];
  speed?: number;
  className?: string;
}

export default function LogoLoop({
  items,
  speed = 30,
  className = ''
}: LogoLoopProps) {
  const scrollerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scroller = scrollerRef.current;
    if (!scroller) return;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      scroller.style.animation = 'none';
      return;
    }

    scroller.style.animationDuration = `${speed}s`;
  }, [speed]);

  // Duplicate items for seamless loop
  const duplicatedItems = [...items, ...items];

  return (
    <div className={`logo-loop-container ${className}`}>
      <div 
        ref={scrollerRef}
        className="logo-loop-scroller"
      >
        {duplicatedItems.map((item, index) => (
          <div
            key={`${item.name}-${index}`}
            className="tech-item"
          >
            {item.name}
          </div>
        ))}
      </div>

      <style jsx>{`
        .logo-loop-container {
          position: relative;
          overflow: hidden;
          width: 100%;
          padding: 2rem 0;
          mask-image: linear-gradient(
            to right,
            transparent 0%,
            black 10%,
            black 90%,
            transparent 100%
          );
          -webkit-mask-image: linear-gradient(
            to right,
            transparent 0%,
            black 10%,
            black 90%,
            transparent 100%
          );
        }

        .logo-loop-scroller {
          display: flex;
          gap: 4rem;
          animation: scroll linear infinite;
          width: max-content;
        }

        .tech-item {
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Inter', 'SF Pro Display', system-ui, sans-serif;
          font-size: 1.25rem;
          font-weight: 600;
          color: rgb(191, 219, 254);
          white-space: nowrap;
          opacity: 0.85;
          transition: opacity 0.3s ease, transform 0.3s ease;
          letter-spacing: -0.02em;
        }

        .tech-item:hover {
          opacity: 1;
          transform: translateY(-2px);
        }

        @keyframes scroll {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-50%);
          }
        }

        .logo-loop-scroller:hover {
          animation-play-state: paused;
        }

        @media (prefers-reduced-motion: reduce) {
          .logo-loop-scroller {
            animation: none;
          }
          
          .tech-item:hover {
            transform: none;
          }
        }

        @media (max-width: 768px) {
          .tech-item {
            font-size: 1rem;
          }
          
          .logo-loop-scroller {
            gap: 3rem;
          }
        }
      `}</style>
    </div>
  );
}

// Tech stack - solo nombres
export const techStack: TechItem[] = [
  { name: 'n8n' },
  { name: 'Zapier' },
  { name: 'Make' },
  { name: 'HubSpot' },
  { name: 'Shopify' },
  { name: 'Airtable' },
  { name: 'Notion' },
  { name: 'Slack' },
  { name: 'Google Sheets' },
  { name: 'Mailchimp' },
  { name: 'Stripe' },
  { name: 'Salesforce' },
];
