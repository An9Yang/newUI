'use client';

import { MessageSquare } from 'lucide-react';

export function CommunitySection() {
  return (
    <footer className="w-full bg-[#F5F5F5] py-16">
      <div className="max-w-4xl mx-auto px-4">
        <div className="flex items-start justify-between mb-3">
          <div className="flex items-start gap-3">
            <span className="text-[#0066FF] text-5xl leading-none" style={{ fontFamily: 'serif' }}>"</span>
            <h2 className="text-3xl font-bold -mt-2">Speak it aloud</h2>
          </div>
          <div className="flex items-center gap-4">
            <button className="text-[15px] hover:text-gray-600 transition-colors">
              Email us
            </button>
            <button className="h-10 flex items-center gap-2 bg-black text-white px-5 rounded-full text-[15px] hover:bg-gray-800 transition-all duration-200">
              <MessageSquare className="w-4 h-4" fill="currentColor" />
              Join the community
            </button>
          </div>
        </div>
        <p className="text-[#666666] text-lg ml-11">
          Any thoughts? Join our growing community on Discord or email us!
        </p>
      </div>
      <div className="text-center text-sm text-gray-500 mt-16">
        Powered by <span className="text-[#0066FF]">Aictopus</span>
      </div>
    </footer>
  );
} 