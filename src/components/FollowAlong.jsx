import React from 'react';
import { SOCIAL_STRIP } from '../data/preorderData';

export const FollowAlong = () => {
  return (
    <section className="py-16 md:py-20 border-b border-sand bg-cream-dark/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-4">
          <div>
            <div className="text-xs font-serif italic text-rose mb-1.5 uppercase tracking-wider">
              Behind The Scenes
            </div>
            <h2 className="font-serif text-2xl sm:text-3xl text-nearblack font-normal">
              Follow The Loom Weave
            </h2>
          </div>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs font-medium text-rose hover:text-rose-dark underline underline-offset-4 self-start sm:self-auto font-sans"
          >
            @thedormbed on Instagram & Pinterest →
          </a>
        </div>

        {/* Visual Strip of 4 real moments */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          {SOCIAL_STRIP.map((item, idx) => (
            <div 
              key={idx}
              className="bg-cream-card rounded-xl border border-sand overflow-hidden shadow-soft flex flex-col justify-between"
            >
              <div className="aspect-[4/3] overflow-hidden bg-cream-dark">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover object-center hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-3.5 space-y-1">
                <div className="text-[10px] uppercase tracking-wider text-muted font-sans font-medium">
                  {item.location}
                </div>
                <div className="text-xs font-serif text-nearblack font-medium leading-snug">
                  {item.caption}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
