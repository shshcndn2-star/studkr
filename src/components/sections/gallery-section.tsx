'use client';

import Image from "next/image";
import { SectionWrapper } from "../shared/section-wrapper";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Card, CardContent } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { useLanguage } from "@/context/language-context";
import { translations } from "@/lib/translations";

const galleryImages = PlaceHolderImages.filter(p => p.id.startsWith('gallery-'));

export default function GallerySection() {
  const { language } = useLanguage();
  const t = translations[language].gallery;
  const dir = language === 'ar' ? 'rtl' : 'ltr';

  return (
    <SectionWrapper id="gallery">
      <div className="text-center mb-12 animate-fade-in-down">
        <h2 className="text-3xl md:text-4xl font-headline text-primary">{t.title}</h2>
        <p className="text-muted-foreground mt-2">{t.description}</p>
      </div>
      <Carousel 
        className="w-full max-w-6xl mx-auto" 
        dir={dir}
        opts={{
            align: "start",
            loop: true,
        }}
        >
        <CarouselContent>
          {galleryImages.map((image) => (
            <CarouselItem key={image.id} className="md:basis-1/2 lg:basis-1/3">
              <div className="p-1">
                <Card className="overflow-hidden group animate-fade-in-up">
                  <CardContent className="p-0 aspect-[4/3] relative">
                    <Image
                      src={image.imageUrl}
                      alt={image.description[language]}
                      fill
                      className="object-cover transition-transform duration-300 ease-in-out group-hover:scale-110"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      data-ai-hint={image.imageHint}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute bottom-0 left-0 right-0 p-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 ease-in-out">
                      <p className="text-white font-bold text-lg">{image.description[language]}</p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="hidden sm:flex" />
        <CarouselNext className="hidden sm:flex" />
      </Carousel>
    </SectionWrapper>
  );
}
