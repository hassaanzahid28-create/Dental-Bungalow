import { useEffect, useState, useCallback } from "react";
import { Link } from "react-router-dom";
import { Phone, Star, MapPin, Clock, Shield, DollarSign, Stethoscope, Zap, ArrowRight, User, UserRound, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import SEOHead from "@/components/SEOHead";
import heroDental from "@/assets/hero-dental.webp";

const trustItems = [
  { icon: Star, label: "4.7 Star Rated Dental Clinic" },
  { icon: DollarSign, label: "Affordable Pricing" },
  { icon: Stethoscope, label: "Experienced Dental Surgeon" },
  { icon: Zap, label: "Modern Equipment" },
];

const servicesPreview = [
  { icon: "🦷", title: "General Dentistry", desc: "Comprehensive dental checkups, cleanings, and preventive care for the whole family." },
  { icon: "🩺", title: "Root Canal Treatment", desc: "Pain-free root canal procedures using modern techniques and equipment." },
  { icon: "✨", title: "Teeth Whitening", desc: "Professional whitening treatments for a brighter, more confident smile." },
  { icon: "🪥", title: "Braces & Orthodontics", desc: "Orthodontic solutions for perfectly aligned teeth and a beautiful smile." },
];

const reviews = [
  { text: "Good dental care facilities at affordable prices. Very competent dental surgeon and good support staff.", name: "Ahmed R.", gender: "male" as const, stars: 5 },
  { text: "Dr. Taqarrub is very professional and gentle. Got my root canal done painlessly. Highly recommended for families!", name: "Fatima S.", gender: "female" as const, stars: 5 },
  { text: "Best dental clinic in Faisalabad. Clean environment, modern equipment, and the staff is very cooperative. Great experience overall.", name: "Usman K.", gender: "male" as const, stars: 5 },
];

const HomePage = () => {
  const [activeReview, setActiveReview] = useState(0);
  const nextReview = useCallback(() => setActiveReview((p) => (p + 1) % reviews.length), []);
  const prevReview = useCallback(() => setActiveReview((p) => (p - 1 + reviews.length) % reviews.length), []);

  useEffect(() => {
    const timer = setInterval(nextReview, 5000);
    return () => clearInterval(timer);
  }, [nextReview]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add("visible")),
      { threshold: 0.1, rootMargin: "0px 0px -40px 0px" }
    );
    document.querySelectorAll(".animate-on-scroll").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <SEOHead
        title="Dental Bungalow | Best Dental Clinic in Faisalabad"
        description="Dental Bungalow offers professional & affordable dental treatments in Faisalabad. Root canal, teeth whitening, braces & more. Call +92 324 7235114."
      />

      {/* Hero */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroDental} alt="Modern dental clinic interior" className="w-full h-full object-cover" loading="eager" />
          <div className="absolute inset-0 bg-foreground/60" />
        </div>
        <div className="container-dental relative z-10 py-32">
          <div className="max-w-2xl">
            <p className="text-primary font-semibold mb-3 animate-fade-up text-sm tracking-wider uppercase">
              Trusted Dental Care in Faisalabad
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-background mb-6 animate-fade-up" style={{ animationDelay: "0.1s" }}>
              Dental Bungalow | Best Dentist & Dental Clinic in Faisalabad
            </h1>
            <p className="text-lg md:text-xl text-background/80 mb-8 animate-fade-up" style={{ animationDelay: "0.2s" }}>
              Dental Bungalow Professional & Affordable Dental Treatments — Your smile deserves the best care with modern equipment and experienced specialists.
            </p>
            <div className="flex flex-wrap gap-4 animate-fade-up" style={{ animationDelay: "0.3s" }}>
              <Link to="/contact">
                <Button size="lg" className="rounded-full gap-2 bg-primary text-primary-foreground hover:bg-primary/90 px-8 text-base">
                  Book Appointment
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
              <a href="tel:+923247235114">
                <Button size="lg" variant="outline" className="rounded-full gap-2 border-background bg-background/15 text-background hover:bg-background/25 px-8 text-base">
                  <Phone className="w-4 h-4" />
                  Call Now
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="bg-dental-trust border-y border-primary/10">
        <div className="container-dental py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {trustItems.map((item, i) => (
              <div key={i} className="flex items-center gap-3 animate-on-scroll">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <span className="text-sm font-semibold text-foreground">{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="section-padding bg-background">
        <div className="container-dental">
          <div className="text-center max-w-xl mx-auto mb-12 animate-on-scroll">
            <p className="text-primary font-semibold text-sm uppercase tracking-wider mb-2">Our Services</p>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
              Comprehensive Dental Solutions
            </h2>
            <p className="text-muted-foreground">
              From routine checkups to advanced procedures, we provide complete dental care under one roof.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 stagger-children">
            {servicesPreview.map((service, i) => (
              <div
                key={i}
                className="animate-on-scroll group bg-card rounded-2xl p-6 border border-border hover:border-primary/30 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="font-display text-lg font-semibold text-foreground mb-2">{service.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{service.desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10 animate-on-scroll">
            <Link to="/services">
              <Button variant="outline" className="rounded-full gap-2 px-8">
                View All Services
                <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section className="section-padding bg-dental-section-alt">
        <div className="container-dental">
          <div className="max-w-3xl mx-auto text-center animate-on-scroll">
            <p className="text-primary font-semibold text-sm uppercase tracking-wider mb-2">Patient Reviews</p>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-8">What Our Patients Say</h2>
            <div className="flex items-center justify-center gap-1 mb-2">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-6 h-6 text-yellow-400 fill-yellow-400" />
              ))}
            </div>
            <p className="text-4xl font-display font-bold text-primary mb-8">4.7</p>
            <div className="relative">
              <div className="overflow-hidden">
                <div
                  className="transition-transform duration-500 ease-in-out"
                  style={{ transform: `translateX(-${activeReview * 100}%)` }}
                >
                  <div className="flex">
                    {reviews.map((review, i) => (
                      <div key={i} className="w-full shrink-0 px-1">
                        <div className="bg-card rounded-2xl p-8 md:p-12 border border-border shadow-sm">
                          <div className="flex flex-col items-center gap-4">
                            <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center">
                              {review.gender === "male" ? <User className="w-7 h-7 text-primary" /> : <UserRound className="w-7 h-7 text-primary" />}
                            </div>
                            <div className="flex gap-0.5">
                              {[...Array(review.stars)].map((_, j) => (
                                <Star key={j} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                              ))}
                            </div>
                            <blockquote className="text-lg text-muted-foreground italic leading-relaxed">"{review.text}"</blockquote>
                            <p className="text-sm font-semibold text-foreground">— {review.name}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <button onClick={prevReview} className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 w-10 h-10 rounded-full bg-card border border-border shadow-md flex items-center justify-center hover:bg-secondary transition-colors">
                <ChevronLeft className="w-5 h-5 text-foreground" />
              </button>
              <button onClick={nextReview} className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 w-10 h-10 rounded-full bg-card border border-border shadow-md flex items-center justify-center hover:bg-secondary transition-colors">
                <ChevronRight className="w-5 h-5 text-foreground" />
              </button>
              <div className="flex items-center justify-center gap-2 mt-6">
                {reviews.map((_, i) => (
                  <button key={i} onClick={() => setActiveReview(i)} className={`w-2.5 h-2.5 rounded-full transition-colors ${i === activeReview ? "bg-primary" : "bg-border"}`} />
                ))}
              </div>
            </div>
            <a href="https://maps.app.goo.gl/zzajzfXuheN82Ko57" target="_blank" rel="noopener noreferrer" className="mt-8 inline-block">
              <Button className="rounded-full gap-2 px-8 bg-primary text-primary-foreground hover:bg-primary/90">
                View All Reviews
                <ArrowRight className="w-4 h-4" />
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Location */}
      <section className="section-padding bg-background">
        <div className="container-dental">
          <div className="text-center max-w-xl mx-auto mb-12 animate-on-scroll">
            <p className="text-primary font-semibold text-sm uppercase tracking-wider mb-2">Our Location</p>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">Visit Our Clinic</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8 items-start animate-on-scroll">
            <div className="rounded-2xl overflow-hidden border border-border shadow-sm h-[350px] relative">
              <iframe
                title="Dental Bungalow Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3404.123!2d73.079!3d31.418!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzHCsDI1JzA0LjgiTiA3M8KwMDQnNDQuOCJF!5e0!3m2!1sen!2spk!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Address</h3>
                  <p className="text-muted-foreground text-sm">Zulfiqar Ali Shahid Road, Bawa Chak, Opposite WAPDA Office, Faisalabad, 38000</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                  <Phone className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Phone</h3>
                  <a href="tel:+923247235114" className="text-primary hover:underline text-sm">+92 324 7235114</a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                  <Clock className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Hours</h3>
                  <p className="text-muted-foreground text-sm">Opens 11 AM — Monday to Saturday</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                  <Shield className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Serving</h3>
                  <p className="text-muted-foreground text-sm">Serving patients across Faisalabad</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary section-padding">
        <div className="container-dental text-center">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-primary-foreground mb-4">
            Ready for a Brighter Smile?
          </h2>
          <p className="text-primary-foreground/80 mb-8 max-w-lg mx-auto">
            Book your appointment today and experience world-class dental care at affordable prices.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link to="/contact">
              <Button size="lg" className="rounded-full px-8 bg-background text-foreground hover:bg-background/90">
                Book Appointment
              </Button>
            </Link>
            <a href="tel:+923247235114">
              <Button size="lg" variant="secondary" className="rounded-full px-8 shadow-sm">
                <Phone className="w-4 h-4 mr-2" />
                +92 324 7235114
              </Button>
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomePage;
