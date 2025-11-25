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
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="canonical" href="https://vectonix.com" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
        <link href="https://fonts.googleapis.com/css2?family=Product+Sans&display=swap" rel="stylesheet" />
        <style dangerouslySetInnerHTML={{
          __html: `
          @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap');
          
          @font-face {
            font-family: 'Google Sans';
            font-style: normal;
            font-weight: 400;
            src: url('https://fonts.gstatic.com/s/googlesans/v14/4UaGrENHsxJlGDuGo1OIlL3Owp5eKQtG.woff2') format('woff2');
          }
          @font-face {
            font-family: 'Google Sans';
            font-style: normal;
            font-weight: 500;
            src: url('https://fonts.gstatic.com/s/googlesans/v14/4UabrENHsxJlGDuGo1OIlLU94YtzCwZsPF4o.woff2') format('woff2');
          }
          @font-face {
            font-family: 'Google Sans';
            font-style: normal;
            font-weight: 700;
            src: url('https://fonts.gstatic.com/s/googlesans/v14/4UabrENHsxJlGDuGo1OIlLV154tzCwZsPF4o.woff2') format('woff2');
          }
        `}} />
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