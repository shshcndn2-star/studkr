'use client';

import { useLanguage } from "@/context/language-context";
import { translations } from "@/lib/translations";
import { SectionWrapper } from "../shared/section-wrapper";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";


export default function HistorySection() {
  const { language } = useLanguage();
  const t = translations[language].history;
  const historyData = t.tabs;
  const dir = language === 'ar' ? 'rtl' : 'ltr';

  return (
    <SectionWrapper id="history">
      <div className="text-center mb-12 animate-fade-in-down">
        <h2 className="text-3xl md:text-4xl font-headline text-primary">{t.title}</h2>
      </div>
      <Tabs defaultValue="992" className="w-full max-w-4xl mx-auto animate-fade-in-up" dir={dir}>
        <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 h-auto">
          {historyData.map((tab) => (
            <TabsTrigger key={tab.value} value={tab.value} className="text-xs md:text-sm">{tab.label}</TabsTrigger>
          ))}
        </TabsList>
        {historyData.map((tab) => (
          <TabsContent key={tab.value} value={tab.value}>
            <Card className="mt-4">
              <CardHeader>
                <CardTitle className="font-headline">{tab.label}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{tab.content}</p>
              </CardContent>
            </Card>
          </TabsContent>
        ))}
      </Tabs>
    </SectionWrapper>
  );
}
