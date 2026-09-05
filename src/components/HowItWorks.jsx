import React from 'react';
import { TIMELINE_STEPS } from '../data/preorderData';

export const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-16 md:py-24 border-b border-sand bg-cream-dark/20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-12 sm:mb-16">
          <div className="text-xs font-serif italic text-rose mb-2 uppercase tracking-wider">
            Clear Timelines
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl text-nearblack font-normal">
            How The Pre-Order Works
          </h2>
          <p className="text-muted text-sm sm:text-base mt-2 font-sans font-light">
            Every set is made to order. Here is the exact journey from the loom to your campus room.
          </p>
        </div>

        {/* 3-Step Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {TIMELINE_STEPS.map((item, idx) => (
            <div 
              key={item.step}
              className="bg-cream-card rounded-2xl border border-sand p-6 sm:p-7 space-y-4 shadow-soft relative"
            >
              {/* Step Number & Status Pill */}
              <div className="flex items-center justify-between">
                <span className="font-serif text-3xl font-bold text-rose/80">
                  {item.step}
                </span>
                <span className={`text-[10px] font-sans px-2.5 py-0.5 rounded-full border ${
                  idx === 0 
                    ? 'bg-rose-light text-rose-dark border-rose/30 font-medium' 
                    : 'bg-sand/40 text-muted border-sand'
                }`}>
                  {item.status}
                </span>
              </div>

              {/* Title */}
              <h3 className="font-serif text-xl text-nearblack font-normal">
                {item.title}
              </h3>

              {/* Window Date */}
              <div className="text-xs font-sans font-medium text-rose-dark bg-rose-light/60 px-3 py-1.5 rounded-lg inline-block">
                {item.window}
              </div>

              {/* Summary Description */}
              <p className="text-xs sm:text-sm text-nearblack/75 font-sans font-light leading-relaxed">
                {item.summary}
              </p>
            </div>
          ))}
        </div>

        {/* Transparency callout */}
        <div className="mt-10 p-5 rounded-2xl bg-cream border border-sand flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-muted">
          <div className="flex items-center gap-3">
            <span className="text-lg">🌿</span>
            <span>
              <strong>Zero deadstock guarantee:</strong> We only weave what is reserved. Unsold bedding never ends up in a landfill.
            </span>
          </div>
          <div className="font-serif italic text-nearblack">
            Weekly photo updates sent to your email
          </div>
        </div>

      </div>
    </section>
  );
};
