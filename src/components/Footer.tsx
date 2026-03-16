"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const NAV_ITEMS = ["about", "experience", "education", "projects", "skills", "writing", "contact"];

export default function Footer() {
    const [showBackToTop, setShowBackToTop] = useState(false);
    const [uptime, setUptime] = useState("00:00:00");

    useEffect(() => {
        const handleScroll = () => setShowBackToTop(window.scrollY > 500);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Uptime clock
    useEffect(() => {
        const start = Date.now();
        const tick = () => {
            const elapsed = Math.floor((Date.now() - start) / 1000);
            const h = String(Math.floor(elapsed / 3600)).padStart(2, "0");
            const m = String(Math.floor((elapsed % 3600) / 60)).padStart(2, "0");
            const s = String(elapsed % 60).padStart(2, "0");
            setUptime(`${h}:${m}:${s}`);
        };
        const id = setInterval(tick, 1000);
        return () => clearInterval(id);
    }, []);

    const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

    return (
        <footer
            className="relative border-t font-mono"
            style={{ borderColor: "var(--border)", background: "var(--surface)" }}
        >
            {/* Top phosphor line */}
            <div
                className="absolute top-0 left-0 right-0 h-px"
                style={{
                    background: "linear-gradient(90deg, transparent, oklch(0.72 0.185 65 / 0.30) 20%, oklch(0.72 0.185 65 / 0.30) 80%, transparent)",
                }}
            />

            <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">

                {/* Session info bar */}
                <div
                    className="flex flex-wrap items-center justify-between gap-3 mb-8 pb-6 border-b text-sm"
                    style={{ borderColor: "var(--border)" }}
                >
                    <div className="flex items-center gap-4">
                        <div className="flex items-center gap-2">
                            <span
                                className="w-1.5 h-1.5 rounded-full"
                                style={{
                                    background: "var(--accent)",
                                    boxShadow: "0 0 6px oklch(0.70 0.220 145 / 0.70)",
                                }}
                            />
                            <span className="text-accent accent-glow">SESSION ACTIVE</span>
                        </div>
                        <span className="text-text-muted">uptime: {uptime}</span>
                    </div>
                    <div className="text-text-muted">
                        user: <span className="text-text-secondary">victor@workstation</span>
                    </div>
                </div>

                {/* Main footer grid */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mb-8">

                    {/* Identity */}
                    <div>
                        <div
                            className="phosphor-glow mb-3"
                            style={{
                                fontFamily: "var(--font-vt323), monospace",
                                fontSize: "1.5rem",
                                color: "var(--primary)",
                                letterSpacing: "0.06em",
                            }}
                        >
                            VICTOR BALAN
                        </div>
                        <p className="text-text-muted text-sm leading-relaxed">
                            Backend engineer specialising in distributed systems, cloud-native infrastructure, and iGaming platforms.
                        </p>
                    </div>

                    {/* Navigation */}
                    <div>
                        <div className="text-text-muted text-xs uppercase tracking-widest mb-4">Quick Navigation</div>
                        <div className="grid grid-cols-2 gap-x-4 gap-y-1">
                            {NAV_ITEMS.map(item => (
                                <Link
                                    key={item}
                                    href={`#${item}`}
                                    className="text-sm text-text-muted hover:text-primary transition-colors flex items-center gap-1.5"
                                >
                                    <span className="text-text-muted" style={{ fontSize: "0.65rem" }}>▸</span>
                                    {item}
                                </Link>
                            ))}
                        </div>
                    </div>

                    {/* Connect */}
                    <div>
                        <div className="text-text-muted text-xs uppercase tracking-widest mb-4">Connect</div>
                        <div className="space-y-2">
                            {[
                                { label: "github.com/victorbln",         href: "https://github.com/victorbln",                    external: true  },
                                { label: "linkedin/in/balan-victor",      href: "https://www.linkedin.com/in/balan-victor/",        external: true  },
                                { label: "victorbalan9@gmail.com",        href: "mailto:victorbalan9@gmail.com",                    external: false },
                                { label: "medium.com/@victorbalan9",      href: "https://medium.com/@victorbalan9",                 external: true  },
                            ].map(({ label, href, external }) => (
                                <Link
                                    key={href}
                                    href={href}
                                    target={external ? "_blank" : undefined}
                                    rel={external ? "noopener noreferrer" : undefined}
                                    className="text-sm text-text-muted hover:text-primary transition-colors block"
                                >
                                    <span className="text-text-muted mr-1.5">$</span>
                                    {label}
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Bottom bar */}
                <div
                    className="pt-6 border-t flex flex-wrap items-center justify-between gap-3 text-sm"
                    style={{ borderColor: "var(--border)" }}
                >
                    <div className="flex items-center gap-2 text-text-muted">
                        <span className="text-accent accent-glow">victor@workstation:~$</span>
                        <span>logout</span>
                        <span className="cursor-blink" />
                    </div>
                    <div className="text-text-muted">
                        © {new Date().getFullYear()} Victor Balan. All rights reserved.
                    </div>
                </div>

            </div>

            {/* Back to top */}
            <AnimatePresence>
                {showBackToTop && (
                    <motion.button
                        initial={{ opacity: 0, y: 16 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 16 }}
                        onClick={scrollToTop}
                        className="fixed bottom-8 right-8 btn-primary flex items-center gap-2 px-4 py-2.5 text-sm rounded-sm z-50"
                        aria-label="Back to top"
                    >
                        <span className="text-accent accent-glow">$</span>
                        <span>scroll --top</span>
                        <span>↑</span>
                    </motion.button>
                )}
            </AnimatePresence>
        </footer>
    );
}
