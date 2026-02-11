import Link from "next/link";
import LeadCaptureForm from "@/components/LeadCaptureForm";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Workshops & Coaching | Alignment Press",
  description:
    "Join workshops and coaching sessions by Kevin Adou. Transform your approach to prosperity through guided alignment practices.",
};

const workshops = [
  {
    title: "The Alignment Intensive",
    duration: "2-Day Workshop",
    format: "Virtual / In-Person",
    description:
      "A deep-dive experience designed to help you identify and clear the inner blocks preventing aligned prosperity. Walk through each of the four pillars with guided exercises, group discussions, and personalized action plans.",
    topics: [
      "Purifying your intention",
      "Designing your D.A.P. Vision",
      "Building faith as a discipline",
      "Creating your aligned action plan",
    ],
  },
  {
    title: "Conscious Builder Masterclass",
    duration: "6-Week Program",
    format: "Virtual Cohort",
    description:
      "A structured, community-driven program that takes you through the full framework of Prosper Without Compromise. Each week focuses on one key principle, with live sessions, accountability partners, and practical assignments.",
    topics: [
      "Weekly live sessions with Kevin",
      "Private community access",
      "Personal accountability partner",
      "Workbook & templates included",
    ],
  },
  {
    title: "1-on-1 Alignment Coaching",
    duration: "Ongoing",
    format: "Private Sessions",
    description:
      "Personalized coaching for entrepreneurs, leaders, and professionals who want to align their business strategy with their deeper calling. Work directly with Kevin on your specific challenges and goals.",
    topics: [
      "Personalized guidance",
      "Strategic business alignment",
      "Faith-integrated planning",
      "Bi-weekly sessions",
    ],
  },
];

export default function WorkshopsPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-20 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-navy-950 via-navy-900 to-navy-950" />
        <div className="absolute top-40 right-1/4 w-[500px] h-[500px] bg-gold-500/[0.04] rounded-full blur-3xl" />

        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <p className="text-gold-400 font-semibold text-sm uppercase tracking-wider mb-4">
            Workshops & Coaching
          </p>
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Transform Through{" "}
            <span className="text-gradient-gold">Guided Alignment</span>
          </h1>
          <p className="text-gray-300 text-lg sm:text-xl max-w-2xl mx-auto">
            Go beyond the book. Experience the principles of aligned prosperity
            through immersive workshops, cohort programs, and personalized
            coaching.
          </p>
        </div>
      </section>

      {/* Workshops Grid */}
      <section className="py-24 px-4 relative">
        <div className="absolute inset-0 bg-navy-950" />
        <div className="relative z-10 max-w-6xl mx-auto">
          <div className="space-y-8">
            {workshops.map((workshop, i) => (
              <div
                key={i}
                className="border-glow rounded-2xl p-8 sm:p-10 bg-white/[0.02] hover:bg-white/[0.04] transition-all duration-500 hover:border-gold-400/30"
              >
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                  {/* Info */}
                  <div className="lg:col-span-2">
                    <div className="flex flex-wrap items-center gap-3 mb-4">
                      <span className="px-3 py-1 bg-gold-500/10 text-gold-400 text-xs font-semibold rounded-full">
                        {workshop.duration}
                      </span>
                      <span className="px-3 py-1 bg-white/5 text-gray-400 text-xs font-medium rounded-full">
                        {workshop.format}
                      </span>
                    </div>
                    <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white mb-4">
                      {workshop.title}
                    </h3>
                    <p className="text-gray-400 leading-relaxed mb-6">
                      {workshop.description}
                    </p>
                  </div>

                  {/* Topics */}
                  <div className="lg:border-l lg:border-white/5 lg:pl-8">
                    <h4 className="text-gold-400/80 font-semibold text-sm uppercase tracking-wider mb-4">
                      What&apos;s Included
                    </h4>
                    <ul className="space-y-3">
                      {workshop.topics.map((topic, j) => (
                        <li key={j} className="flex items-start gap-2">
                          <svg
                            className="w-4 h-4 text-gold-400 mt-1 shrink-0"
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
                          <span className="text-gray-300 text-sm">
                            {topic}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-white/5">
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 text-gold-400 hover:text-gold-300 font-semibold text-sm transition-colors"
                  >
                    Inquire About This Program
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
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-navy-950 via-navy-900 to-navy-950" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(201,168,76,0.04)_0%,_transparent_70%)]" />

        <div className="relative z-10 max-w-2xl mx-auto text-center">
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-white mb-4">
            Be First to Know
          </h2>
          <p className="text-gray-400 text-base mb-8 max-w-md mx-auto">
            Workshop dates and enrollment details are coming soon. Join the list
            to get early access and exclusive pricing.
          </p>
          <div className="max-w-md mx-auto">
            <LeadCaptureForm source="workshops-page" compact />
          </div>
        </div>
      </section>
    </>
  );
}
