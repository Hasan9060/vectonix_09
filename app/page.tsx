import Hero from './components/Hero';
import Services from './components/Services';
import Pricing from './components/Pricing';
import CustomBot from './components/CustomBot';
import FAQ from './components/FAQ';
import Contact from './components/Contact';


export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <Services />
      <Pricing />
      <FAQ />
      <Contact />
      <CustomBot />
    </main>
  );
}