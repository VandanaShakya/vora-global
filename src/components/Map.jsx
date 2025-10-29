import React from "react";
import { motion } from "framer-motion";
import { MapPin } from "lucide-react";

const Map = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      className=" p-6 sm:p-8 w-full bg-black"
    >
      <div className="text-center mb-6 sm:mb-8">
      
        <h2 className="text-xl sm:text-2xl font-bold text-white mb-1">My Location</h2>
        <p className="text-sm sm:text-base text-[#c4c5c5]">Visit or find us easily on the map below.</p>
      </div>

      {/* Responsive Map Embed */}
      <div className="rounded-2xl overflow-hidden shadow-lg border border-gray-200">
        {/* Use fixed responsive heights by breakpoint for predictability */}
        <iframe
          title="Map - Nab Ln, Shipley"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2384.7195360092957!2d-1.781816923293486!3d53.83619663966609!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487be4edb9f08cf7%3A0xf1d18f3461ac511a!2sNab%20Ln%2C%20Shipley%20BD18%204EH%2C%20United%20Kingdom!5e0!3m2!1sen!2sin!4v1728904962729!5m2!1sen!2sin"
          className="w-full h-64 sm:h-80 md:h-96 lg:h-[520px] border-0"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>

      <div className="mt-5 text-center text-gray-300 text-sm sm:text-base">
        <p className="font-semibold text-white">Nab Ln</p>
        <p>Shipley BD18 4EH, United Kingdom</p>
      </div>
    </motion.div>
  );
};

export default Map;
