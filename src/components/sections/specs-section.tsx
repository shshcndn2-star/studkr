'use client';

import { useLanguage } from "@/context/language-context";
import { translations } from "@/lib/translations";
import { SectionWrapper } from "../shared/section-wrapper";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableRow } from "@/components/ui/table";


export default function SpecsSection() {
  const { language } = useLanguage();
  const t = translations[language].specs;

  return (
    <SectionWrapper id="specs" className="bg-card">
      <Card className="border-none shadow-none bg-transparent animate-fade-in">
        <CardHeader className="text-center">
          <CardTitle className="text-3xl md:text-4xl font-headline text-primary">
            {t.title}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto rounded-lg border">
            <Table>
              <TableBody>
                {t.specsList.map((spec, index) => (
                  <TableRow key={index} className="animate-fade-in-up" style={{animationDelay: `${index * 50}ms`}}>
                    <TableCell className="font-medium text-foreground whitespace-nowrap">{spec.label}</TableCell>
                    <TableCell className="text-muted-foreground">{spec.value}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </CardContent>
      </Card>
    </SectionWrapper>
  );
}
