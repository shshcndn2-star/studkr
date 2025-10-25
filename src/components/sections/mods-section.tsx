'use client';

import { SectionWrapper } from "../shared/section-wrapper";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle } from 'lucide-react';

const commonMods = [
  "نظام عادم رياضي (Akrapovič, Fabspeed)",
  "برمجة وحدة التحكم بالمحرك (ECU Tune)",
  "أجزاء ديناميكية هوائية من ألياف الكربون",
  "جنوط خفيفة الوزن (BBS, HRE)",
  "ترقيات نظام التعليق (Coilovers)",
  "تعديلات داخلية (مقاعد كربون، ألكانتارا)",
  "أفلام حماية الطلاء (PPF)"
];

export default function ModsSection() {
  
  return (
    <SectionWrapper id="mods" className="bg-card">
      <div className="grid md:grid-cols-2 gap-12 items-start">
        <div className="animate-fade-in-up">
          <h2 className="text-3xl md:text-4xl font-headline text-primary mb-4">التعديلات والتخصيص</h2>
          <div className="space-y-4 text-muted-foreground">
            <p>على الرغم من أن GT3 RS تأتي من المصنع بمواصفات قريبة من سيارات السباق، إلا أن هناك دائماً مجال للتخصيص. يركز العديد من المالكين على تحسينات تزيد من الأداء أو تضفي طابعاً شخصياً فريداً.</p>
            <p>من أنظمة العادم التي تطلق العنان لصوت المحرك الأصيل، إلى الترقيات البرمجية للمحرك (ECU tuning) التي تستخرج كل قطرة من القوة، عالم تعديلات البورش واسع ومثير.</p>
          </div>
        </div>
        <Card className="animate-fade-in-up [animation-delay:0.2s]">
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
