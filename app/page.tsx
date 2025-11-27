import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import {
  Plane,
  MapPin,
  Star,
  Users,
  Calendar,
  Phone,
  Mail,
  Clock,
  Shield,
  Award,
  ChevronRight,
  Instagram,
  Facebook,
} from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <div className="flex items-center gap-3">
              <Image
                src="/logo.png"
                alt="Al-Haramain Travels"
                width={180}
                height={60}
                className="h-12 w-auto"
              />
            </div>
            <div className="hidden md:flex items-center gap-8">
              <a href="#packages" className="text-foreground/80 hover:text-primary transition-colors font-medium">
                Packages
              </a>
              <a href="#services" className="text-foreground/80 hover:text-primary transition-colors font-medium">
                Services
              </a>
              <a href="#about" className="text-foreground/80 hover:text-primary transition-colors font-medium">
                About Us
              </a>
              <a href="#contact" className="text-foreground/80 hover:text-primary transition-colors font-medium">
                Contact
              </a>
            </div>
            <Button className="bg-primary hover:bg-gold-dark text-white">
              Book Now
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-[#2D2D2D]">
          <div className="absolute inset-0 opacity-5">
            <div className="absolute top-20 left-10 w-72 h-72 bg-primary rounded-full blur-3xl" />
            <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary rounded-full blur-3xl" />
          </div>
          {/* Decorative elements inspired by brand */}
          <div className="absolute top-1/4 left-8 flex flex-col gap-2 opacity-40">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="w-3 h-3 bg-primary rotate-45" style={{ animationDelay: `${i * 100}ms` }} />
            ))}
          </div>
          <div className="absolute bottom-1/4 right-8 flex flex-col gap-2 opacity-40">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="w-0 h-0 border-l-[6px] border-r-[6px] border-b-[10px] border-l-transparent border-r-transparent border-b-primary" />
            ))}
          </div>
          <div className="absolute top-1/3 right-1/4 w-16 h-[1px] bg-primary opacity-40" />
          <div className="absolute bottom-1/3 left-1/4 w-16 h-[1px] bg-primary opacity-40" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-fade-in-up opacity-0" style={{ animationDelay: '100ms', animationFillMode: 'forwards' }}>
            <Image
              src="/logo-mark.png"
              alt="Al-Haramain"
              width={120}
              height={120}
              className="mx-auto mb-8 animate-float"
            />
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-4 animate-fade-in-up opacity-0" style={{ animationDelay: '200ms', animationFillMode: 'forwards' }}>
            Your Sacred
            <span className="block text-gradient">Journey Awaits</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-white/70 max-w-2xl mx-auto mb-8 animate-fade-in-up opacity-0" style={{ animationDelay: '300ms', animationFillMode: 'forwards' }}>
            Experience the spiritual journey of a lifetime with our premium Umrah and Hajj packages
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up opacity-0" style={{ animationDelay: '400ms', animationFillMode: 'forwards' }}>
            <Button size="lg" className="bg-primary hover:bg-gold-dark text-white px-8 py-6 text-lg">
              Explore Packages
              <ChevronRight className="ml-2 h-5 w-5" />
            </Button>
            <Button size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10 px-8 py-6 text-lg">
              <Phone className="mr-2 h-5 w-5" />
              Contact Us
            </Button>
          </div>

          {/* Trust indicators */}
          <div className="flex flex-wrap justify-center gap-8 mt-16 animate-fade-in-up opacity-0" style={{ animationDelay: '500ms', animationFillMode: 'forwards' }}>
            <div className="flex items-center gap-2 text-white/60">
              <Users className="h-5 w-5 text-primary" />
              <span>10,000+ Pilgrims</span>
            </div>
            <div className="flex items-center gap-2 text-white/60">
              <Star className="h-5 w-5 text-primary" />
              <span>4.9 Rating</span>
            </div>
            <div className="flex items-center gap-2 text-white/60">
              <Shield className="h-5 w-5 text-primary" />
              <span>ATOL Protected</span>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center pt-2">
            <div className="w-1 h-2 bg-primary rounded-full animate-pulse" />
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="bg-primary/10 text-primary border-0 mb-4">Our Services</Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Complete Travel <span className="text-gradient">Solutions</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              From visa processing to accommodation, we handle every detail of your sacred journey
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: Plane, title: "Flight Bookings", desc: "Direct flights to Jeddah & Medina with premium airlines" },
              { icon: MapPin, title: "5-Star Hotels", desc: "Accommodation near Haram with stunning views" },
              { icon: Calendar, title: "Visa Services", desc: "Fast-track Umrah & Hajj visa processing" },
              { icon: Users, title: "Group Tours", desc: "Guided tours with experienced scholars" },
              { icon: Shield, title: "Travel Insurance", desc: "Comprehensive coverage for peace of mind" },
              { icon: Award, title: "VIP Services", desc: "Exclusive access and personalized assistance" },
            ].map((service, i) => (
              <Card key={i} className="group hover:shadow-xl transition-all duration-300 border-border/50 hover:border-primary/30 overflow-hidden">
                <CardContent className="p-8">
                  <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary transition-colors">
                    <service.icon className="h-7 w-7 text-primary group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">{service.title}</h3>
                  <p className="text-muted-foreground">{service.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Packages Section */}
      <section id="packages" className="py-24 bg-muted/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="bg-primary/10 text-primary border-0 mb-4">Popular Packages</Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Umrah <span className="text-gradient">Packages</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Choose from our carefully curated packages designed for every budget
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Economy",
                price: "£1,299",
                duration: "10 Days",
                features: ["Return Flights", "3-Star Hotel", "Breakfast Included", "Airport Transfers", "Visa Processing"],
                popular: false,
              },
              {
                name: "Premium",
                price: "£2,499",
                duration: "12 Days",
                features: ["Return Flights", "5-Star Hotel", "All Meals", "Private Transfers", "Visa Processing", "Guided Tours", "Ziyarat Included"],
                popular: true,
              },
              {
                name: "VIP",
                price: "£4,999",
                duration: "14 Days",
                features: ["Business Class", "5-Star Suite", "All Meals", "Private Vehicle", "Visa Processing", "Personal Guide", "All Ziyarat", "24/7 Support"],
                popular: false,
              },
            ].map((pkg, i) => (
              <Card key={i} className={`relative overflow-hidden transition-all duration-300 hover:shadow-2xl ${pkg.popular ? 'border-primary shadow-lg scale-105' : 'border-border/50 hover:border-primary/30'}`}>
                {pkg.popular && (
                  <div className="absolute top-4 right-4">
                    <Badge className="bg-primary text-white">Most Popular</Badge>
                  </div>
                )}
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-foreground mb-2">{pkg.name}</h3>
                  <div className="flex items-baseline gap-1 mb-2">
                    <span className="text-4xl font-bold text-gradient">{pkg.price}</span>
                    <span className="text-muted-foreground">/person</span>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground mb-6">
                    <Clock className="h-4 w-4" />
                    <span>{pkg.duration}</span>
                  </div>
                  <Separator className="mb-6" />
                  <ul className="space-y-3 mb-8">
                    {pkg.features.map((feature, j) => (
                      <li key={j} className="flex items-center gap-3">
                        <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center">
                          <ChevronRight className="h-3 w-3 text-primary" />
                        </div>
                        <span className="text-foreground/80">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button className={`w-full ${pkg.popular ? 'bg-primary hover:bg-gold-dark' : 'bg-secondary hover:bg-secondary/90'}`}>
                    Select Package
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 bg-[#2D2D2D] text-white relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-10 left-10 w-20 h-[1px] bg-primary opacity-40" />
        <div className="absolute bottom-10 right-10 w-20 h-[1px] bg-primary opacity-40" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <Badge className="bg-primary/20 text-primary border-0 mb-4">About Us</Badge>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Trusted by <span className="text-gradient">Thousands</span>
              </h2>
              <p className="text-white/70 text-lg mb-6">
                Al-Haramain Travels has been serving pilgrims for over a decade, providing exceptional Umrah and Hajj services with unwavering commitment to excellence and care.
              </p>
              <p className="text-white/70 text-lg mb-8">
                Our team of experienced professionals ensures that every aspect of your sacred journey is meticulously planned and executed, allowing you to focus entirely on your spiritual experience.
              </p>
              <div className="grid grid-cols-2 gap-8">
                {[
                  { number: "10K+", label: "Happy Pilgrims" },
                  { number: "15+", label: "Years Experience" },
                  { number: "50+", label: "Expert Staff" },
                  { number: "4.9", label: "Star Rating" },
                ].map((stat, i) => (
                  <div key={i}>
                    <div className="text-3xl font-bold text-gradient">{stat.number}</div>
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
                      <div className="text-sm text-muted-foreground">Your money is safe</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="bg-primary/10 text-primary border-0 mb-4">Testimonials</Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              What Our <span className="text-gradient">Pilgrims Say</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Ahmed Hassan",
                location: "London, UK",
                text: "Exceptional service from start to finish. The hotel was steps away from Haram and the support team was available 24/7.",
              },
              {
                name: "Fatima Ali",
                location: "Birmingham, UK",
                text: "This was my first Umrah and Al-Haramain made it truly special. Every detail was perfectly arranged.",
              },
              {
                name: "Mohammed Yusuf",
                location: "Manchester, UK",
                text: "The VIP package exceeded all expectations. Personal guide was incredibly knowledgeable and helpful throughout.",
              },
            ].map((testimonial, i) => (
              <Card key={i} className="border-border/50">
                <CardContent className="p-8">
                  <div className="flex gap-1 mb-4">
                    {[...Array(5)].map((_, j) => (
                      <Star key={j} className="h-5 w-5 fill-primary text-primary" />
                    ))}
                  </div>
                  <p className="text-foreground/80 mb-6">&ldquo;{testimonial.text}&rdquo;</p>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                      <span className="text-primary font-semibold">{testimonial.name.charAt(0)}</span>
                    </div>
                    <div>
                      <div className="font-semibold text-foreground">{testimonial.name}</div>
                      <div className="text-sm text-muted-foreground">{testimonial.location}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gold-gradient">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Begin Your Sacred Journey?
          </h2>
          <p className="text-white/90 text-xl mb-8 max-w-2xl mx-auto">
            Contact us today to book your Umrah or Hajj package. Our team is ready to assist you every step of the way.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-primary hover:bg-white/90 px-8 py-6 text-lg">
              Book Your Package
              <ChevronRight className="ml-2 h-5 w-5" />
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 px-8 py-6 text-lg">
              <Phone className="mr-2 h-5 w-5" />
              Call: +44 123 456 7890
            </Button>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-[#2D2D2D] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <Badge className="bg-primary/20 text-primary border-0 mb-4">Contact Us</Badge>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Get in <span className="text-gradient">Touch</span>
              </h2>
              <p className="text-white/70 text-lg mb-8">
                Have questions about our packages? Our friendly team is here to help you plan your perfect pilgrimage.
              </p>
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center">
                    <Phone className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <div className="text-white/60 text-sm">Phone</div>
                    <div className="font-semibold">+44 123 456 7890</div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center">
                    <Mail className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <div className="text-white/60 text-sm">Email</div>
                    <div className="font-semibold">info@alharamaintravels.com</div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center">
                    <MapPin className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <div className="text-white/60 text-sm">Office</div>
                    <div className="font-semibold">123 Travel Street, London, UK</div>
                  </div>
                </div>
              </div>
              <div className="flex gap-4 mt-8">
                <a href="#" className="w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center hover:bg-primary transition-colors">
                  <Instagram className="h-5 w-5 text-white" />
                </a>
                <a href="#" className="w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center hover:bg-primary transition-colors">
                  <Facebook className="h-5 w-5 text-white" />
                </a>
              </div>
            </div>
            <Card className="bg-white/5 border-white/10">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-6">Send us a Message</h3>
                <form className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <input
                      type="text"
                      placeholder="First Name"
                      className="bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder:text-white/50 focus:outline-none focus:border-primary"
                    />
                    <input
                      type="text"
                      placeholder="Last Name"
                      className="bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder:text-white/50 focus:outline-none focus:border-primary"
                    />
                  </div>
                  <input
                    type="email"
                    placeholder="Email Address"
                    className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder:text-white/50 focus:outline-none focus:border-primary"
                  />
                  <input
                    type="tel"
                    placeholder="Phone Number"
                    className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder:text-white/50 focus:outline-none focus:border-primary"
                  />
                  <select className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white/50 focus:outline-none focus:border-primary">
                    <option value="">Select Package Interest</option>
                    <option value="economy">Economy Package</option>
                    <option value="premium">Premium Package</option>
                    <option value="vip">VIP Package</option>
                  </select>
                  <textarea
                    placeholder="Your Message"
                    rows={4}
                    className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder:text-white/50 focus:outline-none focus:border-primary resize-none"
                  />
                  <Button className="w-full bg-primary hover:bg-gold-dark text-white py-6">
                    Send Message
                    <ChevronRight className="ml-2 h-5 w-5" />
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#1a1a1a] text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            <div className="md:col-span-2">
              <Image
                src="/logo.png"
                alt="Al-Haramain Travels"
                width={180}
                height={60}
                className="h-12 w-auto mb-4 brightness-0 invert"
              />
              <p className="text-white/60 max-w-md">
                Your trusted partner for Umrah and Hajj journeys. We are committed to providing exceptional service and ensuring your pilgrimage is a spiritually fulfilling experience.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-white/60">
                <li><a href="#packages" className="hover:text-primary transition-colors">Packages</a></li>
                <li><a href="#services" className="hover:text-primary transition-colors">Services</a></li>
                <li><a href="#about" className="hover:text-primary transition-colors">About Us</a></li>
                <li><a href="#contact" className="hover:text-primary transition-colors">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Legal</h4>
              <ul className="space-y-2 text-white/60">
                <li><a href="#" className="hover:text-primary transition-colors">Terms & Conditions</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Refund Policy</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">ATOL Certificate</a></li>
              </ul>
            </div>
          </div>
          <Separator className="bg-white/10 mb-8" />
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-white/40 text-sm">
              © 2024 Al-Haramain Travels. All rights reserved.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-white/40 hover:text-primary transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-white/40 hover:text-primary transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
