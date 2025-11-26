'use client';
import { SERVICES } from '@/utils/servicesData';
import { Search, ArrowRight, Filter, Code, Palette, TrendingUp, Globe, Share2, Target, FileText, Sparkles, ShoppingCart } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';

const iconMap: { [key: string]: any } = {
    Code, Palette, TrendingUp, Globe, Share2, Target, FileText, Sparkles, ShoppingCart,
};

export default function ServicesPage() {
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('All');

    const categories = ['All', ...Array.from(new Set(SERVICES.map(service => service.category)))];

    // Filter services based on search and category
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
                        Professional <span className="text-orange-600">Services</span> & Solutions
                    </h1>
                    <p className="text-lg text-gray-600">
                        Browse our complete collection of {SERVICES.length} premium services
                    </p>
                </div>

                {/* Search and Filter */}
                <div className="max-w-6xl mx-auto mb-10">
                    <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6">
                        <div className="flex flex-col md:flex-row gap-4">
                            {/* Search Bar */}
                            <div className="flex-1 relative">
                                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                                <input
                                    type="text"
                                    placeholder="Search services by name or description..."
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                    className="w-full pl-12 pr-4 py-3 rounded-xl border border-gray-200 focus:border-orange-500 focus:ring-2 focus:ring-orange-100 outline-none transition-all text-gray-900"
                                />
                            </div>

                            {/* Category Filter */}
                            <div className="flex items-center gap-2">
                                <Filter className="text-gray-400" size={20} />
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
                        </div>

                        {/* Results Count */}
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
                            <p className="text-gray-600">Try adjusting your search or filter criteria</p>
                        </div>
                    ) : (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {filteredServices.map((service) => {
                                const IconComponent = iconMap[service.icon];

                                return (
                                    <div
                                        key={service.id}
                                        className="group bg-white rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-orange-200 hover:-translate-y-1"
                                    >
                                        {/* Icon & Category */}
                                        <div className="flex items-center justify-between mb-4">
                                            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-orange-500 to-amber-600 flex items-center justify-center group-hover:scale-110 transition-transform">
                                                <IconComponent size={24} className="text-white" />
                                            </div>
                                            <span className="text-xs font-semibold px-3 py-1 rounded-full bg-gray-100 text-gray-700">
                                                {service.category}
                                            </span>
                                        </div>

                                        {/* Title */}
                                        <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-orange-600 transition-colors line-clamp-1">
                                            {service.title}
                                        </h3>

                                        {/* Tagline */}
                                        <p className="text-sm font-semibold text-orange-600 mb-3">
                                            {service.tagline}
                                        </p>

                                        {/* Description */}
                                        <p className="text-gray-600 text-sm mb-4 line-clamp-2 leading-relaxed">
                                            {service.description}
                                        </p>

                                        {/* Features Preview */}
                                        <div className="space-y-1 mb-5">
                                            {service.features.slice(0, 3).map((feature, idx) => (
                                                <div key={idx} className="flex items-center gap-2 text-xs text-gray-600">
                                                    <div className="w-1 h-1 rounded-full bg-orange-500" />
                                                    <span className="line-clamp-1">{feature}</span>
                                                </div>
                                            ))}
                                        </div>

                                        {/* Price */}
                                        <div className="mb-4 pb-4 border-b border-gray-200">
                                            <div className="text-xs text-gray-500 mb-1">Starting from</div>
                                            <div className="text-2xl font-bold text-orange-600">
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
