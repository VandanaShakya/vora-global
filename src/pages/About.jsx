import React, { useState, useEffect} from "react";
import { motion } from "framer-motion";
import images from "../assets/images";
import { missionData } from "./data";
import { FaWhatsapp } from 'react-icons/fa';


const HEXAGON_CLIP_PATH =
  "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)";

// Animation presets
const sectionViewport = { once: true, amount: 0.18 };
const sectionTransition = { duration: 0.9, ease: "easeOut" };

const fadeUp = {
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.75, ease: "easeOut" } },
};

const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.7 } },
};

const containerStagger = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.14,
      delayChildren: 0.12,
    },
  },
};

const cardVariant = {
  hidden: { opacity: 0, y: 12, scale: 0.98 },
  visible: (custom = 0) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.6, delay: custom * 0.12, ease: "easeOut" },
  }),
};

const About = () => {
   const [loading, setLoading] = useState(true);
  
    useEffect(() => {
      // Simulate image loading or data fetch
      const timer = setTimeout(() => setLoading(false), 200);
      return () => clearTimeout(timer);
    }, []);
  
    if (loading) {
      return (
        <div className="flex justify-center items-center min-h-screen bg-[#0d0d21]">
          {/* Tailwind Spinner */}
          <div className="w-12 h-12 border-4 border-yellow-400 border-t-transparent rounded-full animate-spin"></div>
        </div>
      );
    }
  
  return (
    <>
      <motion.div
        className="bg-[#0D0D21] text-white p-4 sm:p-8 md:p-16 flex items-center justify-center font-sans"
        initial="hidden"
        whileInView="visible"
        viewport={sectionViewport}
        transition={sectionTransition}
        variants={containerStagger}
      >
        <div className="max-w-7xl w-full flex flex-col md:flex-row items-center gap-12 py-12 px-6 sm:px-10">
          {/* Left Section: Text Content */}
          <motion.div
            className="md:w-1/2 w-full order-2 md:order-1 text-center md:text-left"
            variants={fadeUp}
          >
            <h1
              className="relative inline-block text-4xl sm:text-5xl md:text-6xl font-extrabold mb-6 tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-[#D2AA51] to-white drop-shadow-[0_2px_10px_rgba(210,170,81,0.4)]"
            >
              About Vora Global
            </h1>

            <motion.p
              className="text-gray-300 text-lg sm:text-xl mb-10 max-w-xl mx-auto md:mx-0 leading-relaxed"
              variants={fadeIn}
            >
              At <span className="text-[#B68E3E] font-semibold">Vora Global</span>, we bridge the gap between
              property, people, and profit. With over a decade of combined expertise in real estate,
              digital marketing, and lead generation, we’ve built a results-driven system that helps
              investors discover high-return properties — and enables agents to scale their business with
              consistent, qualified leads.
            </motion.p>

             <motion.button
                         type="button"
                         aria-label="Contact us on WhatsApp"
                         className="whatsapp-btn flex items-center justify-center gap-2 border border-[#D2AA51] text-black bg-[#D2AA51] px-6 py-3 rounded-full text-sm sm:text-base font-semibold transition-all duration-300"
                         whileTap={{ scale: 0.98 }}
                       >
                         <FaWhatsapp className="text-lg sm:text-xl" />
                       Contact Us
                       </motion.button>
          </motion.div>

          {/* Right Section: Hexagon Image Container */}
          <motion.div
            className="md:w-1/2 w-full flex justify-center md:justify-end order-1 md:order-2 p-4"
            variants={fadeUp}
          >
            {/* Animated hexagon wrapper */}
            <motion.div
              className="
                w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 
                relative 
                overflow-hidden 
                p-1
              "
              animate={{ y: [0, -16, 0] }}
              transition={{ duration: 3.2, repeat: Infinity, ease: "easeInOut" }}
            >
              <div
                className="w-full h-full"
                style={{ clipPath: HEXAGON_CLIP_PATH, WebkitClipPath: HEXAGON_CLIP_PATH }}
              >
                <img
                  src={images.aboutHero}
                  alt="A family looking at a tablet"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = "https://placehold.co/600x600/EF4444/FFFFFF?text=Image+Error";
                  }}
                />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>

      {/* our mission */}
   {/* --- OUR MISSION SECTION (with neon icon glow) --- */}
