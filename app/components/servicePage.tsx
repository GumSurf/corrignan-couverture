import Image from "next/image";
import Link from "next/link";

type ServiceCardProps = {
  title: string;
  description: string;
  image: string;
  href: string;
};

export default function ServiceCard({
  title,
  description,
  image,
  href,
}: ServiceCardProps) {
  return (
    <article className="overflow-hidden rounded-lg border border-gray-100 bg-white shadow-sm hover:shadow-md transition-shadow">
      <div className="relative h-56 w-full">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover"
        />
      </div>

      <div className="p-4 sm:p-6">
        <Link href={href}>
          <h3 className="text-lg font-medium text-night-900 hover:text-gold-600 transition-colors">
            {title}
          </h3>
        </Link>

        <p className="mt-2 line-clamp-3 text-sm text-gray-600">
          {description}
        </p>

        <Link
          href={href}
          className="group mt-4 inline-flex items-center gap-1 text-sm font-medium text-gold-600 hover:text-gold-700"
        >
          Découvrir

          <span className="transition-all group-hover:translate-x-1">
            →
          </span>
        </Link>
      </div>
    </article>
  );
}