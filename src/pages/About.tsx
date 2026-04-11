import { useEffect } from "react";
import { Heart, Target, Shield, Zap, Users } from "lucide-react";
import SEOHead from "@/components/SEOHead";

const sections = [
  {
    icon: Heart,
    title: "Our Clinic",
    text: "Dental Bungalow is a modern dental clinic located in Faisalabad, dedicated to providing high-quality dental care at affordable prices. Our clinic is equipped with the latest dental technology to ensure the best treatment outcomes.",
  },
  {
    icon: Target,
    title: "Our Mission",
    text: "To deliver exceptional dental care that is accessible, affordable, and comfortable for every patient. We believe everyone deserves a healthy, confident smile.",
  },
  {
    icon: Shield,
    title: "Why Choose Us",
    text: "With a 4.7-star rating, experienced dental surgeons, modern equipment, and a patient-first approach, Dental Bungalow is the trusted choice for dental care in Faisalabad.",
  },
  {
    icon: Zap,
    title: "Modern Equipment",
    text: "We use state-of-the-art dental equipment and sterilization protocols to ensure safe, efficient, and comfortable treatments for all our patients.",
  },
  {
    icon: Users,
    title: "Patient Care Commitment",
    text: "Your comfort and satisfaction are our top priorities. From your first visit to follow-up care, we ensure a warm, professional, and caring experience.",
  },
];

const AboutPage = () => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add("visible")),
      { threshold: 0.1 }
    );
    document.querySelectorAll(".animate-on-scroll").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <SEOHead
        title="About Us – Dental Bungalow Faisalabad"
        description="Learn about Dental Bungalow, a trusted dental clinic in Faisalabad offering affordable, professional dental care with modern equipment."
      />

      <section className="bg-dental-section-alt pt-28 pb-16">
        <div className="container-dental text-center">
          <p className="text-primary font-semibold text-sm uppercase tracking-wider mb-2 animate-fade-up">About Us</p>
          <h1 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-4 animate-fade-up" style={{ animationDelay: "0.1s" }}>
           About Dental Bungalow – Trusted Dental Clinic in Faisalabad
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto animate-fade-up" style={{ animationDelay: "0.2s" }}>
            Your trusted partner for dental health in Faisalabad since day one.
          </p>
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="container-dental max-w-4xl space-y-12">
          {sections.map((s, i) => (
            <div key={i} className="animate-on-scroll flex gap-5 items-start">
              <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center shrink-0">
                <s.icon className="w-7 h-7 text-primary" />
              </div>
              <div>
                <h2 className="font-display text-xl font-bold text-foreground mb-2">{s.title}</h2>
                <p className="text-muted-foreground leading-relaxed">{s.text}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default AboutPage;
