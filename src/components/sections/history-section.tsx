'use client';

import { SectionWrapper } from "../shared/section-wrapper";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";

const historyData = [
  {
    value: "992",
    label: "992 GT3 RS (2022-الآن)",
    content: "الجيل الأحدث يركز بشكل غير مسبوق على الديناميكا الهوائية، مع جناح خلفي نشط ونظام DRS. بقوة 518 حصان، يُعتبر سيارة سباق مخصصة للطرقات العامة.",
  },
  {
    value: "991",
    label: "991 GT3 RS (2013-2019)",
    content: "شهد هذا الجيل تقديم محرك 4.0 لتر بقوة تصل إلى 520 حصان في نسخة 991.2. تميز بتصميمه الجريء وأدائه المذهل على الحلبات.",
  },
  {
    value: "997",
    label: "997 GT3 RS (2006-2011)",
    content: "قدم محرك 3.6 ثم 3.8 لتر، وصولاً إلى نسخة 4.0 الأسطورية في نهاية الجيل بقوة 500 حصان. يعتبره الكثيرون قمة تجربة القيادة التناظرية.",
  },
  {
    value: "996",
    label: "996 GT3 RS (1999-2005)",
    content: "الجيل الأول الذي حمل شارة RS. بدأ بمحرك 3.6 لتر بقوة 381 حصان، وكان بمثابة نسخة homologation لسيارات السباق ولم يُبع في أمريكا الشمالية.",
  },
];

export default function HistorySection() {
  return (
    <SectionWrapper id="history" className="animate-fade-in-up">
      <div className="text-center mb-12 animate-fade-in-down">
        <h2 className="text-3xl md:text-4xl font-headline text-primary">تاريخ GT3 RS عبر الأجيال</h2>
      </div>
      <Tabs defaultValue="992" className="w-full max-w-4xl mx-auto" dir="rtl">
        <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 h-auto">
          {historyData.map((tab) => (
            <TabsTrigger key={tab.value} value={tab.value} className="text-xs md:text-sm">{tab.label}</TabsTrigger>
          ))}
        </TabsList>
        {historyData.map((tab) => (
          <TabsContent key={tab.value} value={tab.value}>
            <Card className="mt-4">
              <CardHeader>
                <CardTitle className="font-headline">{tab.label}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{tab.content}</p>
              </CardContent>
            </Card>
          </TabsContent>
        ))}
      </Tabs>
    </SectionWrapper>
  );
}
