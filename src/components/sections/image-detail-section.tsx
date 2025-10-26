'use client';

import Image from "next/image";
import { SectionWrapper } from "../shared/section-wrapper";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { ArrowLeft, Calendar, Hash } from "lucide-react";
import { Button } from "../ui/button";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Badge } from "../ui/badge";

export default function ImageDetailSection({ imageId }: { imageId: string }) {

  const image = PlaceHolderImages.find(p => p.id === imageId);

  if (!image) {
    notFound();
  }

  const details = [
    { label: "الجيل", value: image.generation, icon: Hash },
    { label: "سنة الصنع", value: image.year.toString(), icon: Calendar },
  ];

  return (
    <SectionWrapper id="image-detail" className="animate-fade-in-up">
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
            <Button asChild variant="ghost">
                <Link href="/gallery">
                    <ArrowLeft className="me-2 size-4" />
                    العودة إلى المعرض
                </Link>
            </Button>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12">
            <div className="lg:col-span-3 relative aspect-video rounded-xl overflow-hidden shadow-2xl shadow-primary/20">
              <Image
                src={image.imageUrl}
                alt={image.description['ar']}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 60vw"
                data-ai-hint={image.imageHint}
                priority
              />
            </div>
            <div className="lg:col-span-2">
              <div className="flex flex-col h-full">
                <CardHeader className="p-0 mb-4">
                  <CardTitle className="text-3xl md:text-4xl font-headline text-primary">{image.model}</CardTitle>
                  <CardDescription className="text-lg">{image.description['ar']}</CardDescription>
                </CardHeader>
                <CardContent className="flex-grow space-y-6 p-0">
                    <p className="text-muted-foreground leading-relaxed">{image.detailedDescription?.ar}</p>
                    
                    <div className="grid grid-cols-2 gap-4 text-center">
                        {details.map((detail) => (
                             <div key={detail.label} className="bg-card rounded-lg p-3 border">
                                <detail.icon className="mx-auto h-6 w-6 text-primary mb-2" />
                                <dt className="text-sm font-semibold text-muted-foreground">{detail.label}</dt>
                                <dd className="text-lg text-foreground font-bold">{detail.value}</dd>
                            </div>
                        ))}
                    </div>

                    {image.specs && image.specs.length > 0 && (
                         <div>
                            <h4 className="font-headline text-xl mb-3 text-foreground">مواصفات إضافية</h4>
                            <div className="flex flex-wrap gap-2">
                                {image.specs.map(spec => (
                                    <Badge key={spec.label.ar} variant="secondary" className="text-base px-3 py-1">
                                        <span className="font-semibold me-2">{spec.label.ar}:</span>
                                        <span>{spec.value}</span>
                                    </Badge>
                                ))}
                            </div>
                        </div>
                    )}
                </CardContent>
              </div>
            </div>
          </div>
      </div>
    </SectionWrapper>
  );
}
