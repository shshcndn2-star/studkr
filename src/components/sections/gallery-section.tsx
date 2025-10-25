'use client';

import Image from "next/image";
import Link from "next/link";
import { SectionWrapper } from "../shared/section-wrapper";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Card, CardContent } from "@/components/ui/card";

const galleryImages = PlaceHolderImages.filter(p => p.id.startsWith('gallery-'));

export default function GallerySection() {
  return (
    <SectionWrapper id="gallery" className="animate-fade-in-up">
      <div className="text-center mb-12 animate-fade-in-down">
        <h2 className="text-3xl md:text-4xl font-headline text-primary">معرض أيقونات GT3 RS</h2>
        <p className="text-muted-foreground mt-2">استكشف جمال وتنوع سيارة بورش 911 GT3 RS عبر الأجيال والألوان المختلفة.</p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">
        {galleryImages.map((image, index) => (
          <Link 
            href={`/gallery/${image.id}`} 
            key={image.id}
            className="block group" 
            style={{animationDelay: `${index * 50}ms`}}
          >
            <Card 
              className="overflow-hidden h-full border-2 border-transparent hover:border-primary transition-all duration-300 hover:shadow-2xl hover:shadow-primary/20"
            >
              <CardContent className="p-0 aspect-[4/3] relative">
                <Image
                  src={image.imageUrl}
                  alt={image.description['ar']}
                  fill
                  className="object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 25vw"
                  data-ai-hint={image.imageHint}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-0 left-0 right-0 p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out">
                  <p className="text-white font-bold text-lg drop-shadow-lg">{image.description['ar']}</p>
                </div>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </SectionWrapper>
  );
}
