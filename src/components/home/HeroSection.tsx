export default function HeroSection() {
  return (
    <section className="min-h-screen flex items-center justify-center relative">
        <div className="absolute inset-0 bg-gradient-to-b from-neutral-950 via-neutral-950 to-black"></div>
        <div className="relative z-10 text-center px-6 animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-serif mb-6 text-neutral-300">
            Map of the Soul
          </h1>
          <p className="text-xl text-neutral-400 mb-4">
            A Journey Through the Psyche
          </p>
          <p className="text-base text-neutral-500 mb-12">
            Based on <i>Jung&apos;s Map of the Soul: An Introduction</i> by <i>Murray Stein</i>
          </p>
          <div className="animate-bounce">
            <svg className="w-6 h-6 mx-auto text-neutral-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </div>
      </section>
  )
}