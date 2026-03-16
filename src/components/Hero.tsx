"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";

const BOOT_LINES = [
    { delay: 0.1,  text: "VICTOR-OS v3.0.0 — Backend Engineering Terminal",         type: "header"  },
    { delay: 0.25, text: "Copyright (c) 2026 Victor Balan. All rights reserved.",    type: "header"  },
    { delay: 0.4,  text: "",                                                           type: "blank"   },
    { delay: 0.6,  text: "Mounting distributed-systems kernel............",           type: "loading" },
    { delay: 0.85, text: "Loading java-technologies-dept module..........",           type: "loading" },
    { delay: 1.1,  text: "Initializing production-grade backend suite....",           type: "loading" },
    { delay: 1.3,  text: "Linking igaming-platform-client.................",           type: "loading" },
    { delay: 1.55, text: "",                                                           type: "blank"   },
    { delay: 1.7,  text: "Boot complete. Welcome, engineer.",                         type: "success" },
];

const STATS = [
    { value: "3+",   label: "yrs-experience"  },
    { value: "1M+",  label: "tx/hr"           },
    { value: "70%",  label: "load-reduction"  },
];

export default function Hero() {
    const { scrollY } = useScroll();
    const opacity    = useTransform(scrollY, [0, 380], [1, 0]);
    const translateY = useTransform(scrollY, [0, 380], [0, -40]);

    return (
        <section className="relative min-h-screen flex flex-col justify-center px-4 sm:px-6 lg:px-8 pt-16 overflow-hidden">

            <motion.div style={{ opacity, y: translateY }} className="relative z-10 max-w-4xl mx-auto w-full">

                {/* ── Terminal window ─────────────────────────────────── */}
                <div className="terminal-window">

                    {/* Titlebar */}
                    <div className="terminal-titlebar">
                        <span className="terminal-dot" style={{ background: "#ff5f57" }} />
                        <span className="terminal-dot" style={{ background: "#ffbd2e" }} />
                        <span className="terminal-dot" style={{ background: "#28c840" }} />
                        <span className="ml-3 flex-1">victor@workstation — bash — 120×40</span>
                        <span className="text-text-muted" style={{ fontSize: "0.65rem" }}>PHOSPHOR-OS</span>
                    </div>

                    {/* Terminal body */}
                    <div className="p-5 sm:p-8 leading-relaxed space-y-0.5 panel-inset" style={{ minHeight: "480px" }}>

                        {/* Boot sequence */}
                        {BOOT_LINES.map((line, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: line.delay, duration: 0.05 }}
                            >
                                {line.type === "blank" ? (
                                    <div className="h-3" />
                                ) : line.type === "header" ? (
                                    <div className="text-text-muted font-mono text-sm">{line.text}</div>
                                ) : line.type === "loading" ? (
                                    <div className="text-text-secondary font-mono text-sm flex items-center gap-2">
                                        <span>{line.text}</span>
                                        <motion.span
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                            transition={{ delay: line.delay + 0.18, duration: 0.05 }}
                                            className="text-accent accent-glow font-bold"
                                        >
                                            [OK]
                                        </motion.span>
                                    </div>
                                ) : (
                                    <div className="text-accent accent-glow font-mono text-sm">{line.text}</div>
                                )}
                            </motion.div>
                        ))}

                        {/* whoami */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 2.0 }}
                            className="pt-4"
                        >
                            <div className="flex items-center gap-2 text-sm font-mono mb-2">
                                <span className="text-accent accent-glow">victor@workstation</span>
                                <span className="text-text-muted">:~$</span>
                                <span className="text-text-secondary">whoami</span>
                            </div>

                            <div
                                className="phosphor-glow-strong leading-none mt-3 mb-1"
                                style={{
                                    fontFamily: "var(--font-vt323), monospace",
                                    fontSize: "clamp(2.8rem, 8vw, 5rem)",
                                    color: "var(--primary)",
                                    letterSpacing: "0.04em",
                                }}
                            >
                                VICTOR BALAN
                            </div>
                            <div
                                className="text-text-secondary"
                                style={{
                                    fontFamily: "var(--font-vt323), monospace",
                                    fontSize: "clamp(1.2rem, 3vw, 1.8rem)",
                                    letterSpacing: "0.06em",
                                }}
                            >
                                DEPUTY, JAVA TECHNOLOGIES DEPARTMENT
                            </div>
                        </motion.div>

                        {/* cat summary */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 2.3 }}
                            className="pt-4"
                        >
                            <div className="flex items-center gap-2 text-sm font-mono mb-2">
                                <span className="text-accent accent-glow">victor@workstation</span>
                                <span className="text-text-muted">:~$</span>
                                <span className="text-text-secondary">cat summary.txt</span>
                            </div>
                            <p className="text-text-secondary text-sm sm:text-base leading-relaxed max-w-2xl border-l-2 border-border pl-4 py-1">
                                3+ years building production-grade systems at{" "}
                                <span className="text-primary phosphor-glow">ASSIST Software</span>.
                                Recently promoted to{" "}
                                <span className="text-foreground">Deputy of the Java Technologies Department</span>{" "}
                                — leading engineering standards while delivering high-throughput backends
                                and zero-downtime migrations handling{" "}
                                <span className="text-foreground font-bold">1M+ transactions/hour</span>.
                            </p>
                        </motion.div>

                        {/* ls metrics */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 2.6 }}
                            className="pt-4"
                        >
                            <div className="flex items-center gap-2 text-sm font-mono mb-3">
                                <span className="text-accent accent-glow">victor@workstation</span>
                                <span className="text-text-muted">:~$</span>
                                <span className="text-text-secondary">ls -la ./metrics/</span>
                            </div>
                            <div className="flex flex-wrap gap-8 sm:gap-16">
                                {STATS.map((s, i) => (
                                    <div key={i}>
                                        <div
                                            className="phosphor-glow-strong leading-none"
                                            style={{
                                                fontFamily: "var(--font-vt323), monospace",
                                                fontSize: "clamp(2rem, 5vw, 3rem)",
                                                color: "var(--primary)",
                                            }}
                                        >
                                            {s.value}
                                        </div>
                                        <div className="text-text-muted text-sm font-mono mt-0.5">{s.label}</div>
                                    </div>
                                ))}
                            </div>
                        </motion.div>

                        {/* CTA commands */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 2.9 }}
                            className="pt-5 flex flex-wrap gap-3"
                        >
                            <Link
                                href="#experience"
                                className="btn-primary inline-flex items-center gap-2 px-5 py-2.5 text-sm rounded-sm"
                            >
                                <span className="text-accent accent-glow">$</span>
                                <span>view --experience</span>
                            </Link>
                            <Link
                                href="#contact"
                                className="btn-terminal inline-flex items-center gap-2 px-5 py-2.5 text-sm text-text-secondary rounded-sm"
                            >
                                <span className="text-text-muted">$</span>
                                <span>./contact.sh</span>
                            </Link>
                            <Link
                                href="https://github.com/victorbln"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn-terminal inline-flex items-center gap-1.5 px-4 py-2.5 text-sm text-text-muted rounded-sm hover:text-primary"
                            >
                                github
                            </Link>
                            <Link
                                href="https://www.linkedin.com/in/balan-victor/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn-terminal inline-flex items-center gap-1.5 px-4 py-2.5 text-sm text-text-muted rounded-sm hover:text-primary"
                            >
                                linkedin
                            </Link>
                        </motion.div>

                        {/* Blinking cursor prompt */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 3.1 }}
                            className="pt-4 flex items-center gap-2 text-sm font-mono"
                        >
                            <span className="text-accent accent-glow">victor@workstation</span>
                            <span className="text-text-muted">:~$</span>
                            <span className="cursor-blink" />
                        </motion.div>
                    </div>
                </div>

            </motion.div>

            {/* Scroll hint */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 3.5 }}
                className="absolute bottom-8 left-1/2 -translate-x-1/2 text-text-muted font-mono flex flex-col items-center gap-2"
                style={{ fontSize: "0.65rem", letterSpacing: "0.12em" }}
            >
                <span>SCROLL DOWN</span>
                <motion.div
                    animate={{ y: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                    className="text-primary phosphor-glow"
                >
                    ▼
                </motion.div>
            </motion.div>
        </section>
    );
}
