'use client';
import { SERVICES } from '@/utils/servicesData';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { Code, Palette, TrendingUp, Globe, Share2, Target, FileText, Sparkles, ShoppingCart, ArrowRight, CheckCircle } from 'lucide-react';
import { useState } from 'react';
import { useCurrency } from '../context/CurrencyContext';

const iconMap: { [key: string]: any } = {
    Code,
    Palette,
    TrendingUp,
    Globe,
    Share2,
    Target,
    FileText,
    Sparkles,
    ShoppingCart,
};

// Parse price string to PKR
function parsePriceToPKR(priceStr: string): number {
    const num = parseFloat(priceStr.replace(/[^0-9.]/g, ''));
    if (priceStr.includes('$')) return num * 280;
    return num;
}

export default function OurServices() {
    const [hoveredCard, setHoveredCard] = useState<string | null>(null);
    const { convertPrice } = useCurrency();

    // Show only first 3 services on home page
    const displayedServices = SERVICES.slice(0, 3);

    return (
        <section id="our-services" className="py-24 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
            {/* Background Decoration */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-20 right-10 w-72 h-72 bg-orange-500/5 rounded-full blur-3xl" />
                <div className="absolute bottom-20 left-10 w-72 h-72 bg-blue-500/5 rounded-full blur-3xl" />
            </div>

            <div className="container mx-auto px-4 relative z-10">
                {/* Header */}
                <div className="text-center mb-16 max-w-3xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-orange-100 to-blue-100 text-gray-800 mb-6"
                    >
                        <Sparkles size={16} className="text-orange-600" />
                        <span className="text-sm font-bold">Professional Services</span>
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
                    >
                        Transform Your Business with <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-blue-600">Expert Services</span>
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-xl text-gray-600"
                    >
                        From development to marketing, we deliver comprehensive solutions that drive real results for your business.
                    </motion.p>
                </div>

                {/* Services Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto mb-12">
                    {displayedServices.map((service, index) => {
                        const IconComponent = iconMap[service.icon];
                        const isHovered = hoveredCard === service.id;

                        return (
                            <motion.div
                                key={service.id}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-50px" }}
                                transition={{ delay: index * 0.05, duration: 0.4 }}
                                onMouseEnter={() => setHoveredCard(service.id)}
                                onMouseLeave={() => setHoveredCard(null)}
                                className="group relative"
                            >
                                <div className={`h-full p-8 rounded-3xl bg-white border-2 transition-all duration-500 ${isHovered
                                        ? 'border-orange-500 shadow-2xl shadow-orange-500/20 -translate-y-2'
                                        : 'border-gray-200 shadow-lg hover:shadow-xl'
                                    }`}>
                                    {/* Icon */}
                                    <div className="mb-6">
                                        <div className={`w-16 h-16 rounded-2xl flex items-center justify-center transition-all duration-500 ${isHovered
                                                ? 'bg-gradient-to-br from-orange-500 to-orange-600 scale-110'
                                                : 'bg-gradient-to-br from-gray-100 to-gray-200'
                                            }`}>
                                            <IconComponent size={32} className={`transition-colors duration-500 ${isHovered ? 'text-white' : 'text-gray-700'
                                                }`} />
                                        </div>
                                    </div>

                                    {/* Content */}
                                    <h3 className="text-2xl font-bold text-gray-900 mb-2">
                                        {service.title}
                                    </h3>

                                    <p className="text-sm font-semibold text-orange-600 mb-4">
                                        {service.tagline}
                                    </p>

                                    <p className="text-gray-600 mb-6 leading-relaxed line-clamp-3">
                                        {service.description}
                                    </p>

                                    {/* Features Preview */}
                                    <div className="space-y-2 mb-6">
                                        {service.features.slice(0, 3).map((feature, idx) => (
                                            <div key={idx} className="flex items-center gap-2 text-sm text-gray-600">
                                                <CheckCircle size={16} className="text-green-500 shrink-0" />
                                                <span>{feature}</span>
                                            </div>
                                        ))}
                                    </div>

                                    {/* Pricing Preview */}
                                    <div className="mb-6 pb-6 border-b border-gray-200">
                                        <div className="text-sm text-gray-500 mb-1">Starting from</div>
                                        <div className="text-3xl font-bold text-gray-900">
                                            {convertPrice(parsePriceToPKR(service.pricing.basic))}
                                        </div>
                                    </div>

                                    {/* CTA Link */}
                                    <Link href={`/services/${service.slug}`}>
                                        <button className={`w-full flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${isHovered
                                                ? 'bg-gradient-to-r from-orange-500 to-orange-600 text-white shadow-lg'
                                                : 'bg-gray-900 text-white hover:bg-gray-800'
                                            }`}>
                                            Learn More
                                            <ArrowRight size={18} className={`transition-transform duration-300 ${isHovered ? 'translate-x-1' : ''}`} />
                                        </button>
                                    </Link>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>

                {/* View All Button */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 }}
                    className="text-center"
                >
                    <Link href="/services">
                        <button className="inline-flex items-center gap-3 px-10 py-4 rounded-xl bg-gradient-to-r from-orange-500 to-blue-600 text-white font-bold text-lg hover:shadow-xl hover:shadow-orange-500/30 transition-all hover:scale-105">
                            View All {SERVICES.length} Services
                            <ArrowRight size={24} />
                        </button>
                    </Link>
                    <p className="text-gray-500 text-sm mt-4">
                        Get expert consultation for your project
                    </p>
                </motion.div>
            </div>
        </section>
    );
}
