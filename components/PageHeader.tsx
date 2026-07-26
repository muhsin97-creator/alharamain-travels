import { Badge } from "@/components/ui/badge";

interface PageHeaderProps {
  badge?: string;
  title: string;
  titleHighlight?: string;
  description?: string;
  centered?: boolean;
  dark?: boolean;
}

export function PageHeader({
  badge,
  title,
  titleHighlight,
  description,
  centered = true,
  dark = true,
}: PageHeaderProps) {
  return (
    <section
      className={`relative py-24 md:py-32 overflow-hidden ${
        dark ? "bg-[#FBF7F0] text-foreground" : "bg-background text-foreground"
      }`}
    >
      {/* Decorative elements */}
      <div className="absolute top-8 left-8 flex gap-2 opacity-40">
        {[...Array(4)].map((_, i) => (
          <div
            key={i}
            className="w-0 h-0 border-l-[6px] border-r-[6px] border-b-[10px] border-l-transparent border-r-transparent border-b-primary"
          />
        ))}
      </div>
      <div className="absolute top-16 right-16 w-20 h-[1px] bg-primary opacity-40" />
      <div className="absolute bottom-16 left-16 w-20 h-[1px] bg-primary opacity-40" />
      <div className="absolute bottom-8 right-8 flex flex-col gap-2 opacity-40">
        {[...Array(4)].map((_, i) => (
          <div
            key={i}
            className="w-0 h-0 border-l-[6px] border-r-[6px] border-b-[10px] border-l-transparent border-r-transparent border-b-primary"
          />
        ))}
      </div>
      
      {/* Gold corner accents */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-2 bg-primary" />
      <div className="absolute bottom-0 right-8 w-24 h-16 bg-primary/20" />

      <div className={`max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 ${centered ? "text-center" : ""}`}>
        {badge && (
          <Badge className="bg-primary/20 text-primary border-0 mb-4">
            {badge}
          </Badge>
        )}
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
          {title}
          {titleHighlight && (
            <>
              {" "}
              <span className="text-gradient">{titleHighlight}</span>
            </>
          )}
        </h1>
        {description && (
          <p
            className={`text-lg md:text-xl max-w-2xl leading-relaxed ${
              centered ? "mx-auto" : ""
            } ${dark ? "text-white/70" : "text-muted-foreground"}`}
          >
            {description}
          </p>
        )}
      </div>
    </section>
  );
}

