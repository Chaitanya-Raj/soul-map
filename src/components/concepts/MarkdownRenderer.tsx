"use client";

import { useEffect, useState } from "react";

// Dynamic import function for MDX content
const getConceptContent = (slug: string) => {
  switch (slug) {
    case "psyche":
      return import("@/assets/concepts/psyche.mdx");
    case "ego":
      return import("@/assets/concepts/ego.mdx");
    case "persona":
      return import("@/assets/concepts/persona.mdx");
    case "shadow":
      return import("@/assets/concepts/shadow.mdx");
    case "anima-animus":
      return import("@/assets/concepts/anima-animus.mdx");
    case "self":
      return import("@/assets/concepts/self.mdx");
    default:
      throw new Error(`Unknown concept: ${slug}`);
  }
};

// Client component to load MDX content
export default function ConceptMDX({ slug }: { slug: string }) {
  const [MDXContent, setMDXContent] = useState<React.ComponentType | null>(
    null
  );
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadContent = async () => {
      try {
        const mod = await getConceptContent(slug);
        setMDXContent(() => mod.default);
      } catch (error) {
        console.error("Failed to load MDX content:", error);
      } finally {
        setIsLoading(false);
      }
    };

    loadContent();
  }, [slug]);

  if (isLoading) {
    return <div className="text-neutral-400">Loading...</div>;
  }

  if (!MDXContent) {
    return <div className="text-neutral-400">Failed to load content</div>;
  }

  return <MDXContent />;
}
