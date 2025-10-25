'use client';

import { SectionWrapper } from "../shared/section-wrapper";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import EvolutionChart from "../charts/evolution-chart";

export default function EvolutionSection() {

  return (
    <SectionWrapper id="evolution" className="bg-card">
      <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
        <div className="order-2 md:order-1 animate-fade-in-up">
          <h2 className="text-3xl md:text-4xl font-headline text-primary mb-4">
            التطور التكنولوجي وأداء المحرك
          </h2>
          <p className="text-muted-foreground">
            شهدت سلسلة GT3 RS تطورًا هائلاً، من محرك 3.6 لتر في جيل 996 إلى محرك 4.0 لتر المتطور في الأجيال الحديثة. لم تقتصر التحسينات على القوة الحصانية فقط، بل شملت أيضًا إدخال تقنيات ثورية مثل نظام التعليق النشط (PASM)، التوجيه الخلفي، والديناميكا الهوائية النشطة المستوحاة من الفورمولا 1.
          </p>
        </div>
        <div className="order-1 md:order-2 animate-fade-in-down">
          <Card>
            <CardHeader>
              <CardTitle className="font-headline">تطور القوة الحصانية (HP)</CardTitle>
              <CardDescription>عبر أجيال GT3 RS</CardDescription>
            </CardHeader>
            <CardContent>
              <EvolutionChart />
            </CardContent>
          </Card>
        </div>
      </div>
    </SectionWrapper>
  );
}
