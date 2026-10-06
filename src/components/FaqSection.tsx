import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { FAQ_LIST } from '../data/productData';

export const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="bg-neutral-100 text-neutral-900 py-20 sm:py-28 border-t border-neutral-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-neutral-300 text-neutral-600 text-xs font-bold uppercase tracking-widest mb-3">
            <HelpCircle className="w-3.5 h-3.5 text-neutral-900" />
            <span>Questions & Answers</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-neutral-950 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-sm sm:text-base text-neutral-600 font-medium">
            Everything you need to know about your KOSNORA Smart Phone Case.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-3">
          {FAQ_LIST.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={faq.question}
                className="rounded-2xl bg-white border border-neutral-200/90 shadow-xs transition-colors overflow-hidden"
              >
                <button
                  onClick={() => toggleAccordion(index)}
                  className="w-full py-5 px-6 text-left flex items-center justify-between gap-4 focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span className="text-sm sm:text-base font-bold text-neutral-900 leading-snug">
                    {faq.question}
                  </span>
                  <div
                    className={`w-8 h-8 rounded-full bg-neutral-100 flex items-center justify-center shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180 bg-neutral-900 text-white' : 'text-neutral-500'
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-1 text-xs sm:text-sm text-neutral-600 font-normal leading-relaxed border-t border-neutral-100">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Support Note */}
        <div className="mt-12 text-center text-xs text-neutral-500">
          Have an additional question? Reach out through our support channel: <span className="font-semibold text-neutral-800">[Insert customer support contact email here]</span>
        </div>
      </div>
    </section>
  );
};
