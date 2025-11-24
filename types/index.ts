export interface Service {
  id: string;
  title: string;
  description: string;
  botCount: string;
  icon: string;
}

export interface PricingPlan {
  name: string;
  price: string;
  features: string[];
}

export interface BotPackage {
  id: string;
  title: string;
  category: string;
  description: string;
  features: string[];
  pricing: PricingPlan[];
  badge?: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface CustomBotForm {
  businessName: string;
  category: string;
  platform: string;
  businessSize: string;
  preferredFeatures: string[];
  specificRequirements: string;
  monthlyBudget: string;
}