import { SectionWrapper } from "../shared/section-wrapper";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";

const historyData = [
  {
    value: "992",
    label: "992 GT3 RS (2022-الآن)",
    content: "أحدث جيل مع 518 حصان, أكبر قوة هبوط هوائي.",
  },
  {
    value: "991",
    label: "991 GT3 RS (2013-2019)",
    content: "محرك 4.0 لتر, 500-520 حصان. تحسينات في الديناميكا الهوائية.",
  },
  {
    value: "997",
    label: "997 GT3 RS (2006-2011)",
    content: "محرك 3.6-3.8 لتر, حتى 450 حصان. إضافة نظام PASM.",
  },
  {
    value: "996",
    label: "996 GT3 RS (1999-2005)",
    content: "بدأت مع محرك 3.6 لتر، 381 حصان. لم تباع في الولايات المتحدة.",
  },
];

export default function HistorySection() {
  return (
    <SectionWrapper id="history">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-headline text-primary">تاريخ GT3 RS</h2>
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
