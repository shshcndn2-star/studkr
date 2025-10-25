import { SectionWrapper } from "../shared/section-wrapper";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle } from 'lucide-react';

const commonMods = [
  "نظام العادم (Fabspeed, Boost Logic)",
  "ترقيات ECU ودينو تيونينغ",
  "أجزاء هوائية من الكربون فايبر",
  "ترقيات التعليق والمناولة",
  "تعديلات داخلية (ألكانتارا، مقابض)",
  "إضافات أخرى (واقيات طين، مصابيح شفافة)",
  "رادار وأنظمة أمان",
];

export default function ModsSection() {
  return (
    <SectionWrapper id="mods" className="bg-card">
      <div className="grid md:grid-cols-2 gap-12 items-start">
        <div>
          <h2 className="text-3xl md:text-4xl font-headline text-primary mb-4">التعديلات والتيونينغ</h2>
          <div className="space-y-4 text-muted-foreground">
            <p>
              يركز طراز RS بشكل كبير على توفير الوزن. شهد جيل 991 إدخال ناقل الحركة PDK كتجهيز قياسي، وهي خطوة أثارت جدلاً في البداية ولكنها أثبتت فعاليتها على الحلبة.
            </p>
            <p>
              تعديلات شائعة مثل تركيب ناشر الهواء (diffuser) من طراز 911R أصبحت منتشرة لتحسين الجمالية والأداء. الجيل الأحدث 992 مستوحى بشكل كبير من سيارات الفورمولا 1، خاصة في الديناميكا الهوائية النشطة.
            </p>
          </div>
        </div>
        <Card>
          <CardHeader>
            <CardTitle className="font-headline">تعديلات شائعة</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-3">
              {commonMods.map((mod, index) => (
                <li key={index} className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary mt-1 me-3 shrink-0" />
                  <span className="text-muted-foreground">{mod}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </div>
    </SectionWrapper>
  );
}
