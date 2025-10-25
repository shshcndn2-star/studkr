'use client';

import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Button } from "../ui/button";
import Link from "next/link";
import { ArrowLeft, Car, Gauge, History, GalleryHorizontal } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { useLanguage } from "@/context/language-context";
import { translations } from "@/lib/translations";

export default function HomeSection() {
  const heroImage = PlaceHolderImages.find(p => p.id === 'hero');
  const galleryImages = PlaceHolderImages.filter(p => p.id.startsWith('gallery-')).slice(0, 4);
  const { language } = useLanguage();
  const t = translations[language].home;
  
  const featureCards = [
    { title: t.features.performance.title, description: t.features.performance.description, href: "/specs", icon: Gauge },
    { title: t.features.history.title, description: t.features.history.description, href: "/history", icon: History },
    { title: t.features.design.title, description: t.features.design.description, href: "/gallery", icon: Car },
  ];

  return (
    <>
    <section id="home" className="relative h-[70vh] md:h-[90vh] flex items-center justify-center text-center text-white">
      {heroImage && (
        <Image
          src={heroImage.imageUrl}
          alt={heroImage.description[language]}
          fill
          className="object-cover"
          priority
          data-ai-hint={heroImage.imageHint}
        />
      )}
      <div className="absolute inset-0 bg-black/60" />
      <div className="relative z-10 max-w-4xl mx-auto px-4">
        <h1 className="font-headline text-4xl md:text-7xl font-bold mb-4 text-primary animate-fade-in-down">
          {t.welcome}
        </h1>
        <h2 className="font-headline text-2xl md:text-4xl font-semibold mb-6 animate-fade-in-up [animation-delay:0.2s]">
          {t.subtitle}
        </h2>
        <p className="text-lg md:text-xl text-foreground max-w-3xl mx-auto animate-fade-in [animation-delay:0.4s]">
          {t.description}
        </p>
        <div className="mt-8 animate-fade-in-up [animation-delay:0.6s]">
            <Button asChild size="lg">
                <Link href="/specs">
                    {t.discoverMore}
                    <ArrowLeft className="ms-2"/>
                </Link>
            </Button>
        </div>
      </div>
    </section>
    <section id="features" className="py-16 md:py-24 bg-card">
        <div className="container mx-auto px-4">
             <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-headline text-primary animate-fade-in-down">{t.whyGT3}</h2>
                <p className="text-muted-foreground mt-2 animate-fade-in-up [animation-delay:0.1s]">{t.germanEngineering}</p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
                {featureCards.map((card, index) => (
                     <Card key={index} className="text-center hover:shadow-primary/20 hover:shadow-lg hover:-translate-y-2 transition-all duration-300 animate-fade-in-up" style={{animationDelay: `${0.2 + index * 0.1}s`}}>
                        <CardHeader className="items-center">
                            <div className="p-3 bg-primary/10 rounded-full mb-2">
                                <card.icon className="w-8 h-8 text-primary" />
                            </div>
                            <CardTitle className="font-headline">{card.title}</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-muted-foreground mb-4 h-12">{card.description}</p>
                            <Button variant="link" asChild>
                                <Link href={card.href}>
                                    {t.learnMore} <ArrowLeft className="ms-1 size-4"/>
                                </Link>
                            </Button>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </div>
    </section>
    <section id="latest-gallery" className="py-16 md:py-24">
        <div className="container mx-auto px-4">
            <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-headline text-primary animate-fade-in-down">{t.latestGallery.title}</h2>
                <p className="text-muted-foreground mt-2 animate-fade-in-up [animation-delay:0.1s]">{t.latestGallery.description}</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {galleryImages.map((image, index) => (
                    <Link href="/gallery" key={image.id}>
                        <Card 
                            className="overflow-hidden group relative animate-fade-in-up"
                            style={{animationDelay: `${0.2 + index * 0.1}s`}}
                        >
                            <CardContent className="p-0 aspect-[4/3] relative">
                                <Image
                                    src={image.imageUrl}
                                    alt={image.description[language]}
                                    fill
                                    className="object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
                                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                                    data-ai-hint={image.imageHint}
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                                <div className="absolute bottom-0 left-0 right-0 p-4">
                                    <p className="text-white font-semibold text-sm drop-shadow-md">{image.description[language]}</p>
                                </div>
                            </CardContent>
                        </Card>
                    </Link>
                ))}
            </div>
            <div className="text-center mt-12 animate-fade-in-up [animation-delay:0.6s]">
                <Button asChild size="lg" variant="outline">
                    <Link href="/gallery">
                        <GalleryHorizontal className="me-2"/>
                        {t.latestGallery.viewMore}
                    </Link>
                </Button>
            </div>
        </div>
    </section>
    </>
  );
}
