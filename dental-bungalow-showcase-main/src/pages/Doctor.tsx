import { useEffect } from "react";
import { Phone, Mail, Award, BookOpen, Briefcase, Heart } from "lucide-react";
import SEOHead from "@/components/SEOHead";
import doctorImg from "@/assets/doctor-placeholder.webp";

const DoctorPage = () => {
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
        title="Our Doctor – Dental Bungalow Faisalabad"
        description="Meet our experienced dental surgeon at Dental Bungalow, Faisalabad. Qualified, professional and dedicated to your dental health."
      />

      <section className="bg-dental-section-alt pt-28 pb-16">
        <div className="container-dental text-center">
          <p className="text-primary font-semibold text-sm uppercase tracking-wider mb-2 animate-fade-up">Meet Our Dentist</p>
          <h1 className="text-4xl md:text-5xl font-display font-bold text-foreground animate-fade-up" style={{ animationDelay: "0.1s" }}>
            Doctor Profile
          </h1>
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="container-dental">
          <div className="grid md:grid-cols-5 gap-12 items-start">
            {/* Photo */}
            <div className="md:col-span-2 animate-on-scroll">
              <div className="rounded-2xl overflow-hidden border border-border shadow-md">
                <img
                  src={doctorImg}
                  alt="Doctor profile"
                  className="w-full aspect-[3/4] object-cover object-top"
                  loading="lazy"
                />
              </div>
              {/* Contact icons */}
              <div className="flex gap-3 mt-6 justify-center">
                <a href="tel:+923247235114" className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center hover:bg-primary/20 transition-colors">
                  <Phone className="w-5 h-5 text-primary" />
                </a>
                <a href="mailto:" className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center hover:bg-primary/20 transition-colors">
                  <Mail className="w-5 h-5 text-primary" />
                </a>
              </div>
            </div>

            {/* Info */}
            <div className="md:col-span-3 space-y-8">
              <div className="animate-on-scroll">
                <h2 className="text-3xl font-display font-bold text-foreground mb-1">[Doctor Name]</h2>
                <p className="text-primary font-semibold">Dental Surgeon</p>
              </div>

              <div className="animate-on-scroll">
                <div className="flex items-center gap-2 mb-3">
                  <Award className="w-5 h-5 text-primary" />
                  <h3 className="font-display text-lg font-semibold text-foreground">Qualifications</h3>
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed pl-7">
                  [BDS, FCPS or relevant qualifications — to be updated]
                </p>
              </div>

              <div className="animate-on-scroll">
                <div className="flex items-center gap-2 mb-3">
                  <Briefcase className="w-5 h-5 text-primary" />
                  <h3 className="font-display text-lg font-semibold text-foreground">Experience</h3>
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed pl-7">
                  [Years of experience and notable career highlights — to be updated]
                </p>
              </div>

              <div className="animate-on-scroll">
                <div className="flex items-center gap-2 mb-3">
                  <BookOpen className="w-5 h-5 text-primary" />
                  <h3 className="font-display text-lg font-semibold text-foreground">Specializations</h3>
                </div>
                <ul className="text-muted-foreground text-sm leading-relaxed pl-7 space-y-1">
                  <li>• General Dentistry</li>
                  <li>• Root Canal Treatment</li>
                  <li>• Orthodontics</li>
                  <li>• Dental Implants</li>
                </ul>
              </div>

              <div className="animate-on-scroll">
                <div className="flex items-center gap-2 mb-3">
                  <Heart className="w-5 h-5 text-primary" />
                  <h3 className="font-display text-lg font-semibold text-foreground">Biography</h3>
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed pl-7">
                  [A brief biography about the doctor's passion for dental care, their journey, and commitment to patient well-being — to be updated]
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default DoctorPage;
