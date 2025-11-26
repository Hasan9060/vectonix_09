import { Service, BotPackage, FAQItem } from '@/types';

export const SERVICES: Service[] = [
  {
    id: 'restaurants',
    title: 'Restaurants & Food',
    description: 'Order management, customer service, and kitchen automation bots',
    botCount: '120+ bots',
    icon: '🍽️'
  },
  {
    id: 'healthcare',
    title: 'Healthcare',
    description: 'Patient management, appointment scheduling, and support',
    botCount: '95+ bots',
    icon: '🏥'
  },
  {
    id: 'finance',
    title: 'Finance & Trading',
    description: 'Trading bots, financial analysis, and investment management',
    botCount: '40+ bots',
    icon: '💹'
  },
  {
    id: 'ecommerce',
    title: 'E-commerce',
    description: 'Sales, inventory, customer support, and marketing automation',
    botCount: '85+ bots',
    icon: '🛒'
  },
];

export const BOT_PACKAGES: BotPackage[] = [
  {
    id: 'restaurant-genie',
    title: 'RestaurantGenie',
    category: 'Restaurant',
    description: 'Complete restaurant management with order automation, customer service, and kitchen workflow optimization.',
    badge: 'Most Popular',
    features: ['Order Management', 'Table Reservations', 'Customer Support', 'Customer Insights'],
    pricing: [
      { name: 'Basic', price: '$40/month', features: ['Basic order management', 'Email support'] },
      { name: 'Standard', price: '$80/month', features: ['Advanced features', 'Priority support'] },
      { name: 'Premium', price: '$120/month', features: ['All features', '24/7 support'] }
    ]
  },
  {
    id: 'ecommerce-pro',
    title: 'EcommerceBot Pro',
    category: 'E-commerce',
    description: 'Advanced e-commerce automation for sales, customer support, inventory management, and marketing campaigns.',
    badge: 'ESD Integration Ready',
    features: ['Sales Automation', 'Inventory Sync', 'Customer Support', 'Marketing'],
    pricing: [
      { name: 'Basic', price: '$40/month', features: ['Basic automation', 'Email support'] },
      { name: 'Standard', price: '$80/month', features: ['Advanced features', 'Priority support'] },
      { name: 'Premium', price: '$120/month', features: ['All features', '24/7 support'] }
    ]
  },
  {
    id: 'property-assist',
    title: 'PropertyAssist',
    category: 'Real Estate',
    description: 'Smart real estate assistant for property management, client relations, and automated market analysis.',
    badge: 'CRM Integrated',
    features: ['Property Management', 'Client CRM', 'Market Analysis', 'Scheduling'],
    pricing: [
      { name: 'Basic', price: '$40/month', features: ['Basic management', 'Email support'] },
      { name: 'Standard', price: '$80/month', features: ['Advanced features', 'Priority support'] },
      { name: 'Premium', price: '$120/month', features: ['All features', '24/7 support'] }
    ]
  }
];

export const FAQS: FAQItem[] = [
  {
    question: "How do I choose the right AI bot for my business?",
    answer: "Start by assessing your specific business needs and workflow challenges. Consider factors like your industry, team size, budget, and integration requirements. Our AI matching system can recommend the perfect bot based on your inputs, or you can schedule a free consultation with our experts for personalized guidance."
  },
  {
    question: "Can I customize the bot after purchase?",
    answer: "Absolutely! All our AI bots come with flexible customization options. You can modify workflows, add new features, and integrate with additional tools as your business evolves. We offer ongoing development support and regular updates to ensure your bot grows with your business needs."
  },
  {
    question: "Are the prices final or negotiable?",
    answer: "Our standard pricing is fixed to ensure fairness and transparency for all customers. However, for enterprise-level custom solutions with specific requirements, we offer flexible pricing models. Contact our sales team to discuss volume discounts and custom enterprise agreements."
  },
  {
    question: "How long does it take to set up and deploy an AI bot?",
    answer: "Setup time varies based on complexity. Pre-built bots can be deployed in 1-2 days, while custom solutions typically take 1-3 weeks. We provide a detailed implementation timeline during onboarding and offer priority setup services for urgent requirements."
  },
  {
    question: "What kind of support and training do you provide?",
    answer: "We offer comprehensive support including 24/7 technical assistance, detailed documentation, video tutorials, and live training sessions. Premium plans include dedicated account managers and personalized onboarding to ensure your team gets the most out of your AI bot."
  },
  {
    question: "Can the bots integrate with my existing tools and systems?",
    answer: "Yes! Our AI bots are designed with integration in mind. They seamlessly connect with popular CRMs, productivity tools, payment processors, and custom APIs. We provide extensive integration documentation and technical support for smooth implementation."
  },
];

export const FEATURES = [
  'Customer Support Chat',
  'Inventory Tracking',
  'Payment Processing',
  'Email Marketing',
  'Lead Generation',
  'Order Management',
  'Analytics & Reporting',
  'Social Media Integration',
  'Appointment Scheduling',
  'CRM Integration'
];

