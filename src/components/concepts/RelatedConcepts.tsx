import Link from "next/link";
import { Concept } from "@/types";
import ConceptCard from "@/components/concepts/ConceptCard";

interface RelatedConceptsProps {
  concepts: Concept[];
}

export default function RelatedConcepts({ concepts }: RelatedConceptsProps) {
  if (concepts.length === 0) return null;

  return (
    <section className="py-20 px-6 bg-gradient-to-t from-neutral-950 via-neutral-950 to-neutral-950/80">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-2xl font-semibold mb-12 text-center text-neutral-200">
          Explore Related Concepts
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {concepts.map((concept) => (
            <Link key={concept.id} href={`/concepts/${concept.slug}`}>
              <ConceptCard concept={concept} />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
