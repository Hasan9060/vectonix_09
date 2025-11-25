'use client';
import { SERVICES } from '@/utils/servicesData';
import { Search, ArrowRight, Code, Palette, TrendingUp, Globe, Share2, Target, FileText, Sparkles, ShoppingCart, CheckCircle } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';

const iconMap: { [key: string]: any } = {
    Code, Palette, TrendingUp, Globe, Share2, Target, FileText, Sparkles, ShoppingCart,
};

export default function ServicesPage() {
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('All');

    const categories = ['All', ...Array.from(new Set(SERVICES.map(service => service.category)))];

    const filteredServices = SERVICES.filter(service => {
        const matchesSearch = service.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            service.description.toLowerCase().includes(searchQuery.toLowerCase());
        const matchesCategory = selectedCategory === 'All' || service.category === selectedCategory;
        return matchesSearch && matchesCategory;
    });

    return (
        <main className="min-h-screen bg-gradient-to-br from-gray-50 to-white pt-20">
            <div className="container mx-auto px-4 py-12">
                {/* Header */}
                <div className="text-center mb-12 max-w-3xl mx-auto">
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                        Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-blue-600">Professional Services</span>
                    </h1>
                    <p className="text-lg text-gray-600">
                        Comprehensive solutions to grow your business
                    </p>
                </div>

                {/* Search */}
                <div className="max-w-4xl mx-auto mb-10">
                    <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6">
                        <div className="flex flex-col md:flex-row gap-4">
                            <div className="flex-1 relative">
                                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                                <input
                                    type="text"
                                    placeholder="Search services..."
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                    className="w-full pl-12 pr-4 py-3 rounded-xl border border-gray-200 focus:border-orange-500 focus:ring-2 focus:ring-orange-100 outline-none transition-all text-gray-900"
                                />
                            </div>

                            <select
                                value={selectedCategory}
                                onChange={(e) => setSelectedCategory(e.target.value)}
                                className="px-4 py-3 rounded-xl border border-gray-200 focus:border-orange-500 focus:ring-2 focus:ring-orange-100 outline-none transition-all text-gray-900 bg-white cursor-pointer"
                            >
                                {categories.map((category) => (
                                    <option key={category} value={category}>
                                        {category}
                                    </option>
                                ))}
                            </select>
                        </div>

                        <div className="mt-4 text-sm text-gray-500">
                            Showing {filteredServices.length} of {SERVICES.length} services
                        </div>
                    </div>
                </div>

                {/* Services Grid */}
                <div className="max-w-7xl mx-auto">
                    {filteredServices.length === 0 ? (
                        <div className="text-center py-20">
                            <div className="text-6xl mb-4">🔍</div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-2">No services found</h3>
                            <p className="text-gray-600">Try adjusting your search criteria</p>
                        </div>
                    ) : (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {filteredServices.map((service) => {
                                const IconComponent = iconMap[service.icon];

                                return (
                                    <div
                                        key={service.id}
                                        className="group bg-white rounded-3xl p-8 shadow-sm hover:shadow-2xl transition-all duration-300 border-2 border-gray-200 hover:border-orange-500 hover:-translate-y-1"
                                    >
                                        {/* Icon */}
                                        <div className="mb-6">
                                            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-orange-500 to-blue-600 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                                                <IconComponent size={32} className="text-white" />
                                            </div>
                                        </div>

                                        {/* Category */}
                                        <span className="inline-block text-xs font-semibold px-3 py-1 rounded-full bg-gray-100 text-gray-700 mb-3">
                                            {service.category}
                                        </span>

                                        {/* Title */}
                                        <h3 className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-orange-600 transition-colors">
                                            {service.title}
                                        </h3>

                                        {/* Tagline */}
                                        <p className="text-sm font-semibold text-orange-600 mb-4">
                                            {service.tagline}
                                        </p>

                                        {/* Description */}
                                        <p className="text-gray-600 text-sm mb-6 leading-relaxed line-clamp-3">
                                            {service.description}
                                        </p>

                                        {/* Features Preview */}
                                        <div className="space-y-2 mb-6">
                                            {service.features.slice(0, 3).map((feature, idx) => (
                                                <div key={idx} className="flex items-center gap-2 text-xs text-gray-600">
                                                    <CheckCircle size={14} className="text-green-500 shrink-0" />
                                                    <span className="line-clamp-1">{feature}</span>
                                                </div>
                                            ))}
                                        </div>

                                        {/* Pricing */}
                                        <div className="mb-6 pb-6 border-b border-gray-200">
                                            <div className="text-sm text-gray-500 mb-1">Starting from</div>
                                            <div className="text-3xl font-bold text-gray-900">
                                                {service.pricing.basic}
                                            </div>
                                        </div>

                                        {/* View Button */}
                                        <Link href={`/services/${service.slug}`}>
                                            <button className="w-full flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-gray-900 text-white font-semibold hover:bg-orange-600 transition-all group-hover:gap-3">
                                                View Details
                                                <ArrowRight size={18} />
                                            </button>
                                        </Link>
                                    </div>
                                );
                            })}
                        </div>
                    )}
                </div>

                {/* Back to Home */}
                <div className="text-center mt-16">
                    <Link href="/">
                        <button className="inline-flex items-center gap-2 px-8 py-3 rounded-xl border-2 border-gray-200 text-gray-700 font-semibold hover:border-orange-500 hover:text-orange-600 transition-all">
                            ← Back to Home
                        </button>
                    </Link>
                </div>
            </div>
        </main>
    );
}
