'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { BOT_PACKAGES } from '@/utils/constants';
import {
  Check,
  Utensils,
  ShoppingBag,
  Building,
  Bot,
  Zap,
  Shield,
  Star,
  ArrowRight,
  Megaphone
} from 'lucide-react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { useCurrency } from '../context/CurrencyContext';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

type BillingCycle = 'monthly' | 'yearly';
type Tier = 'Basic' | 'Standard' | 'Premium';

export default function Pricing() {
  const [billingCycle, setBillingCycle] = useState<BillingCycle>('monthly');
  const [selectedTiers, setSelectedTiers] = useState<Record<string, Tier>>({});
  const { convertPrice } = useCurrency();

  const handleTierChange = (botId: string, tier: Tier) => {
    setSelectedTiers(prev => ({ ...prev, [botId]: tier }));
  };

  const getPrice = (priceStr: string, cycle: BillingCycle) => {
    // Parse price to base PKR value
    const basePrice = parseInt(priceStr.replace(/[^0-9]/g, ''));
    const pkrPrice = priceStr.includes('$') ? basePrice * 280 : basePrice;

    // Apply yearly discount
    const finalPkrPrice = cycle === 'monthly' ? pkrPrice : Math.floor(pkrPrice * 0.8);

    // Convert to selected currency
    return convertPrice(finalPkrPrice);
  };

  return (
    <section id="pricing" className="py-24 bg-white relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute -top-[20%] -right-[10%] w-[500px] h-[500px] rounded-full bg-orange-500/10 blur-3xl" />
        <div className="absolute top-[40%] -left-[10%] w-[500px] h-[500px] rounded-full bg-amber-500/10 blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 tracking-tight">
              Choose Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-amber-500">Power</span>
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Select the perfect AI workforce for your business. Scale up or down as you grow.
            </p>
          </motion.div>

          {/* Billing Toggle */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex items-center justify-center gap-4"
          >
            <span className={cn("text-sm font-medium transition-colors", billingCycle === 'monthly' ? "text-gray-900" : "text-gray-500")}>
              Monthly
            </span>
            <button
              onClick={() => setBillingCycle(prev => prev === 'monthly' ? 'yearly' : 'monthly')}
              className="relative w-14 h-8 bg-gray-200 rounded-full p-1 transition-colors focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2"
            >
              <motion.div
                className="w-6 h-6 bg-white rounded-full shadow-md"
                animate={{ x: billingCycle === 'monthly' ? 0 : 24 }}
                transition={{ type: "spring", stiffness: 500, damping: 30 }}
              />
            </button>
            <span className={cn("text-sm font-medium transition-colors flex items-center gap-2", billingCycle === 'yearly' ? "text-gray-900" : "text-gray-500")}>
              Yearly
              <span className="bg-orange-100 text-orange-700 text-xs px-2 py-0.5 rounded-full font-bold">
                -20%
              </span>
            </span>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {BOT_PACKAGES.map((botPackage, index) => {
            const currentTier = selectedTiers[botPackage.id] || 'Standard';
            const tierData = botPackage.pricing.find(p => p.name === currentTier) || botPackage.pricing[1];
            const price = getPrice(tierData.price, billingCycle);

            return (
              <motion.div
                key={botPackage.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative group"
              >
                <div className="absolute inset-0 bg-gradient-to-b from-orange-500/5 to-amber-500/5 rounded-3xl transform transition-transform duration-300 group-hover:scale-[1.02]" />
                <div className="relative h-full bg-white backdrop-blur-xl border border-gray-200 rounded-3xl p-8 flex flex-col hover:shadow-2xl hover:shadow-orange-500/10 transition-all duration-300">

                  {/* Header */}
                  <div className="mb-8">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">
                      {botPackage.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed min-h-[60px]">
                      {botPackage.description}
                    </p>
                  </div>

                  {/* Tier Selector */}
                  <div className="grid grid-cols-3 gap-1 p-1 bg-gray-100 rounded-xl mb-8">
                    {(['Basic', 'Standard', 'Premium'] as Tier[]).map((tier) => (
                      <button
                        key={tier}
                        onClick={() => handleTierChange(botPackage.id, tier)}
                        className={cn(
                          "py-1.5 text-xs font-semibold rounded-lg transition-all duration-200",
                          currentTier === tier
                            ? "bg-white text-gray-900 shadow-sm"
                            : "text-gray-500 hover:text-gray-900"
                        )}
                      >
                        {tier}
                      </button>
                    ))}
                  </div>

                  {/* Price */}
                  <div className="mb-8">
                    <div className="flex items-baseline gap-1">
                      <span className="text-4xl font-bold text-green-500">
                        {price}
                      </span>
                      <span className="text-gray-500">
                        /{billingCycle === 'monthly' ? 'mo' : 'mo, billed yearly'}
                      </span>
                    </div>
                    <p className="text-sm text-orange-600 mt-2 font-medium">
                      {currentTier} Plan
                    </p>
                  </div>

                  {/* Features */}
                  <div className="flex-grow mb-8">
                    <h4 className="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-4">
                      What's Included
                    </h4>
                    <ul className="space-y-3">
                      {tierData.features.map((feature, i) => (
                        <li key={i} className="flex items-start gap-3 text-sm text-gray-600">
                          <Check className="w-5 h-5 text-orange-500 shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* CTA */}
                  <button className="w-full py-4 rounded-xl bg-gray-900 text-white font-bold hover:bg-gray-800 transition-colors flex items-center justify-center gap-2 group-hover:gap-3">
                    Get Started
                    <ArrowRight className="w-4 h-4 transition-all" />
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}