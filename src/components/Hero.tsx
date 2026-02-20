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
                    Software Engineer — Backend, Cloud & Distributed Systems
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="mx-auto max-w-2xl text-lg text-text-secondary leading-relaxed mb-10"
                >
                    3+ years engineering production-grade systems at <span className="text-primary font-medium">ASSIST Software</span> — from high-throughput iGaming backends
                    to zero-downtime database migrations handling <span className="text-foreground font-medium">1M+ transactions/hour</span>.
                    Passionate about clean architecture, cloud-native infrastructure, and scalable system design.
                </motion.p>

                {/* Impact metrics */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                    className="mx-auto max-w-lg mb-10"
                >
                    <div className="grid grid-cols-3 divide-x divide-border rounded-2xl border border-border bg-surface/60 backdrop-blur-sm shadow-md overflow-hidden">
                        {[
                            { value: "3+", label: "Years experience" },
                            { value: "1M+", label: "Transactions / hr" },
                            { value: "70%", label: "Load reduced" },
                        ].map((stat, i) => (
                            <div key={i} className="px-4 py-4 text-center">
                                <div className="text-2xl font-bold text-primary">{stat.value}</div>
                                <div className="text-xs text-text-muted mt-0.5 leading-tight">{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className="flex flex-wrap items-center justify-center gap-4 mb-8"
                >
                    <Link
                        href="#experience"
                        className="group inline-flex items-center gap-2 rounded-full bg-primary px-8 py-4 text-base font-semibold text-white transition-all hover:bg-primary-hover shadow-lg shadow-primary/30 hover:shadow-primary/50 hover-scale"
                    >
                        View My Work
                        <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                    </Link>
                    <Link
                        href="#contact"
                        className="group flex items-center gap-2 rounded-full border-2 border-border bg-surface/80 backdrop-blur-sm px-8 py-4 text-base font-semibold text-foreground transition-all hover:border-primary/50 hover:bg-surface shadow-md hover-lift"
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
                        className="flex items-center justify-center w-10 h-10 rounded-full bg-surface/80 backdrop-blur-sm border border-border text-text-muted hover:text-foreground hover:border-primary/50 transition-all"
                        aria-label="GitHub Profile"
                    >
                        <Github className="h-5 w-5" />
                    </Link>
                    <Link
                        href="https://www.linkedin.com/in/victor-balan-a62001192/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center w-10 h-10 rounded-full bg-surface/80 backdrop-blur-sm border border-border text-text-muted hover:text-foreground hover:border-primary/50 transition-all"
                        aria-label="LinkedIn Profile"
                    >
                        <Linkedin className="h-5 w-5" />
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
