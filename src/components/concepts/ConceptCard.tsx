import { Concept } from "@/types";

interface ConceptCardProps {
  concept: Concept;
}

const conceptIcons: Record<string, () => JSX.Element> = {
  psyche: () => (
    <svg viewBox="0 0 100 100" className="w-20 h-20">
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
    <svg viewBox="0 0 100 100" className="w-20 h-20">
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
    <svg viewBox="0 0 100 100" className="w-20 h-20">
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
    <svg viewBox="0 0 100 100" className="w-20 h-20">
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
    <svg viewBox="0 0 100 100" className="w-20 h-20">
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
    <svg viewBox="0 0 100 100" className="w-20 h-20">
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

const conceptColors: Record<
  string,
  { icon: string; hover: string; glow: string }
> = {
  psyche: {
    icon: "text-blue-500",
    hover: "hover:border-blue-500/50",
    glow: "hover:shadow-blue-500/10",
  },
  ego: {
    icon: "text-amber-500",
    hover: "hover:border-amber-500/50",
    glow: "hover:shadow-amber-500/10",
  },
  persona: {
    icon: "text-teal-500",
    hover: "hover:border-teal-500/50",
    glow: "hover:shadow-teal-500/10",
  },
  shadow: {
    icon: "text-violet-500",
    hover: "hover:border-violet-500/50",
    glow: "hover:shadow-violet-500/10",
  },
  "anima-animus": {
    icon: "text-rose-500",
    hover: "hover:border-rose-500/50",
    glow: "hover:shadow-rose-500/10",
  },
  self: {
    icon: "text-white",
    hover: "hover:border-white/50",
    glow: "hover:shadow-white/10",
  },
};

export default function ConceptCard({ concept }: ConceptCardProps) {
  const Icon = conceptIcons[concept.slug];
  const colors = conceptColors[concept.slug];

  return (
    <div
      className={`
      bg-neutral-900 border border-neutral-800 rounded-xl p-8
      transition-all duration-300 cursor-pointer
      hover:-translate-y-1 hover:shadow-2xl hover:shadow-black/50 h-full
      ${colors?.hover} ${colors?.glow}
    `}
    >
      <div className={`flex justify-center mb-6 ${colors?.icon}`}>
        {Icon && <Icon />}
      </div>

      <h3 className="text-lg font-semibold uppercase tracking-wider text-center mb-4 text-neutral-200">
        {concept.title}
      </h3>

      <p className="text-sm text-neutral-400 leading-relaxed text-center mb-6">
        {concept.summary}
      </p>

      <div className="border-t border-neutral-800 pt-4">
        <div className="flex justify-center gap-2 text-xs text-neutral-500">
          <span>{concept.category}</span>
          <span>•</span>
          <span>{concept.difficulty}</span>
        </div>
      </div>
    </div>
  );
}
