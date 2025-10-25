import AppLayout from "@/components/layout/app-layout";
import ImageDetailSection from "@/components/sections/image-detail-section";

export default function ImageDetailPage({ params }: { params: { id: string } }) {
  return (
    <AppLayout>
      <ImageDetailSection imageId={params.id} />
    </AppLayout>
  );
}

    