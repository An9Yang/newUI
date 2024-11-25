'use client';

import Link from 'next/link';

export function Header() {
  return (
    <div className="fixed top-0 left-0 right-0 z-50 w-full px-8 py-6">
      <div className="max-w-7xl mx-auto">
        <div className="bg-white/60 backdrop-blur-md rounded-[20px] px-5 py-3 flex items-center shadow-[0_2px_12px_0_rgba(0,0,0,0.03)] border border-white/20">
          <div className="flex items-center">
            <Link href="/" className="flex items-center gap-1">
              <div className="w-8 h-8 bg-black rounded-full flex items-center justify-center">
                <span className="font-bold text-lg text-white">A</span>
              </div>
              <span className="text-[15px] font-normal">Aictopus</span>
            </Link>
          </div>

          <nav className="flex-1 flex justify-center items-center gap-8">
            <Link 
              href="/showroom" 
              className="text-[15px] text-gray-600 hover:text-gray-900 transition-colors"
            >
              Showroom
            </Link>
            <Link 
              href="/about" 
              className="text-[15px] text-gray-600 hover:text-gray-900 transition-colors"
            >
              About Us
            </Link>
          </nav>
          
          <button className="h-9 bg-black text-white text-[14px] px-5 rounded-full hover:bg-gray-800 transition-colors">
            Sign up
          </button>
        </div>
      </div>
    </div>
  );
} 