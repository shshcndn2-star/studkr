import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Button } from "../ui/button";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";

const featureCards = [
    { title: "الأداء الخارق", description: "محرك بقوة 518 حصان وتسارع مذهل.", href: "/specs" },
    { title: "تاريخ عريق", description: "اكتشف تطور أجيال GT3 RS.", href: "/history" },
    { title: "تصميم أيقوني", description: "ديناميكية هوائية وجناح مستوحى من السباقات.", href: "/gallery" },
]

export default function HomeSection() {
  const heroImage = PlaceHolderImages.find(p => p.id === 'hero');

  return (
    <>
    <section id="home" className="relative h-[70vh] md:h-[90vh] flex items-center justify-center text-center text-white">
      {heroImage && (
        <Image
          src={heroImage.imageUrl}
          alt={heroImage.description}
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
          هذا الموقع مخصص لسيارة Porsche 911 GT3 RS، حيث نغطي مواصفاتها، تاريخها, تطورها, إنجازاتها في السباقات, والتعديلات الشائعة. استمتع بالتصفح!
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
                <h2 className="text-3xl md:text-4xl font-headline text-primary">لماذا GT3 RS؟</h2>
                <p className="text-muted-foreground mt-2">جوهر الهندسة الألمانية في أبهى صورها.</p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
                {featureCards.map((card, index) => (
                     <Card key={index} className="text-center hover:shadow-lg hover:-translate-y-2 transition-all duration-300">
                        <CardHeader>
                            <CardTitle className="font-headline">{card.title}</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-muted-foreground mb-4">{card.description}</p>
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
    </>
  );
}
