import Link from "next/link";

export default function Navigation() {
  return (
    <nav className="fixed left-0 right-0 top-0 z-50 h-16 bg-neutral-950/80 backdrop-blur-md border-b border-neutral-800">
      <div className="max-w-7xl mx-auto px-6 h-full flex items-center justify-between">
        <Link
          href="/"
          className="text-neutral-400 hover:text-white transition-colors flex items-center gap-2"
        >
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M10 19l-7-7m0 0l7-7m-7 7h18"
            />
          </svg>
          Back to Home
        </Link>
      </div>
    </nav>
  );
}
