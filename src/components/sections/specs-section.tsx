import { SectionWrapper } from "../shared/section-wrapper";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableRow } from "@/components/ui/table";

const specs = [
  { label: "المحرك", value: "4.0 لتر مسطح-6 طبيعي التنفس، 518 حصان عند 8500 دورة/دقيقة، 343 lb-ft عزم دوران عند 6300 دورة/دقيقة" },
  { label: "التسارع 0-60 ميل/ساعة", value: "3.0 ثواني" },
  { label: "السرعة القصوى", value: "184 ميل/ساعة" },
  { label: "الوزن", value: "1450 كجم" },
  { label: "السعر", value: "حوالي 241,300 دولار" },
  { label: "نظام الدفع", value: "خلفي" },
  { label: "ناقل الحركة", value: "PDK 7 سرعات" },
  { label: "الطول", value: "4,572 مم" },
  { label: "العرض", value: "1,900 مم" },
  { label: "الارتفاع", value: "1,322 مم" },
  { label: "قاعدة العجلات", value: "2,457 مم" },
  { label: "القطر (Bore)", value: "102.0 مم" },
  { label: "الفرامل", value: "كربون سيراميك" },
  { label: "التعليق", value: "أمامي مزدوج العظمة, خلفي متعدد الوصلات" },
  { label: "الإطارات", value: "أمامي 275/30ZR20, خلفي 335/30ZR21" },
  { label: "عدد الأسطوانات", value: "6" },
  { label: "الربع ميل", value: "10.9 ثواني" },
  { label: "القوة لكل لتر", value: "129.0 حصان/لتر" },
];

export default function SpecsSection() {
  return (
    <SectionWrapper id="specs" className="bg-card">
      <Card className="border-none shadow-none bg-transparent">
        <CardHeader className="text-center">
          <CardTitle className="text-3xl md:text-4xl font-headline text-primary">
            مواصفات النموذج الأحدث (992 GT3 RS)
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto rounded-lg border">
            <Table>
              <TableBody>
                {specs.map((spec, index) => (
                  <TableRow key={index}>
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
