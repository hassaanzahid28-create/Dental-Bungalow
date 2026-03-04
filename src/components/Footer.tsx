import { Link } from "react-router-dom";
import { Phone, MapPin, Clock, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background/80">
      <div className="container-dental py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-lg">D</span>
              </div>
              <span className="font-display text-xl font-bold text-background">
                Dental Bungalow
              </span>
            </div>
            <p className="text-sm leading-relaxed text-background/60">
              Professional & affordable dental care in Faisalabad. Your smile is our priority.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display text-lg font-semibold text-background mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {[
                { label: "Home", to: "/" },
                { label: "Services", to: "/services" },
                { label: "Doctor Profile", to: "/doctor" },
                { label: "About Us", to: "/about" },
                { label: "Contact", to: "/contact" },
              ].map((link) => (
                <li key={link.to}>
                  <Link to={link.to} className="text-sm hover:text-primary transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-display text-lg font-semibold text-background mb-4">Services</h4>
            <ul className="space-y-2">
              {["General Dentistry", "Root Canal", "Teeth Whitening", "Braces & Orthodontics"].map((s) => (
                <li key={s}>
                  <Link to="/services" className="text-sm hover:text-primary transition-colors">
                    {s}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-display text-lg font-semibold text-background mb-4">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-sm">
                <MapPin className="w-4 h-4 mt-0.5 text-primary shrink-0" />
                Zulfiqar Ali Shahid Road, Bawa Chak, Opposite WAPDA Office, Faisalabad
              </li>
              <li className="flex items-center gap-2 text-sm">
                <Phone className="w-4 h-4 text-primary shrink-0" />
                <a href="tel:+923247235114" className="hover:text-primary transition-colors">+92 324 7235114</a>
              </li>
              <li className="flex items-center gap-2 text-sm">
                <Clock className="w-4 h-4 text-primary shrink-0" />
                Opens 11 AM
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-background/10 text-center text-sm text-background/40">
          <p>© {new Date().getFullYear()} Dental Bungalow. All rights reserved. Serving patients across Faisalabad.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
