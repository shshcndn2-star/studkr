'use client';

import Image from "next/image";
import { SectionWrapper } from "../shared/section-wrapper";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Trophy, Clock, CircuitBoard } from 'lucide-react';

const trackImages = PlaceHolderImages.filter(p => p.id.startsWith('tracks-'));

const trackInfoIcons = {
  records: Clock,
  races: Trophy,
  tech: CircuitBoard,
};

const trackInfo = [
    { icon: trackInfoIcons.records, title: "أرقام قياسية", description: "حطمت أرقاماً قياسية على حلبات مثل Nürburgring Nordschleife (6:49.328 دقيقة لجيل 992) و Road America." },
    { icon: trackInfoIcons.races, title: "هيمنة في السباقات", description: "حققت انتصارات كاسحة في سباقات التحمل مثل 24 ساعة نوربورغرينغ وسباق لومان 24 ساعة ضمن فئتها." },
    { icon: trackInfoIcons.tech, title: "تقنيات السباق", description: "تستخدم تقنيات مستعارة مباشرة من رياضة السيارات، مثل نظام تقليل السحب (DRS) والمحرك ذو الصمامات الصلبة." }
];

const nurburgringRaces = {
    title: "انتصارات فريق Manthey في نوربورغرينغ",
    winnerLabel: "الفائز",
    carLabel: "السيارة",
    races: [
        { "year": "2021", "team": "فريق Manthey Racing", "car": "Porsche 911 GT3 R" },
        { "year": "2018", "team": "فريق Manthey Racing", "car": "Porsche 911 GT3 R" },
        { "year": "2011", "team": "فريق Manthey Racing", "car": "Porsche 997 GT3-RSR" },
        { "year": "2009", "team": "فريق Manthey Racing", "car": "Porsche 997 GT3-RSR" },
        { "year": "2008", "team": "فريق Manthey Racing", "car": "Porsche 997 GT3-RSR" },
        { "year": "2007", "team": "فريق Manthey Racing", "car": "Porsche 997 GT3-RSR" },
        { "year": "2006", "team": "فريق Manthey Racing", "car": "Porsche 996 GT3-MR" },
        { "year": "2000", "team": "فريق Phoenix Racing", "car": "Porsche 911 GT3-R" }
    ]
};

export default function TracksSection() {
  return (
    <SectionWrapper id="tracks" className="animate-fade-in-up">
      <div className="text-center mb-12 animate-fade-in-down">
        <h2 className="text-3xl md:text-4xl font-headline text-primary">أسطورة الحلبات</h2>
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
              alt={image.description['ar']}
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-105"
              data-ai-hint={image.imageHint}
            />
             <figcaption className="absolute inset-0 bg-black/50 flex items-end p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <p className="text-white text-sm font-medium">{image.description['ar']}</p>
            </figcaption>
          </figure>
        ))}
      </div>
      
      <Card className="animate-fade-in-up">
        <CardHeader className="text-center">
          <CardTitle className="font-headline text-2xl text-primary">{nurburgringRaces.title}</CardTitle>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="2021" className="w-full" dir="rtl">
            <TabsList className="grid w-full grid-cols-4 md:grid-cols-8 h-auto">
              {nurburgringRaces.races.map((race) => (
                <TabsTrigger key={race.year} value={race.year}>{race.year}</TabsTrigger>
              ))}
            </TabsList>
            {nurburgringRaces.races.map((race) => (
              <TabsContent key={race.year} value={race.year}>
                <div className="mt-4 text-center">
                  <p className="text-lg"><span className="font-bold">{nurburgringRaces.winnerLabel}:</span> {race.team}</p>
                  <p className="text-muted-foreground"><span className="font-medium">{nurburgringRaces.carLabel}:</span> {race.car}</p>
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </CardContent>
      </Card>
    </SectionWrapper>
  );
}
