import { useState } from 'react';
import { Github, MessageCircle, Send, Mail, CheckCircle } from 'lucide-react';
import { useLang } from '../LanguageContext';

export default function Contact() {
  const { tr } = useLang();
  const [sent, setSent] = useState(false);
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const subject = encodeURIComponent(`Commission from ${name}`);
    const body = encodeURIComponent(message);
    window.open(`mailto:YOUR_EMAIL@example.com?subject=${subject}&body=${body}`);
    setSent(true);
    setTimeout(() => setSent(false), 4000);
  }

  const socials = [
    {
      icon: Github,
      label: tr.contact.github,
      href: 'https://github.com/ReoLikovatskiy',
      color: 'hover:border-gray-400 hover:text-gray-200',
    },
    {
      icon: MessageCircle,
      label: tr.contact.discord,
      href: 'https://discord.com/users/d4fine',
      color: 'hover:border-blue-400 hover:text-blue-400',
    },
    {
      icon: Send,
      label: tr.contact.telegram,
      href: 'https://t.me/D4Fine',
      color: 'hover:border-sky-400 hover:text-sky-400',
    },
    {
      icon: Mail,
      label: tr.contact.email,
      href: 'mailto:reolikov@gmail.com',
      color: 'hover:border-emerald-400 hover:text-emerald-400',
    },
  ];

  return (
    <section id="contact" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-black text-white mb-4">{tr.contact.title}</h2>
          <p className="text-gray-500 text-lg">{tr.contact.subtitle}</p>
        </div>

        <div className="grid md:grid-cols-2 gap-10">
          {/* Social links */}
          <div className="flex flex-col gap-4">
            <p className="text-gray-500 text-sm mb-2">{tr.contact.note}</p>
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center gap-3 px-5 py-4 rounded-xl border border-gray-800 bg-gray-900/50 text-gray-400 transition-all duration-200 ${s.color}`}
              >
                <s.icon size={18} />
                <span className="font-medium text-sm">{s.label}</span>
              </a>
            ))}
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <input
              type="text"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder={tr.contact.form.name}
              className="w-full px-4 py-3 rounded-lg bg-gray-900/70 border border-gray-800 text-white placeholder-gray-600 text-sm focus:outline-none focus:border-emerald-500/60 transition-colors"
            />
            <textarea
              required
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder={tr.contact.form.message}
              rows={6}
              className="w-full px-4 py-3 rounded-lg bg-gray-900/70 border border-gray-800 text-white placeholder-gray-600 text-sm focus:outline-none focus:border-emerald-500/60 transition-colors resize-none"
            />
            <button
              type="submit"
              className={`flex items-center justify-center gap-2 px-6 py-3 rounded-lg font-semibold text-sm transition-all duration-200 ${
                sent
                  ? 'bg-emerald-600/40 text-emerald-300 border border-emerald-500/30'
                  : 'bg-emerald-500 hover:bg-emerald-400 text-black shadow-lg shadow-emerald-500/20 hover:shadow-emerald-500/30'
              }`}
            >
              {sent ? (
                <>
                  <CheckCircle size={16} />
                  OK
                </>
              ) : (
                <>
                  <Send size={16} />
                  {tr.contact.form.send}
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
