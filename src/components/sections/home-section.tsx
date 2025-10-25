import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";

export default function HomeSection() {
  const heroImage = PlaceHolderImages.find(p => p.id === 'hero');

  return (
    <section id="home" className="relative h-[60vh] md:h-[80vh] flex items-center justify-center text-center text-white">
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
        <h1 className="font-headline text-4xl md:text-6xl font-bold mb-4 text-primary animate-fade-in-down">
          مرحبا بك في The End
        </h1>
        <h2 className="font-headline text-2xl md:text-4xl font-semibold mb-6 animate-fade-in-up">
          تاريخ ومواصفات سيارة Porsche 911 GT3 RS
        </h2>
        <p className="text-lg md:text-xl text-foreground max-w-3xl mx-auto animate-fade-in">
          هذا الموقع مخصص لسيارة Porsche 911 GT3 RS، حيث نغطي مواصفاتها، تاريخها, تطورها, إنجازاتها في السباقات, والتعديلات الشائعة. استمتع بالتصفح!
        </p>
      </div>
    </section>
  );
}
