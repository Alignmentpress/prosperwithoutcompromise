import Image from "next/image";
import Logo from "@/components/Logo";
import LeadCaptureForm from "./LeadCaptureForm";

export default function ComingSoon() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-12 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-navy-950 via-navy-900 to-navy-950" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gold-500/5 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-2xl mx-auto text-center">
        {/* Logo */}
        <div className="flex items-center justify-center gap-3 mb-12">
          <Logo size="md" />
          <span className="font-serif text-2xl tracking-wide text-white">
            Alignment Press
          </span>
        </div>

        {/* Book Image */}
        <div className="mb-10 relative">
          <div className="golden-glow inline-block rounded-xl overflow-hidden">
            <Image
              src="/images/book-cover.jpg"
              alt="Prosper Without Compromise by Kevin Adou"
              width={320}
              height={420}
              className="rounded-xl"
              priority
            />
          </div>
        </div>

        {/* Heading */}
        <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight">
          Something{" "}
          <span className="text-gradient-gold">Powerful</span> is Coming
        </h1>

        <p className="text-gray-300 text-lg sm:text-xl mb-2">
          <em>Prosper Without Compromise</em> by Kevin Adou
        </p>

        <p className="text-gray-400 text-base max-w-md mx-auto mb-10">
          Faith, Strategy, and the Inner Alignment That Sustains Abundance. Be
          the first to know when it launches.
        </p>

        {/* Lead Capture Form */}
        <div className="max-w-md mx-auto">
          <LeadCaptureForm source="coming-soon" compact />
        </div>
      </div>
    </div>
  );
}
