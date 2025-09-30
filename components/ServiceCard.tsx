// components/ServiceCard.tsx
'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

interface ServiceCardProps {
  title: string;
  description: string;
  features: string[];
  pricing: string;
  timeline: string;
  featured?: boolean;
  href?: string;
  aiPowered?: boolean;
  badge?: string;
}

export default function ServiceCard({
  title,
  description,
  features,
  pricing,
  timeline,
  featured = false,
  href = '/contact',
  aiPowered = false,
  badge
}: ServiceCardProps) {
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className={`
        group relative bg-white border border-gray-200 rounded-2xl overflow-hidden
        hover:border-gray-300 transition-all duration-300
        ${featured ? 'md:col-span-2 md:row-span-2 p-10' : 'p-8'}
      `}
    >
      {/* Subtle gradient on hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/0 to-purple-50/0 group-hover:from-blue-50/50 group-hover:to-purple-50/30 transition-all duration-500 -z-10" />
      
      {/* Content */}
      <div className="relative z-10 flex flex-col h-full">
        
        {/* Header */}
        <div className="mb-6">
          {/* AI Badge or Custom Badge */}
          {(aiPowered || badge) && (
            <div className="mb-3">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-gradient-to-r from-blue-500 to-purple-500 text-white text-xs font-semibold rounded-full">
                {aiPowered && (
                  <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10 3.5a1.5 1.5 0 013 0V4a1 1 0 001 1h3a1 1 0 110 2h-1v1.5a1.5 1.5 0 11-3 0V7a1 1 0 00-1-1H9a1 1 0 00-1 1v.5a1.5 1.5 0 01-3 0V7H4a1 1 0 010-2h3a1 1 0 001-1v-.5z" />
                  </svg>
                )}
                {badge || 'Powered by AI'}
              </span>
            </div>
          )}
          
          <h3 className={`font-bold text-gray-900 mb-3 ${featured ? 'text-3xl md:text-4xl' : 'text-2xl'}`}>
            {title}
          </h3>
          <p className={`text-gray-600 leading-relaxed ${featured ? 'text-lg' : 'text-base'}`}>
            {description}
          </p>
        </div>

        {/* Features */}
        <div className="mb-6 flex-grow">
          <ul className="space-y-3">
            {features.map((feature, idx) => (
              <li key={idx} className="flex items-start text-gray-700">
                <svg className="w-5 h-5 text-blue-600 mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className={featured ? 'text-base' : 'text-sm'}>{feature}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Footer */}
        <div className="mt-auto">
          <div className="flex items-end justify-between mb-4">
            <div>
              <p className="text-sm text-gray-500 mb-1">Desde</p>
              <p className="text-2xl font-bold text-gray-900">{pricing}</p>
            </div>
            <div className="text-right">
              <p className="text-sm text-gray-500 mb-1">Timeline</p>
              <p className="font-semibold text-gray-900">{timeline}</p>
            </div>
          </div>
          
          <Link
            href={href}
            className="
              block w-full text-center py-3 px-6 
              bg-gray-900 text-white rounded-lg
              hover:bg-gray-800 transition-colors duration-200
              font-medium
            "
          >
            Consulta gratuita
          </Link>
        </div>
      </div>

      {/* Hover effect line */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 to-purple-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
    </motion.div>
  );
}
