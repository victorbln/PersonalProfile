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
    <main className="min-h-screen text-foreground phosphor-flicker relative">
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
