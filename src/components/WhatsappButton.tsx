import React from "react";
import { BsWhatsapp } from "react-icons/bs";

const WhatsAppButton = () => {
  const message = encodeURIComponent("Hi, I would like to make an appointment");

  return (
    <a
      href={`https://wa.me/923247235114?text=${message}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-[#25D366] rounded-full flex items-center justify-center shadow-lg hover:shadow-xl hover:scale-105 transition-all animate-bounce"
      aria-label="Chat on WhatsApp"
    >
      <BsWhatsapp className="w-7 h-7 text-white" />
    </a>
  );
};

export default WhatsAppButton;