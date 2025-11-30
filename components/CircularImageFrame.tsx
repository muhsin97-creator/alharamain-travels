import Image from "next/image";

interface CircularImageFrameProps {
  src: string;
  alt: string;
  size?: "sm" | "md" | "lg" | "xl";
  className?: string;
  grayscale?: boolean;
}

const sizes = {
  sm: { container: "w-48 h-48", image: 180 },
  md: { container: "w-64 h-64", image: 240 },
  lg: { container: "w-80 h-80 md:w-96 md:h-96", image: 360 },
  xl: { container: "w-96 h-96 md:w-[450px] md:h-[450px]", image: 420 },
};

export function CircularImageFrame({
  src,
  alt,
  size = "lg",
  className = "",
  grayscale = true,
}: CircularImageFrameProps) {
  const sizeConfig = sizes[size];
  
  return (
    <div className={`relative ${sizeConfig.container} ${className}`}>
      {/* Outer gold ring */}
      <div className="absolute inset-0 rounded-full bg-primary" />
      
      {/* Dark inner ring */}
      <div className="absolute inset-2 rounded-full bg-[#2D2D2D]" />
      
      {/* White/light inner ring */}
      <div className="absolute inset-3 rounded-full bg-white/10" />
      
      {/* Image container */}
      <div className="absolute inset-4 rounded-full overflow-hidden">
        <Image
          src={src}
          alt={alt}
          fill
          className={`object-cover ${grayscale ? "grayscale" : ""}`}
          sizes="(max-width: 768px) 300px, 450px"
        />
      </div>
    </div>
  );
}

// Decorative elements matching the social media templates
export function GoldAccentBar({ 
  position = "top", 
  className = "" 
}: { 
  position?: "top" | "bottom" | "left" | "right";
  className?: string;
}) {
  const positionClasses = {
    top: "top-0 left-1/2 -translate-x-1/2 w-24 h-2",
    bottom: "bottom-0 right-8 w-24 h-16",
    left: "left-0 top-1/2 -translate-y-1/2 w-2 h-24",
    right: "right-0 top-1/2 -translate-y-1/2 w-2 h-24",
  };

  return (
    <div className={`absolute bg-primary ${positionClasses[position]} ${className}`} />
  );
}

export function GoldLine({ 
  className = "",
  width = "w-20"
}: { 
  className?: string;
  width?: string;
}) {
  return (
    <div className={`h-[1px] bg-primary opacity-60 ${width} ${className}`} />
  );
}

export function TrianglePattern({ 
  count = 4, 
  direction = "down",
  className = "" 
}: { 
  count?: number;
  direction?: "up" | "down";
  className?: string;
}) {
  return (
    <div className={`flex ${direction === "down" ? "flex-col" : "flex-col-reverse"} gap-2 ${className}`}>
      {[...Array(count)].map((_, i) => (
        <div
          key={i}
          className={`w-0 h-0 border-l-[6px] border-r-[6px] ${
            direction === "down" 
              ? "border-t-[10px] border-t-primary border-l-transparent border-r-transparent"
              : "border-b-[10px] border-b-primary border-l-transparent border-r-transparent"
          }`}
        />
      ))}
    </div>
  );
}

export function PlayIndicators({ 
  count = 4, 
  className = "" 
}: { 
  count?: number;
  className?: string;
}) {
  return (
    <div className={`flex gap-1.5 ${className}`}>
      {[...Array(count)].map((_, i) => (
        <div
          key={i}
          className="w-0 h-0 border-t-[5px] border-b-[5px] border-l-[8px] border-t-transparent border-b-transparent border-l-primary"
        />
      ))}
    </div>
  );
}

export function DiamondPattern({ 
  count = 4, 
  className = "" 
}: { 
  count?: number;
  className?: string;
}) {
  return (
    <div className={`flex flex-col gap-2 ${className}`}>
      {[...Array(count)].map((_, i) => (
        <div key={i} className="w-3 h-3 bg-primary rotate-45" />
      ))}
    </div>
  );
}

