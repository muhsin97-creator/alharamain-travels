import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Users, Clock, ChevronRight } from "lucide-react";
import { UmrahTrip } from "@/lib/data";

interface TripCardProps {
  trip: UmrahTrip;
  featured?: boolean;
}

export function TripCard({ trip, featured = false }: TripCardProps) {
  return (
    <Card
      className={`relative overflow-hidden transition-all duration-300 hover:shadow-2xl group ${
        trip.expired
          ? "opacity-75"
          : "border-primary/20 hover:border-primary/50"
      } ${featured ? "lg:col-span-2 lg:row-span-2" : ""}`}
    >
      {/* Trip Image */}
      {trip.image && (
        <div className={`relative w-full ${featured ? "h-64 lg:h-80" : "h-48"} overflow-hidden`}>
          <Image
            src={trip.image}
            alt={trip.name}
            fill
            className="object-cover"
            priority={featured}
          />
        </div>
      )}
      
      {/* Top Banner */}
      <div className={`bg-[#2D2D2D] p-6 relative ${featured ? "lg:p-8" : ""}`}>
        {/* Status Badge - Top Right */}
        <div className="absolute top-4 right-4">
          {trip.expired ? (
            <Badge className="bg-red-500/90 text-white border-0">
              Expired
            </Badge>
          ) : (
            <Badge className="bg-green-500/90 text-white border-0">
              Available
            </Badge>
          )}
        </div>

        {/* Tags Row - Featured + Subtitle */}
        <div className="flex flex-wrap items-center gap-2 mb-4 pr-20">
          {trip.featured && !trip.expired && (
            <Badge className="bg-primary text-white border-0">
              Featured
            </Badge>
          )}
          <Badge className="bg-primary/20 text-primary border-0">
            {trip.subtitle}
          </Badge>
        </div>

        <h3 className={`font-bold text-white mb-2 ${featured ? "text-2xl lg:text-3xl" : "text-xl"}`}>
          {trip.name}
        </h3>
        <div className={`font-bold text-gradient ${featured ? "text-3xl" : "text-2xl"}`}>
          {trip.price}
        </div>
      </div>

      <CardContent className={`p-6 ${featured ? "lg:p-8" : ""}`}>
        {/* Trip Details */}
        <div className="flex items-center gap-4 mb-4 text-sm text-muted-foreground">
          <div className="flex items-center gap-1.5">
            <Users className="h-4 w-4 text-primary" />
            <span>{trip.capacity}</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Clock className="h-4 w-4 text-primary" />
            <span>{trip.duration}</span>
          </div>
        </div>

        {/* Description */}
        <p className={`text-muted-foreground text-sm leading-relaxed mb-6 ${featured ? "line-clamp-4 lg:line-clamp-6" : "line-clamp-3"}`}>
          {trip.description}
        </p>

        {/* Highlights for featured cards */}
        {featured && trip.highlights && (
          <div className="hidden lg:block mb-6">
            <ul className="space-y-2">
              {trip.highlights.slice(0, 3).map((highlight, i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                  <span>{highlight.split(" - ")[0]}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* CTA Button */}
        <Button
          asChild={!trip.expired}
          className={`w-full ${
            trip.expired
              ? "bg-muted text-muted-foreground cursor-not-allowed"
              : "bg-primary hover:bg-primary/90"
          }`}
          disabled={trip.expired}
        >
          {trip.expired ? (
            <span>Trip Ended</span>
          ) : (
            <Link href={`/umrah/${trip.slug}`}>
              Explore
              <ChevronRight className="ml-2 h-4 w-4" />
            </Link>
          )}
        </Button>
      </CardContent>
    </Card>
  );
}
