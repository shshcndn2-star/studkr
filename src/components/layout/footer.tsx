'use client';

import { useLanguage } from '@/context/language-context';
import { translations } from '@/lib/translations';

export default function Footer() {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <footer className="bg-card border-t">
      <div className="container mx-auto py-6 px-4">
        <p className="text-center text-sm text-muted-foreground">
          {t.footer.copyright}
        </p>
      </div>
    </footer>
  );
}
