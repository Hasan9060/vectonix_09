export interface Service {
    id: string;
    slug: string;
    title: string;
    icon: string;
    tagline: string;
    description: string;
    longDescription: string;
    features: string[];
    deliverables: string[];
    benefits: string[];
    pricing: {
        basic: string;
        standard: string;
        premium: string;
    };
    category: string;
}

export const SERVICES: Service[] = [
    {
        id: '1',
        slug: 'web-development',
        title: 'Web Development',
        icon: 'Code',
        tagline: 'Build powerful websites',
        description: 'Custom website development with modern technologies. Create fast, responsive, and SEO-friendly websites that convert visitors into customers.',
        longDescription: 'Our web development service delivers custom-built websites using the latest technologies like React, Next.js, and modern frameworks. We create responsive, fast-loading websites optimized for search engines and user experience. Whether you need a simple landing page or a complex web application, we build solutions that grow with your business.',
        features: ['Responsive Design', 'Modern Tech Stack', 'SEO Optimized', 'Fast Loading Speed', 'Mobile-First Approach', 'Custom Functionality', 'Security Best Practices', 'Cross-Browser Compatible', 'Easy Content Management', 'Ongoing Support'],
        deliverables: ['Fully functional website', 'Responsive across all devices', 'Source code & documentation', '3 months free support', 'Training session'],
        benefits: ['Professional online presence', 'Increase credibility', 'Generate more leads', 'Better user experience', '24/7 availability'],
        pricing: {
            basic: '$499',
            standard: '$999',
            premium: '$2,499'
        },
        category: 'Development'
    },
    {
        id: '2',
        slug: 'graphic-designing',
        title: 'Graphic Designing',
        icon: 'Palette',
        tagline: 'Visual designs that capture attention',
        description: 'Professional graphic design services for logos, branding, social media, and marketing materials. Stand out with stunning visuals.',
        longDescription: 'Transform your brand with professional graphic design services. From eye-catching logos to complete brand identities, social media graphics, and marketing materials, we create designs that resonate with your audience. Our designers combine creativity with strategy to deliver visuals that drive engagement and conversions.',
        features: ['Logo Design', 'Brand Identity', 'Social Media Graphics', 'Marketing Materials', 'Print Design', 'Packaging Design', 'Infographics', 'Illustrations', 'Unlimited Revisions', 'Quick Turnaround'],
        deliverables: ['All file formats (AI, PSD, PNG, JPG)', 'Print-ready files', 'Social media sizes', 'Brand guidelines', 'Vector files'],
        benefits: ['Strong brand identity', 'Professional appearance', 'Increase recognition', 'Stand out from competitors', 'Consistent branding'],
        pricing: {
            basic: '$99',
            standard: '$299',
            premium: '$799'
        },
        category: 'Design'
    },
    {
        id: '3',
        slug: 'seo-services',
        title: 'SEO Services',
        icon: 'TrendingUp',
        tagline: 'Rank higher, get more organic traffic',
        description: 'Complete SEO optimization to boost your Google rankings. Get more organic traffic and qualified leads through proven SEO strategies.',
        longDescription: 'Dominate search engine results with our comprehensive SEO services. We use white-hat techniques to improve your rankings, increase organic traffic, and drive qualified leads to your website. Our SEO experts handle everything from keyword research to technical optimization, content strategy, and link building.',
        features: ['Keyword Research', 'On-Page Optimization', 'Technical SEO', 'Content Strategy', 'Link Building', 'Local SEO', 'Competitor Analysis', 'Monthly Reports', 'Google Analytics Setup', 'Search Console Optimization'],
        deliverables: ['SEO audit report', 'Keyword strategy', 'Optimized content', 'Monthly performance reports', 'Ranking improvements'],
        benefits: ['More organic traffic', 'Higher conversion rates', 'Long-term results', 'Cost-effective marketing', 'Brand authority'],
        pricing: {
            basic: '$299/mo',
            standard: '$599/mo',
            premium: '$1,299/mo'
        },
        category: 'Marketing'
    },
    {
        id: '4',
        slug: 'domain-integration',
        title: 'Domain & Hosting Integration',
        icon: 'Globe',
        tagline: 'Seamless domain and hosting setup',
        description: 'Professional domain registration and hosting setup. Get your website online with SSL, email setup, and full technical support.',
        longDescription: 'Take the hassle out of getting your website online. We handle complete domain registration, DNS configuration, hosting setup, SSL certificate installation, and email integration. Our experts ensure your website is secure, fast, and always accessible with 99.9% uptime guarantee.',
        features: ['Domain Registration', 'DNS Configuration', 'Hosting Setup', 'SSL Certificate', 'Email Integration', 'Backup Setup', 'CDN Integration', 'Performance Optimization', 'Security Hardening', '24/7 Monitoring'],
        deliverables: ['Registered domain', 'Configured hosting', 'SSL certificate', 'Professional email accounts', 'Technical documentation'],
        benefits: ['Professional domain name', 'Secure website', 'Fast loading speeds', 'Reliable uptime', 'Expert support'],
        pricing: {
            basic: '$49',
            standard: '$149',
            premium: '$299'
        },
        category: 'Development'
    },
    {
        id: '5',
        slug: 'social-media-marketing',
        title: 'Social Media Marketing',
        icon: 'Share2',
        tagline: 'Build and engage your audience',
        description: 'Grow your social media presence organically. Strategic content creation, community management, and engagement to build loyal followers.',
        longDescription: 'Build a thriving social media presence with our organic growth strategies. We create engaging content, manage your community, interact with followers, and implement proven tactics to grow your audience authentically. Perfect for businesses looking to build brand awareness and customer loyalty.',
        features: ['Content Calendar', 'Daily Posting', 'Community Management', 'Engagement Growth', 'Hashtag Strategy', 'Story Creation', 'Reel/Video Content', 'Analytics & Reporting', 'Competitor Analysis', 'Brand Voice Development'],
        deliverables: ['Content calendar', '30-60 posts per month', 'Community management', 'Monthly analytics report', 'Strategy consultation'],
        benefits: ['Increase brand awareness', 'Build loyal community', 'Drive website traffic', 'Boost engagement', 'Generate leads'],
        pricing: {
            basic: '$399/mo',
            standard: '$799/mo',
            premium: '$1,499/mo'
        },
        category: 'Marketing'
    },
    {
        id: '6',
        slug: 'social-media-ads',
        title: 'Social Media Ads (Paid Marketing)',
        icon: 'Target',
        tagline: 'Get instant results with targeted ads',
        description: 'Run high-converting Facebook, Instagram, and LinkedIn ads. Reach your target audience with precision and maximize ROI.',
        longDescription: 'Drive immediate results with strategic paid social media advertising. We create and manage high-performing ad campaigns on Facebook, Instagram, LinkedIn, and TikTok. Our data-driven approach ensures your ad spend generates maximum return through precise targeting, compelling creatives, and continuous optimization.',
        features: ['Campaign Strategy', 'Audience Research', 'Ad Creative Design', 'A/B Testing', 'Conversion Tracking', 'Retargeting Campaigns', 'Budget Optimization', 'Performance Analysis', 'Monthly Reports', 'Landing Page Optimization'],
        deliverables: ['Campaign setup', 'Ad creatives', 'Target audience research', 'Weekly performance reports', 'ROI optimization'],
        benefits: ['Instant traffic', 'Precise targeting', 'Measurable results', 'Scalable campaigns', 'High ROI'],
        pricing: {
            basic: '$499/mo',
            standard: '$999/mo',
            premium: '$2,499/mo'
        },
        category: 'Marketing'
    },
    {
        id: '7',
        slug: 'content-creation',
        title: 'Content Creation',
        icon: 'FileText',
        tagline: 'Compelling content that converts',
        description: 'Professional content writing for blogs, websites, and social media. Engage your audience with high-quality, SEO-optimized content.',
        longDescription: 'Fuel your marketing with professional content creation services. Our expert writers create engaging blog posts, website copy, social media content, email newsletters, and more. All content is SEO-optimized, original, and tailored to your brand voice to attract and convert your target audience.',
        features: ['Blog Writing', 'Website Copywriting', 'Social Media Content', 'Email Newsletters', 'SEO Optimization', 'Keyword Research', 'Content Strategy', 'Editing & Proofreading', 'Plagiarism-Free', 'Fast Delivery'],
        deliverables: ['High-quality articles', 'SEO-optimized content', 'Edited & proofread', 'Royalty-free images', 'Content calendar'],
        benefits: ['Improve SEO rankings', 'Engage your audience', 'Establish authority', 'Generate leads', 'Save time'],
        pricing: {
            basic: '$199/mo',
            standard: '$499/mo',
            premium: '$999/mo'
        },
        category: 'Content'
    },
    {
        id: '8',
        slug: 'branding-creative',
        title: 'Branding & Creative Services',
        icon: 'Sparkles',
        tagline: 'Build a memorable brand identity',
        description: 'Complete branding packages including logo, brand guidelines, and marketing collateral. Create a cohesive brand that stands out.',
        longDescription: 'Develop a powerful brand identity that resonates with your audience. From logo design to complete brand guidelines, we create cohesive visual identities that set you apart. Our branding packages include everything you need to present a professional, consistent brand across all touchpoints.',
        features: ['Logo Design', 'Brand Guidelines', 'Color Palette', 'Typography Selection', 'Business Cards', 'Letterheads', 'Social Media Templates', 'Email Signatures', 'Brand Story', 'Competitor Analysis'],
        deliverables: ['Logo in all formats', '50+ page brand guide', 'Marketing templates', 'Business stationery', 'Font & color specs'],
        benefits: ['Unique brand identity', 'Professional image', 'Brand consistency', 'Market differentiation', 'Customer trust'],
        pricing: {
            basic: '$599',
            standard: '$1,299',
            premium: '$2,999'
        },
        category: 'Design'
    },
    {
        id: '9',
        slug: 'ecommerce-growth',
        title: 'E-commerce Growth Services',
        icon: 'ShoppingCart',
        tagline: 'Scale your online store revenue',
        description: 'Complete e-commerce optimization and growth strategy. Increase sales with conversion optimization, marketing automation, and analytics.',
        longDescription: 'Maximize your e-commerce revenue with our comprehensive growth services. We optimize your store for conversions, implement marketing automation, run targeted ad campaigns, and provide actionable analytics. Perfect for Shopify, WooCommerce, and custom e-commerce platforms looking to scale.',
        features: ['Store Optimization', 'Conversion Rate Optimization', 'Product Page Enhancement', 'Checkout Optimization', 'Email Marketing', 'Abandoned Cart Recovery', 'Upsell & Cross-sell', 'Analytics Setup', 'Ad Campaign Management', 'Growth Strategy'],
        deliverables: ['Optimized store', 'Marketing automation', 'Ad campaigns', 'Monthly growth reports', 'Strategy sessions'],
        benefits: ['Increase revenue', 'Higher conversion rates', 'More repeat customers', 'Reduced cart abandonment', 'Data-driven decisions'],
        pricing: {
            basic: '$799/mo',
            standard: '$1,499/mo',
            premium: '$2,999/mo'
        },
        category: 'E-commerce'
    }
];
