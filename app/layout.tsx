import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Header from './components/Header';
import Footer from './components/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'BotBazzar - Find the Perfect AI Bot for Your Business',
  description: 'Discover, compare, and customize AI-powered bots designed to transform your business operations across all industries.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
          <Header/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}