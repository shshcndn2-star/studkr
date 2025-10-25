import Image from "next/image";
import { SectionWrapper } from "../shared/section-wrapper";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Users, Trophy, Clock, CircuitBoard } from 'lucide-react';

const trackImages = PlaceHolderImages.filter(p => p.id.startsWith('tracks-'));

const trackInfo = [
  { icon: Clock, title: "سجلات", description: "Nürburgring Nordschleife 6:49.328 دقيقة (20.8 كم). Road America سجل إنتاجي." },
  { icon: Trophy, title: "سباقات", description: "24 ساعة Nürburgring (فوزات متعددة)، Le Mans (فوز في فئة GT)." },
  { icon: Users, title: "سائقون", description: "Kévin Estre, Lars Kern, Jörg Bergmeister, Walter Röhrl." },
];

const nurburgringRaces = [
    { year: "2021", team: "فريق Manthey Racing", car: "Porsche 911 GT3 R" },
    { year: "2018", team: "فريق Manthey Racing", car: "Porsche 911 GT3 R" },
    { year: "2011", team: "فريق Manthey Racing", car: "Porsche 997 GT3-RSR" },
    { year: "2009", team: "فريق Manthey Racing", car: "Porsche 997 GT3-RSR" },
    { year: "2008", team: "فريق Manthey Racing", car: "Porsche 997 GT3-RSR" },
    { year: "2007", team: "فريق Manthey Racing", car: "Porsche 997 GT3-RSR" },
    { year: "2006", team: "فريق Manthey Racing", car: "Porsche 996 GT3-MR" },
    { year: "2000", team: "فريق Phoenix Racing", car: "Porsche 911 GT3-R" },
];

export default function TracksSection() {
  return (
    <SectionWrapper id="tracks">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-headline text-primary">التاريخ مع الحلبات والسباقات</h2>
      </div>

      <div className="grid md:grid-cols-3 gap-8 mb-12">
        {trackInfo.map((item, index) => (
          <Card key={index} className="text-center">
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
        {trackImages.map((image) => (
          <figure key={image.id} className="relative aspect-w-4 aspect-h-3 rounded-lg overflow-hidden group">
            <Image
              src={image.imageUrl}
              alt={image.description}
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-105"
              data-ai-hint={image.imageHint}
            />
             <figcaption className="absolute inset-0 bg-black/50 flex items-end p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <p className="text-white text-sm font-medium">{image.description}</p>
            </figcaption>
          </figure>
        ))}
      </div>
      
      <Card>
        <CardHeader className="text-center">
          <CardTitle className="font-headline text-2xl text-primary">تفاصيل سباقات نوربورغرينغ</CardTitle>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="2021" className="w-full" dir="rtl">
            <TabsList className="grid w-full grid-cols-4 md:grid-cols-8 h-auto">
              {nurburgringRaces.map((race) => (
                <TabsTrigger key={race.year} value={race.year}>{race.year}</TabsTrigger>
              ))}
            </TabsList>
            {nurburgringRaces.map((race) => (
              <TabsContent key={race.year} value={race.year}>
                <div className="mt-4 text-center">
                  <p className="text-lg"><span className="font-bold">الفائز:</span> {race.team}</p>
                  <p className="text-muted-foreground"><span className="font-medium">السيارة:</span> {race.car}</p>
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </CardContent>
      </Card>
    </SectionWrapper>
  );
}
