interface SectionHeadingProps {
  label?: string;
  title: string;
  subtitle?: string;
  centered?: boolean;
}

export default function SectionHeading({
  label,
  title,
  subtitle,
  centered = true,
}: SectionHeadingProps) {
  return (
    <div className={`mb-12 ${centered ? "text-center" : ""}`}>
      {label && (
        <p className="text-gold-400 font-semibold text-sm uppercase tracking-wider mb-4">
          {label}
        </p>
      )}
      <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight">
        {title}
      </h2>
      {subtitle && (
        <p
          className={`text-gray-400 text-lg leading-relaxed ${
            centered ? "max-w-2xl mx-auto" : ""
          }`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
