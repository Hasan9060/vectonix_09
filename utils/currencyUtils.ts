// Helper function to parse price strings and convert to PKR number
export function parsePriceToPKR(priceString: string): number {
    // Remove currency symbols and clean string
    const cleanPrice = priceString.replace(/[^0-9.]/g, '');
    const numericPrice = parseFloat(cleanPrice);

    // If price already contains $ or other symbols, assume it's in USD and convert to PKR
    if (priceString.includes('$') && !priceString.includes('Rs')) {
        return numericPrice * 280; // Convert USD to PKR
    }

    return numericPrice;
}

// Format price for display with currency conversion
export function formatPrice(priceInPKR: number, currency: string = 'PKR'): string {
    const rates: Record<string, number> = {
        PKR: 1,
        USD: 0.0036,
        EUR: 0.0033,
        GBP: 0.0028,
        AED: 0.013,
    };

    const symbols: Record<string, string> = {
        PKR: 'Rs',
        USD: '$',
        EUR: '€',
        GBP: '£',
        AED: 'AED',
    };

    const convertedValue = priceInPKR * rates[currency];
    const symbol = symbols[currency];

    if (currency === 'PKR') {
        return `${symbol} ${Math.round(convertedValue).toLocaleString()}`;
    }

    return `${symbol}${convertedValue.toFixed(2)}`;
}
