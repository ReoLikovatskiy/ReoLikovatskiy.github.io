import { Hammer, Package, Paintbrush, User, Box, Code2 } from 'lucide-react';
import { useLang } from '../LanguageContext';

const icons = [Hammer, Package, Paintbrush, User, Box, Code2];

export default function Skills() {
  const { tr } = useLang();

  return (
    <section id="skills" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-black text-white mb-4">{tr.skills.title}</h2>
          <p className="text-gray-500 text-lg max-w-xl mx-auto">{tr.skills.subtitle}</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {tr.skills.items.map((item, i) => {
            const Icon = icons[i];
            return (
              <div
                key={i}
                className="group relative p-6 rounded-xl border border-gray-800 bg-gray-900/50 hover:border-emerald-500/40 hover:bg-gray-900 transition-all duration-300"
              >
                <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-emerald-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                <div className="relative z-10">
                  <div className="w-10 h-10 rounded-lg bg-emerald-500/10 flex items-center justify-center mb-4 group-hover:bg-emerald-500/20 transition-colors duration-200">
                    <Icon size={20} className="text-emerald-400" />
                  </div>
                  <h3 className="text-white font-semibold text-base mb-2">{item.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
