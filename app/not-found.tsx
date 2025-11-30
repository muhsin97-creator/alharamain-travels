import Link from "next/link";
import { HeroHeader } from "@/components/header";
import { Footer } from "@/components/sections/Footer";
import { Button } from "@/components/ui/button";
import { ChevronRight, Home } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <HeroHeader />
      
      <main className="flex-1 flex items-center justify-center py-24">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {/* Decorative 404 */}
          <div className="relative mb-8">
            <span className="text-[150px] md:text-[200px] font-bold text-gradient opacity-20 leading-none">
              404
            </span>
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-6xl md:text-8xl font-bold text-foreground">
                404
              </span>
            </div>
          </div>
          
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Page Not Found
          </h1>
          <p className="text-muted-foreground text-lg mb-8 max-w-md mx-auto">
            The page you&apos;re looking for doesn&apos;t exist or has been moved. 
            Let us help you find your way back.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild className="bg-primary hover:bg-primary/90">
              <Link href="/">
                <Home className="mr-2 h-4 w-4" />
                Go Home
              </Link>
            </Button>
            <Button asChild variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white">
              <Link href="/services/umrah">
                View Umrah Trips
                <ChevronRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

