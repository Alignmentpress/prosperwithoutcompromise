import Link from "next/link";
import LeadCaptureForm from "@/components/LeadCaptureForm";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Kevin Adou | Alignment Press",
  description:
    "Learn about Kevin Adou, author of 'Prosper Without Compromise' — a conscious builder committed to helping others align purpose with prosperity.",
};

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-20 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-navy-950 via-navy-900 to-navy-950" />
        <div className="absolute top-20 left-0 w-[500px] h-[500px] bg-gold-500/[0.04] rounded-full blur-3xl" />

        <div className="relative z-10 max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-gold-400 font-semibold text-sm uppercase tracking-wider mb-4">
              The Author
            </p>
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
              Kevin <span className="text-gradient-gold">Adou</span>
            </h1>
            <p className="text-gray-300 text-xl max-w-2xl mx-auto">
              Author, Speaker & Conscious Builder
            </p>
          </div>

          {/* Author Avatar Placeholder */}
          <div className="flex justify-center mb-12">
            <div className="w-48 h-48 rounded-full bg-gradient-to-br from-gold-400/20 to-gold-600/10 border-2 border-gold-400/20 flex items-center justify-center">
              <span className="font-serif text-6xl text-gold-400 font-bold">
                KA
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Bio */}
      <section className="py-20 px-4 relative">
        <div className="absolute inset-0 bg-navy-950" />
        <div className="relative z-10 max-w-3xl mx-auto">
          <div className="space-y-6 text-gray-300 leading-relaxed">
            <p className="text-lg">
              Kevin Adou is an author, thinker, and practitioner at the
              intersection of faith, strategy, and personal development. With a
              deep commitment to helping individuals align their inner life with
              their outer ambitions, Kevin has dedicated years to exploring the
              principles that sustain lasting abundance.
            </p>

            <p>
              His work is rooted in a fundamental conviction:{" "}
              <span className="text-gold-400 font-medium">
                true prosperity flows from the inside out
              </span>
              . No external success can sustainably compensate for inner
              disorder. The kind of abundance that brings peace and endures
              always begins with alignment — alignment of heart, mind, and
              action.
            </p>

            <p>
              Through his book{" "}
              <em className="text-white">Prosper Without Compromise</em>, Kevin
              presents a structured framework built on four pillars — Intention,
              Strategy, Faith, and Action — offering readers a practical path
              from invisible intention to concrete reality.
            </p>

            <p>
              Kevin&apos;s approach blends biblical wisdom with modern strategic
              thinking, creating a bridge for those who refuse to choose between
              spiritual integrity and professional excellence. He speaks to the
              conscious builder — the one who creates, invests, works, and
              decides in alignment with who they truly are.
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-navy-950 via-navy-900 to-navy-950" />

        <div className="relative z-10 max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-white mb-4">
              Core Convictions
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              The principles that guide Kevin&apos;s work and writing.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Alignment Over Hustle",
                description:
                  "Success without peace is not true prosperity. When heart, mind, and action move together, the ground is prepared before you can even see it.",
              },
              {
                title: "Source Before Strategy",
                description:
                  "Before seeking the right strategy, examine the right source. Before 'doing,' learn how to 'be.' Before chasing results, align the heart.",
              },
              {
                title: "Abundance as Flow",
                description:
                  "Abundance is not a stock to defend, but a flow to allow. It expands in proportion to responsibility, generosity, and the capacity to become a source.",
              },
              {
                title: "Faith as Discipline",
                description:
                  "Faith is not passive hope. It is the discipline of attention that refuses to feed doubt and instead focuses on the certainty of the promise.",
              },
              {
                title: "Purpose-Driven Action",
                description:
                  "Action is the visible proof that faith is alive. By embodying convictions through consistent, concrete steps, you move from theory to harvest.",
              },
              {
                title: "Build Without Compromise",
                description:
                  "You can succeed without losing yourself, build without hardening your heart, and prosper without sacrificing your peace.",
              },
            ].map((value, i) => (
              <div
                key={i}
                className="border-glow rounded-xl p-6 bg-white/[0.02] hover:bg-white/[0.04] transition-all duration-500 hover:border-gold-400/30"
              >
                <h3 className="font-serif text-lg font-bold text-white mb-3">
                  {value.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-24 px-4 relative">
        <div className="absolute inset-0 bg-navy-950" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(201,168,76,0.04)_0%,_transparent_70%)]" />

        <div className="relative z-10 max-w-3xl mx-auto text-center">
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-white mb-8">
            About Alignment Press
          </h2>
          <p className="text-gray-300 text-lg leading-relaxed mb-6">
            Alignment Press is the publishing and personal branding platform
            created by Kevin Adou to distribute transformative content, host
            workshops, and build a community of conscious builders.
          </p>
          <p className="text-gray-400 leading-relaxed mb-10">
            Our mission is simple: to empower individuals who refuse to choose
            between faith and ambition, between inner peace and outer success.
            We believe that when alignment comes first, abundance follows
            naturally.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/book"
              className="px-6 py-3 bg-gradient-to-r from-gold-500 to-gold-600 text-navy-950 font-semibold rounded-lg hover:from-gold-400 hover:to-gold-500 transition-all duration-300 shadow-lg shadow-gold-500/20"
            >
              Read the Book
            </Link>
            <Link
              href="/contact"
              className="px-6 py-3 border border-white/10 text-white rounded-lg hover:bg-white/5 hover:border-gold-400/30 transition-all duration-300"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-24 px-4 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-navy-900 to-navy-950" />
        <div className="relative z-10 max-w-2xl mx-auto text-center">
          <p className="text-gold-400 font-semibold text-sm uppercase tracking-wider mb-4">
            Stay Connected
          </p>
          <h2 className="font-serif text-3xl font-bold text-white mb-4">
            Follow the Journey
          </h2>
          <p className="text-gray-400 mb-8">
            Receive exclusive insights, updates on new projects, and
            invitations to upcoming events.
          </p>
          <div className="max-w-md mx-auto">
            <LeadCaptureForm source="about-page" compact />
          </div>
        </div>
      </section>
    </>
  );
}
