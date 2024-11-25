'use client';

import { Users } from 'lucide-react';

export function CommunitySection() {
  return (
    <section className="w-full bg-zinc-50 py-16">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <div className="flex justify-center mb-6">
          <Users className="w-12 h-12 text-[#E6FF00] bg-black rounded-full p-2" />
        </div>
        <h2 className="text-3xl font-bold mb-4">Build With Us</h2>
        <p className="text-lg text-zinc-600 mb-8">
          Join our community of creators, innovators, and builders. Share your ideas and get inspired.
        </p>
        <button className="bg-black text-white px-8 py-3 rounded-lg font-medium hover:bg-zinc-800 transition-colors">
          Join Community
        </button>
      </div>
    </section>
  );
} 