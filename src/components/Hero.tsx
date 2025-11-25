"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Github, Linkedin, ChevronDown } from "lucide-react";
import AnimatedBackground from "./AnimatedBackground";

export default function Hero() {
    const { scrollY } = useScroll();
    const y1 = useTransform(scrollY, [0, 500], [0, 150]);
    const y2 = useTransform(scrollY, [0, 500], [0, -150]);
    const opacity = useTransform(scrollY, [0, 300], [1, 0]);

    return (
        <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-4 pt-20 sm:px-6 lg:px-8 bg-gradient-radial">
            <AnimatedBackground />
            
            <motion.div
                style={{ y: y1 }}
                className="pointer-events-none absolute left-1/4 top-1/4 h-64 w-64 rounded-full bg-primary/20 blur-[100px]"
            />
            <motion.div
                style={{ y: y2 }}
                className="pointer-events-none absolute bottom-1/4 right-1/4 h-64 w-64 rounded-full bg-secondary/20 blur-[100px]"
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
                        Hey, I'm <span className="text-gradient">Victor</span> 👋
                    </h1>
                </motion.div>

                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="text-2xl sm:text-3xl font-semibold text-foreground mb-6"
                >
                    I build stuff with Java, Spring Boot, and Kubernetes
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="mx-auto max-w-2xl text-lg text-text-secondary leading-relaxed mb-10"
                >
                    Currently at <span className="text-primary font-medium">ASSIST Software</span>, where I design distributed systems
                    that handle millions of transactions. I'm passionate about clean architecture, DevOps, and helping other developers level up.
                </motion.p>

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
                        className="group flex items-center gap-2 rounded-full border-2 border-border bg-surface px-8 py-4 text-base font-semibold text-foreground transition-all hover:border-primary/50 hover:bg-surface-alt shadow-md hover-lift"
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
                        className="flex items-center justify-center w-10 h-10 rounded-full bg-surface-alt border border-border text-text-muted hover:text-foreground hover:border-primary/50 transition-all"
                        aria-label="GitHub Profile"
                    >
                        <Github className="h-5 w-5" />
                    </Link>
                    <Link
                        href="https://www.linkedin.com/in/victor-balan-a62001192/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center w-10 h-10 rounded-full bg-surface-alt border border-border text-text-muted hover:text-foreground hover:border-primary/50 transition-all"
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
