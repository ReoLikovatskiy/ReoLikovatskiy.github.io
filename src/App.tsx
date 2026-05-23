import { LanguageProvider } from './LanguageContext';
import Header from './components/Header';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-[#0a0a0a] text-white">
        <Header />
        <main>
          <Hero />
          <Skills />
          <Portfolio />
          <Contact />
        </main>
        <Footer />
      </div>
    </LanguageProvider>
  );
}
