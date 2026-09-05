import React from 'react';
import { BRAND_STORY, BRAND_USPS } from '../data/preorderData';

export const TheWhy = () => {
  return (
    <section id="the-why" className="py-8 sm:py-12 md:py-16">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white/85 backdrop-blur-md rounded-3xl border border-white/90 p-6 sm:p-10 lg:p-14 shadow-card">
        
        {/* Brand Story Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-block text-xs font-serif italic text-rose mb-3 uppercase tracking-wider">
            Our Brand Story
          </div>
          <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl text-nearblack font-normal leading-tight mb-6">
            “{BRAND_STORY.quote}”
          </h2>
          <p className="text-base sm:text-lg text-nearblack/80 font-sans font-light leading-relaxed">
            {BRAND_STORY.context}
          </p>
        </div>

        {/* 4 Distinct USPs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4 mb-12">
          {BRAND_USPS.map((usp, idx) => (
            <div 
              key={idx}
              className="bg-white/90 rounded-2xl p-6 sm:p-7 border border-sand shadow-soft flex flex-col justify-between"
            >
              <div>
                <div className="text-xs font-serif italic text-rose mb-1">
                  {usp.subtitle}
                </div>
                <h3 className="font-serif text-lg sm:text-xl text-nearblack mb-2">
                  {usp.title}
                </h3>
                <p className="text-xs sm:text-sm text-nearblack/70 font-sans font-light leading-relaxed">
                  {usp.description}
                </p>
              </div>
            </div>
          ))}
        </div>

          {/* Founders Sign-off */}
          <div className="pt-6 border-t border-sand flex items-center justify-between flex-wrap gap-4 text-xs text-muted">
            <div>
              <span className="font-serif italic text-nearblack text-sm">{BRAND_STORY.founders}</span>
            </div>
            <div className="text-nearblack/70 font-sans">
              Tamil Nadu Weaving Partner • Batch 01 Looms Active
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
