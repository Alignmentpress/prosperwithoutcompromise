import Image from "next/image";
import Link from "next/link";
import LeadCaptureForm from "@/components/LeadCaptureForm";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "The Book | Prosper Without Compromise",
  description:
    "Discover 'Prosper Without Compromise' by Kevin Adou — Faith, Strategy, and the Inner Alignment That Sustains Abundance.",
};

const chapters = [
  {
    number: 1,
    title: "Intention: The Source Before Strategy",
    description:
      "Everything begins within. Before the first action, before strategy, there is an invisible impulse: intention. It determines the direction and quality of everything we build.",
  },
  {
    number: 2,
    title: "Vision: The D.A.P. Compass",
    description:
      "After intention comes vision — structured around Desire, Love, and Potential. When these three dimensions align, vision becomes a clear heading and embodied mission.",
  },
  {
    number: 3,
    title: "Strategy: The A.M.T. Framework",
    description:
      "Give form to your vision. Structure long- and short-term objectives through proven frameworks. Planning is the design of the channel through which abundance can flow.",
  },
  {
    number: 4,
    title: "The Blueprint: Aligning Plan with Purpose",
    description:
      "Build a concrete, actionable plan that bridges divine intention with worldly execution. Unite meaning, performance, and responsibility.",
  },
  {
    number: 5,
    title: "Faith: The Spiritual Engine",
    description:
      "The discipline of attention that refuses to feed doubt. Once the plan is drawn, faith is what animates it. To believe is to inhabit your future before it manifests.",
  },
  {
    number: 6,
    title: "Action: The Final Seal",
    description:
      "Action is the signal sent to heaven that you are ready to receive. By embodying convictions through consistent, concrete steps, you move from theory to harvest.",
  },
];

export default function BookPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-20 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-navy-950 via-navy-900 to-navy-950" />
        <div className="absolute top-20 right-0 w-[500px] h-[500px] bg-gold-500/[0.04] rounded-full blur-3xl" />

        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Content */}
            <div>
              <p className="text-gold-400 font-semibold text-sm uppercase tracking-wider mb-4">
                The Book
              </p>
              <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                Prosper Without{" "}
                <span className="text-gradient-gold">Compromise</span>
              </h1>
              <p className="text-gray-300 text-xl mb-2 italic">
                Faith, Strategy, and the Inner Alignment That Sustains Abundance
              </p>
              <p className="text-gray-400 text-base mb-8">by Kevin Adou</p>
              <p className="text-gray-300 leading-relaxed mb-8">
                This book was born from a fundamental question: why do some
                people, despite status, money, or recognition, live in constant
                tension — while others move forward with peace, clarity, and
                fruitfulness? It invites a shift in posture: from survival to
                creation, from dispersion to alignment, from anxious control to
                conscious cooperation with deeper laws.
              </p>

              {/* Purchase Links */}
              <div className="flex flex-wrap gap-4 mb-6">
                <a
                  href="#"
                  className="px-6 py-3 bg-gradient-to-r from-gold-500 to-gold-600 text-navy-950 font-semibold rounded-lg hover:from-gold-400 hover:to-gold-500 transition-all duration-300 shadow-lg shadow-gold-500/20"
                >
                  Buy on Amazon
                </a>
                <a
                  href="#"
                  className="px-6 py-3 border border-white/10 text-white rounded-lg hover:bg-white/5 hover:border-gold-400/30 transition-all duration-300"
                >
                  Buy Digital (PDF)
                </a>
              </div>
              <p className="text-gray-500 text-sm">
                Available worldwide in paperback, hardcover, and digital
                formats.
              </p>
            </div>

            {/* Book Image */}
            <div className="flex justify-center">
              <div className="golden-glow rounded-2xl overflow-hidden">
                <Image
                  src="/images/book-cover.jpg"
                  alt="Prosper Without Compromise book cover"
                  width={400}
                  height={520}
                  className="rounded-2xl"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Promise */}
      <section className="py-20 px-4 relative">
        <div className="absolute inset-0 bg-navy-950" />
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-white mb-8">
            What This Book Will Help You Do
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              "Clarify and purify your intention",
              "Cultivate attention that turns faith into conviction",
              "Take concrete and fruitful action",
              "Build aligned professional and financial projects",
              "Unite meaning, performance, and responsibility",
              "Move from survival to creation",
            ].map((item, i) => (
              <div
                key={i}
                className="border-glow rounded-lg p-5 bg-white/[0.02] text-left"
              >
                <div className="flex items-start gap-3">
                  <svg
                    className="w-5 h-5 text-gold-400 mt-0.5 shrink-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <p className="text-gray-300 text-sm">{item}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Chapter Breakdown */}
      <section className="py-24 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-navy-950 via-navy-900 to-navy-950" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-gold-500/[0.03] rounded-full blur-3xl" />

        <div className="relative z-10 max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-gold-400 font-semibold text-sm uppercase tracking-wider mb-4">
              Inside the Book
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-white mb-4">
              Chapter Overview
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              A structured journey from invisible intention to concrete reality,
              through six transformative chapters.
            </p>
          </div>

          <div className="space-y-4">
            {chapters.map((chapter) => (
              <div
                key={chapter.number}
                className="group border-glow rounded-xl p-6 bg-white/[0.02] hover:bg-white/[0.04] transition-all duration-500 hover:border-gold-400/30"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-gold-500/10 flex items-center justify-center shrink-0 group-hover:bg-gold-500/20 transition-colors">
                    <span className="text-gold-400 font-serif font-bold">
                      {chapter.number}
                    </span>
                  </div>
                  <div>
                    <h3 className="font-serif text-lg font-bold text-white mb-2">
                      {chapter.title}
                    </h3>
                    <p className="text-gray-400 text-sm leading-relaxed">
                      {chapter.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-4 relative">
        <div className="absolute inset-0 bg-navy-950" />
        <div className="relative z-10 max-w-2xl mx-auto text-center">
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-white mb-6">
            Ready to Begin Your Journey?
          </h2>
          <p className="text-gray-400 mb-8 max-w-md mx-auto">
            Get notified about launch events, exclusive content, and early
            access to workshops.
          </p>
          <div className="max-w-md mx-auto">
            <LeadCaptureForm source="book-page" compact />
          </div>
        </div>
      </section>
    </>
  );
}
