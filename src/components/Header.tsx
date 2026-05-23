import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { useLang } from '../LanguageContext';

export default function Header() {
  const { lang, setLang, tr } = useLang();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const links = [
    { href: '#skills', label: tr.nav.skills },
    { href: '#portfolio', label: tr.nav.portfolio },
    { href: '#contact', label: tr.nav.contact },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-[#0f0f0f]/95 backdrop-blur-md shadow-lg shadow-black/20' : 'bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#" className="text-white font-bold text-lg tracking-tight hover:text-emerald-400 transition-colors">
          <span className="text-emerald-400">&lt;</span>portfolio<span className="text-emerald-400">/&gt;</span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm text-gray-400 hover:text-white transition-colors font-medium tracking-wide"
            >
              {l.label}
            </a>
          ))}
          <button
            onClick={() => setLang(lang === 'ru' ? 'en' : 'ru')}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-gray-700 hover:border-emerald-500 text-xs font-semibold text-gray-300 hover:text-emerald-400 transition-all duration-200"
          >
            <span className={lang === 'ru' ? 'text-white' : 'text-gray-500'}>RU</span>
            <span className="text-gray-600">/</span>
            <span className={lang === 'en' ? 'text-white' : 'text-gray-500'}>EN</span>
          </button>
        </nav>

        {/* Mobile */}
        <div className="flex md:hidden items-center gap-3">
          <button
            onClick={() => setLang(lang === 'ru' ? 'en' : 'ru')}
            className="flex items-center gap-1 px-2.5 py-1 rounded-full border border-gray-700 text-xs font-semibold text-gray-300"
          >
            <span className={lang === 'ru' ? 'text-white' : 'text-gray-500'}>RU</span>
            <span className="text-gray-600">/</span>
            <span className={lang === 'en' ? 'text-white' : 'text-gray-500'}>EN</span>
          </button>
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-gray-400 hover:text-white transition-colors"
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          menuOpen ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0'
        } bg-[#0f0f0f]/95 backdrop-blur-md`}
      >
        <nav className="flex flex-col px-6 pb-4 gap-3">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setMenuOpen(false)}
              className="text-sm text-gray-400 hover:text-white transition-colors font-medium py-1"
            >
              {l.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
