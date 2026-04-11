import { useEffect, useState } from "react";
import { Phone, MapPin, Clock, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import SEOHead from "@/components/SEOHead";

const ContactPage = () => {
  const { toast } = useToast();
  const [form, setForm] = useState({ name: "", phone: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
      const text = `📋 *New Appointment Request*%0A%0A👤 *Name:* ${form.name}%0A📞 *Phone:* ${form.phone}%0A📧 *Email:* ${form.email || "Not provided"}%0A💬 *Message:* ${form.message || "No message"}`;
    window.open(`https://wa.me/923247235114?text=${text}`, "_blank");

    setForm({ name: "", phone: "", email: "", message: "" });
  };

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
        title="Contact Us – Dental Bungalow Faisalabad"
        description="Contact Dental Bungalow for appointments and inquiries. Call +92 324 7235114 or visit us at Bawa Chak, Faisalabad."
      />

      <section className="bg-dental-section-alt pt-28 pb-16">
        <div className="container-dental text-center">
          <p className="text-primary font-semibold text-sm uppercase tracking-wider mb-2 animate-fade-up">Get In Touch</p>
          <h1 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-4 animate-fade-up" style={{ animationDelay: "0.1s" }}>
             Contact Dental Bungalow Faisalabad
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto animate-fade-up" style={{ animationDelay: "0.2s" }}>
            Book your appointment or ask us anything. We're here to help!
          </p>
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="container-dental">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Form */}
            <div className="animate-on-scroll">
              <h2 className="font-display text-2xl font-bold text-foreground mb-6">Book an Appointment</h2>
              <form onSubmit={handleSubmit} className="space-y-4">
                <Input
                  placeholder="Full Name"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  required
                  className="rounded-xl h-12"
                />
                <Input
                  placeholder="Phone Number"
                  type="tel"
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  required
                  className="rounded-xl h-12"
                />
                <Input
                  placeholder="Email (optional)"
                  type="email"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="rounded-xl h-12"
                />
                <Textarea
                  placeholder="Your Message"
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  rows={4}
                  className="rounded-xl resize-none"
                />
                <Button type="submit" size="lg" className="w-full rounded-full gap-2 bg-primary text-primary-foreground hover:bg-primary/90">
                  <Send className="w-4 h-4" />
                  Book Appointment
                </Button>
              </form>
            </div>

            {/* Info + Map */}
            <div className="space-y-8">
              <div className="space-y-5 animate-on-scroll">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Phone</h3>
                    <a href="tel:+923247235114" className="text-primary hover:underline text-sm">+92 324 7235114</a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Address</h3>
                    <p className="text-muted-foreground text-sm">Zulfiqar Ali Shahid Road, Bawa Chak, Opposite WAPDA Office, Faisalabad</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                    <Clock className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Clinic Hours</h3>
                    <p className="text-muted-foreground text-sm">Opens 4 PM — 9 PM  Monday to Saturday</p>
                  </div>
                </div>
              </div>
               <a
                href="https://maps.app.goo.gl/zzajzfXuheN82Ko57"
                target="_blank"
                rel="noopener noreferrer"
                className="animate-on-scroll rounded-2xl overflow-hidden border border-border shadow-sm h-[300px] block"
              >
                <iframe
                  title="Dental Bungalow Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3404.123!2d73.079!3d31.418!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzHCsDI1JzA0LjgiTiA3M8KwMDQnNDQuOCJF!5e0!3m2!1sen!2spk!4v1234567890"
                  width="100%"
                  height="100%"
                 style={{ border: 0, pointerEvents: "none" }}
                  allowFullScreen
                  loading="lazy"
                />
                </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactPage;
