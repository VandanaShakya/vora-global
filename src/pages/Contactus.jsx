import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Form from '../components/Form';
import Map from '../components/Map';
import images from '../assets/images';

const Contactus = () => {
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

  // animation variants
  const textVariant = {
    hidden: { opacity: 0, x: -80 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: 'easeOut' } },
  };

  const imageVariant = {
    hidden: { opacity: 0, x: 80, scale: 1.02 },
    visible: { opacity: 1, x: 0, scale: 1, transition: { duration: 0.9, ease: 'easeOut' } },
  };

  return (
    <>
      <div className="bg-white">
        {/* HERO HEADER SECTION */}
        <section
          className="relative w-full flex items-center px-4 sm:px-8 lg:px-16 bg-no-repeat min-h-[60vh] md:min-h-screen overflow-hidden"
          aria-label="Contact hero"
        >
          {/* Background image (animated from right) */}
          <motion.img
            src={images.contactHero}
            alt="Contact hero background"
            className="absolute inset-0 w-full h-full object-cover object-top md:object-center"
            loading="lazy"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.25 }}
            variants={imageVariant}
          />

          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-black/50 z-10" />

          {/* Content (animated from left) */}
          <motion.div
            className="relative z-20 text-left text-white max-w-2xl px-2 sm:px-4 lg:px-0 lg:ml-72"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.25 }}
            variants={textVariant}
          >
            <h1
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4
                         bg-clip-text text-transparent bg-gradient-to-r from-[#D2AA51] to-white"
            >
              Get in Touch
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-gray-200 leading-relaxed max-w-lg">
              We’d love to hear from you! Reach out for inquiries, partnerships, or support.
            </p>
          </motion.div>
        </section>
      </div>

      {/* form and map sections (unchanged) */}
      <Form />
      <Map />
    </>
  );
};

export default Contactus;
