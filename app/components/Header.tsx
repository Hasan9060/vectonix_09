'use client';
import { useState, useRef, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useCurrency, Currency } from '../context/CurrencyContext';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showCurrencyMenu, setShowCurrencyMenu] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const router = useRouter();
  const { currency, setCurrency } = useCurrency();
  const currencyRef = useRef<HTMLDivElement>(null);
  const mobileMenuRef = useRef<HTMLDivElement>(null);

  const navigation = [
    { name: 'Home', href: 'home' },
    { name: 'Services', href: 'services' },
    { name: 'Tools', href: 'tools' },
    { name: 'Pricing', href: 'pricing' },
    { name: 'Bot', href: 'custom-bot' },
    { name: 'FAQ', href: 'faq' },
    { name: 'Contact', href: 'contact' },
  ];

  const currencies: { code: Currency; name: string; flag: string; symbol: string }[] = [
    { code: 'PKR', name: 'Pakistani Rupee', flag: '🇵🇰', symbol: '₨' },
    { code: 'USD', name: 'US Dollar', flag: '🇺🇸', symbol: '$' },
    { code: 'EUR', name: 'Euro', flag: '🇪🇺', symbol: '€' },
    { code: 'GBP', name: 'British Pound', flag: '🇬🇧', symbol: '£' },
    { code: 'AED', name: 'UAE Dirham', flag: '🇦🇪', symbol: 'د.إ' },
  ];

  const currentCurrency = currencies.find(c => c.code === currency);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (currencyRef.current && !currencyRef.current.contains(event.target as Node)) {
        setShowCurrencyMenu(false);
      }
      if (mobileMenuRef.current && !mobileMenuRef.current.contains(event.target as Node) &&
        !(event.target as Element).closest('button[aria-label="Toggle menu"]')) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const scrollToSection = async (id: string) => {
    if (id.startsWith('/')) {
      await router.push(id);
      setIsMenuOpen(false);
      return;
    }

    if (id === 'home') {
      await router.push('/');
      window.scrollTo({ top: 0, behavior: 'smooth' });
      setIsMenuOpen(false);
      return;
    }

    if (window.location.pathname !== '/') {
      await router.push('/');
      setTimeout(() => {
        const element = document.getElementById(id);
        element?.scrollIntoView({ behavior: 'smooth' });
      }, 200);
    } else {
      const element = document.getElementById(id);
      element?.scrollIntoView({ behavior: 'smooth' });
    }

    window.history.replaceState(null, '', window.location.pathname);
    setIsMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
        ? 'bg-white/95 backdrop-blur-xl shadow-lg border-b border-gray-100/50'
        : 'bg-white/90 backdrop-blur-md border-b border-gray-200/30'
        }`}
    >
      <nav className="container mx-auto px-4 lg:px-6">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <button
            onClick={() => scrollToSection('home')}
            className="flex items-center space-x-3 group"
            aria-label="Vectonix Home"
          >
            <div className="relative w-10 h-10 lg:w-12 lg:h-12 transition-transform duration-300 group-hover:scale-105">
              <img
                src="/images/v-logo.png"
                alt="Vectonix Logo"
                className="w-full h-full object-contain drop-shadow-sm"
              />
            </div>
            <div className="flex flex-col">
              <span className="text-xl lg:text-2xl font-black bg-gradient-to-r from-orange-600 to-amber-600 bg-clip-text text-transparent">
                VECTONIX
              </span>
              <span className="text-xs text-gray-500 -mt-1 hidden sm:block">Automation Solutions</span>
            </div>
          </button>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {navigation.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className="px-4 py-2 text-gray-700 hover:text-orange-600 font-semibold transition-all duration-200 relative group"
              >
                {item.name}
                <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-gradient-to-r from-orange-500 to-amber-500 transition-all duration-300 group-hover:w-4/5 group-hover:left-1/5"></span>
              </button>
            ))}
          </div>

          {/* Desktop Currency Selector & CTA */}
          <div className="hidden lg:flex items-center gap-4">
            {/* Currency Dropdown */}
            <div className="relative" ref={currencyRef}>
              <button
                onClick={() => setShowCurrencyMenu(!showCurrencyMenu)}
                className="flex items-center gap-3 px-4 py-2.5 rounded-2xl border-2 border-gray-100 hover:border-orange-200 hover:bg-orange-50 transition-all duration-200 bg-white shadow-sm hover:shadow-md group"
                aria-label="Select currency"
              >
                <span className="text-2xl transform group-hover:scale-110 transition-transform">{currentCurrency?.flag}</span>
                <div className="flex flex-col items-start">
                  <span className="font-bold text-gray-900 text-sm leading-none">{currency}</span>
                  <span className="text-xs text-gray-500 leading-none mt-0.5">{currentCurrency?.symbol}</span>
                </div>
                <svg
                  className={`w-4 h-4 text-gray-500 transition-transform duration-200 ${showCurrencyMenu ? 'rotate-180' : ''}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {/* Dropdown Menu */}
              {showCurrencyMenu && (
                <div className="absolute top-full right-0 mt-3 w-64 bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden z-50 animate-fade-in">
                  <div className="p-3 border-b border-gray-100">
                    <h3 className="text-sm font-semibold text-gray-700">Select Currency</h3>
                  </div>
                  <div className="max-h-80 overflow-y-auto">
                    {currencies.map((curr) => (
                      <button
                        key={curr.code}
                        onClick={() => {
                          setCurrency(curr.code);
                          setShowCurrencyMenu(false);
                        }}
                        className={`w-full flex items-center gap-4 px-4 py-3 hover:bg-orange-50 transition-all duration-200 group ${currency === curr.code ? 'bg-orange-50 border-r-2 border-orange-500' : ''
                          }`}
                      >
                        <span className="text-2xl transform group-hover:scale-110 transition-transform">{curr.flag}</span>
                        <div className="flex-1 text-left">
                          <div className="font-bold text-gray-900 flex items-center gap-2">
                            {curr.code}
                            <span className="text-sm font-normal text-gray-500">{curr.symbol}</span>
                          </div>
                          <div className="text-xs text-gray-600">{curr.name}</div>
                        </div>
                        {currency === curr.code && (
                          <div className="w-6 h-6 bg-orange-500 rounded-full flex items-center justify-center">
                            <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                          </div>
                        )}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Get Started Button */}
            <button
              onClick={() => scrollToSection('contact')}
              className="px-6 py-2.5 bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white font-semibold rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-0.5"
            >
              Get Started
            </button>
          </div>

          {/* Mobile Controls */}
          <div className="lg:hidden flex items-center gap-3">
            {/* Mobile Currency */}
            <div className="relative" ref={currencyRef}>
              <button
                onClick={() => setShowCurrencyMenu(!showCurrencyMenu)}
                className="flex items-center gap-2 px-3 py-2 rounded-xl border border-gray-200 hover:border-orange-300 transition-all duration-200 bg-white shadow-sm"
                aria-label="Select currency"
              >
                <span className="text-xl">{currentCurrency?.flag}</span>
                <span className="font-bold text-gray-900 text-sm">{currency}</span>
                <svg className="w-3 h-3 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {/* Mobile Currency Dropdown */}
              {showCurrencyMenu && (
                <div className="absolute top-full right-0 mt-2 w-56 bg-white rounded-xl shadow-2xl border border-gray-200 overflow-hidden z-50">
                  {currencies.map((curr) => (
                    <button
                      key={curr.code}
                      onClick={() => {
                        setCurrency(curr.code);
                        setShowCurrencyMenu(false);
                      }}
                      className={`w-full flex items-center gap-3 px-4 py-3 hover:bg-orange-50 transition-colors ${currency === curr.code ? 'bg-orange-100 border-r-2 border-orange-500' : ''
                        }`}
                    >
                      <span className="text-2xl">{curr.flag}</span>
                      <div className="flex-1 text-left">
                        <div className="font-bold text-gray-900">{curr.code}</div>
                        <div className="text-xs text-gray-600">{curr.name}</div>
                      </div>
                      {currency === curr.code && (
                        <svg className="w-5 h-5 text-orange-600" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      )}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="relative w-10 h-10 flex flex-col items-center justify-center rounded-xl bg-gray-50 hover:bg-orange-50 transition-all duration-200 group"
              aria-label="Toggle menu"
            >
              <span className={`w-5 h-0.5 bg-gray-700 rounded-full transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`} />
              <span className={`w-5 h-0.5 bg-gray-700 rounded-full transition-all duration-300 mt-1.5 ${isMenuOpen ? 'opacity-0' : ''}`} />
              <span className={`w-5 h-0.5 bg-gray-700 rounded-full transition-all duration-300 mt-1.5 ${isMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`} />
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div ref={mobileMenuRef}>
          {isMenuOpen && (
            <>
              {/* Overlay */}
              <div
                className="lg:hidden fixed inset-0 bg-black/30 backdrop-blur-sm z-40 animate-fade-in"
                onClick={() => setIsMenuOpen(false)}
              />

              {/* Menu Panel */}
              <div className="lg:hidden fixed top-20 left-4 right-4 bg-white/95 backdrop-blur-2xl rounded-3xl shadow-2xl border border-white/20 z-50 overflow-hidden animate-slide-down ring-1 ring-black/5">
                <div className="p-4 max-h-[75vh] overflow-y-auto">
                  {/* Navigation Links */}
                  <div className="space-y-1 mb-6">
                    {navigation.map((item, index) => (
                      <button
                        key={item.name}
                        onClick={() => scrollToSection(item.href)}
                        className="w-full text-left px-4 py-3 rounded-xl text-gray-700 hover:text-orange-600 hover:bg-orange-50 font-semibold transition-all duration-200 flex items-center justify-between group"
                        style={{ animationDelay: `${index * 50}ms` }}
                      >
                        <span className="flex items-center gap-3">
                          <span className="w-2 h-2 bg-orange-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                          {item.name}
                        </span>
                        <svg
                          className="w-5 h-5 text-gray-400 group-hover:text-orange-600 group-hover:translate-x-1 transition-all"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </button>
                    ))}
                  </div>

                  {/* Divider */}
                  <div className="h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent mb-4" />

                  {/* Get Started Button */}
                  <button
                    onClick={() => scrollToSection('contact')}
                    className="w-full px-4 py-3 bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white font-semibold rounded-xl shadow-lg transition-all duration-300 mb-6"
                  >
                    Get Started Today
                  </button>

                  {/* Currency Selector */}
                  <div className="mb-2">
                    <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-3 px-2">
                      Select Currency
                    </h3>
                    <div className="grid grid-cols-2 gap-2">
                      {currencies.map((curr) => (
                        <button
                          key={curr.code}
                          onClick={() => {
                            setCurrency(curr.code);
                            setIsMenuOpen(false);
                          }}
                          className={`flex items-center gap-3 px-3 py-3 rounded-xl transition-all ${currency === curr.code
                            ? 'bg-gradient-to-r from-orange-500 to-amber-500 text-white shadow-lg'
                            : 'bg-gray-50 text-gray-700 hover:bg-gray-100'
                            }`}
                        >
                          <span className="text-2xl">{curr.flag}</span>
                          <div className="flex-1 text-left">
                            <div className="font-bold text-sm">{curr.code}</div>
                            <div className="text-xs opacity-75">{curr.symbol}</div>
                          </div>
                          {currency === curr.code && (
                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                          )}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
      </nav>
    </header>
  );
}