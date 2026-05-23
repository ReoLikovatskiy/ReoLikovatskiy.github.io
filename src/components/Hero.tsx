import { ArrowDown, Github, MessageCircle, Send } from 'lucide-react';
import { useLang } from '../LanguageContext';

export default function Hero() {
  const { tr } = useLang();

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center text-center px-6 overflow-hidden">
      {/* Ambient background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-emerald-500/5 blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 w-[300px] h-[300px] rounded-full bg-teal-500/5 blur-[100px]" />
      </div>

      {/* Pixel grid decoration */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)',
          backgroundSize: '40px 40px',
        }}
      />

      <div className="relative z-10 max-w-3xl mx-auto">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 text-emerald-400 text-xs font-medium mb-8 tracking-wider uppercase">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
          Open for commissions
        </div>

        <h1 className="text-5xl md:text-7xl font-black text-white leading-none tracking-tight mb-6">
          <span className="block text-gray-500 text-2xl md:text-3xl font-medium mb-2 tracking-widest uppercase">
            {tr.hero.greeting}
          </span>
          <span className="bg-gradient-to-r from-white via-gray-100 to-gray-400 bg-clip-text text-transparent">
            {tr.hero.name}
          </span>
        </h1>

        <p className="text-gray-400 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto mb-10">
          {tr.hero.tagline}
        </p>

        <div className="flex flex-wrap items-center justify-center gap-3 mb-16">
          <a
            href="#portfolio"
            className="px-6 py-3 bg-emerald-500 hover:bg-emerald-400 text-black font-semibold rounded-lg transition-all duration-200 hover:shadow-lg hover:shadow-emerald-500/25 text-sm"
          >
            {tr.hero.cta}
          </a>
          <a
            href="#contact"
            className="px-6 py-3 border border-gray-700 hover:border-gray-500 text-gray-300 hover:text-white font-semibold rounded-lg transition-all duration-200 text-sm"
          >
            {tr.hero.hire}
          </a>
        </div>

        {/* Social links */}
        <div className="flex items-center justify-center gap-4">
          <a
            href="https://github.com/YOUR_USERNAME"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 flex items-center justify-center rounded-lg border border-gray-800 hover:border-gray-600 text-gray-500 hover:text-white transition-all duration-200"
          >
            <Github size={18} />
          </a>
          <a
            href="https://discord.com/users/YOUR_DISCORD_ID"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 flex items-center justify-center rounded-lg border border-gray-800 hover:border-gray-600 text-gray-500 hover:text-white transition-all duration-200"
          >
            <MessageCircle size={18} />
          </a>
          <a
            href="https://t.me/YOUR_TELEGRAM"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 flex items-center justify-center rounded-lg border border-gray-800 hover:border-gray-600 text-gray-500 hover:text-white transition-all duration-200"
          >
            <Send size={18} />
          </a>
        </div>
      </div>

      <a
        href="#skills"
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-gray-600 hover:text-gray-400 transition-colors animate-bounce"
      >
        <ArrowDown size={20} />
      </a>
    </section>
  );
}
