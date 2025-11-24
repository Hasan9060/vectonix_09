'use client';
import { BOT_PACKAGES } from '@/utils/constants';
import { useState } from 'react';

export default function Pricing() {
  const [selectedPackage, setSelectedPackage] = useState<string | null>(null);

  return (
    <section id="services" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Pricing & Packages</h2>
          <p className="text-lg text-gray-600">
            Discover our most popular and highly-rated AI bots, each designed to excel in specific business domains.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {BOT_PACKAGES.map((botPackage) => (
            <div
              key={botPackage.id}
              className="from-white to-gray-50 rounded-2xl shadow-xl border border-gray-200 overflow-hidden hover:shadow-2xl transition-all duration-300"
            >
              <div className="p-6 border-b border-gray-200">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">{botPackage.title}</h3>
                    <span className="text-sm text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
                      {botPackage.category}
                    </span>
                  </div>
                  {botPackage.badge && (
                    <span className="bg-green-100 text-green-800 text-xs font-medium px-3 py-1 rounded-full">
                      {botPackage.badge}
                    </span>
                  )}
                </div>
                <p className="text-gray-600 text-sm leading-relaxed">{botPackage.description}</p>
              </div>

              <div className="p-6">
                <h4 className="font-semibold text-gray-900 mb-4 flex items-center">
                  <span className="text-blue-600 mr-2">%</span>
                  Key Features
                </h4>
                <div className="grid grid-cols-2 gap-2 mb-6">
                  {botPackage.features.map((feature, index) => (
                    <div key={index} className="flex items-center text-sm text-gray-600">
                      <span className="text-green-500 mr-2">✓</span>
                      {feature}
                    </div>
                  ))}
                </div>

                <h4 className="font-semibold text-gray-900 mb-4 flex items-center">
                  <span className="text-blue-600 mr-2">○</span>
                  Pricing Plans
                </h4>
                <div className="grid grid-cols-3 gap-4 mb-6">
                  {botPackage.pricing.map((plan, index) => (
                    <div key={index} className="text-center">
                      <div className="font-semibold text-gray-900 mb-1">{plan.name}</div>
                      <div className="text-lg font-bold text-blue-600">{plan.price}</div>
                    </div>
                  ))}
                </div>

                <button className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="bg-gray-900 text-white px-8 py-3 rounded-lg font-semibold hover:bg-gray-800 transition-colors">
            View All Bots
          </button>
        </div>
      </div>
    </section>
  );
}