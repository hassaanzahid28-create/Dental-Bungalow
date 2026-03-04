import { Phone } from "lucide-react";

const StickyCallButton = () => {
  return (
    <a
      href="tel:+923247235114"
      className="fixed bottom-6 right-6 z-50 md:hidden flex items-center gap-2 bg-primary text-primary-foreground px-5 py-3.5 rounded-full shadow-lg hover:shadow-xl transition-all active:scale-95"
      aria-label="Call Dental Bungalow"
    >
      <Phone className="w-5 h-5" />
      <span className="font-semibold text-sm">Call Now</span>
    </a>
  );
};

export default StickyCallButton;
