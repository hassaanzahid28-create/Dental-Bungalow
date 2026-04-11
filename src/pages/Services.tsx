import { useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import SEOHead from "@/components/SEOHead";

const services = [
  { icon: "🦷", title: "General Dentistry", desc: "Routine checkups, cleanings, and preventive care to maintain your oral health." },
  { icon: "🩺", title: "Root Canal Treatment", desc: "Modern, pain-free root canal procedures to save damaged teeth effectively." },
  { icon: "🪥", title: "Dental Fillings", desc: "High-quality composite and amalgam fillings for cavities and tooth decay." },
  { icon: "✨", title: "Teeth Whitening", desc: "Professional whitening treatments to brighten your smile by several shades." },
 { icon: "🦷", title: "Braces & Orthodontics", desc: "Orthodontic treatments for teeth alignment and bite correction for all ages." },
  { icon: "🔩", title: "Dental Implants", desc: "Permanent tooth replacement solutions using state-of-the-art implant technology." },
  { icon: "🩹", title: "Tooth Extraction", desc: "Safe, painless tooth extractions including wisdom teeth removal procedures." },
  { icon: "💎", title: "Scaling & Polishing", desc: "Deep cleaning to remove tartar, plaque, and stains for healthier gums." },
];

const ServicesPage = () => {
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
        title="Dental Services – Dental Bungalow Faisalabad"
        description="Explore our dental services: root canal, teeth whitening, braces, implants, scaling & more at Dental Bungalow, Faisalabad."
      />

      {/* Hero */}
      <section className="bg-dental-section-alt pt-28 pb-16">
        <div className="container-dental text-center">
          <p className="text-primary font-semibold text-sm uppercase tracking-wider mb-2 animate-fade-up">What We Offer</p>
          <h1 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-4 animate-fade-up" style={{ animationDelay: "0.1s" }}>
            Affordable Dental Services in Faisalabad
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto animate-fade-up" style={{ animationDelay: "0.2s" }}>
            Comprehensive dental care solutions tailored to your needs, using the latest equipment and techniques.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding bg-background">
        <div className="container-dental">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 stagger-children">
            {services.map((service, i) => (
              <div
                key={i}
                className="animate-on-scroll group bg-card rounded-2xl p-6 border border-border hover:border-primary/30 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                <div className="text-4xl mb-4">{service.icon}</div>
                <h2 className="font-display text-lg font-semibold text-foreground mb-2">{service.title}</h2>
                <p className="text-sm text-muted-foreground leading-relaxed">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary section-padding">
        <div className="container-dental text-center">
          <h2 className="text-3xl font-display font-bold text-primary-foreground mb-4">Need a Dental Consultation?</h2>
          <p className="text-primary-foreground/80 mb-8 max-w-lg mx-auto">
            Contact us today to schedule your appointment with our experienced dental team.
          </p>
          <Link to="/contact">
            <Button size="lg" className="rounded-full px-8 bg-background text-foreground hover:bg-background/90 gap-2">
              Book Appointment <ArrowRight className="w-4 h-4" />
            </Button>
          </Link>
        </div>
      </section>
    </>
  );
};

export default ServicesPage;
