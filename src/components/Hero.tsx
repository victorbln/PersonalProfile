"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Github, Linkedin, ChevronDown } from "lucide-react";

export default function Hero() {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 120]);
  const y2 = useTransform(scrollY, [0, 500], [0, -120]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-4 pt-20 sm:px-6 lg:px-8">
      {/* Hero-specific soft glows on top of the global orbs */}
      <motion.div
        style={{ y: y1 }}
        className="pointer-events-none absolute left-1/4 top-1/3 h-80 w-80 rounded-full bg-primary/10 blur-[120px]"
      />
      <motion.div
        style={{ y: y2 }}
        className="pointer-events-none absolute right-1/4 bottom-1/3 h-80 w-80 rounded-full bg-secondary/10 blur-[120px]"
      />

      <motion.div
        style={{ opacity }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 max-w-4xl text-center"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="mb-6"
        >
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-foreground mb-4">
            Hi, I'm <span className="text-gradient">Victor Balan</span>
          </h1>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-2xl sm:text-3xl font-semibold text-foreground mb-6"
        >
          Backend Engineer · Deputy, Java Technologies
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mx-auto max-w-2xl text-lg text-text-secondary leading-relaxed mb-10"
        >
          3+ years building production-grade systems at{" "}
          <span className="text-primary font-medium">ASSIST Software</span>.
          Recently promoted to{" "}
          <span className="text-foreground font-medium">
            Deputy of the Java Technologies Department
          </span>{" "}
          — leading engineering standards while delivering high-throughput
          backends and zero-downtime migrations handling{" "}
          <span className="text-foreground font-medium">
            1M+ transactions/hour
          </span>
          .
        </motion.p>

        {/* Impact metrics — standalone numbers, no container card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="flex items-center justify-center gap-12 sm:gap-20 mb-10"
        >
          {[
            { value: "3+", label: "Years experience" },
            { value: "1M+", label: "Transactions / hr" },
            { value: "70%", label: "Load reduced" },
          ].map((stat, i) => (
            <div key={i} className="text-center">
              <div className="text-3xl font-black text-primary tracking-tight leading-none">
                {stat.value}
              </div>
              <div className="text-xs text-text-muted mt-1.5 uppercase tracking-widest font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-wrap items-center justify-center gap-4 mb-8"
        >
          <Link
            href="#experience"
            className="group inline-flex items-center gap-2 rounded-xl bg-primary px-8 py-3.5 text-base font-semibold text-white transition-all hover:bg-primary-hover shadow-ambient hover-scale"
          >
            View My Work
            <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
          </Link>
          <Link
            href="#contact"
            className="group flex items-center gap-2 rounded-xl border border-border px-8 py-3.5 text-base font-semibold text-foreground transition-all hover:border-primary/50 hover:text-primary"
          >
            Let's Talk
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex items-center justify-center gap-4"
        >
          <Link
            href="https://github.com/victorbln"
            target="_blank"
            rel="noopener noreferrer"
            className="text-text-muted hover:text-foreground transition-colors"
            aria-label="GitHub Profile"
          >
            <Github className="h-5 w-5" strokeWidth={1.5} />
          </Link>
          <Link
            href="https://www.linkedin.com/in/balan-victor/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-text-muted hover:text-foreground transition-colors"
            aria-label="LinkedIn Profile"
          >
            <Linkedin className="h-5 w-5" strokeWidth={1.5} />
          </Link>
        </motion.div>
      </motion.div>

      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <ChevronDown className="h-6 w-6 text-text-muted" />
      </motion.div>
    </section>
  );
}
