'use client';

import Image from 'next/image';
import { Heart, ArrowUpRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { useScrollAnimation } from '@/app/hooks/useScrollAnimation';

const PROJECTS = Array(6).fill({
  tag: "Tag Text",
  title: "Project Title",
  likes: 120,
  author: {
    name: "Author Name",
    avatar: "https://picsum.photos/32/32"
  }
});

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
};

export function ProjectShowcase() {
  const { ref, isInView } = useScrollAnimation();

  return (
    <section className="w-full max-w-6xl mx-auto px-4 mb-24">
      <motion.div 
        className="text-center mb-16"
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        ref={ref}
      >
        <div className="inline-block bg-[#0066FF] text-white px-4 py-1 rounded-full text-sm font-medium mb-6" style={{ transform: 'rotate(-2deg)' }}>
          WOAAA
        </div>
        <h2 className="text-[40px] font-bold mb-4">Build With Us</h2>
        <p className="text-[#666666] max-w-2xl mx-auto text-lg leading-relaxed">
          We hold a strong and active community for all the independent creators,
          early startups and potential investors to level your idea up
        </p>
      </motion.div>
      
      <motion.div 
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        variants={container}
        initial="hidden"
        animate="show"
      >
        {PROJECTS.map((project, idx) => (
          <motion.div 
            key={idx}
            className="rounded-2xl overflow-hidden bg-white border border-gray-100 hover:shadow-lg transition-all duration-300"
            variants={item}
            whileHover={{ y: -5 }}
          >
            <div className="aspect-[4/3] bg-[#F5F5F5] relative">
              <span className="absolute top-4 left-4 bg-white px-3 py-1 rounded-full text-sm font-medium">
                {project.tag}
              </span>
            </div>
            <div className="p-4">
              <div className="flex items-center justify-between mb-3">
                <h3 className="font-medium text-[15px]">{project.title}</h3>
                <button className="flex items-center gap-1 text-gray-400">
                  <Heart className="w-4 h-4" fill="none" />
                  <span className="text-sm text-rose-500">{project.likes}</span>
                </button>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Image
                    src={project.author.avatar}
                    alt={project.author.name}
                    width={20}
                    height={20}
                    className="rounded-full"
                  />
                  <span className="text-sm text-gray-600">{project.author.name}</span>
                </div>
                <ArrowUpRight className="w-4 h-4 text-gray-400" />
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>

      <motion.div 
        className="flex justify-center gap-3 mt-20"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
      >
        <motion.button 
          className="h-12 px-8 bg-black text-white rounded-full hover:bg-gray-800 transition-colors text-[15px]"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Go to Showroom
        </motion.button>
        <motion.button 
          className="h-12 px-8 bg-[#E6FF00] rounded-full hover:bg-[#d9ff00] transition-colors text-[15px]"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Try Aictopus
        </motion.button>
      </motion.div>
    </section>
  );
} 