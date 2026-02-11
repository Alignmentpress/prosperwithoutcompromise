import ComingSoon from "@/components/ComingSoon";
import Image from "next/image";
import Link from "next/link";
import BookShowcase from "@/components/BookShowcase";
import LeadCaptureForm from "@/components/LeadCaptureForm";

const isComingSoon = process.env.NEXT_PUBLIC_SITE_MODE === "coming-soon";

export default function Home() {
  if (isComingSoon) {
    return <ComingSoon />;
  }

  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-navy-950 via-navy-900 to-navy-950" />
        <div className="absolute top-20 left-1/4 w-[600px] h-[600px] bg-gold-500/[0.04] rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-gold-500/[0.03] rounded-full blur-3xl" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Text Content */}
            <div className="animate-fade-in-up">
              <p className="text-gold-400 font-semibold text-sm uppercase tracking-widest mb-6">
                A New Book by Kevin Adou
              </p>
              <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-6 leading-[1.1]">
                Prosper
                <br />
                Without{" "}
                <span className="text-gradient-gold">Compromise</span>
              </h1>
              <p className="text-gray-300 text-lg sm:text-xl leading-relaxed mb-4 max-w-lg">
                Faith, Strategy, and the Inner Alignment That Sustains
                Abundance.
              </p>
              <p className="text-gray-400 text-base leading-relaxed mb-8 max-w-lg">
                Discover how to build lasting prosperity by aligning your heart,
                mind, and actions. A journey through Intention, Strategy, Faith,
                and Action.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  href="/book"
                  className="px-8 py-4 bg-gradient-to-r from-gold-500 to-gold-600 text-navy-950 font-semibold rounded-lg hover:from-gold-400 hover:to-gold-500 transition-all duration-300 shadow-lg shadow-gold-500/20 text-base"
                >
                  Get the Book
                </Link>
                <Link
                  href="/about"
                  className="px-8 py-4 border border-white/10 text-white rounded-lg hover:bg-white/5 hover:border-gold-400/30 transition-all duration-300 text-base"
                >
                  Meet the Author
                </Link>
              </div>
            </div>

            {/* Book Image */}
            <div className="flex justify-center lg:justify-end animate-fade-in-up animate-delay-200">
              <div className="relative">
                <div className="golden-glow rounded-2xl">
                  <Image
                    src="/images/book-stack.jpg"
                    alt="Prosper Without Compromise by Kevin Adou"
                    width={480}
                    height={580}
                    className="rounded-2xl"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Book Showcase */}
      <BookShowcase />

      {/* Core Principles Section */}
      <section className="py-24 px-4 relative">
        <div className="absolute inset-0 bg-navy-950" />
        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-gold-400 font-semibold text-sm uppercase tracking-wider mb-4">
              The Four Pillars
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
              The Path to Aligned Abundance
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Peaceful and lasting prosperity is generated from within. A
              coherent movement of four stages that transforms an invisible idea
              into concrete reality.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                number: "01",
                title: "Intention",
                subtitle: "To Intend",
                description:
                  "Purify the source. A conscious inner decision—setting direction before energy, strategy, or action follows. Intention becomes the pilot of your destiny.",
                icon: (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                ),
              },
              {
                number: "02",
                title: "Strategy",
                subtitle: "To Plan",
                description:
                  "Give form to your vision. Structure objectives through the D.A.P. framework. Planning is the design of the channel through which abundance can flow.",
                icon: (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l5.447 2.724A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                  </svg>
                ),
              },
              {
                number: "03",
                title: "Faith",
                subtitle: "To Believe",
                description:
                  "The emotional and spiritual engine. The discipline of attention that refuses to feed doubt. To believe is to inhabit your future before it manifests.",
                icon: (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                ),
              },
              {
                number: "04",
                title: "Action",
                subtitle: "To Embody",
                description:
                  "The final seal. Action is the signal that you are ready to receive. Embody your convictions through consistent, concrete steps. Move from theory to harvest.",
                icon: (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                ),
              },
            ].map((pillar, i) => (
              <div
                key={i}
                className="group border-glow rounded-xl p-6 bg-white/[0.02] hover:bg-white/[0.04] transition-all duration-500 hover:border-gold-400/30"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-gold-500/10 flex items-center justify-center text-gold-400 group-hover:bg-gold-500/20 transition-colors">
                    {pillar.icon}
                  </div>
                  <span className="text-gold-600/50 font-mono text-xs">
                    {pillar.number}
                  </span>
                </div>
                <h3 className="font-serif text-xl font-bold text-white mb-1">
                  {pillar.title}
                </h3>
                <p className="text-gold-400/70 text-sm italic mb-3">
                  {pillar.subtitle}
                </p>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial / Quote Section */}
      <section className="py-24 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-navy-950 via-navy-900 to-navy-950" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(201,168,76,0.05)_0%,_transparent_70%)]" />

        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <svg
            className="w-12 h-12 text-gold-500/30 mx-auto mb-8"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
          </svg>
          <blockquote className="font-serif text-2xl sm:text-3xl lg:text-4xl text-white leading-relaxed mb-8">
            There are two kinds of success. One fills bank accounts but leaves
            the heart empty. The other fills the heart—and, in time, often fills
            the accounts as well.
          </blockquote>
          <p className="text-gold-400 font-semibold">— Kevin Adou</p>
          <p className="text-gray-500 text-sm mt-1">
            from <em>Prosper Without Compromise</em>
          </p>
        </div>
      </section>

      {/* Newsletter / CTA Section */}
      <section className="py-24 px-4 relative">
        <div className="absolute inset-0 bg-navy-950" />
        <div className="relative z-10 max-w-2xl mx-auto text-center">
          <p className="text-gold-400 font-semibold text-sm uppercase tracking-wider mb-4">
            Stay Connected
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-white mb-4">
            Join the Movement
          </h2>
          <p className="text-gray-400 text-base mb-8 max-w-md mx-auto">
            Be the first to receive insights on aligned prosperity, exclusive
            content, and updates about workshops and resources.
          </p>
          <div className="max-w-md mx-auto">
            <LeadCaptureForm source="homepage-footer" compact />
          </div>
        </div>
      </section>
    </>
  );
}
