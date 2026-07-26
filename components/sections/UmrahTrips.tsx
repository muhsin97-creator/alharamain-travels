import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ChevronRight } from "lucide-react";
import { TripCard } from "@/components/TripCard";
import { CircularImageFrame, GoldAccentBar, GoldLine, TrianglePattern, DiamondPattern } from "@/components/CircularImageFrame";
import { umrahTrips } from "@/lib/data";

export function UmrahTrips() {
  // Show only available trips, limited to 3 for homepage
  const featuredTrips = umrahTrips.filter(trip => !trip.expired).slice(0, 3);
  const totalAvailable = umrahTrips.filter(trip => !trip.expired).length;

  return (
    <section id="umrah" className="py-24 bg-muted/30 relative overflow-hidden">
      {/* Decorative elements */}
      <GoldAccentBar position="top" className="opacity-50" />
      <div className="absolute bottom-0 left-8 w-16 h-24 bg-primary/10" />
      
      {/* Gold lines */}
      <GoldLine className="absolute top-32 right-12" />
      <GoldLine className="absolute bottom-40 left-20" />
      
      {/* Triangle patterns */}
      <TrianglePattern className="absolute top-1/3 left-6 opacity-30" direction="up" />
      
      {/* Diamond patterns */}
      <DiamondPattern className="absolute bottom-1/4 right-6 opacity-20" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-16">
          <div className="max-w-2xl">
            <Badge className="bg-primary/10 text-primary border-0 mb-4">
              Upcoming Trips
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Upcoming <span className="text-gradient">Umrah Trips &amp; Packages</span>
            </h2>
            <p className="text-muted-foreground text-lg">
              Immerse yourself in the spiritual heart of Islam with our Umrah packages.
            </p>
          </div>
          
          {/* Small circular image accent */}
          <div className="hidden lg:block">
            <CircularImageFrame
              src="https://images.unsplash.com/photo-1591604129939-f1efa4d9f7fa?w=400&q=80"
              alt="Kaaba and pilgrims"
              size="sm"
              grayscale={true}
            />
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredTrips.map((trip) => (
            <TripCard key={trip.slug} trip={trip} />
          ))}
        </div>

        {/* Load More / View All */}
        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">
            Showing <span className="font-semibold text-foreground">{featuredTrips.length}</span> of{" "}
            <span className="font-semibold text-foreground">{totalAvailable}</span> available trips
          </p>
          <Button asChild variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white">
            <Link href="/services/umrah">
              View All Trips
              <ChevronRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
