import { useState } from 'react';
import { ExternalLink, ImageOff } from 'lucide-react';
import { useLang } from '../LanguageContext';

type Category = 'all' | 'builds' | 'modpacks' | 'textures' | 'skins' | 'models' | 'scripts';

function PortfolioCard({
  title,
  desc,
  image,
  repo,
  viewSourceLabel,
}: {
  title: string;
  desc: string;
  image: string;
  repo: string;
  viewSourceLabel: string;
}) {
  const [imgError, setImgError] = useState(false);
  const isPlaceholder = image.includes('YOUR_USERNAME') || image.includes('YOUR_REPO');

  return (
    <div className="group relative rounded-xl border border-gray-800 bg-gray-900/50 overflow-hidden hover:border-gray-600 transition-all duration-300 hover:-translate-y-1">
      {/* Image area */}
      <div className="relative h-48 bg-gray-900 overflow-hidden">
        {isPlaceholder || imgError ? (
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 bg-gray-900">
            <ImageOff size={28} className="text-gray-700" />
            <p className="text-gray-700 text-xs text-center px-4 leading-snug">
              {image}
            </p>
          </div>
        ) : (
          <img
            src={image}
            alt={title}
            onError={() => setImgError(true)}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        )}
      </div>

      {/* Content */}
      <div className="p-4">
        <h3 className="text-white font-semibold text-sm mb-1">{title}</h3>
        <p className="text-gray-500 text-xs leading-relaxed mb-3">{desc}</p>
        {!repo.includes('YOUR_USERNAME') && (
          <a
            href={repo}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs text-emerald-400 hover:text-emerald-300 font-medium transition-colors"
          >
            <ExternalLink size={12} />
            {viewSourceLabel}
          </a>
        )}
      </div>
    </div>
  );
}

export default function Portfolio() {
  const { tr } = useLang();
  const [activeCategory, setActiveCategory] = useState<Category>('all');

  const categories: { key: Category; label: string }[] = [
    { key: 'all', label: tr.portfolio.categories.all },
    { key: 'builds', label: tr.portfolio.categories.builds },
    { key: 'modpacks', label: tr.portfolio.categories.modpacks },
    { key: 'textures', label: tr.portfolio.categories.textures },
    { key: 'skins', label: tr.portfolio.categories.skins },
    { key: 'models', label: tr.portfolio.categories.models },
    { key: 'scripts', label: tr.portfolio.categories.scripts },
  ];

  const filtered = activeCategory === 'all'
    ? tr.portfolio.items
    : tr.portfolio.items.filter((i) => i.category === activeCategory);

  return (
    <section id="portfolio" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-black text-white mb-4">{tr.portfolio.title}</h2>
          <p className="text-gray-500 text-lg">{tr.portfolio.subtitle}</p>
        </div>

        {/* Category filters */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat.key}
              onClick={() => setActiveCategory(cat.key)}
              className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-200 ${
                activeCategory === cat.key
                  ? 'bg-emerald-500 text-black shadow-lg shadow-emerald-500/20'
                  : 'border border-gray-800 text-gray-400 hover:border-gray-600 hover:text-gray-200'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {filtered.map((item) => (
            <PortfolioCard
              key={item.id}
              title={item.title}
              desc={item.desc}
              image={item.image}
              repo={item.repo}
              viewSourceLabel={tr.portfolio.viewSource}
            />
          ))}
        </div>

        {/* GitHub image template hint */}
        <div className="mt-12 p-5 rounded-xl border border-dashed border-gray-700 bg-gray-900/30">
          <p className="text-gray-600 text-xs font-mono text-center leading-relaxed">
            {tr.portfolio.addImage}
            <br />
            <span className="text-emerald-700 mt-1 block">
              https://raw.githubusercontent.com/USERNAME/REPO/main/path/to/image.png
            </span>
          </p>
        </div>
      </div>
    </section>
  );
}
