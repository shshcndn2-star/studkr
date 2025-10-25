import { SectionWrapper } from "../shared/section-wrapper";

export default function VideoSection() {
  return (
    <SectionWrapper id="video" className="bg-card">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-headline text-primary">شاهد GT3 RS בפעולה</h2>
      </div>
      <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden max-w-4xl mx-auto shadow-2xl">
        <iframe 
          className="w-full h-full"
          src="https://www.youtube.com/embed/L6AId2dfIXU" 
          title="YouTube video player" 
          frameBorder="0" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
          allowFullScreen>
        </iframe>
      </div>
    </SectionWrapper>
  );
}
