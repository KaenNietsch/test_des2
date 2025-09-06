import { PageProps } from "next";
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

export default function PreviewPage(
  { params }: Awaited<PageProps<{ id: number }>>
) {
  return <PreviewDetail projectId={params.id} />;
}
