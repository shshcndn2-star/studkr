'use client';

import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Button } from "../ui/button";
import Link from "next/link";
import { ArrowLeft, Car, Gauge, History, GalleryHorizontal } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";

const featureCards = [
    { title: "الأداء الخارق", description: "محرك بقوة 518 حصان وتسارع من 0 إلى 100 كم/س في 3.2 ثانية.", href: "/specs", icon: Gauge },
    { title: "تاريخ عريق", description: "اكتشف تطور أجيال GT3 RS، من 996 إلى 992.", href: "/history", icon: History },
    { title: "تصميم أيقوني", description: "ديناميكية هوائية متطورة وجناح خلفي مستوحى من سيارات السباق.", href: "/gallery", icon: Car },
];

export default function HomeSection() {
  const heroImage = PlaceHolderImages.find(p => p.id === 'hero');
  const galleryImages = PlaceHolderImages.filter(p => p.id.startsWith('gallery-')).slice(0, 4);

  return (
    <>
    <section id="home" className="relative h-[70vh] md:h-[90vh] flex items-center justify-center text-center text-white">
      {heroImage && (
        <Image
          src={heroImage.imageUrl}
          alt={heroImage.description['ar']}
          fill
          className="object-cover"
          priority
          data-ai-hint={heroImage.imageHint}
        />
      )}
      <div className="absolute inset-0 bg-black/60" />
      <div className="relative z-10 max-w-4xl mx-auto px-4">
        <h1 className="font-headline text-4xl md:text-7xl font-bold mb-4 text-primary animate-fade-in-down">
          مرحبا بك في The End
        </h1>
        <h2 className="font-headline text-2xl md:text-4xl font-semibold mb-6 animate-fade-in-up [animation-delay:0.2s]">
          تاريخ ومواصفات سيارة Porsche 911 GT3 RS
        </h2>
        <p className="text-lg md:text-xl text-foreground max-w-3xl mx-auto animate-fade-in [animation-delay:0.4s]">
          موقع مخصص لتحفة بورشه الهندسية، الـ 911 GT3 RS. نغوص في أعماق تاريخها، مواصفاتها الدقيقة، تطورها عبر الأجيال، إنجازاتها الأسطورية على الحلبات، وأشهر التعديلات التي تزيدها قوة وجمالاً.
        </p>
        <div className="mt-8 animate-fade-in-up [animation-delay:0.6s]">
            <Button asChild size="lg">
                <Link href="/specs">
                    اكتشف المزيد
                    <ArrowLeft className="ms-2"/>
                </Link>
            </Button>
        </div>
      </div>
    </section>
    <section id="features" className="py-16 md:py-24 bg-card">
        <div className="container mx-auto px-4">
             <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-headline text-primary animate-fade-in-down">لماذا GT3 RS؟</h2>
                <p className="text-muted-foreground mt-2 animate-fade-in-up [animation-delay:0.1s]">جوهر الهندسة الألمانية في أبهى صورها.</p>
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
                                    اعرف أكثر <ArrowLeft className="ms-1 size-4"/>
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
                <h2 className="text-3xl md:text-4xl font-headline text-primary animate-fade-in-down">أحدث الصور</h2>
                <p className="text-muted-foreground mt-2 animate-fade-in-up [animation-delay:0.1s]">لمحات من الجمال والقوة في أحدث إضافات المعرض.</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {galleryImages.map((image, index) => (
                    <Link href={`/gallery/${image.id}`} key={image.id} legacyBehavior>
                        <a 
                            className="block overflow-hidden group relative animate-fade-in-up"
                            style={{animationDelay: `${0.2 + index * 0.1}s`}}
                        >
                            <Image
                                src={image.imageUrl}
                                alt={image.description['ar']}
                                fill
                                className="object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
                                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                                data-ai-hint={image.imageHint}
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                            <div className="absolute bottom-0 left-0 right-0 p-4">
                                <p className="text-white font-semibold text-sm drop-shadow-md">{image.description['ar']}</p>
                            </div>
                        </a>
                    </Link>
                ))}
            </div>
            <div className="text-center mt-12 animate-fade-in-up [animation-delay:0.6s]">
                <Button asChild size="lg" variant="outline">
                    <Link href="/gallery">
                        <GalleryHorizontal className="me-2"/>
                        عرض كل الصور
                    </Link>
                </Button>
            </div>
        </div>
    </section>
    </>
  );
}
