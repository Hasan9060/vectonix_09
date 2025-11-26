import Hero from './components/Hero';
import Services from './components/Services';
import Pricing from './components/Pricing';
import CustomBot from './components/CustomBot';
import Contact from './components/Contact';
import Tools from './components/Tools';
import OurServices from './components/OurServices';
import FreeFonts from './components/FreeFonts';



export default function Home() {

  return (
    <>
      <main className="min-h-screen">
        <Hero />
        <Services />
        <Tools />
        <OurServices />
        <FreeFonts />
        <Pricing />
        <Contact />
      </main>
    </>
  );
}