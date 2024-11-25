'use client';

import Image from 'next/image';
import { Sparkles } from 'lucide-react';

export function HeroSection() {
  return (
    <section className="w-full min-h-[40vh] flex flex-col items-center justify-center bg-gradient-to-b from-black to-zinc-900 text-white px-4">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 flex items-center justify-center gap-3">
          Ideas Ship Here <Sparkles className="w-8 h-8 text-[#E6FF00]" />
        </h1>
        <p className="text-lg md:text-xl text-zinc-300 max-w-2xl mx-auto">
          Transform your creative sparks into reality. Join our community of innovators and builders.
        </p>
      </div>
    </section>
  );
} 