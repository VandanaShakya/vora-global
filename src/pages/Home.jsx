import React, { useState, useEffect, useRef } from 'react';
import { motion, useAnimation, AnimatePresence, useReducedMotion } from 'framer-motion';
import images from '../assets/images';
import Navbar from '../components/Navbar';
import { FaWhatsapp } from 'react-icons/fa';
import { services, processes, testimonials } from './data';
import { Landmark, BarChart3, TrendingUp, Zap, ArrowRight, ChevronRight, ChevronLeft } from 'lucide-react';
import '../style/animation.css';
import { useInView } from "react-intersection-observer";

const heroContainer = {
  hidden: { opacity: 0, y: 12 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { staggerChildren: 0.12, when: 'beforeChildren', duration: 0.6 },
  },
};

const heroItem = {
  hidden: { opacity: 0, y: 8 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
};

const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.8, ease: 'easeOut' } },
};

const bgVariant = {
  initial: { scale: 1.02, opacity: 0.92 },
  animate: {
    scale: 1,
    opacity: 1,
    transition: { duration: 8, ease: 'easeOut' },
  },
};

const IconMap = {
  Landmark,
  BarChart3,
  TrendingUp,
  Zap,
};

const Home = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // configure WhatsApp link (change number & message as needed)
  const waNumber = ''; // <-- put full phone number in international format without '+' or '-' e.g. 971501234567
  const prefill = encodeURIComponent('Hi — I am interested in a consultation about Dubai real estate.');
  const waLink = waNumber ? `https://wa.me/${waNumber}?text=${prefill}` : `https://wa.me/?text=${prefill}`;

  const openWhatsApp = () => {
    window.open(waLink, '_blank', 'noopener,noreferrer');
  };

  // service card //
  const [flipped, setFlipped] = useState({});
  const toggleFlip = (key) => {
    setFlipped((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  // testimonials //
  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    const interval = setInterval(handleNext, 5000);
    return () => clearInterval(interval);
  }, []);

  const visibleTestimonials = [
    testimonials[currentIndex],
    testimonials[(currentIndex + 1) % testimonials.length]
  ];

  // process section //
  const triangleRef = useRef(null);
  const triangleControls = useAnimation();
  const [triangleInViewRef, triangleInView] = useInView({ triggerOnce: true, rootMargin: "-120px" });

  useEffect(() => {
    if (triangleInView) {
      triangleControls.start("visible");
    }
  }, [triangleInView, triangleControls]);

  // helpers for consistent viewport settings
  const sectionViewport = { once: true, amount: 0.18 };
  const sectionTransition = { duration: 0.9 };

  // reduced motion preference
  const prefersReducedMotion = useReducedMotion();

  return (
    <>
      <Navbar />

      <div>

        {/* HERO */}
        <motion.div
          className="relative min-h-screen overflow-hidden bg-gray-600"
          variants={bgVariant}
          initial="initial"
          animate="animate"
        >
          {/* Background Image */}
          <motion.img
            variants={bgVariant}
            initial="initial"
            animate="animate"
            src={images.heroBackImage}
            alt="Dubai cityscape background"
            className="absolute inset-0 w-full h-full object-cover object-center md:object-bottom"
          />

          {/* Overlay gradient — lighter on mobile to make image visible */}
          <div className="absolute inset-0 bg-black/40 md:bg-black/50"></div>

          {/* Hero Content */}
          <motion.div
            className="relative z-20 flex flex-col items-center justify-center min-h-screen text-white px-4 text-center"
            variants={heroContainer}
            initial="hidden"
            whileInView="visible"
            viewport={sectionViewport}
            transition={sectionTransition}
          >
            <motion.h1
              variants={heroItem}
              className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-6 leading-tight"
              aria-label="Hero headline"
            >
              Real Estate. <span className="text-[#D2AA51]">Marketing.</span> Lead <br />Generation — All Under One Roof.
            </motion.h1>

            <motion.p
              variants={heroItem}
              className="text-sm sm:text-base md:text-lg text-gray-300 mb-8 max-w-2xl leading-relaxed"
            >
              Dubai’s trusted brand helping investors, brokers & businesses grow faster through verified leads,
              smart marketing, and profitable property deals.
            </motion.p>

            {/* WhatsApp Button */}
            <motion.button
              type="button"
              aria-label="Contact us on WhatsApp"
              className="whatsapp-btn flex items-center justify-center gap-2 border border-[#D2AA51] text-black bg-[#D2AA51] px-6 py-3 rounded-full text-sm sm:text-base font-semibold transition-all duration-300"
              whileTap={{ scale: 0.98 }}
              onClick={openWhatsApp}
            >
              <FaWhatsapp className="text-lg sm:text-xl" />
              Book a Consultation
            </motion.button>
          </motion.div>
        </motion.div>

        {/* service section */}
        <motion.section
          className="min-h-screen bg-[#0d0d21] font-sans py-16 sm:py-24"
          initial="hidden"
          whileInView="visible"
          viewport={sectionViewport}
          transition={sectionTransition}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.12 } },
          }}
        >
          {/* Inline styles & small keyframes used in original snippet */}
          <style>{`
            @keyframes borderMove {
              0%, 100% { background-position: 0% 50%; }
              50% { background-position: 100% 50%; }
            }
            .animate-border-move { background-size: 200% 200%; animation: borderMove 3s ease infinite; }
            .card-face { -webkit-backface-visibility: hidden; backface-visibility: hidden; }
          `}</style>

          <div className="container mx-auto px-4 md:px-8">
            {/* About / headings */}
            <motion.div variants={fadeUp} className="max-w-4xl mx-auto text-center mb-16 px-4">
              <motion.h2
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="relative inline-block text-4xl sm:text-5xl md:text-6xl font-extrabold mb-6 tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-[#D2AA51] to-white drop-shadow-[0_2px_10px_rgba(210,170,81,0.4)]"
              >
                About Vora Global
                <span className="absolute left-1/2 top-15 -translate-x-1/2 w-0 h-[3px] bg-[#D2AA51] transition-all duration-500 group-hover:w-full" />
              </motion.h2>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.8 }}
                className="text-gray-300 text-lg leading-relaxed font-light"
              >
                At Vora Global, we blend <strong className="text-white font-semibold">real estate expertise</strong> with{" "}
                <strong className="text-[#D2AA51] font-semibold">digital marketing intelligence</strong> to help you achieve one goal — growth.
                Whether you're buying or selling properties, or looking to generate consistent leads for your business,
                we provide transparent, data-driven, and result-oriented solutions.
              </motion.p>
            </motion.div>

            {/* Core Services Title */}
            <motion.div variants={fadeUp} className="text-center mb-12">
              <motion.h2
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.8 }}
                className="relative inline-block text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-[#D2AA51] to-white"
              >
                Our Core Services
                <span className="absolute left-1/2 bottom-0 -translate-x-1/2 w-0 h-[3px] bg-[#D2AA51] transition-all duration-500 group-hover:w-full" />
              </motion.h2>
            </motion.div>

            {/* Services Grid */}
            <motion.div
              variants={{
                hidden: { opacity: 0 },
                show: {
                  opacity: 1,
                  transition: {
                    staggerChildren: 0.12,
                  },
                },
              }}
              initial="hidden"
              whileInView="show"
              viewport={sectionViewport}
              className="flex justify-center items-center gap-8 flex-wrap max-w-7xl mx-auto"
            >
              {services.map((service, idx) => {
                const IconComponent = IconMap[service.iconName] || Zap;
                const key = `card-${idx}`;
                const controls = useAnimation();
                // use react-intersection-observer hook correctly for each card
                const [ref, inView] = useInView({ amount: 0.4, triggerOnce: true });

                useEffect(() => {
                  if (prefersReducedMotion) {
                    // jump to final state
                    controls.set({ rotateY: flipped[key] ? 180 : 0 });
                    return;
                  }

                  if (inView) {
                    controls.start({
                      rotateY: flipped[key] ? 180 : 0,
                      transition: { duration: 0.7, ease: "easeOut" },
                    });
                  } else {
                    // when not in view, keep it at a neutral angle so entry looks nice
                    controls.start({
                      rotateY: 90,
                      transition: { duration: 0.6, ease: "easeInOut" },
                    });
                  }
                }, [inView, flipped[key], controls, prefersReducedMotion, key]);

                return (
                  <motion.div
                    key={key}
                    ref={ref}
                    variants={{
                      hidden: { opacity: 0, y: 40 },
                      show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
                    }}
                    style={{ perspective: 1000 }}
                    className="h-80 w-80 cursor-pointer"
                  >
                    <motion.div
                      initial={{ rotateY: 90 }}
                      animate={controls}
                      transition={{ duration: 0.6 }}
                      style={{ transformStyle: "preserve-3d" }}
                      className="w-full h-full relative"
                      onClick={() => toggleFlip(key)}
                      onKeyDown={(e) => {
                        if (e.key === "Enter" || e.key === " ") {
                          e.preventDefault();
                          toggleFlip(key);
                        }
                      }}
                      role="button"
                      tabIndex={0}
                      aria-pressed={!!flipped[key]}
                      aria-label={`${service.title} card - ${flipped[key] ? "back" : "front"}`}
                    >
                      {/* FRONT */}
                      <motion.div
                        className="absolute w-full h-full p-[2px] rounded-xl bg-gradient-to-r from-[#c9a52f] via-[#eed33d] to-[#f8eecd] card-face"
                        style={{ backfaceVisibility: "hidden" }}
                      >
                        <div className="h-full bg-gray-900/95 p-6 md:p-8 rounded-xl flex flex-col">
                          <div className="flex items-center space-x-4 mb-4">
                            <IconComponent className="w-8 h-8 text-blue-400" />
                            <h3 className="text-2xl font-semibold text-white tracking-wide">{service.title}</h3>
                          </div>
                          <ul className="space-y-3 text-gray-300 text-base mt-2 flex-grow">
                            {service.items.map((item, i) => (
                              <li key={i} className="flex items-start">
                                <span className="text-blue-400 mr-3 mt-1">•</span>
                                <span>{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </motion.div>

                      {/* BACK */}
                      <motion.div
                        className="absolute w-full h-full p-[2px] rounded-xl bg-gradient-to-r from-[#c9a52f] via-[#eed33d] to-[#f8eecd] card-face"
                        style={{
                          transform: "rotateY(180deg)",
                          backfaceVisibility: "hidden",
                        }}
                      >
                        <div className="h-full bg-gray-900/95 p-6 md:p-8 rounded-xl flex flex-col justify-center">
                          <ul className="space-y-3 text-gray-300 text-base flex-grow">
                            {service.backItems.map((item, i) => (
                              <li key={i} className="flex items-start">
                                <span className="text-blue-400 mr-3 mt-1">•</span>
                                <span>{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </motion.div>
                    </motion.div>
                  </motion.div>
                );
              })}
            </motion.div>

          </div>
        </motion.section>

        {/* process */}
        <motion.section
          ref={triangleInViewRef}
          className="relative min-h-screen bg-[#0D0D21] py-20 px-6 overflow-hidden"
          initial="hidden"
          whileInView="visible"
          viewport={sectionViewport}
          transition={sectionTransition}
          variants={{ hidden: {}, visible: {} }}
        >
          {/* Floating Badge Animation CSS */}
          <style>{`
            @keyframes floatY {
              0% { transform: translateY(0); }
              50% { transform: translateY(-14px); }
              100% { transform: translateY(0); }
            }

            @media (min-width: 768px) {
              .animate-float { animation: floatY 2.6s ease-in-out infinite; }
            }

            @media (max-width: 767px) {
              .animate-float { animation: floatY 1.8s ease-in-out infinite; }
            }
          `}</style>

          {/* Animated Background Triangle — only inside this section */}
          <motion.div
            ref={triangleRef}
            className="absolute right-0 bottom-0 opacity-60 pointer-events-none z-0 md:block hidden"
            initial="hidden"
            animate={triangleControls}
            variants={{
              hidden: { x: 160, opacity: 0 },
              visible: {
                x: 0,
                opacity: 1,
                transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] },
              },
            }}
          >
            <img
              src={images.triangle}
              alt="background triangle"
              draggable="false"
              className="w-[42rem] h-[42rem] object-contain select-none"
              style={{ transform: "rotate(90deg) scaleX(-1)" }}
            />
          </motion.div>

          {/* Main Content */}
          <div className="relative z-10 max-w-7xl mx-auto">
            {/* Header */}
            <motion.div variants={fadeUp} className="text-center mb-16">
              <p className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-4">
                What We Do
              </p>
              <h2 className="text-4xl md:text-5xl font-bold text-white">
                Check Out Our Work <span className="text-[#D2AA51]">Process</span>
              </h2>
            </motion.div>

            {/* Process Cards */}
            <motion.div variants={fadeUp} className="flex flex-col md:flex-row items-center justify-center gap-12 md:gap-20">
              {processes.map((process) => (
                <div key={process.id} className="flex flex-col items-center flex-1 max-w-xs relative">
                  {/* Image Card */}
                  <div className="relative w-72 h-72 flex items-center justify-center mb-8">
                    <div className="w-56 h-56 flex items-center justify-center bg-transparent">
                      <img
                        src={process.image}
                        alt={process.title}
                        className="w-full h-full object-contain block"
                        draggable="false"
                      />
                    </div>
                  </div>

                  {/* Floating Number Badge BELOW image */}
                  <div className="flex justify-center mt-[-1.5rem] mb-6">
                    <span
                      className="text-[#D2AA51] font-extrabold text-8xl drop-shadow-[0_0_10px_rgba(210,170,81,0.7)] leading-none animate-float"
                      aria-hidden="true"
                    >
                      {process.id}
                    </span>
                  </div>

                  {/* Text */}
                  <div className="text-center">
                    <h3 className="text-xl md:text-2xl font-bold text-white mb-4">
                      {process.title}
                    </h3>
                    <p className="text-gray-400 text-base leading-relaxed">
                      {process.description}
                    </p>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </motion.section>

        {/* testimonials */}
        <motion.section
          className="pb-40 bg-gray-950 text-gray-300 pt-16 px-4 sm:px-6 lg:px-8"
          initial="hidden"
          whileInView="visible"
          viewport={sectionViewport}
          transition={sectionTransition}
          variants={{ hidden: {}, visible: {} }}
        >
          <style>{`
    @keyframes floatY {
      0%,100% { transform: translateY(0); }
      50% { transform: translateY(-6px); }
    }
    @keyframes pulseGlow {
      0% { box-shadow: 0 6px 20px rgba(210,170,81,0.08); }
      50% { box-shadow: 0 14px 36px rgba(210,170,81,0.25); }
      100% { box-shadow: 0 6px 20px rgba(210,170,81,0.08); }
    }
    @keyframes shine {
      0% { background-position: -200% 0; }
      100% { background-position: 200% 0; }
    }
    @keyframes wave {
      0% { transform: rotate(0deg); }
      25% { transform: rotate(3deg); }
      50% { transform: rotate(0deg); }
      75% { transform: rotate(-3deg); }
      100% { transform: rotate(0deg); }
    }

    .animate-float { animation: floatY 3s ease-in-out infinite; }
    .animate-pulse { animation: pulseGlow 4s ease-in-out infinite; }
    .animate-wave { animation: wave 2.5s ease-in-out infinite; }

    .text-shine {
      background: linear-gradient(90deg, #D2AA51, #f1d07a, #D2AA51);
      background-size: 300% 100%;
      -webkit-background-clip: text;
      background-clip: text;
      -webkit-text-fill-color: transparent;
      animation: shine 3s linear infinite;
    }
  `}</style>

          <div className="max-w-7xl mx-auto">
            {/* Header */}
            <motion.div variants={fadeUp} className="flex flex-col sm:flex-row items-center justify-between mb-16 relative">
              <div className="relative flex items-center w-full gap-0">
                {/* Golden circle with W */}
                <div
                  className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-gradient-to-br from-[#D2AA51] via-[#f1d07a] to-[#D2AA51]
                     flex items-center justify-center relative z-10 border border-white/10 shadow-[0_8px_20px_rgba(13,13,33,0.5)]
                     animate-float"
                >
                  <span className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white font-[cursive] animate-wave" style={{ display: "inline-block" }}>
                    W
                  </span>
                </div>

                {/* Heading (rest of text) */}
                <h1
                  className="relative z-20 text-3xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-tight leading-tight pl-2 sm:pl-4"
                  style={{ lineHeight: 1.05, fontFamily: "'Poppins', sans-serif" }}
                >
                  <span className="block">
                    <span className="text-white/90 font-[Playfair_Display] italic">hat Our </span>
                    <span className="text-[#D2AA51] text-shine font-[Playfair_Display] italic">Clients</span>{" "}
                    <span className="text-white/90 font-[Playfair_Display] italic">Say</span>
                  </span>
                </h1>
              </div>

              {/* Navigation Arrows */}
              <div className="hidden sm:flex gap-4 mt-6 sm:mt-0">
                <button
                  onClick={handlePrev}
                  className="p-3 rounded-full border border-gray-700 hover:border-[#D2AA51] hover:text-[#D2AA51] transition-all duration-300 text-gray-400 bg-transparent"
                  aria-label="Previous testimonial"
                >
                  <ChevronLeft size={24} />
                </button>
                <button
                  onClick={handleNext}
                  className="p-3 rounded-full border border-gray-700 hover:border-[#D2AA51] hover:text-[#D2AA51] transition-all duration-300 text-gray-400 bg-transparent"
                  aria-label="Next testimonial"
                >
                  <ChevronRight size={24} />
                </button>
              </div>
            </motion.div>

            {/* Testimonials Grid */}
            <motion.div variants={fadeUp} className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-4">
              {visibleTestimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className={`${index === 0 ? "block" : "hidden sm:block"} bg-gray-900 run-border p-8 transition-all duration-300 rounded-xl shadow-sm border border-transparent hover:border-white/5`}
                >
                  <div className="text-teal-500 text-3xl mb-4 leading-none">"</div>
                  <p className="text-gray-300 mb-8 leading-relaxed text-base">
                    {testimonial.quote}
                  </p>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full overflow-hidden bg-gray-800 flex-shrink-0">
                      <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <p className="font-semibold text-white">{testimonial.name}</p>
                      <p className="text-gray-500 text-sm">{testimonial.role}</p>
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>

            {/* Mobile Navigation */}
            <motion.div variants={fadeIn} className="flex sm:hidden gap-4 justify-center mb-4">
              <button
                onClick={handlePrev}
                className="p-3 rounded-full border border-gray-700 hover:border-teal-500 hover:text-teal-500 transition-all duration-300 text-gray-400"
                aria-label="Previous testimonial"
              >
                <ChevronLeft size={24} />
              </button>
              <button
                onClick={handleNext}
                className="p-3 rounded-full border border-gray-700 hover:border-teal-500 hover:text-teal-500 transition-all duration-300 text-gray-400"
                aria-label="Next testimonial"
              >
                <ChevronRight size={24} />
              </button>
            </motion.div>
          </div>
        </motion.section>

        {/* cta */}
        <motion.section
          className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black flex items-center justify-center overflow-hidden"
          initial="hidden"
          whileInView="visible"
          viewport={sectionViewport}
          transition={sectionTransition}
          variants={{ hidden: {}, visible: {} }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 w-full">
            {/* Left Section */}
            <motion.div
              variants={fadeUp}
              className="flex flex-col justify-center items-center md:items-start text-center md:text-left space-y-6 py-16 md:py-0 px-6 sm:px-12 md:pl-32 lg:pl-48"
            >
              <div className=" mx-auto md:mx-0">
                <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-light text-white leading-tight mb-4">
                  Grow Your Business or Investments Today
                </h1>
                <p className="text-sm sm:text-base md:text-lg text-gray-300 leading-relaxed mb-6">
                  Let's build something powerful together. 🚀
                </p>

                {/* WhatsApp CTA Button */}
                <motion.button
                  type="button"
                  onClick={openWhatsApp}
                  aria-label="Contact us on WhatsApp"
                  className="w-full sm:w-auto flex items-center justify-center gap-3 border border-[#D2AA51] text-black bg-[#D2AA51] px-8 py-3 rounded-full text-sm sm:text-base font-semibold shadow-lg hover:scale-105 hover:shadow-[0_0_25px_#D2AA51aa] transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <FaWhatsapp className="text-lg sm:text-xl" />
                  Get in Touch Now
                </motion.button>

                <p className="text-xs sm:text-sm text-gray-400 mt-4">
                  Free 15-minute consultation • No obligations
                </p>
              </div>
            </motion.div>

            {/* Right Section - full screen, no margin/padding */}
            <motion.div variants={fadeIn} className="relative w-full h-[60vh] md:h-screen">
              <img
                src={images.callToAction}
                alt="Call to Action"
                className="absolute inset-0 w-full h-full object-cover"
              />
            </motion.div>
          </div>
        </motion.section>

      </div>
    </>
  );
};

export default Home;
