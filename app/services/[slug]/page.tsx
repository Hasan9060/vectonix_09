import { SERVICES } from '@/utils/servicesData';
import { ArrowLeft, CheckCircle, Star, Package, Zap, Code, Palette, TrendingUp, Globe, Share2, Target, FileText, Sparkles, ShoppingCart } from 'lucide-react';
import Link from 'next/link';
import { notFound } from 'next/navigation';

const iconMap: { [key: string]: any } = {
    Code, Palette, TrendingUp, Globe, Share2, Target, FileText, Sparkles, ShoppingCart,
};

export function generateStaticParams() {
    return SERVICES.map((service) => ({
        slug: service.slug,
    }));
}

interface PageProps {
    params: Promise<{ slug: string }>;
}

export default async function ServiceDetailPage({ params }: PageProps) {
    const { slug } = await params;
    const service = SERVICES.find(s => s.slug === slug);

    if (!service) {
        notFound();
    }

    const IconComponent = iconMap[service.icon];

    return (
        <main className="min-h-screen bg-white pt-20">
            <div className="container mx-auto px-4 py-12">
                {/* Back Button */}
                <Link href="/services">
                    <button className="inline-flex items-center gap-2 text-gray-600 hover:text-orange-600 transition-colors mb-8">
                        <ArrowLeft size={20} />
                        Back to Services
                    </button>
                </Link>

                {/* Service Detail */}
                <div className="max-w-6xl mx-auto">
                    {/* Hero Section */}
                    <div className="bg-gradient-to-br from-orange-500 to-blue-600 rounded-3xl p-8 md:p-12 text-white mb-12">
                        <div className="flex items-start gap-6">
                            <div className="w-20 h-20 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center shrink-0">
                                <IconComponent size={40} className="text-white" />
                            </div>
                            <div className="flex-1">
                                <span className="inline-block bg-white/20 backdrop-blur-sm text-white text-sm font-bold px-4 py-2 rounded-full mb-4">
                                    {service.category}
                                </span>
                                <h1 className="text-4xl md:text-5xl font-bold mb-4">
                                    {service.title}
                                </h1>
                                <p className="text-2xl text-white/90 mb-6">
                                    {service.tagline}
                                </p>
                                <p className="text-lg text-white/80 leading-relaxed">
                                    {service.longDescription}
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="grid lg:grid-cols-3 gap-8">
                        {/* Main Content */}
                        <div className="lg:col-span-2 space-y-10">
                            {/* Features */}
                            <div>
                                <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                                    <Star className="text-orange-500" size={32} />
                                    What's Included
                                </h2>

                                <div className="grid md:grid-cols-2 gap-4">
                                    {service.features.map((feature, index) => (
                                        <div key={index} className="flex items-start gap-3 p-4 rounded-xl bg-gray-50 hover:bg-orange-50 transition-colors">
                                            <CheckCircle className="text-orange-500 shrink-0 mt-1" size={20} />
                                            <p className="text-gray-700 font-medium">
                                                {feature}
                                            </p>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Deliverables */}
                            <div>
                                <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                                    <Package className="text-orange-500" size={32} />
                                    You Will Receive
                                </h2>
                                <div className="grid gap-4">
                                    {service.deliverables.map((item, index) => (
                                        <div key={index} className="flex items-center gap-4 p-5 rounded-xl bg-gradient-to-r from-orange-50 to-blue-50 border border-orange-100">
                                            <div className="w-10 h-10 rounded-full bg-orange-500 flex items-center justify-center text-white font-bold shrink-0">
                                                {index + 1}
                                            </div>
                                            <p className="text-gray-800 font-semibold">
                                                {item}
                                            </p>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Benefits */}
                            <div>
                                <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                                    <Zap className="text-orange-500" size={32} />
                                    Key Benefits
                                </h2>
                                <div className="grid gap-3">
                                    {service.benefits.map((benefit, index) => (
                                        <div key={index} className="flex items-center gap-3 p-4 rounded-xl bg-gradient-to-r from-green-50 to-emerald-50">
                                            <div className="w-8 h-8 rounded-full bg-green-500 flex items-center justify-center text-white font-bold shrink-0">
                                                ✓
                                            </div>
                                            <p className="text-gray-800 font-medium text-lg">
                                                {benefit}
                                            </p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Sidebar - Pricing */}
                        <div className="lg:col-span-1">
                            <div className="sticky top-24 space-y-6">
                                {/* Pricing Card */}
                                <div className="bg-white border-2 border-gray-200 rounded-3xl p-8 shadow-xl">
                                    <h3 className="text-2xl font-bold text-gray-900 mb-6">
                                        Pricing Plans
                                    </h3>

                                    {/* Basic */}
                                    <div className="mb-4 p-4 rounded-xl bg-gray-50">
                                        <div className="text-sm font-semibold text-gray-600 mb-1">Basic</div>
                                        <div className="text-3xl font-bold text-gray-900">{service.pricing.basic}</div>
                                    </div>

                                    {/* Standard */}
                                    <div className="mb-4 p-4 rounded-xl bg-gradient-to-br from-orange-50 to-amber-50 border-2 border-orange-500">
                                        <div className="flex items-center justify-between mb-1">
                                            <div className="text-sm font-semibold text-orange-700">Standard</div>
                                            <span className="text-xs bg-orange-500 text-white px-2 py-1 rounded-full">Popular</span>
                                        </div>
                                        <div className="text-3xl font-bold text-gray-900">{service.pricing.standard}</div>
                                    </div>

                                    {/* Premium */}
                                    <div className="mb-6 p-4 rounded-xl bg-gradient-to-br from-blue-50 to-indigo-50">
                                        <div className="text-sm font-semibold text-blue-700 mb-1">Premium</div>
                                        <div className="text-3xl font-bold text-gray-900">{service.pricing.premium}</div>
                                    </div>

                                    <Link href="/#contact">
                                        <button className="w-full px-8 py-4 rounded-xl bg-gradient-to-r from-orange-500 to-blue-600 text-white font-bold text-lg hover:shadow-xl hover:shadow-orange-500/30 transition-all hover:scale-105 mb-4">
                                            Get Started
                                        </button>
                                    </Link>

                                    <p className="text-sm text-gray-500 text-center">
                                        Custom packages available
                                    </p>
                                </div>

                                {/* Quick Contact */}
                                <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-6 text-white">
                                    <h4 className="font-bold mb-2">Need Custom Solution?</h4>
                                    <p className="text-sm text-gray-300 mb-4">
                                        Contact us for tailored pricing based on your specific requirements.
                                    </p>
                                    <Link href="/#contact">
                                        <button className="w-full px-6 py-3 rounded-xl bg-white text-gray-900 font-semibold hover:bg-gray-100 transition-all">
                                            Contact Us
                                        </button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
