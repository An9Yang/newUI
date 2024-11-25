'use client';

import { useState } from 'react';
import { Lightbulb, ArrowRight } from 'lucide-react';

export function IdeaGenerator() {
  const [idea, setIdea] = useState('');

  return (
    <section className="w-full max-w-3xl mx-auto px-4 py-12">
      <div className="bg-white rounded-xl shadow-lg p-6">
        <div className="flex flex-col md:flex-row gap-4">
          <input
            type="text"
            placeholder="Enter your idea..."
            className="flex-1 px-4 py-3 rounded-lg border border-zinc-200 focus:outline-none focus:ring-2 focus:ring-[#E6FF00] focus:border-transparent"
            value={idea}
            onChange={(e) => setIdea(e.target.value)}
          />
          <button className="bg-[#E6FF00] text-black px-6 py-3 rounded-lg font-medium flex items-center gap-2 hover:bg-[#d9ff00] transition-colors">
            <Lightbulb className="w-5 h-5" />
            Generate
          </button>
        </div>
      </div>
    </section>
  );
} 