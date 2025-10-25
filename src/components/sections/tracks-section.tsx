'use client';

import Image from "next/image";
import { SectionWrapper } from "../shared/section-wrapper";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Trophy, Clock, CircuitBoard } from 'lucide-react';
import { useLanguage } from "@/context/language-context";
import { translations } from "@/lib/translations";

const trackImages = PlaceHolderImages.filter(p => p.id.startsWith('tracks-'));

const trackInfoIcons = {
  records: Clock,
  races: Trophy,
  tech: CircuitBoard,
};

export default function TracksSection() {
  const { language } = useLanguage();
  const t = translations[language].tracks;
  const dir = language === 'ar' ? 'rtl' : 'ltr';

  const trackInfo = [
    { icon: trackInfoIcons.records, title: t.trackInfo.records.title, description: t.trackInfo.records.description },
    { icon: trackInfoIcons.races, title: t.trackInfo.races.title, description: t.trackInfo.races.description },
    { icon: trackInfoIcons.tech, title: t.trackInfo.tech.title, description: t.trackInfo.tech.description },
  ];

  return (
    <SectionWrapper id="tracks">
      <div className="text-center mb-12 animate-fade-in-down">
        <h2 className="text-3xl md:text-4xl font-headline text-primary">{t.title}</h2>
      </div>

      <div className="grid md:grid-cols-3 gap-8 mb-12">
        {trackInfo.map((item, index) => (
          <Card key={index} className="text-center animate-fade-in-up" style={{animationDelay: `${index * 100}ms`}}>
            <CardHeader>
              <item.icon className="mx-auto h-10 w-10 text-primary mb-2" />
              <CardTitle className="font-headline">{item.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">{item.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
        {trackImages.map((image, index) => (
          <figure key={image.id} className="relative aspect-w-4 aspect-h-3 rounded-lg overflow-hidden group animate-fade-in" style={{animationDelay: `${index * 100}ms`}}>
            <Image
              src={image.imageUrl}
              alt={image.description[language]}
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-105"
              data-ai-hint={image.imageHint}
            />
             <figcaption className="absolute inset-0 bg-black/50 flex items-end p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <p className="text-white text-sm font-medium">{image.description[language]}</p>
            </figcaption>
          </figure>
        ))}
      </div>
      
      <Card className="animate-fade-in-up">
        <CardHeader className="text-center">
          <CardTitle className="font-headline text-2xl text-primary">{t.nurburgringRaces.title}</CardTitle>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="2021" className="w-full" dir={dir}>
            <TabsList className="grid w-full grid-cols-4 md:grid-cols-8 h-auto">
              {t.nurburgringRaces.races.map((race) => (
                <TabsTrigger key={race.year} value={race.year}>{race.year}</TabsTrigger>
              ))}
            </TabsList>
            {t.nurburgringRaces.races.map((race) => (
              <TabsContent key={race.year} value={race.year}>
                <div className="mt-4 text-center">
                  <p className="text-lg"><span className="font-bold">{t.nurburgringRaces.winnerLabel}:</span> {race.team}</p>
                  <p className="text-muted-foreground"><span className="font-medium">{t.nurburgringRaces.carLabel}:</span> {race.car}</p>
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </CardContent>
      </Card>
    </SectionWrapper>
  );
}
