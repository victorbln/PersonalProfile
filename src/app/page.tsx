import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import AboutSection from "@/components/AboutSection";
import ExperienceSection from "@/components/ExperienceSection";
import EducationSection from "@/components/EducationSection";
import ProjectsSection from "@/components/ProjectsSection";
import SkillsSection from "@/components/SkillsSection";
import BlogSection from "@/components/BlogSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen text-foreground selection:bg-primary/30 relative">
      {/* Fixed ambient gradient orbs — sit behind every section,
          providing soft colour without hard section-boundary lines */}
      <div aria-hidden="true" className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
        {/* Top-left — primary indigo glow */}
        <div className="absolute -top-40 -left-40 w-[700px] h-[700px] rounded-full bg-primary/[0.07] blur-[140px]" />
        {/* Top-right — secondary cyan glow */}
        <div className="absolute -top-20 right-0 w-[500px] h-[500px] rounded-full bg-secondary/[0.05] blur-[120px]" />
        {/* Middle — accent emerald glow */}
        <div className="absolute top-[50%] left-[30%] w-[600px] h-[600px] rounded-full bg-accent/[0.04] blur-[160px]" />
        {/* Bottom-right — indigo glow */}
        <div className="absolute bottom-[10%] right-[5%] w-[500px] h-[500px] rounded-full bg-primary/[0.05] blur-[130px]" />
      </div>

      <div className="relative z-10">
        <Navbar />
        <Hero />
        <AboutSection />
        <ExperienceSection />
        <EducationSection />
        <ProjectsSection />
        <SkillsSection />
        <BlogSection />
        <ContactSection />
        <Footer />
      </div>
    </main>
  );
}
