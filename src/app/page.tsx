import AppLayout from "@/components/layout/app-layout";
import HomeSection from "@/components/sections/home-section";

export default function Home() {
  return (
    <AppLayout>
      <main className="flex-grow">
        <HomeSection />
      </main>
    </AppLayout>
  );
}
