import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import images from '../assets/images';
import { features } from './data';
import { FaWhatsapp } from 'react-icons/fa';



const HEADING_COLOR = '#E3CB98';

const leftVariant = {
  hidden: { opacity: 0, x: -80 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: 'easeOut' } }
};

const rightVariant = {
  hidden: { opacity: 0, x: 80 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: 'easeOut' } }
};

const cardContainerVariant = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12
    }
  }
};

const cardVariant = {
  hidden: { opacity: 0, y: 18, scale: 0.99 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.45, ease: 'easeOut' } }
};

const imgVariant = {
  hidden: { opacity: 0, y: 12, scale: 0.98 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.6, ease: 'easeOut' } }
};

const Services = () => {
  const topRef = useRef(null);
  const rightRef = useRef(null);
  const servicesRef = useRef(null);

  return (
    <>
      {/* HERO */}
      <div className="pt-30 relative overflow-hidden bg-[#0D0D21] px-6 py-12 sm:py-16 lg:py-24">
        <div className="relative z-10 max-w-7xl mx-auto grid gap-10 lg:grid-cols-2 items-center">
          {/* LEFT (text) - slides in from left */}
          <motion.div
            ref={topRef}
            className="order-1 lg:order-1 flex flex-col justify-center"
            variants={leftVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.18 }}
          >
            <h1
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif font-extrabold leading-tight mb-4 sm:mb-6"
              style={{ color: HEADING_COLOR }}
            >
              Real Estate
              <br className="sm:hidden lg:block" />
              <span className="block mt-1 text-2xl sm:text-3xl md:text-4xl">Growth Partners</span>
            </h1>

            <p className="max-w-lg text-sm sm:text-base text-gray-300 mb-6">
              We provide comprehensive support, from <strong>Real Estate Consultancy</strong> to targeted <strong>Marketing &amp; Lead Generation</strong>. Our solutions are designed to maximize your property value and secure high-quality buyers and investors.
            </p>

            <div className="flex items-start sm:items-center">
              <motion.button
                                      type="button"
                                      aria-label="Contact us on WhatsApp"
                                      className="whatsapp-btn flex items-center justify-center gap-2 border border-[#D2AA51] text-black bg-[#D2AA51] px-6 py-3 rounded-full text-sm sm:text-base font-semibold transition-all duration-300"
                                      whileTap={{ scale: 0.98 }}
                                    >
                                      <FaWhatsapp className="text-lg sm:text-xl" />
                                    Contact Us
                                    </motion.button>
            </div>
          </motion.div>

          {/* RIGHT (images) - slides in from right */}
          <motion.div
            ref={rightRef}
            className="order-2 lg:order-2 grid grid-cols-1 sm:grid-cols-2 gap-4"
            variants={rightVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.18 }}
          >
            <motion.div className="aspect-[3/2] overflow-hidden rounded-lg shadow-xl" variants={imgVariant}>
              <img
                src={images.serviceHero1}
                alt="Happy client shaking hands with a realtor"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </motion.div>

            <motion.div className="relative aspect-[3/2] overflow-hidden rounded-lg shadow-xl" variants={imgVariant}>
              <img
                src={images.serviceHero2}
                alt="Video thumbnail of a market expert speaking"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="h-12 w-12 sm:h-16 sm:w-16 bg-white/80 rounded-full flex items-center justify-center cursor-pointer hover:bg-white/90 transition">
                  <svg className="h-6 w-6 sm:h-8 sm:w-8 text-red-700 ml-0.5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
              </div>
            </motion.div>

            <motion.div className="aspect-[3/2] overflow-hidden rounded-lg shadow-xl" variants={imgVariant}>
              <img
                src={images.serviceHero3}
                alt="Stylish, modern home interior"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </motion.div>

            <motion.div className="aspect-[3/2] overflow-hidden rounded-lg shadow-xl" variants={imgVariant}>
              <img
                src={images.serviceHero4}
                alt="Beautiful exterior of a luxury property"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* SERVICES LIST */}
      <div className="w-full bg-black py-10 sm:py-12 md:py-16">
        <div className="text-center mb-8 sm:mb-12 px-6">
          <h2
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text 
                 bg-gradient-to-r from-yellow-400 via-yellow-200 to-white"
          >
            Our Premium Services
          </h2>
          <p className="mt-4 text-gray-400 max-w-2xl mx-auto text-sm sm:text-base px-2">
            Discover world-class solutions tailored for your growth and investment success.
          </p>
        </div>

        <div className="flex justify-center px-4">
          <motion.div
            ref={servicesRef}
            className="grid gap-6 grid-cols-1 sm:grid-cols-2 xl:gap-10 max-w-5xl w-full"
            variants={cardContainerVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.12 }}
          >
            {features.map((f) => (
              <motion.div
                key={f.id}
                className="flex flex-col p-5 sm:p-6 rounded-xl shadow-lg border border-gray-800 transition duration-300"
                style={{
                  background: f.cardBg,
                  color: f.textColor
                }}
                variants={cardVariant}
              >
                <div className="flex justify-center items-center h-36 sm:h-40 mb-5">
                  {f.illustration ? (
                    <img
                      src={f.illustration}
                      alt={f.title}
                      className="w-full h-full object-contain rounded-lg"
                      loading="lazy"
                    />
                  ) : (
                    <div className="w-full h-full bg-gray-900 rounded-lg flex items-center justify-center text-gray-400 text-sm">
                      [Illustration]
                    </div>
                  )}
                </div>

                <h3
                  className="text-lg sm:text-xl font-bold mb-2 text-center"
                  style={{ color: f.textColor }}
                >
                  {f.title}
                </h3>

                <p className="mb-4 text-sm sm:text-base text-center flex-grow" style={{ color: f.textColor }}>
                  {f.desc}
                </p>

                <div className="flex justify-center mt-auto">
                  <button
                    className="relative px-5 py-2 rounded-lg text-sm sm:text-sm font-semibold transition-all duration-400 shadow-md 
             border-2 border-yellow-400 text-yellow-400 overflow-hidden group w-full sm:w-auto"
                    aria-label={`${f.title} more`}
                  >
                    <span className="relative z-10 transition-colors duration-300 group-hover:text-black">
                      {f.cta}
                    </span>
                    <span
                      className="absolute inset-0 bg-yellow-400 scale-x-0 group-hover:scale-x-100 transition-transform duration-400 origin-left rounded-lg"
                    />
                  </button>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default Services;
