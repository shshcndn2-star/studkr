'use client';

import Image from "next/image";
import { SectionWrapper } from "../shared/section-wrapper";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { useLanguage } from "@/context/language-context";
import { translations } from "@/lib/translations";
import { ArrowLeft } from "lucide-react";
import { Button } from "../ui/button";
import Link from "next/link";
import { notFound } from "next/navigation";

export default function ImageDetailSection({ imageId }: { imageId: string }) {
  const { language } = useLanguage();
  const t = translations[language];

  const image = PlaceHolderImages.find(p => p.id === imageId);

  if (!image) {
    notFound();
  }

  const details = [
    { label: t.imageDetail.model, value: image.model },
    { label: t.imageDetail.generation, value: image.generation },
    { label: t.imageDetail.year, value: image.year.toString() },
  ];

  return (
    <SectionWrapper id="image-detail">
      <div className="max-w-5xl mx-auto">
        <div className="mb-8">
            <Button asChild variant="ghost">
                <Link href="/gallery">
                    <ArrowLeft className="me-2" />
                    {t.imageDetail.backToGallery}
                </Link>
            </Button>
        </div>
        <Card className="overflow-hidden animate-fade-in">
          <div className="grid md:grid-cols-2">
            <div className="aspect-[4/3] relative">
              <Image
                src={image.imageUrl}
                alt={image.description[language]}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
                data-ai-hint={image.imageHint}
                priority
              />
            </div>
            <div className="flex flex-col p-6">
              <CardHeader>
                <CardTitle className="text-3xl font-headline text-primary">{image.model}</CardTitle>
                <CardDescription>{image.description[language]}</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <dl className="space-y-4">
                  {details.map((detail, index) => (
                     <div key={index}>
                        <dt className="text-sm font-semibold text-muted-foreground">{detail.label}</dt>
                        <dd className="text-lg text-foreground">{detail.value}</dd>
                    </div>
                  ))}
                </dl>
              </CardContent>
            </div>
          </div>
        </Card>
      </div>
    </SectionWrapper>
  );
}

    