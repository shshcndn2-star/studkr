import AppLayout from "@/components/layout/app-layout";
import ContentSummarySection from "@/components/sections/content-summary-section";

export default function SummarizerPage() {
  return (
    <AppLayout>
      <main className="flex-grow">
        <ContentSummarySection />
      </main>
    </AppLayout>
  );
}