<motion.div
  style={{ backgroundColor: "#0D0D21" }}
  className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8"
  initial="hidden"
  whileInView="visible"
  viewport={sectionViewport}
  transition={sectionTransition}
>
  <div className="max-w-7xl mx-auto">
    {/* --- MAIN HEADING: OUR MISSION --- */}
    <motion.div className="text-center mb-20" variants={fadeUp}>
     <motion.h2
  className="relative inline-block text-4xl sm:text-5xl md:text-6xl font-extrabold mb-6 tracking-tight text-transparent bg-clip-text"
  style={{
    // --- REVISED GRADIENT: Gold/Yellow blending to White ---
    backgroundImage: "linear-gradient(90deg, #FFD700 0%, #B68E3E 50%, #FFFFFF 100%)",
    
    // Kept for text effect
    WebkitBackgroundClip: "text",
    backgroundClip: "text",
    
    // --- NEON/GLOW EFFECT REMOVED ---
    textShadow: "none", 
    letterSpacing: "0.03em",
  }}
  variants={fadeUp} // Preserving Framer Motion
>
  Our Mission
</motion.h2>

      <motion.p
        className="mt-4 text-lg max-w-2xl mx-auto leading-relaxed"
        style={{ color: "white", opacity: 0.75 }}
        variants={fadeIn}
      >
        To make property sales and lead generation fast, transparent, and
        profitable for everyone.
      </motion.p>
    </motion.div>

    {/* --- THREE PILLARS GRID --- */}
    <motion.div
      className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-10 justify-items-center"
      variants={containerStagger}
      initial="hidden"
      whileInView="visible"
      viewport={sectionViewport}
    >
      {missionData.map((item, index) => (
        <motion.div
          key={index}
          className="text-center rounded-2xl p-8 w-full max-w-sm transition-all duration-500"
          custom={index}
          variants={cardVariant}
          whileHover={{
            translateY: -8,
            boxShadow: "0 0 40px rgba(182,142,62,0.15)",
          }}
        >
          {/* Icon Section with Neon Glow on Hover */}
          <motion.div
            className="flex justify-center mb-6"
            whileHover="hover"
            initial="rest"
            animate="rest"
          >
            <motion.div
              className="p-5 rounded-full border-2 flex items-center justify-center"
              style={{ borderColor: "#B68E3E" }}
              variants={{
                rest: {
                  scale: 1,
                  filter: "drop-shadow(0 0 0px rgba(255,215,0,0))",
                },
                hover: {
                  scale: 1.1,
                  y: -8,
                  filter:
                    "drop-shadow(0 0 12px rgba(255,215,0,0.8)) drop-shadow(0 0 25px rgba(182,142,62,0.9))",
                  transition: {
                    type: "spring",
                    stiffness: 250,
                    damping: 15,
                  },
                },
              }}
            >
              <item.icon
                className="w-12 h-12 transition-all duration-500"
                style={{ color: "#FFD700" }}
                strokeWidth={1.5}
              />
            </motion.div>
          </motion.div>

          {/* Title */}
          <h3
            className="text-xl font-semibold uppercase tracking-wider mb-6"
            style={{ color: "white" }}
          >
            {item.title}
          </h3>

          {/* Decorative Icon */}
          <div className="flex justify-center mb-4">
            <item.icon
              className="w-5 h-5"
              style={{ color: "#B68E3E" }}
              strokeWidth={1.5}
            />
          </div>

          {/* --- GOLD LINE --- */}
          <div
            className="mx-auto mb-8"
            style={{
              backgroundColor: "#B68E3E",
              height: "2px",
              width: "150px",
            }}
          />

          {/* Description */}
          <p
            className="text-sm leading-relaxed px-2"
            style={{ color: "white", opacity: 0.85 }}
          >
            {item.text}
          </p>
        </motion.div>
      ))}
    </motion.div>
  </div>
</motion.div>


    </>
  );
};

export default About;
