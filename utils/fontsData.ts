export interface Font {
    id: string;
    name: string;
    category: string;
    variants: string[];
    preview: string;
    googleFontName: string;
    description: string;
    popularity: number;
}

export const FONTS: Font[] = [
    {
        id: '1',
        name: 'Roboto',
        category: 'Sans Serif',
        variants: ['100', '300', '400', '500', '700', '900'],
        preview: 'The quick brown fox jumps over the lazy dog',
        googleFontName: 'Roboto',
        description: 'A modern, friendly neo-grotesque font. Perfect for body text and headlines.',
        popularity: 100
    },
    {
        id: '2',
        name: 'Open Sans',
        category: 'Sans Serif',
        variants: ['300', '400', '500', '600', '700', '800'],
        preview: 'The quick brown fox jumps over the lazy dog',
        googleFontName: 'Open+Sans',
        description: 'Optimized for print, web, and mobile interfaces. Clean and readable.',
        popularity: 98
    },
    {
        id: '3',
        name: 'Montserrat',
        category: 'Sans Serif',
        variants: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
        preview: 'The quick brown fox jumps over the lazy dog',
        googleFontName: 'Montserrat',
        description: 'Urban typeface inspired by old posters and signs in Buenos Aires.',
        popularity: 96
    },
    {
        id: '4',
        name: 'Poppins',
        category: 'Sans Serif',
        variants: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
        preview: 'The quick brown fox jumps over the lazy dog',
        googleFontName: 'Poppins',
        description: 'Geometric sans serif with international support. Modern and stylish.',
        popularity: 95
    },
    {
        id: '5',
        name: 'Lato',
        category: 'Sans Serif',
        variants: ['100', '300', '400', '700', '900'],
        preview: 'The quick brown fox jumps over the lazy dog',
        googleFontName: 'Lato',
        description: 'Semi-rounded details with a warm feeling. Professional yet friendly.',
        popularity: 94
    },
    {
        id: '6',
        name: 'Raleway',
        category: 'Sans Serif',
        variants: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
        preview: 'The quick brown fox jumps over the lazy dog',
        googleFontName: 'Raleway',
        description: 'Elegant sans-serif with a unique thin weight. Perfect for headings.',
        popularity: 92
    },
    {
        id: '7',
        name: 'Inter',
        category: 'Sans Serif',
        variants: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
        preview: 'The quick brown fox jumps over the lazy dog',
        googleFontName: 'Inter',
        description: 'Carefully crafted for computer screens. Excellent readability.',
        popularity: 91
    },
    {
        id: '8',
        name: 'Playfair Display',
        category: 'Serif',
        variants: ['400', '500', '600', '700', '800', '900'],
        preview: 'The quick brown fox jumps over the lazy dog',
        googleFontName: 'Playfair+Display',
        description: 'High-contrast serif with transitional letterforms. Elegant and classic.',
        popularity: 89
    },
    {
        id: '9',
        name: 'Merriweather',
        category: 'Serif',
        variants: ['300', '400', '700', '900'],
        preview: 'The quick brown fox jumps over the lazy dog',
        googleFontName: 'Merriweather',
        description: 'Designed for screens. Easy to read at small sizes and pleasant for long texts.',
        popularity: 87
    },
    {
        id: '10',
        name: 'Lora',
        category: 'Serif',
        variants: ['400', '500', '600', '700'],
        preview: 'The quick brown fox jumps over the lazy dog',
        googleFontName: 'Lora',
        description: 'Well-balanced serif with brushed curves. Modern yet classic.',
        popularity: 85
    },
    {
        id: '11',
        name: 'Dancing Script',
        category: 'Handwriting',
        variants: ['400', '500', '600', '700'],
        preview: 'The quick brown fox jumps over the lazy dog',
        googleFontName: 'Dancing+Script',
        description: 'Lively casual script with bouncing letters. Perfect for invitations.',
        popularity: 83
    },
    {
        id: '12',
        name: 'Pacifico',
        category: 'Handwriting',
        variants: ['400'],
        preview: 'The quick brown fox jumps over the lazy dog',
        googleFontName: 'Pacifico',
        description: 'Surf-style script font. Retro and fun for display use.',
        popularity: 81
    },
    {
        id: '13',
        name: 'Indie Flower',
        category: 'Handwriting',
        variants: ['400'],
        preview: 'The quick brown fox jumps over the lazy dog',
        googleFontName: 'Indie+Flower',
        description: 'Handwritten with character. Friendly and informal.',
        popularity: 79
    },
    {
        id: '14',
        name: 'Quicksand',
        category: 'Sans Serif',
        variants: ['300', '400', '500', '600', '700'],
        preview: 'The quick brown fox jumps over the lazy dog',
        googleFontName: 'Quicksand',
        description: 'Rounded sans serif with a geometric base. Friendly and modern.',
        popularity: 77
    },
    {
        id: '15',
        name: 'Bebas Neue',
        category: 'Display',
        variants: ['400'],
        preview: 'THE QUICK BROWN FOX JUMPS',
        googleFontName: 'Bebas+Neue',
        description: 'Condensed sans-serif for headlines. Bold and impactful.',
        popularity: 75
    },
    {
        id: '16',
        name: 'Anton',
        category: 'Display',
        variants: ['400'],
        preview: 'THE QUICK BROWN FOX JUMPS',
        googleFontName: 'Anton',
        description: 'Impact-style sans serif. Powerful for posters and headlines.',
        popularity: 73
    },
    {
        id: '17',
        name: 'Comfortaa',
        category: 'Display',
        variants: ['300', '400', '500', '600', '700'],
        preview: 'The quick brown fox jumps over the lazy dog',
        googleFontName: 'Comfortaa',
        description: 'Rounded geometric shapes. Comfortable and friendly.',
        popularity: 71
    },
    {
        id: '18',
        name: 'Lobster',
        category: 'Display',
        variants: ['400'],
        preview: 'The quick brown fox jumps over the lazy dog',
        googleFontName: 'Lobster',
        description: 'Bold script with a retro feel. Eye-catching for titles.',
        popularity: 69
    },
    {
        id: '19',
        name: 'Fira Sans',
        category: 'Sans Serif',
        variants: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
        preview: 'The quick brown fox jumps over the lazy dog',
        googleFontName: 'Fira+Sans',
        description: 'Designed for Firefox OS. Humanist sans serif, clear and readable.',
        popularity: 67
    },
    {
        id: '20',
        name: 'PT Sans',
        category: 'Sans Serif',
        variants: ['400', '700'],
        preview: 'The quick brown fox jumps over the lazy dog',
        googleFontName: 'PT+Sans',
        description: 'Universal font supporting Latin and Cyrillic. Professional and clean.',
        popularity: 65
    },
    {
        id: '21',
        name: 'Crimson Text',
        category: 'Serif',
        variants: ['400', '600', '700'],
        preview: 'The quick brown fox jumps over the lazy dog',
        googleFontName: 'Crimson+Text',
        description: 'Old-style serif inspired by classic typefaces. Elegant for body text.',
        popularity: 63
    },
    {
        id: '22',
        name: 'Cabin',
        category: 'Sans Serif',
        variants: ['400', '500', '600', '700'],
        preview: 'The quick brown fox jumps over the lazy dog',
        googleFontName: 'Cabin',
        description: 'Humanist sans with a warm character. Versatile and friendly.',
        popularity: 61
    },
    {
        id: '23',
        name: 'Satisfy',
        category: 'Handwriting',
        variants: ['400'],
        preview: 'The quick brown fox jumps over the lazy dog',
        googleFontName: 'Satisfy',
        description: 'Flowing script with a handmade feel. Casual and elegant.',
        popularity: 59
    },
    {
        id: '24',
        name: 'Space Mono',
        category: 'Monospace',
        variants: ['400', '700'],
        preview: 'The quick brown fox jumps 0123456789',
        googleFontName: 'Space+Mono',
        description: 'Geometric monospace for coding and technical displays.',
        popularity: 57
    },
    {
        id: '25',
        name: 'Inconsolata',
        category: 'Monospace',
        variants: ['200', '300', '400', '500', '600', '700', '800', '900'],
        preview: 'The quick brown fox jumps 0123456789',
        googleFontName: 'Inconsolata',
        description: 'Humanist monospace for code. Clear and readable.',
        popularity: 55
    },
    {
        id: '26',
        name: 'Righteous',
        category: 'Display',
        variants: ['400'],
        preview: 'The quick brown fox jumps over the lazy dog',
        googleFontName: 'Righteous',
        description: 'Geometric display with retro flair. Bold and playful.',
        popularity: 53
    },
    {
        id: '27',
        name: 'Permanent Marker',
        category: 'Handwriting',
        variants: ['400'],
        preview: 'The quick brown fox jumps over the lazy dog',
        googleFontName: 'Permanent+Marker',
        description: 'Marker-style handwriting. Casual and authentic.',
        popularity: 51
    },
    {
        id: '28',
        name: 'Abril Fatface',
        category: 'Display',
        variants: ['400'],
        preview: 'The quick brown fox jumps over the lazy dog',
        googleFontName: 'Abril+Fatface',
        description: 'Titling font with strong contrast. Dramatic and elegant.',
        popularity: 49
    },
    {
        id: '29',
        name: 'Orbitron',
        category: 'Display',
        variants: ['400', '500', '600', '700', '800', '900'],
        preview: 'THE QUICK BROWN FOX JUMPS 2024',
        googleFontName: 'Orbitron',
        description: 'Futuristic geometric sans. Perfect for tech and sci-fi themes.',
        popularity: 47
    },
    {
        id: '30',
        name: 'Great Vibes',
        category: 'Handwriting',
        variants: ['400'],
        preview: 'The quick brown fox jumps over the lazy dog',
        googleFontName: 'Great+Vibes',
        description: 'Elegant script for sophisticated designs. Wedding and formal.',
        popularity: 45
    }
];

export const FONT_CATEGORIES = ['All', 'Sans Serif', 'Serif', 'Display', 'Handwriting', 'Monospace'];
