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

/* SVG fractal-noise data URL — breaks digital flatness with
   organic grain, per the Architect's UI Manifest spec on
   Glassmorphism: "a very subtle noise texture overlay".        */
const NOISE_SVG =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='256' height='256'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='256' height='256' filter='url(%23n)' opacity='1'/%3E%3C/svg%3E";

export default function Home() {
  return (
    <main className="min-h-screen text-foreground selection:bg-primary/20 relative">

      {/* ── Gradient mesh — 6 overlapping organic orbs ─────────────
          Positioned to create warm centre with cool edges.
          Uses primary (emerald) + secondary (amber) only —
          no generic blue/purple orbs.                          */}
      <div aria-hidden="true" className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
        {/* Emerald — top-left wash */}
        <div className="absolute -top-[280px] -left-[180px] w-[900px] h-[900px] rounded-full bg-primary/[0.10] blur-[180px]" />
        {/* Amber — top-right warmth */}
        <div className="absolute -top-[120px] right-[-120px] w-[750px] h-[750px] rounded-full bg-secondary/[0.08] blur-[160px]" />
        {/* Emerald — mid-left */}
        <div className="absolute top-[38%] -left-[80px] w-[550px] h-[550px] rounded-full bg-primary/[0.06] blur-[150px]" />
        {/* Amber — mid-right */}
        <div className="absolute top-[42%] right-[0%] w-[620px] h-[620px] rounded-full bg-secondary/[0.07] blur-[160px]" />
        {/* Accent teal — lower-centre */}
        <div className="absolute bottom-[22%] left-[30%] w-[560px] h-[560px] rounded-full bg-accent/[0.05] blur-[150px]" />
        {/* Emerald — bottom-right */}
        <div className="absolute -bottom-[180px] right-[10%] w-[650px] h-[650px] rounded-full bg-primary/[0.07] blur-[170px]" />
      </div>

      {/* ── Noise texture overlay — sits above orbs, below content ──
          opacity 0.028 gives grain without obscuring content.   */}
      <div
        aria-hidden="true"
        className="pointer-events-none fixed inset-0 z-[2]"
        style={{
          backgroundImage: `url("${NOISE_SVG}")`,
          opacity: 0.028,
        }}
      />

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
