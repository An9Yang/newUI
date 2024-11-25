import { Header } from "@/app/components/layout/Header";
import { HeroSection } from "@/app/components/features/HeroSection";
import { IdeaGenerator } from "@/app/components/features/IdeaGenerator";
import { ProjectShowcase } from "@/app/components/features/ProjectShowcase";
import { CommunitySection } from "@/app/components/features/CommunitySection";

export default function Home() {
  return (
    <div className="min-h-screen bg-white relative overflow-x-hidden">
      {/* Dot pattern overlay */}
      <div className="fixed inset-0 pointer-events-none opacity-[0.15]" 
        style={{
          backgroundImage: `radial-gradient(#666 1px, transparent 1px)`,
          backgroundSize: '24px 24px'
        }}
      />

      {/* Top-right corner decoration */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] pointer-events-none">
        <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_center,#F5F5F5_0%,transparent_70%)] opacity-80" />
      </div>

      {/* Bottom-left corner decoration */}
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] pointer-events-none">
        <div className="absolute bottom-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,#F5F5F5_0%,transparent_70%)] opacity-80" />
      </div>

      {/* Content */}
      <div className="relative z-10">
        <Header />
        <main className="pt-24">
          <HeroSection />
          <IdeaGenerator />
          <ProjectShowcase />
          <CommunitySection />
        </main>
      </div>
    </div>
  );
}
