'use client';

import { useLanguage } from "@/context/language-context";
import { translations } from "@/lib/translations";
import { SectionWrapper } from "../shared/section-wrapper";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import EvolutionChart from "../charts/evolution-chart";

export default function EvolutionSection() {
  const { language } = useLanguage();
  const t = translations[language].evolution;

  return (
    <SectionWrapper id="evolution" className="bg-card">
      <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
        <div className="order-2 md:order-1 animate-fade-in-up">
          <h2 className="text-3xl md:text-4xl font-headline text-primary mb-4">
            {t.title}
          </h2>
          <p className="text-muted-foreground">
            {t.description}
          </p>
        </div>
        <div className="order-1 md:order-2 animate-fade-in-down">
          <Card>
            <CardHeader>
              <CardTitle className="font-headline">{t.chartTitle}</CardTitle>
              <CardDescription>{t.chartDescription}</CardDescription>
            </CardHeader>
            <CardContent>
              <EvolutionChart />
            </CardContent>
          </Card>
        </div>
      </div>
    </SectionWrapper>
  );
}
