import { SectionWrapper } from "../shared/section-wrapper";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import EvolutionChart from "../charts/evolution-chart";

export default function EvolutionSection() {
  return (
    <SectionWrapper id="evolution" className="bg-card">
      <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
        <div className="order-2 md:order-1">
          <h2 className="text-3xl md:text-4xl font-headline text-primary mb-4">
            التطور التكنولوجي وأداء المحرك
          </h2>
          <p className="text-muted-foreground">
            تطور المحرك من 3.6 لتر إلى 4.0 لتر مع زيادة القوة من 360 إلى 518 حصان. إضافة تقنيات مثل التعليق النشط, التوجيه الخلفي, والديناميكا الهوائية المتقدمة.
          </p>
        </div>
        <div className="order-1 md:order-2">
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
