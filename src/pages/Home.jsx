import React, { useState, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import images from '../assets/images';
import Navbar from '../components/Navbar';
import { FaWhatsapp } from 'react-icons/fa';
import { services, processes, testimonials } from './data';
import { Landmark, BarChart3, TrendingUp, Zap, ArrowRight, ChevronRight, ChevronLeft } from 'lucide-react';
import '../style/animation.css';
import { useInView } from "react-intersection-observer";



const heroContainer = {
  hidden: { opacity: 0, y: 10 },
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

const bgVariant = {
  initial: { scale: 1.02 },
  animate: {
    scale: 1,
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
  const waNumber = '971501234567';
  const prefill = encodeURIComponent('Hi — I am interested in a consultation about Dubai real estate.');
  const waLink = `https://wa.me/${waNumber}?text=${prefill}`;

  const openWhatsApp = () => {
    window.open(waLink, '_blank', 'noopener,noreferrer');
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
   const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true, // animate only once
    threshold: 0.2, // start animating when 20% visible
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <>
      <Navbar />

      <div className="relative min-h-screen overflow-hidden bg-gray-600">
        <motion.img
          variants={bgVariant}
          initial="initial"
          animate="animate"
          src={images.heroBackImage}
          alt="Dubai cityscape background"
          className="absolute inset-0 w-full h-full object-cover object-bottom-left"
        />

        {/* Overlay gradient — darker on mobile */}
        <div className="absolute inset-0 hero-overlay"></div>

        <motion.div
          className="relative z-20 flex flex-col items-center justify-center min-h-screen text-white px-4 text-center"
          variants={heroContainer}
          initial="hidden"
          animate="visible"
        >
          <motion.h1
            variants={heroItem}
            className="text-lg lg:text-5xl font-extrabold mb-6 leading-tight"
            aria-label="Hero headline"
          >
            Real Estate. <span className="text-[#D2AA51]">Marketing.</span> Lead Generation — All Under One Roof.
          </motion.h1>

          <motion.p
            variants={heroItem}
            className="text-base md:text-lg text-gray-300 mb-8 max-w-2xl leading-relaxed"
          >
            Dubai’s trusted brand helping investors, brokers & businesses grow faster through verified leads,
            smart marketing, and profitable property deals.
          </motion.p>

          {/* WhatsApp Button with external bump animation */}
          <button
            type="button"
            onClick={openWhatsApp}
            aria-label="Contact us on WhatsApp"
            className="whatsapp-btn flex items-center justify-center gap-2 border border-[#D2AA51] text-black bg-[#D2AA51] px-6 py-3 rounded-full text-sm sm:text-base font-semibold transition-all duration-300"
          >
            <FaWhatsapp className="text-lg sm:text-xl" />
            Book a Consultation
          </button>
        </motion.div>
      </div>

      {/* service section */}
      <div className="min-h-screen bg-[#0d0d21] font-sans py-16 sm:py-24">
        <style>{`
        @keyframes borderMove {
          0%, 100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }
        
        .animate-border-move {
          background-size: 200% 200%;
          animation: borderMove 3s ease infinite;
        }
      `}</style>

        <div className="container mx-auto px-4 md:px-8">
          {/* About Section */}
          <div className="max-w-4xl mx-auto text-center mb-16 px-4 font-sans">
            <motion.h2
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="hover:cursor-grab relative inline-block text-4xl sm:text-5xl md:text-6xl font-extrabold mb-6 tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-[#D2AA51] to-white drop-shadow-[0_2px_10px_rgba(210,170,81,0.4)] group"
            >
              About Vora Global
              {/* Underline */}
              <span className=" absolute left-1/2 top-15 -translate-x-1/2 w-0 h-[3px] bg-[#D2AA51] transition-all duration-500 group-hover:w-full"></span>
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

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="text-gray-300 text-lg leading-relaxed mt-4 font-light"
            >
              Founded in Dubai, our mission is to simplify property investment and lead generation with{" "}
              <strong className="text-white font-semibold">clarity, trust, and technology.</strong>
            </motion.p>
          </div>



          {/* Core Services Title */}
          <div className="text-center mb-12 font-sans">
            <motion.h2
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="relative inline-block text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-[#D2AA51] to-white drop-shadow-[0_2px_10px_rgba(210,170,81,0.4)] group"
            >
              Our Core Services
              {/* Animated Underline */}
              <span className="absolute left-1/2 bottom-0 -translate-x-1/2 w-0 h-[3px] bg-[#D2AA51] transition-all duration-500 group-hover:w-full"></span>
            </motion.h2>
          </div>


          {/* Core Services Grid with Flip Animation */}
          <motion.div
            variants={{
              hidden: { opacity: 0 },
              show: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.2,
                },
              },
            }}
            initial="hidden"
            animate="show"
            className="flex justify-center items-center gap-8 flex-wrap max-w-7xl mx-auto"
          >
            {services.map((service) => {
              const Icon = IconMap[service.iconName] || Zap;

              return (
                <motion.div
                  key={service.title}
                  variants={{
                    hidden: { opacity: 0, y: 50 },
                    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
                  }}
                  className="h-80 w-80 cursor-pointer perspective"
                >
                  <motion.div
                    initial={{ rotateY: 0 }}
                    whileHover={{ rotateY: 180 }}
                    transition={{ duration: 0.6 }}
                    style={{ transformStyle: 'preserve-3d' }}
                    className="w-full h-full relative"
                  >
                    {/* Front of Card */}
                    <motion.div
                      style={{ backfaceVisibility: 'hidden' }}
                      className="absolute w-full h-full p-[2px] rounded-xl bg-gradient-to-r from-[#c9a52f] via-[#eed33d] to-[#f8eecd]"
                    >
                      <div className="h-full bg-gray-900/95 p-6 md:p-8 rounded-xl flex flex-col">
                        <div className="flex items-center space-x-4 mb-4">
                          <Icon className="w-8 h-8 text-blue-400" />
                          <h3 className="text-2xl font-semibold text-white tracking-wide">{service.title}</h3>
                        </div>

                        <ul className="space-y-3 text-gray-300 text-base mt-2 flex-grow">
                          {service.items.map((item, index) => (
                            <li key={index} className="flex items-start">
                              <span className="text-blue-400 mr-3 mt-1">•</span>
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </motion.div>

                    {/* Back of Card */}
                    <motion.div
                      style={{ backfaceVisibility: 'hidden', rotateY: 180 }}
                      className="absolute w-full h-full p-[2px] rounded-xl bg-gradient-to-r from-[#c9a52f] via-[#eed33d] to-[#f8eecd]"
                    >
                      <div className="h-full bg-gray-900/95 p-6 md:p-8 rounded-xl flex flex-col justify-center">
                        <ul className="space-y-3 text-gray-300 text-base flex-grow">
                          {service.backItems.map((item, index) => (
                            <li key={index} className="flex items-start">
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
      </div>



      {/* process */}
 <div ref={ref} className="relative min-h-screen bg-[#0D0D21] py-20 px-6 overflow-hidden">
      {/* Animated Background Triangle */}
      <motion.div
        className="absolute bottom-0 right-0 opacity-50 pointer-events-none z-0"
        initial={{ x: 300, opacity: 0 }}       
        animate={controls}
        variants={{
          visible: {
            x: 0,
            opacity: 1,
            transition: { duration: 1.8, ease: "easeOut" },
          },
        }}
      >
        <img
          src={images.triangle}
          alt="background triangle"
          className="w-200 h-200 transform rotate-90 scale-x-[-1]"
        />
      </motion.div>

      {/* Content Wrapper */}
      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-4">
            What We Do
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            Check Out Our Work <span className="text-[#D2AA51]">Process</span>
          </h2>
        </div>

        {/* Process Cards */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-12 md:gap-20">
          {processes.map((process, index) => (
            <div key={process.id} className="flex flex-col items-center flex-1 max-w-xs relative">
              {/* Circular Card */}
              <div className="relative w-72 h-72 flex items-center justify-center mb-8">
                <div className="w-56 h-56 flex items-center justify-center rounded-full overflow-hidden shadow-lg">
                  <img
                    src={process.image}
                    alt={process.title}
                    className="w-full h-full object-contain block"
                    draggable="false"
                  />
                </div>

                {/* Wavy Number */}
                <div className="absolute bottom-0 right-0 translate-x-4 translate-y-4 bg-transparent flex items-center justify-center">
                  <span className="text-[#D2AA51] font-extrabold text-8xl drop-shadow-[0_0_10px_rgba(210,170,81,0.7)] leading-none animate-wave">
                    {process.id}
                  </span>
                </div>
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

              {/* Arrow */}
              {index < processes.length - 1 && (
                <div className="hidden md:flex absolute translate-x-80 text-gray-400 mt-20">
                  <ArrowRight size={40} strokeWidth={1.5} />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>

      {/* testimonials */}
      <div className="min-h-screen bg-gray-950 text-gray-300 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="flex items-center justify-between mb-16">
            <div className="relative flex items-center justify-start gap-6">
              {/* Circle with quote mark */}
              <div className="w-24 h-24 rounded-full bg-[#D2AA51] flex items-center justify-center flex-shrink-0 relative z-10">
                <span className="text-5xl font-serif text-white leading-none">“</span>
              </div>

              {/* Heading positioned slightly overlapping the circle */}
              <h1 className="text-4xl sm:text-5xl font-bold text-white relative z-20 -ml-10 font-serif tracking-wide">
                What Our <span className="bg-gradient-to-r from-[#D2AA51] via-[#f1d07a] to-[#D2AA51] bg-clip-text text-transparent animate-fadeGlow drop-shadow-[0_0_10px_rgba(210,170,81,0.5)]">
                  Clients </span>
                Say
              </h1>

            </div>


            {/* Navigation Arrows */}
            <div className="hidden sm:flex gap-4">
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
            </div>
          </div>

          {/* Testimonials Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            {visibleTestimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-gray-900 run-border p-8 transition-all duration-300"


              >
                {/* Quote Mark */}
                <div className="text-teal-500 text-3xl mb-4">"</div>

                {/* Quote Text */}
                <p className="text-gray-300 mb-8 leading-relaxed">
                  {testimonial.quote}
                </p>

                {/* Author Info */}
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full overflow-hidden bg-gray-800">
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
          </div>

          {/* Mobile Navigation */}
          <div className="flex sm:hidden gap-4 justify-center mb-8">
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
          </div>

          {/* Pagination Dots */}
          <div className="flex justify-center gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`h-2 rounded-full transition-all duration-300 ${index === currentIndex
                  ? 'bg-teal-500 w-8'
                  : 'bg-gray-700 w-2 hover:bg-gray-600'
                  }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>



      {/* cta */}

    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black flex items-center justify-center px-4 py-12">
  <div className="max-w-7xl w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
    {/* Left Content */}
    <div className="flex flex-col justify-center space-y-8">
      <div>
        <h1 className="text-5xl md:text-6xl font-light text-white leading-tight mb-6">
          Grow Your Business or Investments Today
        </h1>
        <p className="text-lg text-gray-300 leading-relaxed">
          Let's build something powerful together. 🚀
        </p>
      </div>

      {/* CTA Button */}
      <div>
        <motion.button
          type="button"
          onClick={openWhatsApp}
          aria-label="Contact us on WhatsApp"
          className="flex items-center justify-center gap-2 border border-[#D2AA51] text-black bg-[#D2AA51] px-6 py-3 rounded-full text-sm sm:text-base font-semibold transition-all duration-300"
        >
          <FaWhatsapp className="text-lg sm:text-xl" />
          Get in Touch Now
        </motion.button>
      </div>
    </div>

    {/* Right Image Block */}
   <div className="w-full h-full">
      <img
        src={images.callToAction}
        alt="Call to Action"
        className="w-full h-full object-cover block"
      />
    </div>
  </div>
</div>

    </>
  );
};

export default Home;
