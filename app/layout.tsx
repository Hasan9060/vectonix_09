import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from './components/Header';
import Footer from './components/Footer';
import { CurrencyProvider } from './context/CurrencyContext';

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Vectonix | AI-Powered Bot Marketplace - Transform Your Business",
  description: "Discover, compare, and customize AI-powered bots for your business. From restaurants to e-commerce, healthcare to finance - find the perfect automation solution. 500+ bots available.",
  keywords: "AI bots, business automation, chatbots, AI agents, custom bots, restaurant automation, e-commerce bots, AI solutions",
  authors: [{ name: "Vectonix Team" }],
  openGraph: {
    title: "Vectonix | AI-Powered Bot Marketplace",
    description: "Transform your business with AI-powered automation. 500+ specialized bots for every industry.",
    url: "https://vectonix.com",
    siteName: "Vectonix",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Vectonix | AI-Powered Bot Marketplace",
    description: "Transform your business with AI-powered automation solutions.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="canonical" href="https://vectonix.com" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
      </head>

      <body className={inter.variable}>
        <CurrencyProvider>
          <Header />
          {children}
          <Footer />
        </CurrencyProvider>
      </body>
    </html>
  );
}
