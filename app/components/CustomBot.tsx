'use client';
import { FEATURES } from '@/utils/constants';
import { useState } from 'react';
import { CustomBotForm } from '@/types';

export default function CustomBot() {
  const [formData, setFormData] = useState<CustomBotForm>({
    businessName: '',
    category: '',
    platform: '',
    businessSize: '',
    preferredFeatures: [],
    specificRequirements: '',
    monthlyBudget: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleFeatureToggle = (feature: string) => {
    setFormData(prev => ({
      ...prev,
      preferredFeatures: prev.preferredFeatures.includes(feature)
        ? prev.preferredFeatures.filter(f => f !== feature)
        : [...prev.preferredFeatures, feature]
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    console.log('Form submitted:', formData);
    alert('Thank you! We will get back to you within 24 hours.');
    setIsSubmitting(false);
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Column - Form */}
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Customize Your Perfect Bot
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Tell us about your business needs and we&apos;ll help you build a custom AI bot solution tailored specifically for your requirements.
            </p>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Business Name
                </label>
                <input
                  type="text"
                  placeholder="Enter your business name"
                  value={formData.businessName}
                  onChange={(e) => setFormData(prev => ({ ...prev, businessName: e.target.value }))}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  required
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Category *
                  </label>
                  <select
                    value={formData.category}
                    onChange={(e) => setFormData(prev => ({ ...prev, category: e.target.value }))}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    required
                  >
                    <option value="">Select your Category</option>
                    <option value="restaurant">Restaurant & Food</option>
                    <option value="healthcare">Healthcare</option>
                    <option value="finance">Finance & Trading</option>
                    <option value="ecommerce">E-commerce</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Platform *
                  </label>
                  <select
                    value={formData.platform}
                    onChange={(e) => setFormData(prev => ({ ...prev, platform: e.target.value }))}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    required
                  >
                    <option value="">Select your Platform</option>
                    <option value="web">Web</option>
                    <option value="mobile">Mobile</option>
                    <option value="both">Both</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Business Size *
                </label>
                <select
                  value={formData.businessSize}
                  onChange={(e) => setFormData(prev => ({ ...prev, businessSize: e.target.value }))}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  required
                >
                  <option value="">Select business size</option>
                  <option value="startup">Startup (1-10 employees)</option>
                  <option value="small">Small (11-50 employees)</option>
                  <option value="medium">Medium (51-200 employees)</option>
                  <option value="large">Large (200+ employees)</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-3">
                  Preferred Features
                </label>
                <div className="grid grid-cols-2 gap-3">
                  {FEATURES.map((feature) => (
                    <label key={feature} className="flex items-center space-x-3 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={formData.preferredFeatures.includes(feature)}
                        onChange={() => handleFeatureToggle(feature)}
                        className="w-4 h-4 text-blue-600 rounded focus:ring-blue-500"
                      />
                      <span className="text-sm text-gray-700">{feature}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Specific Requirements
                </label>
                <textarea
                  placeholder="Describe any specific features, integrations, or requirements for your bot"
                  value={formData.specificRequirements}
                  onChange={(e) => setFormData(prev => ({ ...prev, specificRequirements: e.target.value }))}
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Monthly Budget Range *
                </label>
                <select
                  value={formData.monthlyBudget}
                  onChange={(e) => setFormData(prev => ({ ...prev, monthlyBudget: e.target.value }))}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  required
                >
                  <option value="">Select budget range</option>
                  <option value="under-50">Under $50</option>
                  <option value="50-100">$50 - $100</option>
                  <option value="100-200">$100 - $200</option>
                  <option value="200-500">$200 - $500</option>
                  <option value="500+">$500+</option>
                </select>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-blue-600 text-white py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Submitting...' : 'Submit Customization Request'}
              </button>
            </form>

            <p className="text-sm text-gray-500 mt-4 text-center">
              We&apos;ll get back to you within 24 hours with a customized bot proposal and pricing.
            </p>
          </div>

          {/* Right Column - Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Why Choose Custom Bot Development?
              </h3>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-blue-100 p-3 rounded-lg">
                    <span className="text-2xl">🔧</span>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">
                      Tailored to Your Business
                    </h4>
                    <p className="text-gray-600">
                      Every business is unique. Our custom bots are designed specifically for your industry, workflow, and customer needs.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-green-100 p-3 rounded-lg">
                    <span className="text-2xl">🔄</span>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">
                      Complete Integration
                    </h4>
                    <p className="text-gray-600">
                      Seamlessly integrate with your existing tools, CRM systems, payment processors, and business applications.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-purple-100 p-3 rounded-lg">
                    <span className="text-2xl">📈</span>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">
                      Scalable & Future-Ready
                    </h4>
                    <p className="text-gray-600">
                      Built to grow with your business. Easily add new features, integrations, and capabilities as you expand.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Development Process
              </h3>
              
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 bg-white rounded-lg border border-gray-200">
                  <span className="font-semibold text-gray-900">Requirements Analysis</span>
                  <span className="text-sm text-blue-600 bg-blue-50 px-3 py-1 rounded-full">24-48 hours</span>
                </div>
                
                <div className="flex items-center justify-between p-4 bg-white rounded-lg border border-gray-200">
                  <span className="font-semibold text-gray-900">Custom Bot Development</span>
                  <span className="text-sm text-green-600 bg-green-50 px-3 py-1 rounded-full">1-2 weeks</span>
                </div>
                
                <div className="flex items-center justify-between p-4 bg-white rounded-lg border border-gray-200">
                  <span className="font-semibold text-gray-900">Testing & Deployment</span>
                  <span className="text-sm text-purple-600 bg-purple-50 px-3 py-1 rounded-full">2-3 days</span>
                </div>
                
                <div className="flex items-center justify-between p-4 bg-white rounded-lg border border-gray-200">
                  <span className="font-semibold text-gray-900">Training & Support</span>
                  <span className="text-sm text-orange-600 bg-orange-50 px-3 py-1 rounded-full">Ongoing</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}