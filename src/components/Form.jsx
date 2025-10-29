import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, User, BookOpen, MessageSquare, Instagram, Facebook, Twitter, Github, Linkedin } from 'lucide-react';
import images from '../assets/images';

const socialLinks = [
  { icon: Instagram, href: '#', label: 'Instagram' },
  { icon: Facebook, href: '#', label: 'Facebook' },
  { icon: Twitter, href: '#', label: 'Twitter' },
  { icon: Github, href: '#', label: 'GitHub' },
  { icon: Linkedin, href: '#', label: 'LinkedIn' },
];

const App = () => {
  // Mock state for form submission handling
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call delay
    setTimeout(() => {
      console.log('Form submitted!');
      setIsSubmitting(false);
    }, 2000);
  };

  // Motion variants
  const containerViewport = { once: false, amount: 0.2 }; // change once:true to animate only once
  const leftVariant = {
    hidden: { opacity: 0, x: -60 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: 'easeOut' } },
  };
  const rightVariant = {
    hidden: { opacity: 0, x: 60 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: 'easeOut' } },
  };

  return (
    <div className="min-h-screen bg-gray-100 p-4 sm:p-8 flex items-center justify-center">
      <div className="max-w-6xl w-full mx-auto shadow-2xl rounded-3xl overflow-hidden bg-white">
        <div className="flex flex-col lg:flex-row">
          {/* LEFT COLUMN: Contact Form (Takes 2/3 width on desktop) */}
          <motion.div
            className="lg:w-2/3 p-6 sm:p-10 md:p-16 bg-white rounded-l-3xl"
            initial="hidden"
            whileInView="visible"
            viewport={containerViewport}
            variants={leftVariant}
          >
            {/* Title Block */}
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 leading-tight mb-4">
              Ready to get started? let's chat.
            </h2>
            <p className="text-gray-600 mb-8 max-w-lg">
              Please fill out the form below, and a member of our team will get back to you as soon as possible.
            </p>

            {/* Form Fields */}
            <form onSubmit={handleSubmit} className="space-y-6" aria-label="Contact form">
              {/* Name and Email (Two-Column Layout) */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
                {/* 1. Name Input */}
                <div className="relative mt-2">
                  <label htmlFor="name" className="sr-only">Enter Your Name</label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Enter Your Name"
                    className="w-full border-b-2 border-gray-300 focus:border-blue-500 bg-transparent py-2 px-0 text-gray-800 placeholder-gray-500 focus:outline-none transition duration-200"
                  />
                  <User className="hidden sm:block absolute top-1/2 -translate-y-1/2 right-0 w-5 h-5 text-gray-400 pointer-events-none" />
                </div>

                {/* 2. Email Input */}
                <div className="relative mt-2">
                  <label htmlFor="email" className="sr-only">Enter Your Email</label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="Enter Your Email"
                    className="w-full border-b-2 border-gray-300 focus:border-blue-500 bg-transparent py-2 px-0 text-gray-800 placeholder-gray-500 focus:outline-none transition duration-200"
                  />
                  <Mail className="hidden sm:block absolute top-1/2 -translate-y-1/2 right-0 w-5 h-5 text-gray-400 pointer-events-none" />
                </div>

                {/* 3. Phone Input */}
                <div className="relative mt-2">
                  <label htmlFor="phone" className="sr-only">Phone Number</label>
                  <input
                    id="phone"
                    name="phone"
                    type="text"
                    placeholder="Phone Number"
                    className="w-full border-b-2 border-gray-300 focus:border-blue-500 bg-transparent py-2 px-0 text-gray-800 placeholder-gray-500 focus:outline-none transition duration-200"
                  />
                  <Phone className="hidden sm:block absolute top-1/2 -translate-y-1/2 right-0 w-5 h-5 text-gray-400 pointer-events-none" />
                </div>

                {/* 4. Subject Input */}
                <div className="relative mt-2">
                  <label htmlFor="subject" className="sr-only">Subject</label>
                  <input
                    id="subject"
                    name="subject"
                    type="text"
                    placeholder="Subject"
                    className="w-full border-b-2 border-gray-300 focus:border-blue-500 bg-transparent py-2 px-0 text-gray-800 placeholder-gray-500 focus:outline-none transition duration-200"
                  />
                  <BookOpen className="hidden sm:block absolute top-1/2 -translate-y-1/2 right-0 w-5 h-5 text-gray-400 pointer-events-none" />
                </div>
              </div>

              {/* Message (Full Width) */}
              <div className="relative mt-2">
                <label htmlFor="message" className="sr-only">Message</label>
                <textarea
                  id="message"
                  name="message"
                  placeholder="Message"
                  rows="4"
                  className="w-full border-b-2 border-gray-300 focus:border-blue-500 bg-transparent py-2 px-0 text-gray-800 placeholder-gray-500 focus:outline-none transition duration-200 resize-none"
                />
                <MessageSquare className="hidden sm:block absolute top-1/2 -translate-y-1/2 right-0 w-5 h-5 text-gray-400 pointer-events-none" />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full md:w-auto mt-8 px-10 py-3 text-lg font-semibold rounded-xl text-gray-900 bg-amber-400 hover:bg-amber-500 transition duration-300 transform hover:scale-[1.01] shadow-lg disabled:opacity-50"
                disabled={isSubmitting}
                aria-busy={isSubmitting}
              >
                {isSubmitting ? 'Sending...' : 'Submit'}
              </button>
            </form>
          </motion.div>

          {/* RIGHT COLUMN: Branding/Assistant (Takes 1/3 width on desktop) */}
          <motion.aside
            className="lg:w-1/3 bg-gray-900 text-white p-6 sm:p-10 rounded-r-3xl overflow-hidden relative flex flex-col justify-between"
            initial="hidden"
            whileInView="visible"
            viewport={containerViewport}
            variants={rightVariant}
          >
            {/* Dark Blue Background with Custom Rounded Top Edge */}
            <div className="absolute inset-0 bg-[#111827] opacity-90 z-0" />

            {/* Custom Rounded Shape (Top Right Edge) */}
            <div className="absolute top-0 left-0 w-full h-1/4 bg-white rounded-bl-[100px] z-0" />

            {/* Content Container (z-10 ensures content is above the overlay/shape) */}
            <div className="relative z-10 flex flex-col h-full">
              {/* Follow Us Section */}
              <div>
                <h3 className="text-xl font-semibold mb-6 text-gray-50">Follow Us</h3>
                <div className="flex space-x-3">
                  {socialLinks.map((link) => (
                    <a
                      key={link.label}
                      href={link.href}
                      aria-label={`Follow us on ${link.label}`}
                      className="w-10 h-10 flex items-center justify-center rounded-full border-2 border-amber-400 text-amber-400 hover:bg-amber-400 hover:text-gray-900 transition duration-300"
                    >
                      <link.icon className="w-5 h-5" />
                    </a>
                  ))}
                </div>
              </div>

              {/* Assistant Image (Pushed to the bottom) */}
              <div className="flex-grow flex items-end justify-center mt-12">
                <div className="w-full h-auto max-w-xs overflow-hidden rounded-t-lg">
                  <img
                    src={images.formRightImage}
                    alt="Contact assistant ready to help"
                    className="w-full h-full object-cover rounded-t-lg"
                  />
                </div>
              </div>
            </div>
          </motion.aside>
        </div>
      </div>
    </div>
  );
};

export default App;
