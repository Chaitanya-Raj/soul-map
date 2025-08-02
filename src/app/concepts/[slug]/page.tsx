import { notFound } from "next/navigation";
import { concepts } from "@/lib/concepts";
import ConceptContent from "@/components/concepts/ConceptContent";
import Navigation from "@/components/concepts/Navigation";
import RelatedConcepts from "@/components/concepts/RelatedConcepts";
import Footer from "@/components/common/Footer";

interface ConceptPageProps {
  params: {
    slug: string;
  };
}

export function generateStaticParams() {
  return concepts.map((concept) => ({
    slug: concept.slug,
  }));
}

export default async function ConceptPage({ params }: ConceptPageProps) {
  const { slug } = await params;
  const concept = concepts.find((c) => c.slug === slug);

  if (!concept) {
    notFound();
  }

  const relatedConcepts = concepts.filter((c) =>
    concept.relatedConcepts.includes(c.id)
  );

  return (
    <>
      <Navigation />
      <main>
        <ConceptContent concept={concept} />
        <RelatedConcepts concepts={relatedConcepts} />
      </main>
      <Footer />
    </>
  );
}
