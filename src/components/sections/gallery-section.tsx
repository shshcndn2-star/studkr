import Image from "next/image";
import { SectionWrapper } from "../shared/section-wrapper";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Card, CardContent } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

const galleryImages = PlaceHolderImages.filter(p => p.id.startsWith('gallery-'));

export default function GallerySection() {
  return (
    <SectionWrapper id="gallery">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-headline text-primary">معرض الصور من مختلف العصور</h2>
      </div>
      <Carousel className="w-full max-w-4xl mx-auto" dir="rtl">
        <CarouselContent>
          {galleryImages.map((image) => (
            <CarouselItem key={image.id}>
              <Card>
                <CardContent className="p-0 aspect-[4/3] relative rounded-lg overflow-hidden">
                  <Image
                    src={image.imageUrl}
                    alt={image.description}
                    fill
                    className="object-cover"
                    data-ai-hint={image.imageHint}
                  />
                  <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/70 to-transparent">
                    <p className="text-white font-bold text-lg">{image.description}</p>
                  </div>
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="hidden sm:flex" />
        <CarouselNext className="hidden sm:flex" />
      </Carousel>
    </SectionWrapper>
  );
}
