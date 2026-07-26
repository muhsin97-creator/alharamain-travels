import Image from "next/image";
import { Metadata } from "next";
import { HeroHeader } from "@/components/header";
import { PageHeader } from "@/components/PageHeader";
import { Footer } from "@/components/sections/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Heart, Users, BookOpen, Award, Target, Eye, Star, Shield } from "lucide-react";
import { aboutContent, stats, whyChooseUs } from "@/lib/data";

export const metadata: Metadata = {
  title: "About Us | Al-Haramain Travels",
  description: "Learn about Al-Haramain Travels - Australia's trusted Umrah travel agency. Discover our mission, values, and commitment to exceptional pilgrimage experiences.",
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      <HeroHeader />
      
      <PageHeader
        badge="About Us"
        title="Al Haramain"
        titleHighlight="Travels"
        description="Your trusted companion for sacred journeys to Makkah and Madinah"
      />

      {/* Our Story Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <Badge className="bg-primary/10 text-primary border-0 mb-4">
                Our Story
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8">
                Founded with a Singular Purpose
              </h2>
              
              {aboutContent.paragraphs.map((paragraph, i) => (
                <p key={i} className="text-muted-foreground text-lg mb-6 leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </div>

            <div className="relative">
              {/* Main Image/Logo Area */}
              <div className="aspect-square bg-gradient-to-br from-primary/20 to-primary/5 rounded-3xl flex items-center justify-center relative overflow-hidden">
                <Image
                  src="/logo-mark.png"
                  alt="Al-Haramain Travels"
                  width={280}
                  height={280}
                  className="opacity-90"
                />
                {/* Decorative ring */}
                <div className="absolute inset-8 border border-primary/20 rounded-full" />
                <div className="absolute inset-16 border border-primary/10 rounded-full" />
              </div>

              {/* Feature Cards */}
              <Card className="absolute -bottom-6 -left-6 bg-white text-foreground shadow-2xl">
                <CardContent className="p-5">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center">
                      <Users className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <div className="font-semibold">Experienced Shaykhs</div>
                      <div className="text-sm text-muted-foreground">
                        Knowledgeable guides
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="absolute -top-4 -right-4 bg-white text-foreground shadow-2xl">
                <CardContent className="p-5">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center">
                      <Heart className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <div className="font-semibold">Passion & Care</div>
                      <div className="text-sm text-muted-foreground">
                        Your journey matters
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-[#FBF7F0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, i) => (
              <div key={i} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-gradient mb-2">
                  {stat.number}
                </div>
                <div className="text-muted-foreground text-sm md:text-base">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-24 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="bg-primary/10 text-primary border-0 mb-4">
              Our Purpose
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Mission & Vision
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="bg-white border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-8">
                <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
                  <Target className="h-7 w-7 text-primary" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {aboutContent.mission}
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-8">
                <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
                  <Eye className="h-7 w-7 text-primary" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {aboutContent.vision}
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="bg-primary/10 text-primary border-0 mb-4">
              What We Stand For
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our Core <span className="text-gradient">Values</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              These principles guide everything we do at Al-Haramain Travels
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {aboutContent.values.map((value, i) => {
              const icons = [Award, Shield, Heart, BookOpen];
              const Icon = icons[i % icons.length];
              return (
                <Card key={i} className="group hover:shadow-xl transition-all duration-300 border-border/50 hover:border-primary/30">
                  <CardContent className="p-6 text-center">
                    <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:bg-primary transition-colors">
                      <Icon className="h-7 w-7 text-primary group-hover:text-white transition-colors" />
                    </div>
                    <h3 className="text-lg font-semibold mb-2">{value.title}</h3>
                    <p className="text-muted-foreground text-sm">{value.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-24 bg-[#FBF7F0] text-foreground relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-10 left-10 w-20 h-[1px] bg-primary opacity-40" />
        <div className="absolute bottom-10 right-10 w-20 h-[1px] bg-primary opacity-40" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="bg-primary/20 text-primary border-0 mb-4">
              Why Choose Us
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              What Sets Us <span className="text-gradient">Apart</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Experience the Al-Haramain difference
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {whyChooseUs.map((item, i) => {
              const Icon = item.icon;
              return (
                <div key={i} className="flex gap-5 p-6 rounded-2xl bg-white/5 hover:bg-white/10 transition-colors">
                  <div className="w-14 h-14 bg-primary/20 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Icon className="h-7 w-7 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{item.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gold-gradient relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-10">
          <div className="absolute top-10 left-10 w-32 h-32 border border-white rounded-full" />
          <div className="absolute bottom-10 right-10 w-48 h-48 border border-white rounded-full" />
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Begin Your Journey?
          </h2>
          <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
            Let us help you plan the spiritual journey of a lifetime. Contact us today to learn more about our Umrah packages.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/services/umrah"
              className="inline-flex items-center justify-center bg-white text-primary hover:bg-white/90 px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              View Our Trips
            </a>
            <a
              href="/contact"
              className="inline-flex items-center justify-center bg-transparent border-2 border-white text-white hover:bg-white/10 px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              Contact Us
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

