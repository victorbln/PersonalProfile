"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState("");

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);

            const sections = ["about", "experience", "projects", "skills", "writing", "contact"];
            const current = sections.find(section => {
                const element = document.getElementById(section);
                if (element) {
                    const rect = element.getBoundingClientRect();
                    return rect.top <= 100 && rect.bottom >= 100;
                }
                return false;
            });
            if (current) setActiveSection(current);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navLinks = [
        { href: "#about", label: "About" },
        { href: "#experience", label: "Experience" },
        { href: "#projects", label: "Projects" },
        { href: "#skills", label: "Skills" },
        { href: "#writing", label: "Writing" },
    ];

    return (
        <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
                ? "glass-strong shadow-lg border-b border-border/50"
                : "bg-surface/60 backdrop-blur-md"
            }`}>
            <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
                <div className="flex items-center">
                    <Link href="/" className="flex items-center gap-2 group">
                        <span className={`text-xl font-bold transition-all ${isScrolled ? "text-primary" : "text-foreground"
                            } group-hover:text-primary`}>
                            Victor Balan
                        </span>
                    </Link>
                </div>

                <div className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            className={`text-sm font-medium transition-all relative group ${activeSection === link.href.slice(1)
                                    ? "text-primary"
                                    : "text-text-secondary hover:text-primary"
                                }`}
                        >
                            {link.label}
                            <span className={`absolute -bottom-1 left-0 h-0.5 bg-primary transition-all ${activeSection === link.href.slice(1) ? "w-full" : "w-0 group-hover:w-full"
                                }`}></span>
                        </Link>
                    ))}
                </div>

                <div className="flex items-center gap-4">
                    <ThemeToggle />

                    <Link
                        href="#contact"
                        className="hidden sm:flex rounded-full bg-primary px-6 py-2.5 text-sm font-semibold text-white hover:bg-primary-hover transition-all shadow-lg shadow-primary/25 hover:shadow-primary/40 hover-scale"
                    >
                        Let's Talk
                    </Link>

                    <button
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        className="md:hidden p-2 text-foreground hover:text-primary transition-colors"
                    >
                        {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                    </button>
                </div>
            </div>

            {isMobileMenuOpen && (
                <div className="md:hidden glass-strong border-t border-border/50 animate-slide-up">
                    <div className="px-4 py-6 space-y-4">
                        {navLinks.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                onClick={() => setIsMobileMenuOpen(false)}
                                className={`block px-4 py-2 rounded-lg text-sm font-medium transition-all ${activeSection === link.href.slice(1)
                                        ? "bg-primary/10 text-primary"
                                        : "text-text-secondary hover:bg-surface-alt hover:text-primary"
                                    }`}
                            >
                                {link.label}
                            </Link>
                        ))}
                        <Link
                            href="#contact"
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="block w-full text-center rounded-full bg-primary px-6 py-3 text-sm font-semibold text-white hover:bg-primary-hover transition-all"
                        >
                            Let's Talk
                        </Link>
                    </div>
                </div>
            )}
        </nav>
    );
}
