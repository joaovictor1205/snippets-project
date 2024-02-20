import SnippetEditForm from "@/components/SnippetEditForm";
import { db } from "@/db";
import { notFound } from "next/navigation";

interface SnippetEditPageProps {
  params: {
    id: string;
  }
}

export default async function SnippetsDetailPage(props: SnippetEditPageProps) {
  const { params: { id } } = props;

  const snippet = await db.snippet.findFirst({ where: { id: parseInt(id) } });

  if (!snippet) return notFound();

  return (
    <div>
      <SnippetEditForm snippet={snippet} />
    </div>
  );
}
