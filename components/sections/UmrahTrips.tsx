import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ChevronRight } from "lucide-react";
import { TripCard } from "@/components/TripCard";
import { umrahTrips } from "@/lib/data";

export function UmrahTrips() {
  // Show only available trips, limited to 3 for homepage
  const featuredTrips = umrahTrips.filter(trip => !trip.expired).slice(0, 3);
  const totalAvailable = umrahTrips.filter(trip => !trip.expired).length;

  return (
    <section id="umrah" className="py-24 bg-muted/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Badge className="bg-primary/10 text-primary border-0 mb-4">
            Upcoming Trips
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Upcoming <span className="text-gradient">Umrah Trips</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Immerse yourself in the spiritual heart of Islam with our Umrah packages.
          </p>
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
