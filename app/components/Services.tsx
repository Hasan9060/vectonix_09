'use client';
import { SERVICES } from '@/utils/constants';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';

export default function Services() {
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);

  return (
    <section id="pricing" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
         <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-orange-100 to-blue-100 text-gray-800 mb-6"
                    >
                        <Sparkles size={16} className="text-orange-600" />
                        <span className="text-sm font-bold">Agentic AI Bots Services</span>
                    </motion.div>
                     <motion.h2
                                            initial={{ opacity: 0, y: 20 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ delay: 0.1 }}
                                            className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
                                        >
                                            Find the perfect<span className="text-orange-600"> AI bot</span> for your business.
                                        </motion.h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Each category is specifically designed to address unique business challenges and opportunities.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((service) => (
            <div
              key={service.id}
              className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100"
              onMouseEnter={() => setHoveredCard(service.id)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div className="flex items-start justify-between mb-4">
                <span className="text-3xl">{service.icon}</span>
                <span className="text-sm text-gray-500 font-medium">{service.botCount}</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{service.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-4">{service.description}</p>
              <button className="text-blue-600 font-semibold text-sm hover:text-blue-700 transition-colors flex items-center">
                Learn More
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-blue-600 hover:text-white transition-colors">
            Can&apos;t find a bot for your business? Request a custom AI bot tailored to your unique needs!
          </button>
        </div>
      </div>
    </section>
  );
}