"use client";

import Link from "next/link";
import { Github, Linkedin, Mail, ArrowUp } from "lucide-react";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

export default function Footer() {
    const [showBackToTop, setShowBackToTop] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setShowBackToTop(window.scrollY > 500);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <footer className="relative bg-surface-alt border-t border-border/50 overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent"></div>
            
            <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
                    <div>
                        <h3 className="text-lg font-bold text-foreground mb-4">Victor Balan</h3>
                        <p className="text-sm text-text-secondary leading-relaxed">
                            Software engineer passionate about building scalable systems and mentoring developers.
                        </p>
                    </div>

                    <div>
                        <h3 className="text-lg font-bold text-foreground mb-4">Quick Links</h3>
                        <ul className="space-y-2">
                            {["About", "Experience", "Projects", "Skills", "Writing", "Contact"].map((item) => (
                                <li key={item}>
                                    <Link
                                        href={`#${item.toLowerCase()}`}
                                        className="text-sm text-text-secondary hover:text-primary transition-colors"
                                    >
                                        {item}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-lg font-bold text-foreground mb-4">Connect</h3>
                        <div className="flex gap-3">
                            <Link
                                href="https://github.com/victorbln"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center justify-center w-10 h-10 rounded-full bg-surface border border-border text-text-muted hover:text-white hover:bg-[#333] hover:border-[#333] transition-all"
                                aria-label="GitHub Profile"
                            >
                                <Github className="h-5 w-5" />
                            </Link>
                            <Link
                                href="https://www.linkedin.com/in/victor-balan-a62001192/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center justify-center w-10 h-10 rounded-full bg-surface border border-border text-text-muted hover:text-white hover:bg-[#0077b5] hover:border-[#0077b5] transition-all"
                                aria-label="LinkedIn Profile"
                            >
                                <Linkedin className="h-5 w-5" />
                            </Link>
                            <Link
                                href="mailto:balanvictor1567@gmail.com"
                                className="flex items-center justify-center w-10 h-10 rounded-full bg-surface border border-border text-text-muted hover:text-primary hover:bg-primary/10 hover:border-primary/30 transition-all"
                                aria-label="Email"
                            >
                                <Mail className="h-5 w-5" />
                            </Link>
                        </div>
                    </div>
                </div>

                <div className="mt-8 pt-8 border-t border-border">
                    <p className="text-center text-sm text-text-muted">
                        © {new Date().getFullYear()} Victor Balan. All rights reserved.
                    </p>
                </div>
            </div>

            {showBackToTop && (
                <motion.button
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 20 }}
                    onClick={scrollToTop}
                    className="fixed bottom-8 right-8 p-3 rounded-full bg-primary text-white shadow-lg hover:bg-primary-hover transition-all z-50 hover-scale"
                    aria-label="Back to top"
                >
                    <ArrowUp className="h-5 w-5" />
                </motion.button>
            )}
        </footer>
    );
}
