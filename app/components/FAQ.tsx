'use client';
import { FAQS } from '@/utils/constants';
import { useState, useRef, useEffect } from 'react';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [heights, setHeights] = useState<number[]>([]);
  const contentRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    // Calculate heights for each FAQ answer
    const newHeights = contentRefs.current.map(ref => 
      ref ? ref.scrollHeight : 0
    );
    setHeights(newHeights);
  }, [FAQS]);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  // Auto-open first FAQ on initial load
  useEffect(() => {
    if (FAQS.length > 0 && openIndex === null) {
      setOpenIndex(0);
    }
  }, []);

  return (
    <section id="faq" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Enhanced Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-black mb-4">
            Frequently Asked <span className='bg-gradient-to-r from-orange-800 to-orange-600 bg-clip-text text-transparent'>Questions</span>
          </h2>
          <p className="text-sm text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Everything you need to know about our AI bots, pricing, setup, and support.
          </p>
        </div>

        {/* Enhanced FAQ Items */}
        <div className="max-w-4xl mx-auto">
          <div className="space-y-6">
            {FAQS.map((faq, index) => {
              const isOpen = openIndex === index;
              
              return (
                <div
                  key={index}
                  className="group bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 border border-gray-200/60 overflow-hidden"
                >
                  {/* Question Button */}
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="w-full px-8 py-6 text-left flex items-center justify-between bg-white hover:bg-gray-50/80 transition-all duration-300 group-hover:border-orange-200"
                  >
                    <div className="flex items-start space-x-4">
                      {/* Number Indicator */}
                      <div className={`shrink-0 w-4 h-4 rounded-full flex items-center justify-center text-sm font-semibold transition-all duration-300 ${
                        isOpen 
                          ? 'bg-orange-600 text-white scale-110' 
                          : 'bg-gray-100 text-gray-600 group-hover:bg-orange-100 group-hover:text-orange-600'
                      }`}>
                      </div>
                      
                      {/* Question Text */}
                      <span className={`font-semibold text-base leading-relaxed text-left transition-colors duration-300 ${
                        isOpen ? 'text-orange-900' : 'text-gray-900 group-hover:text-orange-800'
                      }`}>
                        {faq.question}
                      </span>
                    </div>
                    
                    {/* Animated Chevron Icon */}
                    <div className={`shrink-0 w-6 h-6 transform transition-all duration-500 ${
                      isOpen ? 'rotate-180 scale-110' : 'rotate-0'
                    }`}>
                      <svg 
                        className={`w-6 h-6 transition-colors duration-300 ${
                          isOpen ? 'text-orange-600' : 'text-gray-400 group-hover:text-orange-500'
                        }`}
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                      >
                        <path 
                          strokeLinecap="round" 
                          strokeLinejoin="round" 
                          strokeWidth={2} 
                          d="M19 9l-7 7-7-7" 
                        />
                      </svg>
                    </div>
                  </button>

                  {/* Answer Content with Smooth Animation */}
                  <div
                   ref={(el) => {
  contentRefs.current[index] = el;
}}

                    className="overflow-hidden transition-all duration-700 ease-in-out"
                    style={{
                      maxHeight: isOpen ? `${heights[index]}px` : '0px',
                      opacity: isOpen ? 1 : 0.7,
                      transform: `translateY(${isOpen ? '0' : '-10px'})`
                    }}
                  >
                    <div className="px-8 pb-6">
                      {/* Decorative Line */}
                      <div className="flex items-center mb-4">
                        <div className="w-8 h-0.5 bg-orange-200 rounded-full mr-4"></div>
                        <div className="text-xs font-medium text-blue-800 uppercase tracking-wide">
                          Answer
                        </div>
                      </div>
                      
                      {/* Answer Text */}
                      <div className="pl-12">
                        <p className="text-gray-700 leading-relaxed text-lg">
                          {faq.answer}
                        </p>
                        
                        {/* Additional Help Link */}
                        {index === 0 && (
                          <div className="mt-4 p-4 bg-orange-50 rounded-lg border border-orange-200">
                            <p className="text-sm text-orange-800 flex items-center">
                              <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"/>
                              </svg>
                              Need personalized help? <a href="#contact" className="font-semibold underline ml-1">Contact our experts</a>
                            </p>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}