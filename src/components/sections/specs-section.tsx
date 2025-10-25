'use client';

import { SectionWrapper } from "../shared/section-wrapper";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableRow } from "@/components/ui/table";

const specsList = [
  { label: "المحرك", value: "4.0 لتر 6 أسطوانات مسطح (Boxer) طبيعي التنفس" },
  { label: "القوة", value: "518 حصان عند 8500 دورة في الدقيقة" },
  { label: "العزم", value: "465 نيوتن متر عند 6300 دورة في الدقيقة" },
  { label: "التسارع (0-100 كم/س)", value: "3.2 ثانية" },
  { label: "السرعة القصوى", value: "296 كم/ساعة" },
  { label: "الوزن", value: "1450 كجم (DIN)" },
  { label: "نظام الدفع", value: "خلفي" },
  { label: "ناقل الحركة", value: "PDK 7 سرعات" },
  { label: "السعر يبدأ من", value: "حوالي 241,300 دولار أمريكي" },
  { label: "الطول", value: "4,572 مم" },
  { label: "العرض", value: "1,900 مم" },
  { label: "الارتفاع", value: "1,322 مم" },
  { label: "قاعدة العجلات", value: "2,457 مم" },
  { label: "الفرامل", value: "أقراص كربون سيراميك (PCCB) اختيارية" },
  { label: "التعليق", value: "أمامي مزدوج العظمة, خلفي متعدد الوصلات مع تعديلات خاصة بـ RS" },
  { label: "الإطارات", value: "أمامي 275/35 ZR20, خلفي 335/30 ZR21" },
  { label: "القوة لكل لتر", value: "129.5 حصان/لتر" },
];

export default function SpecsSection() {
  return (
    <SectionWrapper id="specs" className="bg-card animate-fade-in-up">
      <Card className="border-none shadow-none bg-transparent">
        <CardHeader className="text-center animate-fade-in-down">
          <CardTitle className="text-3xl md:text-4xl font-headline text-primary">
            مواصفات النموذج الأحدث (992 GT3 RS)
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto rounded-lg border">
            <Table>
              <TableBody>
                {specsList.map((spec, index) => (
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
