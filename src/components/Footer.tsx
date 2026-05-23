import { useLang } from '../LanguageContext';

export default function Footer() {
  const { tr } = useLang();
  return (
    <footer className="border-t border-gray-900 py-8 px-6 text-center">
      <p className="text-gray-600 text-sm">{tr.footer.made}</p>
    </footer>
  );
}
