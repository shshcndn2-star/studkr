import { cn } from "@/lib/utils";

type SectionWrapperProps = {
  id: string;
  children: React.ReactNode;
  className?: string;
};

export function SectionWrapper({ id, children, className }: SectionWrapperProps) {
  return (
    <section id={id} className={cn("py-16 md:py-24", className)}>
      <div className="container mx-auto px-4">
        {children}
      </div>
    </section>
  );
}
