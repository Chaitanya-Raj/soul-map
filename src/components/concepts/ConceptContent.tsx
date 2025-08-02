import { Concept } from "@/types";
import { Suspense } from "react";
import ConceptMDX from "@/components/concepts/MarkdownRenderer";

interface ConceptContentProps {
  concept: Concept;
}

const conceptIcons = {
  psyche: () => (
    <svg viewBox="0 0 100 100" className="w-32 h-32">
      <circle
        cx="50"
        cy="50"
        r="40"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      />
      <circle
        cx="50"
        cy="50"
        r="25"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        opacity="0.7"
      />
      <circle cx="50" cy="50" r="10" fill="currentColor" opacity="0.5" />
    </svg>
  ),
  ego: () => (
    <svg viewBox="0 0 100 100" className="w-32 h-32">
      <path
        d="M50 20 L80 70 L20 70 Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      />
      <circle cx="50" cy="50" r="5" fill="currentColor" />
    </svg>
  ),
  persona: () => (
    <svg viewBox="0 0 100 100" className="w-32 h-32">
      <path
        d="M50 20 Q30 30 30 50 T50 80 Q70 70 70 50 T50 20"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      />
      <circle cx="35" cy="45" r="3" fill="currentColor" />
      <circle cx="65" cy="45" r="3" fill="currentColor" />
    </svg>
  ),
  shadow: () => (
    <svg viewBox="0 0 100 100" className="w-32 h-32">
      <rect
        x="30"
        y="30"
        width="40"
        height="40"
        fill="currentColor"
        opacity="0.3"
      />
      <rect
        x="40"
        y="40"
        width="40"
        height="40"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      />
    </svg>
  ),
  "anima-animus": () => (
    <svg viewBox="0 0 100 100" className="w-32 h-32">
      <circle
        cx="40"
        cy="50"
        r="25"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      />
      <circle
        cx="60"
        cy="50"
        r="25"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeDasharray="5,5"
      />
    </svg>
  ),
  self: () => (
    <svg viewBox="0 0 100 100" className="w-32 h-32">
      <circle
        cx="50"
        cy="50"
        r="40"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      />
      <rect
        x="30"
        y="30"
        width="40"
        height="40"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        transform="rotate(45 50 50)"
      />
      <circle cx="50" cy="50" r="10" fill="currentColor" opacity="0.5" />
    </svg>
  ),
};

export default function ConceptContent({ concept }: ConceptContentProps) {
  const Icon = conceptIcons[concept.slug as keyof typeof conceptIcons];

  const iconColorClass =
    {
      psyche: "text-blue-500",
      ego: "text-amber-500",
      persona: "text-teal-500",
      shadow: "text-violet-500",
      "anima-animus": "text-rose-500",
      self: "text-white",
    }[concept.slug] || "text-neutral-400";

  return (
    <>
      {/* Hero Section */}
      <section className="py-20 pt-24 px-6 bg-gradient-to-b from-neutral-950 via-neutral-950 to-neutral-950/80">
        <div className="max-w-4xl mx-auto text-center">
          <div
            className={`flex justify-center mb-8 ${iconColorClass} animate-float`}
          >
            {Icon && <Icon />}
          </div>

          <h1 className="text-3xl md:text-4xl font-serif mb-6 text-neutral-200">
            {concept.title}
          </h1>

          <p className="text-base md:text-lg text-neutral-300 leading-relaxed mb-8 max-w-2xl mx-auto">
            {concept.summary}
          </p>

          <div className="flex justify-center gap-2 text-xs md:text-sm text-neutral-500">
            <span className="capitalize">{concept.category}</span>
            <span>•</span>
            <span className="capitalize">{concept.difficulty}</span>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-12 px-6">
        <div className="max-w-4xl mx-auto">
          <article className="prose prose-sm md:prose-base prose-neutral max-w-none prose-headings:font-semibold prose-h1:font-serif prose-p:leading-relaxed">
            <Suspense
              fallback={<div className="text-neutral-400">Loading...</div>}
            >
              <ConceptMDX slug={concept.slug} />
            </Suspense>
          </article>
        </div>
      </section>
    </>
  );
}
