import Image from "next/image";
import Link from "next/link";

export default function BookShowcase() {
  return (
    <section className="py-24 px-4 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-navy-900 to-navy-950" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-gold-500/5 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Book Image */}
          <div className="flex justify-center lg:justify-end order-1 lg:order-2">
            <div className="relative">
              <div className="golden-glow rounded-2xl overflow-hidden">
                <Image
                  src="/images/book-formats.jpg"
                  alt="Prosper Without Compromise - Available in multiple formats"
                  width={560}
                  height={380}
                  className="rounded-2xl"
                  priority
                />
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="order-2 lg:order-1">
            <p className="text-gold-400 font-semibold text-sm uppercase tracking-wider mb-4">
              The Book
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
              Prosper Without
              <br />
              <span className="text-gradient-gold">Compromise</span>
            </h2>
            <p className="text-gray-300 text-lg leading-relaxed mb-4">
              Faith, Strategy, and the Inner Alignment That Sustains Abundance.
            </p>
            <p className="text-gray-400 leading-relaxed mb-8">
              This book was born from a fundamental question: why do some people, despite status and
              money, live in constant tension, while others move forward with peace, clarity, and
              fruitfulness? Discover the four pillars of aligned prosperity: Intention, Strategy,
              Faith, and Action.
            </p>

            {/* Pillars */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              {[
                { title: "Intention", desc: "Purify the source" },
                { title: "Strategy", desc: "Design the path" },
                { title: "Faith", desc: "Fuel the journey" },
                { title: "Action", desc: "Seal the harvest" },
              ].map((pillar, i) => (
                <div key={i} className="border-glow rounded-lg p-4 bg-white/[0.02]">
                  <h3 className="text-gold-400 font-semibold text-sm mb-1">
                    {pillar.title}
                  </h3>
                  <p className="text-gray-400 text-xs">{pillar.desc}</p>
                </div>
              ))}
            </div>

            <Link
              href="/book"
              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-gold-500 to-gold-600 text-navy-950 font-semibold rounded-lg hover:from-gold-400 hover:to-gold-500 transition-all duration-300 shadow-lg shadow-gold-500/20"
            >
              Learn More About the Book
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
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
