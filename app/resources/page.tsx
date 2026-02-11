import Link from "next/link";
import LeadCaptureForm from "@/components/LeadCaptureForm";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Resources | Alignment Press",
  description:
    "Free resources, guides, and tools from Alignment Press to help you on your journey toward aligned prosperity.",
};

const resources = [
  {
    title: "The Alignment Self-Assessment",
    type: "Free Tool",
    description:
      "A guided questionnaire to evaluate where you stand across the four pillars: Intention, Strategy, Faith, and Action. Identify your strengths and areas for growth.",
    status: "Coming Soon",
  },
  {
    title: "D.A.P. Vision Workbook",
    type: "Free Download",
    description:
      "A practical workbook to help you clarify your Desire, Love, and Potential — the three dimensions that transform abstract vision into a clear, embodied mission.",
    status: "Coming Soon",
  },
  {
    title: "The Conscious Builder's Journal",
    type: "Premium Tool",
    description:
      "A structured journaling framework designed to accompany your reading of Prosper Without Compromise. Daily prompts, weekly reflections, and monthly reviews.",
    status: "Coming Soon",
  },
  {
    title: "Intention Setting Guide",
    type: "Free Download",
    description:
      "A step-by-step guide to purifying your intentions and setting a clear inner direction. Based on Chapter 1 of Prosper Without Compromise.",
    status: "Coming Soon",
  },
  {
    title: "A.M.T. Goal Framework Template",
    type: "Free Download",
    description:
      "Practical templates for structuring your long- and short-term objectives using the Aligned, Measurable, Time-bound goal framework from the book.",
    status: "Coming Soon",
  },
  {
    title: "Faith & Business Reading List",
    type: "Free Resource",
    description:
      "A curated list of books, articles, and talks that complement the themes of Prosper Without Compromise. Expand your understanding of aligned prosperity.",
    status: "Available",
  },
];

export default function ResourcesPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-20 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-navy-950 via-navy-900 to-navy-950" />
        <div className="absolute top-40 left-1/4 w-[500px] h-[500px] bg-gold-500/[0.04] rounded-full blur-3xl" />

        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <p className="text-gold-400 font-semibold text-sm uppercase tracking-wider mb-4">
            Resources
          </p>
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Tools for the{" "}
            <span className="text-gradient-gold">Conscious Builder</span>
          </h1>
          <p className="text-gray-300 text-lg sm:text-xl max-w-2xl mx-auto">
            Free guides, workbooks, and frameworks to support your journey
            toward aligned prosperity. More resources are added regularly.
          </p>
        </div>
      </section>

      {/* Resources Grid */}
      <section className="py-24 px-4 relative">
        <div className="absolute inset-0 bg-navy-950" />
        <div className="relative z-10 max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {resources.map((resource, i) => (
              <div
                key={i}
                className="border-glow rounded-xl p-6 bg-white/[0.02] hover:bg-white/[0.04] transition-all duration-500 hover:border-gold-400/30 flex flex-col"
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="px-3 py-1 bg-gold-500/10 text-gold-400 text-xs font-semibold rounded-full">
                    {resource.type}
                  </span>
                  <span
                    className={`px-3 py-1 text-xs font-medium rounded-full ${
                      resource.status === "Available"
                        ? "bg-emerald-500/10 text-emerald-400"
                        : "bg-white/5 text-gray-400"
                    }`}
                  >
                    {resource.status}
                  </span>
                </div>
                <h3 className="font-serif text-xl font-bold text-white mb-3">
                  {resource.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed flex-grow">
                  {resource.description}
                </p>
                <div className="mt-6 pt-4 border-t border-white/5">
                  {resource.status === "Available" ? (
                    <button className="text-gold-400 hover:text-gold-300 font-semibold text-sm transition-colors inline-flex items-center gap-2">
                      Access Resource
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
                    </button>
                  ) : (
                    <span className="text-gray-500 text-sm">
                      Notify me when available
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-24 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-navy-950 via-navy-900 to-navy-950" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(201,168,76,0.04)_0%,_transparent_70%)]" />

        <div className="relative z-10 max-w-2xl mx-auto text-center">
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-white mb-4">
            Get New Resources First
          </h2>
          <p className="text-gray-400 text-base mb-8 max-w-md mx-auto">
            Join the list to receive free tools, guides, and exclusive content
            as soon as they&apos;re released.
          </p>
          <div className="max-w-md mx-auto">
            <LeadCaptureForm source="resources-page" compact />
          </div>
        </div>
      </section>
    </>
  );
}
