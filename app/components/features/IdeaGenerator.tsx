'use client';

import { useState } from 'react';
import { Lightbulb } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export function IdeaGenerator() {
  const [idea, setIdea] = useState('');
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.section 
      className="w-full max-w-[800px] mx-auto px-4 mb-24"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.4 }}
    >
      <motion.div 
        className="relative"
        animate={{
          boxShadow: isHovered 
            ? '0 0 20px rgba(230, 255, 0, 0.3)' 
            : '0 0 0px rgba(230, 255, 0, 0)'
        }}
        transition={{ duration: 0.3 }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <textarea
          placeholder="Tell me what you want to build today..."
          className="w-full min-h-[160px] p-8 rounded-[24px] border-2 border-[#E6FF00] focus:outline-none focus:ring-0 text-gray-700 placeholder:text-gray-400 text-[15px] resize-none"
          value={idea}
          onChange={(e) => setIdea(e.target.value)}
        />
        <div className="absolute bottom-6 right-6 flex items-center gap-3">
          <motion.button 
            className="h-10 px-4 text-[15px] flex items-center gap-2 text-gray-600 rounded-full transition-all duration-200 hover:bg-black/[0.03]"
            whileTap={{ 
              scale: 0.98,
              transition: { duration: 0.1 }
            }}
          >
            <Lightbulb className="w-4 h-4" />
            Inspire me
          </motion.button>
          <motion.button 
            className="h-10 bg-[#E6FF00] px-5 rounded-full text-[15px] font-medium transition-all duration-200 hover:bg-[#E6FF00]/90"
            whileTap={{ 
              scale: 0.98,
              transition: { duration: 0.1 }
            }}
          >
            Generate
          </motion.button>
        </div>
      </motion.div>
    </motion.section>
  );
} 