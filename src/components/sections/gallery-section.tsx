import Image from "next/image";
import { SectionWrapper } from "../shared/section-wrapper";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Card, CardContent } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

const galleryImages = PlaceHolderImages.filter(p => p.id.startsWith('gallery-'));

export default function GallerySection() {
  return (
    <SectionWrapper id="gallery">
      <div className="text-center mb-12 animate-fade-in-down">
        <h2 className="text-3xl md:text-4xl font-headline text-primary">معرض الصور من مختلف العصور</h2>
        <p className="text-muted-foreground mt-2">استكشف جمال بورش 911 GT3 RS عبر الأجيال المختلفة.</p>
      </div>
      <Carousel 
        className="w-full max-w-5xl mx-auto" 
        dir="rtl"
        opts={{
            align: "start",
            loop: true,
        }}
        >
        <CarouselContent>
          {galleryImages.map((image, index) => (
            <CarouselItem key={image.id} className="md:basis-1/2 lg:basis-1/3">
              <div className="p-1">
                <Card className="overflow-hidden group">
                  <CardContent className="p-0 aspect-[4/3] relative">
                    <Image
                      src={image.imageUrl}
                      alt={image.description}
                      fill
                      className="object-cover transition-transform duration-300 ease-in-out group-hover:scale-110"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      data-ai-hint={image.imageHint}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute bottom-0 left-0 right-0 p-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 ease-in-out">
                      <p className="text-white font-bold text-lg">{image.description}</p>
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
