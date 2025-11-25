'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { Type, Download, ArrowRight } from 'lucide-react';

export default function FreeFonts() {
    return (
        <section className="py-24 bg-gradient-to-br from-purple-50 via-white to-pink-50 relative overflow-hidden">
            {/* Background Decoration */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-20 left-10 w-96 h-96 bg-purple-400/10 rounded-full blur-3xl" />
                <div className="absolute bottom-20 right-10 w-96 h-96 bg-pink-400/10 rounded-full blur-3xl" />
            </div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="max-w-6xl mx-auto">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        {/* Left Content */}
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-purple-100 to-pink-100 text-purple-800 mb-6">
                                <Type size={16} />
                                <span className="text-sm font-bold">Free Resources</span>
                            </div>

                            <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                                Get <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">Free Fonts</span> for Your Projects
                            </h2>

                            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                                Access 30+ premium Google Fonts absolutely free. Download instantly and use in your commercial projects without any attribution required.
                            </p>

                            <div className="flex flex-wrap gap-4 mb-8">
                                <div className="flex items-center gap-3 bg-white px-6 py-3 rounded-xl shadow-md">
                                    <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center">
                                        <Type className="text-purple-600" size={20} />
                                    </div>
                                    <div>
                                        <div className="font-bold text-gray-900">30+ Fonts</div>
                                        <div className="text-sm text-gray-600">Premium collection</div>
                                    </div>
                                </div>

                                <div className="flex items-center gap-3 bg-white px-6 py-3 rounded-xl shadow-md">
                                    <div className="w-10 h-10 rounded-full bg-pink-100 flex items-center justify-center">
                                        <Download className="text-pink-600" size={20} />
                                    </div>
                                    <div>
                                        <div className="font-bold text-gray-900">Free Download</div>
                                        <div className="text-sm text-gray-600">Instant access</div>
                                    </div>
                                </div>
                            </div>

                            <Link href="/fonts">
                                <button className="group inline-flex items-center gap-3 px-10 py-5 rounded-2xl bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold text-lg hover:shadow-2xl hover:shadow-purple-500/40 transition-all hover:scale-105">
                                    Browse All Fonts
                                    <ArrowRight size={24} className="group-hover:translate-x-2 transition-transform" />
                                </button>
                            </Link>
                        </motion.div>

                        {/* Right Visual */}
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="relative"
                        >
                            <div className="relative bg-white rounded-3xl p-8 shadow-2xl border border-gray-100">
                                {/* Font Preview Cards */}
                                <div className="space-y-4">
                                    <div className="p-6 rounded-2xl bg-gradient-to-br from-purple-50 to-purple-100 border-2 border-purple-200">
                                        <div className="text-sm font-semibold text-purple-700 mb-2">Roboto</div>
                                        <div className="text-3xl font-bold text-gray-900" style={{ fontFamily: 'Roboto, sans-serif' }}>
                                            The quick brown fox
                                        </div>
                                    </div>

                                    <div className="p-6 rounded-2xl bg-gradient-to-br from-pink-50 to-pink-100 border-2 border-pink-200">
                                        <div className="text-sm font-semibold text-pink-700 mb-2">Montserrat</div>
                                        <div className="text-3xl font-bold text-gray-900" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                                            The quick brown fox
                                        </div>
                                    </div>

                                    <div className="p-6 rounded-2xl bg-gradient-to-br from-indigo-50 to-indigo-100 border-2 border-indigo-200">
                                        <div className="text-sm font-semibold text-indigo-700 mb-2">Poppins</div>
                                        <div className="text-3xl font-bold text-gray-900" style={{ fontFamily: 'Poppins, sans-serif' }}>
                                            The quick brown fox
                                        </div>
                                    </div>
                                </div>

                                {/* Floating Badge */}
                                <div className="absolute -top-4 -right-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-3 rounded-full shadow-xl font-bold">
                                    100% Free
                                </div>
                            </div>

                            {/* Decorative Elements */}
                            <div className="absolute -z-10 top-10 -right-10 w-40 h-40 bg-purple-400/20 rounded-full blur-2xl" />
                            <div className="absolute -z-10 -bottom-10 -left-10 w-40 h-40 bg-pink-400/20 rounded-full blur-2xl" />
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
}
