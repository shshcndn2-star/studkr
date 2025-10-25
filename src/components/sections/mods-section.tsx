'use client';

import { useLanguage } from "@/context/language-context";
import { translations } from "@/lib/translations";
import { SectionWrapper } from "../shared/section-wrapper";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle } from 'lucide-react';

export default function ModsSection() {
  const { language } = useLanguage();
  const t = translations[language].mods;
  
  return (
    <SectionWrapper id="mods" className="bg-card">
      <div className="grid md:grid-cols-2 gap-12 items-start">
        <div className="animate-fade-in-up">
          <h2 className="text-3xl md:text-4xl font-headline text-primary mb-4">{t.title}</h2>
          <div className="space-y-4 text-muted-foreground">
            <p>{t.description1}</p>
            <p>{t.description2}</p>
          </div>
        </div>
        <Card className="animate-fade-in-up [animation-delay:0.2s]">
          <CardHeader>
            <CardTitle className="font-headline">{t.commonModsTitle}</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-3">
              {t.commonMods.map((mod, index) => (
                <li key={index} className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary mt-1 me-3 shrink-0" />
                  <span className="text-muted-foreground">{mod}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </div>
    </SectionWrapper>
  );
}
