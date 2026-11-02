import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

interface Crumb {
  href: string;
  label: string;
}

interface PageHeaderProps {
  title: React.ReactNode;
  description?: string;
  eyebrow?: string;
  /** Background photograph (real trip/gallery photo). */
  image?: string;
  imageAlt?: string;
  breadcrumbs?: Crumb[];
  children?: React.ReactNode;
  /** Shorter hero for utility pages. */
  compact?: boolean;
}

// Inner-page hero in the UK hero style: full-bleed photo, dark scrim, white copy.
export function PageHeader({
  title,
  description,
  eyebrow,
  image = "/gallery/haram-colonnade.jpg",
  imageAlt = "",
  breadcrumbs,
  children,
  compact = false,
}: PageHeaderProps) {
  return (
    <section className="relative isolate overflow-hidden bg-charcoal text-white">
      <div className="absolute inset-0 -z-10">
        <Image
          src={image}
          alt={imageAlt}
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="scrim-hero absolute inset-0" />
      </div>

      <div className={`container-x ${compact ? "pb-16 pt-36 md:pb-20 md:pt-44" : "pb-20 pt-40 md:pb-28 md:pt-52"}`}>
        {breadcrumbs && breadcrumbs.length > 0 && (
          <nav aria-label="Breadcrumb" className="mb-6">
            <ol className="flex flex-wrap items-center gap-1.5 text-sm text-white/70">
              {breadcrumbs.map((crumb, i) => {
                const last = i === breadcrumbs.length - 1;
                return (
                  <li key={crumb.href} className="flex items-center gap-1.5">
                    {last ? (
                      <span className="text-white">{crumb.label}</span>
                    ) : (
                      <Link href={crumb.href} className="transition-colors hover:text-primary">
                        {crumb.label}
                      </Link>
                    )}
                    {!last && <ChevronRight className="size-3.5 opacity-60" />}
                  </li>
                );
              })}
            </ol>
          </nav>
        )}

        {eyebrow && <p className="eyebrow text-primary">{eyebrow}</p>}
        <h1 className="mt-4 max-w-[720px] font-display text-4xl font-extrabold leading-[1.1] text-white [text-shadow:0_2px_30px_rgba(0,0,0,0.25)] md:text-5xl lg:text-6xl">
          {title}
        </h1>
        {description && (
          <p className="mt-6 max-w-[600px] text-lg leading-relaxed text-white/95 md:text-xl">
            {description}
          </p>
        )}
        {children && <div className="mt-8">{children}</div>}
      </div>
    </section>
  );
}
