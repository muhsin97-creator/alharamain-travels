import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Shield } from "lucide-react";
import { stats } from "@/lib/data";

export function About() {
  return (
    <section id="about" className="py-24 bg-[#2D2D2D] text-white relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-10 left-10 w-20 h-[1px] bg-primary opacity-40" />
      <div className="absolute bottom-10 right-10 w-20 h-[1px] bg-primary opacity-40" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <Badge className="bg-primary/20 text-primary border-0 mb-4">
              About Us
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Trusted by <span className="text-gradient">Thousands</span>
            </h2>
            <p className="text-white/70 text-lg mb-6">
              Al-Haramain Travels has been serving pilgrims for over a decade,
              providing exceptional Umrah and Hajj services with unwavering
              commitment to excellence and care.
            </p>
            <p className="text-white/70 text-lg mb-8">
              Our team of experienced professionals ensures that every aspect of
              your sacred journey is meticulously planned and executed, allowing
              you to focus entirely on your spiritual experience.
            </p>
            <div className="grid grid-cols-2 gap-8">
              {stats.map((stat, i) => (
                <div key={i}>
                  <div className="text-3xl font-bold text-gradient">
                    {stat.number}
                  </div>
                  <div className="text-white/60">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <div className="aspect-square bg-gradient-to-br from-primary/20 to-primary/5 rounded-3xl flex items-center justify-center">
              <Image
                src="/logo-mark.png"
                alt="Al-Haramain"
                width={300}
                height={300}
                className="opacity-80"
              />
            </div>
            {/* Floating card */}
            <Card className="absolute -bottom-8 -left-8 bg-white text-foreground shadow-2xl">
              <CardContent className="p-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                    <Shield className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <div className="font-semibold">ATOL Protected</div>
                    <div className="text-sm text-muted-foreground">
                      Your money is safe
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}

