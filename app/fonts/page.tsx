'use client';
import { FONTS, FONT_CATEGORIES } from '@/utils/fontsData';
import { Search, Download, Eye, Filter, Type } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';

export default function FontsPage() {
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('All');
    const [previewText, setPreviewText] = useState('The quick brown fox jumps over the lazy dog');

    const filteredFonts = FONTS.filter(font => {
        const matchesSearch = font.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            font.description.toLowerCase().includes(searchQuery.toLowerCase());
        const matchesCategory = selectedCategory === 'All' || font.category === selectedCategory;
        return matchesSearch && matchesCategory;
    });

    const downloadFont = (fontName: string, googleFontName: string) => {
        // Open Google Fonts download link in new tab
        const downloadUrl = `https://fonts.google.com/download?family=${googleFontName}`;
        window.open(downloadUrl, '_blank');
    };

    return (
        <main className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-pink-50 pt-20">
            <div className="container mx-auto px-4 py-12">
                {/* Header */}
                <div className="text-center mb-12 max-w-3xl mx-auto">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-purple-100 to-pink-100 text-purple-800 mb-6">
                        <Type size={16} />
                        <span className="text-sm font-bold">Free Font Library</span>
                    </div>

                    <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                        Free <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">Google Fonts</span>
                    </h1>
                    <p className="text-lg text-gray-600">
                        Download premium fonts for free. Perfect for commercial and personal projects.
                    </p>
                </div>

                {/* Search & Filters */}
                <div className="max-w-6xl mx-auto mb-10">
                    <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6">
                        <div className="grid md:grid-cols-3 gap-4 mb-6">
                            {/* Search */}
                            <div className="md:col-span-2 relative">
                                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                                <input
                                    type="text"
                                    placeholder="Search fonts by name..."
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                    className="w-full pl-12 pr-4 py-3 rounded-xl border border-gray-200 focus:border-purple-500 focus:ring-2 focus:ring-purple-100 outline-none transition-all text-gray-900"
                                />
                            </div>

                            {/* Category Filter */}
                            <div className="flex items-center gap-2">
                                <Filter className="text-gray-400" size={20} />
                                <select
                                    value={selectedCategory}
                                    onChange={(e) => setSelectedCategory(e.target.value)}
                                    className="flex-1 px-4 py-3 rounded-xl border border-gray-200 focus:border-purple-500 focus:ring-2 focus:ring-purple-100 outline-none transition-all text-gray-900 bg-white cursor-pointer"
                                >
                                    {FONT_CATEGORIES.map((category) => (
                                        <option key={category} value={category}>
                                            {category}
                                        </option>
                                    ))}
                                </select>
                            </div>
                        </div>

                        {/* Custom Preview Text */}
                        <div className="relative">
                            <Eye className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                            <input
                                type="text"
                                placeholder="Type to preview fonts..."
                                value={previewText}
                                onChange={(e) => setPreviewText(e.target.value)}
                                className="w-full pl-12 pr-4 py-3 rounded-xl border border-gray-200 focus:border-pink-500 focus:ring-2 focus:ring-pink-100 outline-none transition-all text-gray-900"
                            />
                        </div>

                        <div className="mt-4 text-sm text-gray-500">
                            Showing {filteredFonts.length} of {FONTS.length} fonts
                        </div>
                    </div>
                </div>

                {/* Fonts Grid */}
                <div className="max-w-7xl mx-auto">
                    {filteredFonts.length === 0 ? (
                        <div className="text-center py-20">
                            <div className="text-6xl mb-4">🔍</div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-2">No fonts found</h3>
                            <p className="text-gray-600">Try adjusting your search or filter criteria</p>
                        </div>
                    ) : (
                        <div className="grid gap-6">
                            {filteredFonts.map((font) => (
                                <div
                                    key={font.id}
                                    className="group bg-white rounded-2xl p-6 md:p-8 shadow-sm hover:shadow-2xl transition-all duration-300 border border-gray-200 hover:border-purple-300"
                                >
                                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                                        {/* Font Info */}
                                        <div className="flex-1">
                                            <div className="flex items-center gap-3 mb-3">
                                                <h3 className="text-2xl font-bold text-gray-900">
                                                    {font.name}
                                                </h3>
                                                <span className="px-3 py-1 rounded-full bg-purple-100 text-purple-700 text-xs font-semibold">
                                                    {font.category}
                                                </span>
                                            </div>

                                            <p className="text-gray-600 text-sm mb-4">
                                                {font.description}
                                            </p>

                                            {/* Font Preview */}
                                            <div className="p-6 rounded-xl bg-gradient-to-br from-gray-50 to-gray-100 border border-gray-200 mb-4">
                                                <link
                                                    href={`https://fonts.googleapis.com/css2?family=${font.googleFontName}:wght@${font.variants.join(';')}&display=swap`}
                                                    rel="stylesheet"
                                                />
                                                <div
                                                    className="text-3xl md:text-4xl text-gray-900"
                                                    style={{ fontFamily: `'${font.name}', sans-serif` }}
                                                >
                                                    {previewText || font.preview}
                                                </div>
                                            </div>

                                            {/* Variants */}
                                            <div className="flex flex-wrap gap-2">
                                                <span className="text-sm text-gray-600 font-semibold">Weights:</span>
                                                {font.variants.map((variant, idx) => (
                                                    <span key={idx} className="px-2 py-1 rounded bg-gray-100 text-gray-700 text-xs">
                                                        {variant}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>

                                        {/* Download Button */}
                                        <div className="shrink-0">
                                            <button
                                                onClick={() => downloadFont(font.name, font.googleFontName)}
                                                className="group/btn flex items-center gap-3 px-8 py-4 rounded-xl bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold hover:shadow-xl hover:shadow-purple-500/30 transition-all hover:scale-105"
                                            >
                                                <Download size={20} className="group-hover/btn:animate-bounce" />
                                                Download
                                            </button>
                                            <p className="text-xs text-gray-500 mt-2 text-center">Free for commercial use</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>

                {/* Back to Home */}
                <div className="text-center mt-16">
                    <Link href="/">
                        <button className="inline-flex items-center gap-2 px-8 py-3 rounded-xl border-2 border-gray-200 text-gray-700 font-semibold hover:border-purple-500 hover:text-purple-600 transition-all">
                            ← Back to Home
                        </button>
                    </Link>
                </div>
            </div>
        </main>
    );
}
