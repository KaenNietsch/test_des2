// app/preview/[id]/page.tsx
import PreviewDetail from "./PreviewDetail";

export async function generateStaticParams() {
  return [
    { id: "1" },
    { id: "2" },
    { id: "3" },
    { id: "4" },
    { id: "5" },
    { id: "6" },
  ];
}

interface PreviewPageProps {
  params: Promise<{ id: string }>; // <-- Promise ile sarmalıyoruz
}

export default async function PreviewPage({ params }: PreviewPageProps) {
  const resolvedParams = await params; // parametreyi çözüyoruz
  return <PreviewDetail projectId={resolvedParams.id} />;
}
