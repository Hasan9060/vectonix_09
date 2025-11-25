import { TOOLS } from '@/utils/toolsData';
import { ArrowLeft, CheckCircle, Star, Shield, Zap } from 'lucide-react';
import Link from 'next/link';
import { notFound } from 'next/navigation';

// Generate static params for all tool slugs
export function generateStaticParams() {
    return TOOLS.map((tool) => ({
        slug: tool.slug,
    }));
}

interface PageProps {
    params: Promise<{ slug: string }>;
}

export default async function ToolDetailPage({ params }: PageProps) {
    const { slug } = await params;
    const tool = TOOLS.find(t => t.slug === slug);

    if (!tool) {
        notFound();
    }

    return (
        <main className="min-h-screen bg-white pt-20">
            <div className="container mx-auto px-4 py-12">
                {/* Back Button */}
                <Link href="/tools">
                    <button className="inline-flex items-center gap-2 text-gray-600 hover:text-orange-600 transition-colors mb-8">
                        <ArrowLeft size={20} />
                        Back to All Tools
                    </button>
                </Link>

                {/* Tool Detail */}
                <div className="max-w-5xl mx-auto">
                    <div className="bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden">
                        {/* Header */}
                        <div className="bg-gradient-to-r from-orange-500 to-amber-600 p-8 md:p-12 text-white">
                            <span className="inline-block bg-white/20 backdrop-blur-sm text-white text-sm font-bold px-4 py-2 rounded-full mb-4">
                                {tool.category}
                            </span>
                            <h1 className="text-4xl md:text-5xl font-bold mb-4">
                                {tool.title}
                            </h1>
                            <p className="text-xl text-white/90 mb-6 leading-relaxed">
                                {tool.description}
                            </p>
                            <div className="flex flex-wrap items-center gap-6">
                                <div className="text-4xl font-bold">
                                    {tool.price}
                                </div>
                                <Link href="/#contact">
                                    <button className="px-8 py-4 rounded-xl bg-white text-orange-600 font-bold hover:bg-gray-50 transition-all shadow-lg hover:scale-105">
                                        Get Started Now
                                    </button>
                                </Link>
                            </div>
                        </div>

                        {/* Content */}
                        <div className="p-8 md:p-12">
                            {/* Long Description */}
                            <div className="mb-10">
                                <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                                    <Star className="text-orange-500" size={28} />
                                    About This Tool
                                </h2>
                                <p className="text-gray-700 text-lg leading-relaxed">
                                    {tool.longDescription}
                                </p>
                            </div>

                            {/* Features */}
                            <div className="mb-10">
                                <h2 className="text-2xl font-bold text-orange-600 mb-6 flex items-center gap-2">
                                    <CheckCircle className="text-orange-500" size={28} />
                                    Premium Features
                                </h2>

                                <div className="grid md:grid-cols-2 gap-4">
                                    {tool.features.map((feature, index) => (
                                        <div key={index} className="flex items-start gap-3 p-4 rounded-xl bg-gray-50 hover:bg-orange-50 transition-colors">
                                            <CheckCircle className="text-orange-500 shrink-0 mt-1" size={20} />
                                            <p className="text-gray-700 font-medium">
                                                {feature}
                                            </p>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Benefits */}
                            <div className="mb-10">
                                <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                                    <Zap className="text-orange-500" size={28} />
                                    Key Benefits
                                </h2>
                                <div className="grid gap-4">
                                    {tool.benefits.map((benefit, index) => (
                                        <div key={index} className="flex items-center gap-4 p-5 rounded-xl bg-gradient-to-r from-orange-50 to-amber-50 border border-orange-100">
                                            <div className="w-10 h-10 rounded-full bg-orange-500 flex items-center justify-center text-white font-bold shrink-0">
                                                {index + 1}
                                            </div>
                                            <p className="text-gray-800 font-semibold text-lg">
                                                {benefit}
                                            </p>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Why Choose This */}
                            <div className="p-6 md:p-8 rounded-2xl bg-gradient-to-br from-orange-50 to-amber-50 border-2 border-orange-200 mb-10">
                                <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                                    <Shield className="text-orange-500" size={28} />
                                    Why Choose This Service?
                                </h3>
                                <div className="space-y-3 text-gray-700 leading-relaxed">
                                    <p>
                                        ✓ <strong>Instant Access:</strong> Get started immediately after purchase
                                    </p>
                                    <p>
                                        ✓ <strong>Reliable Service:</strong> 24/7 uptime with dedicated support
                                    </p>
                                    <p>
                                        ✓ <strong>Affordable Pricing:</strong> Save up to 70% compared to official pricing
                                    </p>
                                    <p>
                                        ✓ <strong>Secure & Safe:</strong> Your data and privacy are protected
                                    </p>
                                    <p>
                                        ✓ <strong>Money-Back Guarantee:</strong> 7-day satisfaction guarantee
                                    </p>
                                </div>
                            </div>

                            {/* CTA */}
                            <div className="text-center bg-gradient-to-r from-gray-50 to-orange-50 p-8 rounded-2xl border border-gray-200">
                                <h3 className="text-3xl font-bold text-gray-900 mb-3">
                                    Ready to Get Started?
                                </h3>
                                <p className="text-gray-600 mb-6 text-lg">
                                    Join thousands of satisfied customers using {tool.title}
                                </p>
                                <Link href="/#contact">
                                    <button className="px-12 py-4 rounded-xl bg-gradient-to-r from-orange-500 to-amber-600 text-white font-bold text-lg hover:shadow-xl hover:shadow-orange-500/30 transition-all hover:scale-105">
                                        Purchase Now - {tool.price}
                                    </button>
                                </Link>
                                <p className="text-sm text-gray-500 mt-4 flex items-center justify-center gap-4 flex-wrap">
                                    <span>✓ Instant delivery</span>
                                    <span>•</span>
                                    <span>✓ Secure payment</span>
                                    <span>•</span>
                                    <span>✓ 24/7 support</span>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
