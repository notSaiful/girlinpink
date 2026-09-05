import React, { useState } from 'react';
import { FAQS } from '../data/preorderData';

export const TrustFaq = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const toggle = (idx) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-16 md:py-24 border-b border-sand">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center sm:text-left mb-12">
          <div className="text-xs font-serif italic text-rose mb-2 uppercase tracking-wider">
            Trust & Transparency
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl text-nearblack font-normal">
            Answering Your Questions
          </h2>
          <p className="text-muted text-sm sm:text-base mt-2 font-sans font-light">
            Everything you need to know about deposits, cancellations, dorm cot fit, and fabric care.
          </p>
        </div>

        {/* Accordion */}
        <div className="space-y-4">
          {FAQS.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div 
                key={index}
                className="bg-cream-card rounded-2xl border border-sand overflow-hidden transition-all shadow-soft"
              >
                <button
                  onClick={() => toggle(index)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 font-serif text-base sm:text-lg text-nearblack hover:text-rose transition"
                >
                  <span>{faq.question}</span>
                  <span className="text-xl text-rose font-sans font-light shrink-0">
                    {isOpen ? '−' : '+'}
                  </span>
                </button>

                {isOpen && (
                  <div className="px-5 pb-6 sm:px-6 sm:pb-6 text-xs sm:text-sm text-nearblack/80 font-sans font-light leading-relaxed border-t border-sand/60 pt-4">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Quiet support note */}
        <div className="mt-10 text-center text-xs text-muted">
          Have a specific mattress question? Email us anytime at{' '}
          <a href="mailto:hello@thedormbed.co" className="text-nearblack underline underline-offset-4">
            hello@thedormbed.co
          </a>
          . We reply within 24 hours.
        </div>

      </div>
    </section>
  );
};
