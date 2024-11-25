'use client';

import { motion } from 'framer-motion';

export function HeroSection() {
  return (
    <section className="w-full max-w-4xl mx-auto text-center pt-28 pb-16">
      <motion.h1 
        className="text-[64px] leading-tight font-bold mb-8 relative inline-block"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Ideas Ship Here
        <motion.span 
          className="absolute -right-12 -top-8 text-[#E6FF00] text-7xl rotate-12"
          animate={{ rotate: [12, 24, 12] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        >
          *
        </motion.span>
        <motion.span 
          className="absolute -right-4 top-8"
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M8 24L24 8M24 8V24M24 8H8" stroke="#0066FF" strokeWidth="2" strokeLinecap="round"/>
          </svg>
        </motion.span>
      </motion.h1>
      <motion.div 
        className="space-y-1.5 text-[#666666]"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <p className="text-lg font-normal">
          Turn your ideas into live sites, products or platforms within few lines.
        </p>
        <p className="text-lg font-normal">
          You shoot for the moon; leave rocket building to us.
        </p>
      </motion.div>
    </section>
  );
} 