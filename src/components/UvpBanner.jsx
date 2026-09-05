import React from 'react';
import { EMOTIONAL_PILLARS, PREORDER_META } from '../data/preorderData';

export const UvpBanner = () => {
  return (
    <section className="py-12 md:py-16 border-b border-sand bg-white/40 backdrop-blur-sm">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* The Central UVP Statement */}
        <div className="max-w-3xl mx-auto text-center mb-12">
          <div className="inline-block text-xs font-serif italic text-rose mb-3 uppercase tracking-wider">
            The 20-Minute Transformation
          </div>
          <blockquote className="font-serif text-2xl sm:text-3xl text-nearblack font-normal leading-snug">
            “{PREORDER_META.uvpQuote}”
          </blockquote>
        </div>

        {/* The 3 Emotional Anchors */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {EMOTIONAL_PILLARS.map((pillar, idx) => (
            <div 
              key={idx}
              className="bg-white/70 backdrop-blur-sm rounded-xl p-6 border border-sand/80 shadow-soft"
            >
              <div className="w-8 h-8 rounded-full bg-rose/10 text-rose font-serif italic flex items-center justify-center text-sm font-medium mb-4">
                0{idx + 1}
              </div>
              <h3 className="font-serif text-lg text-nearblack mb-2">
                {pillar.title}
              </h3>
              <p className="text-xs sm:text-sm text-nearblack/75 font-sans font-light leading-relaxed">
                {pillar.body}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
