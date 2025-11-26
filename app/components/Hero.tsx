'use client';
import { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';
import { Search, ArrowRight, Package, Wrench, Bot } from 'lucide-react';
import { TOOLS } from '@/utils/toolsData';
import { SERVICES } from '@/utils/servicesData';
import { BOT_PACKAGES } from '@/utils/constants';
import { Domine } from "next/font/google";

const domine = Domine({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
});


export default function Hero() {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState<any[]>([]);
  const [showResults, setShowResults] = useState(false);
  const searchRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

  // Close search results when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setShowResults(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Search functionality
  useEffect(() => {
    if (searchQuery.trim().length < 2) {
      setSearchResults([]);
      setShowResults(false);
      return;
    }

    const query = searchQuery.toLowerCase();
    const results: any[] = [];

    // Search in Tools
    TOOLS.forEach(tool => {
      if (tool.title.toLowerCase().includes(query) ||
        tool.description.toLowerCase().includes(query) ||
        tool.category.toLowerCase().includes(query)) {
        results.push({
          type: 'tool',
          title: tool.title,
          description: tool.description,
          price: tool.price,
          slug: tool.slug,
          category: tool.category,
          icon: Package
        });
      }
    });

    // Search in Services
    SERVICES.forEach(service => {
      if (service.title.toLowerCase().includes(query) ||
        service.description.toLowerCase().includes(query) ||
        service.tagline.toLowerCase().includes(query)) {
        results.push({
          type: 'service',
          title: service.title,
          description: service.tagline,
          price: service.pricing.basic,
          slug: service.slug,
          category: service.category,
          icon: Wrench
        });
      }
    });

    // Search in Bots
    BOT_PACKAGES.forEach(bot => {
      if (bot.title.toLowerCase().includes(query) ||
        bot.description.toLowerCase().includes(query) ||
        bot.category.toLowerCase().includes(query)) {
        results.push({
          type: 'bot',
          title: bot.title,
          description: bot.description,
          price: bot.pricing[0]?.price || 'Custom',
          slug: bot.id,
          category: bot.category,
          icon: Bot
        });
      }
    });

    setSearchResults(results.slice(0, 8)); // Limit to 8 results
    setShowResults(results.length > 0);
  }, [searchQuery]);

  const handleResultClick = (result: any) => {
    if (result.type === 'tool') {
      router.push(`/tools/${result.slug}`);
    } else if (result.type === 'service') {
      router.push(`/services/${result.slug}`);
    } else if (result.type === 'bot') {
      // Scroll to pricing section
      router.push('/#pricing');
    }
    setShowResults(false);
    setSearchQuery('');
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden ">
      {/* Video Background */}
      <div className="absolute inset-0 w-full h-full">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover opacity-40"
        >
          <source src="/images/hero-bg.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 " />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-24 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/10 backdrop-blur-md border border-gray-400 text-white mb-8">
            <span className="w-2 h-2 rounded-full bg-orange-500 animate-pulse" />
            <span className="text-sm font-semibold">AI Agents Marketplace</span>
          </div>

          {/* Heading */}
          <h1 className={`${domine.className} text-3xl md:text-6xl font-bold text-white mb-6 leading-tight`}>
            Find the right service without  <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-amber-400">stress <span className='text-white'>or</span> high cost.</span>
          </h1>

          <p className="text-lg md:text-2xl text-gray-300 mb-12 leading-relaxed">
            Your one-stop destination for premium AI agents, tools, and services. Transform your business with cutting-edge technology.
          </p>

          {/* Search Bar */}
          <div className="max-w-2xl mx-auto mb-8" ref={searchRef}>
            <div className="relative">
              <div className="relative">
                <Search className="absolute left-6 top-1/2 transform -translate-y-1/2 text-gray-500" size={24} />
                <input
                  type="text"
                  placeholder="Search tools, services, or bots..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  onFocus={() => searchResults.length > 0 && setShowResults(true)}
                  className="w-full pl-16 pr-6 py-5 rounded-2xl border-gray-400 bg-white/10 backdrop-blur-md border-2  text-white placeholder-gray-400 text-lg focus:border-orange-500 focus:ring-4 focus:ring-orange-500/20 outline-none transition-all"
                />
              </div>

              {/* Search Results Dropdown */}
              {showResults && searchResults.length > 0 && (
                <div className="absolute top-full mt-2 w-full bg-white rounded-2xl shadow-2xl border border-gray-200 max-h-96 overflow-y-auto z-50">
                  <div className="p-2">
                    {searchResults.map((result, index) => {
                      const IconComponent = result.icon;
                      return (
                        <button
                          key={index}
                          onClick={() => handleResultClick(result)}
                          className="w-full flex items-center gap-4 p-4 rounded-xl hover:bg-gray-50 transition-colors text-left group"
                        >
                          <div className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 ${result.type === 'tool' ? 'bg-orange-100 text-orange-600' :
                              result.type === 'service' ? 'bg-blue-100 text-blue-600' :
                                'bg-purple-100 text-purple-600'
                            }`}>
                            <IconComponent size={24} />
                          </div>

                          <div className="flex-1 min-w-0">
                            <div className="flex items-center gap-2 mb-1">
                              <h4 className="font-bold text-gray-900 group-hover:text-orange-600 transition-colors truncate">
                                {result.title}
                              </h4>
                              <span className="px-2 py-1 rounded-full bg-gray-100 text-gray-600 text-xs font-semibold shrink-0">
                                {result.type === 'tool' ? 'Tool' : result.type === 'service' ? 'Service' : 'Bot'}
                              </span>
                            </div>
                            <p className="text-sm text-gray-600 line-clamp-1">
                              {result.description}
                            </p>
                          </div>

                          <div className="shrink-0">
                            <div className="text-lg font-bold text-gray-900">
                              {result.price}
                            </div>
                            <div className="text-xs text-gray-500">
                              {result.category}
                            </div>
                          </div>

                          <ArrowRight size={20} className="text-gray-400 group-hover:text-orange-600 group-hover:translate-x-1 transition-all shrink-0" />
                        </button>
                      );
                    })}
                  </div>

                  {searchResults.length === 8 && (
                    <div className="p-3 border-t border-gray-200 text-center text-sm text-gray-600">
                      Showing top 8 results. Try being more specific.
                    </div>
                  )}
                </div>
              )}
            </div>

            <p className="text-gray-400 text-sm mt-3">
              Search across 39 tools, 9 services, and 6 bot packages
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => router.push('/#services')}
              className="px-8 py-4 rounded-xl bg-gradient-to-r from-orange-500 to-amber-500 text-white font-bold text-lg hover:shadow-xl hover:shadow-orange-500/30 transition-all hover:scale-105"
            >
              Explore Tools
            </button>
            <button
              onClick={() => router.push('/#contact')}
              className="px-8 py-4 rounded-xl bg-black backdrop-blur-md border-2 border-white/20 text-white font-bold text-lg hover:bg-white/20 transition-all"
            >
              Get in Touch
            </button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-white/30 flex items-start justify-center p-2">
          <div className="w-1 h-3 rounded-full bg-white/50" />
        </div>
      </div>
    </section>
  );
}
