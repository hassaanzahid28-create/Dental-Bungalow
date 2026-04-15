import { useEffect } from "react";
import { Phone, Mail, Award, BookOpen, Briefcase, Heart, MessageCircleHeartIcon } from "lucide-react";
import SEOHead from "@/components/SEOHead";
import doctorImg from "@/assets/newpic.png";

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
             Best Dental Surgeon in Faisalabad
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
                <a href="https://wa.me/923247235114" className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center hover:bg-primary/20 transition-colors">
                  <MessageCircleHeartIcon className="w-5 h-5 text-primary" />
                </a>
              </div>
            </div>

            {/* Info */}
            <div className="md:col-span-3 space-y-8">
              <div className="animate-on-scroll">
                <h2 className="text-3xl font-display font-bold text-foreground mb-1">Doctor Taqarrub Ali Khan</h2>
                <p className="text-primary font-semibold">Dentist</p>
              </div>

              <div className="animate-on-scroll">
                <div className="flex items-center gap-2 mb-3">
                  <Award className="w-5 h-5 text-primary" />
                  <h3 className="font-display text-lg font-semibold text-foreground">Qualifications</h3>
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed pl-7">
                  [BDS, RDS, C.Implantology, Dental Surgeon, Ex House Officer Allied Hospital Faisalabad]
                </p>
              </div>

              <div className="animate-on-scroll">
  <div className="flex items-center gap-2 mb-3">
    <Briefcase className="w-5 h-5 text-primary" />
    <h3 className="font-display text-lg font-semibold text-foreground">Experience</h3>
  </div>

  <div className="pl-7 space-y-6 text-sm text-muted-foreground leading-relaxed">
    <div>
      <h4 className="font-bold">House Job – Allied Hospital Faisalabad (2021–2022)</h4>
      <p>Rotations in <strong>Oral Surgery, Prosthodontics, Orthodontics, Periodontology, Operative Dentistry & Radiology</strong>.</p>
    </div>

    <div>
      <h4 className="font-bold">Clinical Experience – Smile Center Faisalabad (2021–2023)</h4>
      <p>Worked on <strong>restorative & esthetic dentistry</strong> (whitening, zirconia). Strong expertise in <strong>scaling, periodontal care & oral hygiene management</strong>.</p>
    </div>

    <div>
      <h4 className="font-bold">Associate Dentist – Dent Care Braces & Implant Centre (2022–2023)</h4>
      <p>Performed <strong>RCTs, cosmetic procedures & general treatments</strong> under Dr. Rana Mohsin Raza Khan.</p>
    </div>

    <div>
      <h4 className="font-bold">Private Practice – Dental Bungalow (2023–Present)</h4>
      <p>Providing <strong>orthodontics, prosthodontics & dental surgeries</strong>.</p>
    </div>

    <div>
      <h4 className="font-bold">Core Expertise</h4>
      <p>Extractions • Root Canals • Crown & Bridge • Fillings • Dentures • Implants</p>
    </div>
  </div>
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
                  <li>• Braces </li>
                </ul>
              </div>

              <div className="animate-on-scroll">
                <div className="flex items-center gap-2 mb-3">
                  <Heart className="w-5 h-5 text-primary" />
                  <h3 className="font-display text-lg font-semibold text-foreground">Biography</h3>
                </div>
                                <div className="pl-7 text-sm text-muted-foreground leading-relaxed space-y-4">
                  <p>
                    <span role="img" aria-label="tooth">🦷</span> Dr. Taqarrub Ali Khan is a dedicated dental professional with a deep passion for transforming smiles and improving oral health. From rigorous training at Allied Hospital Faisalabad to hands-on experience in restorative, cosmetic, and surgical dentistry, Dr. Taqarrub Ali Khan has built a career centered on patient care and precision.
                  </p>
                  <p>
                    Over the years, Dr. Taqarrub Ali Khan has developed expertise in a wide range of dental procedures, including orthodontics, prosthodontics, implants, and cosmetic treatments. His journey reflects a commitment not just to clinical excellence, but also to educating patients on oral hygiene and preventative care.
                  </p>
                  <p>
                    Driven by compassion and dedication to patient well-being, Dr. Taqarrub Ali Khan continues to provide personalized, high-quality dental care, ensuring every patient leaves with a healthier, more confident smile.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default DoctorPage;
