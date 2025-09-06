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

// Kendi tipini kullan
interface PreviewPageProps {
  params: { id: string };
}

export default function PreviewPage({ params }: PreviewPageProps) {
  return <PreviewDetail projectId={params.id} />;
}
