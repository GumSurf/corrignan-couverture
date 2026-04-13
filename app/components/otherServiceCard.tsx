import Image from "next/image";
import Link from "next/link";

type OtherServiceCardProps = {
  slug: string;
  label: string;
  tagline: string;
  image: string;
};

export default function OtherServiceCard({
  slug,
  label,
  tagline,
  image,
}: OtherServiceCardProps) {
  return (
    <Link
      href={`/services/${slug}`}
      className="group flex flex-col rounded-2xl border border-[#c9a84c33] bg-night-700 overflow-hidden hover:border-[#c9a84c66] hover:shadow-md transition-all duration-300"
    >
      {/* Photo */}
      <div className="relative w-full h-48 overflow-hidden">
        <Image
          src={image}
          alt={label}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
        />
      </div>

      {/* Texte */}
      <div className="flex items-center justify-between gap-3 p-4">
        <div className="min-w-0">
          <p className="font-semibold text-white truncate">
            {label}
          </p>
          <p className="text-sm text-[#b8b09a] truncate">
            {tagline}
          </p>
        </div>

        <span className="shrink-0 inline-flex items-center gap-1 text-sm font-medium text-[#f0d080] whitespace-nowrap group-hover:gap-2 transition-all duration-200">
          En savoir plus
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </span>
      </div>
    </Link>
  );
}