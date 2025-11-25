'use client';
import React, { createContext, useContext, useState, useEffect } from 'react';

export type Currency = 'PKR' | 'USD' | 'EUR' | 'GBP' | 'AED';

interface CurrencyContextType {
    currency: Currency;
    setCurrency: (currency: Currency) => void;
    convertPrice: (priceInPKR: number) => string;
    getCurrencySymbol: () => string;
}

const CurrencyContext = createContext<CurrencyContextType | undefined>(undefined);

// Conversion rates (PKR to other currencies - approximate)
const CONVERSION_RATES: Record<Currency, number> = {
    PKR: 1,
    USD: 0.0036,    // 1 PKR = 0.0036 USD (approx 280 PKR = 1 USD)
    EUR: 0.0033,    // 1 PKR = 0.0033 EUR
    GBP: 0.0028,    // 1 PKR = 0.0028 GBP
    AED: 0.013,     // 1 PKR = 0.013 AED
};

const CURRENCY_SYMBOLS: Record<Currency, string> = {
    PKR: 'Rs',
    USD: '$',
    EUR: '€',
    GBP: '£',
    AED: 'AED',
};

export function CurrencyProvider({ children }: { children: React.ReactNode }) {
    const [currency, setCurrencyState] = useState<Currency>('PKR');

    // Load from localStorage on mount
    useEffect(() => {
        const saved = localStorage.getItem('preferred-currency');
        if (saved && ['PKR', 'USD', 'EUR', 'GBP', 'AED'].includes(saved)) {
            setCurrencyState(saved as Currency);
        }
    }, []);

    const setCurrency = (newCurrency: Currency) => {
        setCurrencyState(newCurrency);
        localStorage.setItem('preferred-currency', newCurrency);
    };

    const convertPrice = (priceInPKR: number): string => {
        const convertedValue = priceInPKR * CONVERSION_RATES[currency];
        const symbol = CURRENCY_SYMBOLS[currency];

        if (currency === 'PKR') {
            return `${symbol} ${Math.round(convertedValue).toLocaleString()}`;
        }

        return `${symbol}${convertedValue.toFixed(2)}`;
    };

    const getCurrencySymbol = (): string => {
        return CURRENCY_SYMBOLS[currency];
    };

    return (
        <CurrencyContext.Provider value={{ currency, setCurrency, convertPrice, getCurrencySymbol }}>
            {children}
        </CurrencyContext.Provider>
    );
}

export function useCurrency() {
    const context = useContext(CurrencyContext);
    if (!context) {
        throw new Error('useCurrency must be used within CurrencyProvider');
    }
    return context;
}
