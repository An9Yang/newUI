'use client';

import Image from 'next/image';
import { Heart } from 'lucide-react';

const PROJECTS = [
  {
    id: 1,
    title: "AI-Powered Design Tool",
    image: "https://picsum.photos/seed/1/400/300",
    author: "Sarah Chen",
    likes: 234,
  },
  // Add more project data as needed
];

export function ProjectShowcase() {
  return (
    <section className="w-full max-w-7xl mx-auto px-4 py-16">
      <h2 className="text-3xl font-bold mb-8">Featured Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {PROJECTS.map((project) => (
          <div key={project.id} className="bg-white rounded-xl shadow-lg overflow-hidden">
            <Image
              src={project.image}
              alt={project.title}
              width={400}
              height={300}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="font-semibold text-lg mb-2">{project.title}</h3>
              <div className="flex items-center justify-between">
                <span className="text-sm text-zinc-600">by {project.author}</span>
                <button className="flex items-center gap-1 text-sm text-zinc-600">
                  <Heart className="w-4 h-4" />
                  {project.likes}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
} 