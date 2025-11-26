'use client';
import { TOOLS } from '@/utils/toolsData';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, Sparkles } from 'lucide-react';
import { useCurrency } from '../context/CurrencyContext';

// Parse price string to PKR base value
function parsePriceToPKR(priceStr: string): number {
    const num = parseFloat(priceStr.replace(/[^0-9.]/g, ''));
    if (priceStr.includes('$')) return num * 280; // USD to PKR
    return num;
}

export default function Tools() {
    const { convertPrice } = useCurrency();
    // Show only first 3 tools on home page
    const displayedTools = TOOLS.slice(0, 3);

    return (
        <section id="tools" className="py-24 bg-white">
            <div className="container mx-auto px-4">
                {/* Header */}
                <div className="text-center mb-16 max-w-3xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-orange-100 to-blue-100 text-black mb-6"
                    >
                        <Sparkles size={16} className='text-orange-700' />
                        <span className="text-sm font-bold ">Premium Tools & Services</span>
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
                    >
                        Professional <span className="text-orange-600">Tools</span> at Your Fingertips
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-xl text-gray-600"
                    >
                        Access premium software and services at affordable prices. Everything you need for content creation, design, and productivity.
                    </motion.p>
                </div>

                {/* Tools Grid - Only 3 on home page */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto mb-12">
                    {displayedTools.map((tool, index) => (
                        <motion.div
                            key={tool.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ delay: index * 0.1, duration: 0.3 }}
                            className="group bg-white rounded-2xl p-6 shadow-md hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-orange-200 hover:scale-105"
                        >
                            {/* Category Badge */}
                            <div className="flex items-center justify-between mb-4">
                                <span className="text-xs font-semibold px-3 py-1 rounded-full bg-orange-50 text-blue-600 border border-orange-100">
                                    {tool.category}
                                </span>
                                <span className="text-2xl font-bold text-green-500">
                                    {convertPrice(parsePriceToPKR(tool.price))}
                                </span>
                            </div>

                            {/* Title */}
                            <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-orange-600 transition-colors">
                                {tool.title}
                            </h3>

                            {/* Description */}
                            <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-2">
                                {tool.description}
                            </p>

                            {/* Features */}
                            <ul className="space-y-2 mb-6">
                                {tool.features.slice(0, 3).map((feature, idx) => (
                                    <li key={idx} className="flex items-center gap-2 text-sm text-gray-600">
                                        <div className="w-1.5 h-1.5 rounded-full bg-orange-500" />
                                        {feature}
                                    </li>
                                ))}
                            </ul>

                            {/* View Details Button */}
                            <Link href={`/tools/${tool.slug}`}>
                                <button className="w-full flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-black text-white font-bold hover:shadow-lg hover:shadow-orange-500/25 transition-all group-hover:gap-3">
                                    View Details
                                    <ArrowRight size={18} />
                                </button>
                            </Link>
                        </motion.div>
                    ))}
                </div>

                {/* View All Tools Button */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 }}
                    className="text-center"
                >
                    <Link href="/tools">
                        <button className="inline-flex items-center gap-3 px-10 py-4 rounded-xl bg-black text-white font-bold text-lg hover:shadow-xl hover:shadow-orange-500/30 transition-all hover:scale-105">
                            View All {TOOLS.length} Tools
                            <ArrowRight size={24} />
                        </button>
                    </Link>
                    <p className="text-gray-500 text-sm mt-4">
                        Explore our complete collection of premium software and services
                    </p>
                </motion.div>
            </div>
        </section>
    );
}
