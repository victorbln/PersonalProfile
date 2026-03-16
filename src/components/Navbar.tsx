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
            const sections = ["about", "experience", "education", "projects", "skills", "writing", "contact"];
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
        { href: "#about",      label: "about"      },
        { href: "#experience", label: "experience" },
        { href: "#education",  label: "education"  },
        { href: "#projects",   label: "projects"   },
        { href: "#skills",     label: "skills"     },
        { href: "#writing",    label: "writing"    },
    ];

    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-150 ${
                isScrolled
                    ? "bg-surface border-b border-border"
                    : "bg-background/80 border-b border-transparent"
            }`}
            style={{
                backdropFilter: isScrolled ? "blur(8px)" : "none",
                boxShadow: isScrolled
                    ? "0 1px 0 oklch(0.72 0.185 65 / 0.10), 0 4px 20px rgba(0,0,0,0.60)"
                    : "none",
            }}
        >
            <div className="mx-auto flex h-14 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">

                {/* Left — terminal prompt identity */}
                <Link href="/" className="flex items-center gap-0 group shrink-0">
                    <span className="text-accent text-sm font-mono phosphor-glow" style={{ textShadow: undefined }}>
                        victor
                    </span>
                    <span className="text-text-muted text-sm font-mono">@workstation</span>
                    <span className="text-text-muted text-sm font-mono mx-1">:</span>
                    <span className="text-primary text-sm font-mono phosphor-glow">~</span>
                    <span className="text-text-secondary text-sm font-mono ml-1">$</span>
                </Link>

                {/* Center — nav links in brackets */}
                <div className="hidden lg:flex items-center gap-1">
                    {navLinks.map((link) => {
                        const isActive = activeSection === link.href.slice(1);
                        return (
                            <Link
                                key={link.href}
                                href={link.href}
                                className={`text-sm font-mono px-2.5 py-1.5 transition-all rounded-sm relative ${
                                    isActive
                                        ? "text-primary phosphor-glow"
                                        : "text-text-muted hover:text-primary"
                                }`}
                            >
                                <span className="text-text-muted">[</span>
                                {link.label}
                                <span className="text-text-muted">]</span>
                                {isActive && (
                                    <span
                                        className="absolute inset-0 rounded-sm pointer-events-none"
                                        style={{ background: "oklch(0.72 0.185 65 / 0.06)" }}
                                    />
                                )}
                            </Link>
                        );
                    })}
                </div>

                {/* Right — controls */}
                <div className="flex items-center gap-2 shrink-0">
                    <ThemeToggle />

                    <Link
                        href="#contact"
                        className="hidden sm:flex btn-primary items-center gap-1.5 px-4 py-1.5 text-sm rounded-sm font-mono"
                    >
                        <span className="text-accent accent-glow">$</span>
                        <span>hire --me</span>
                    </Link>

                    <button
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        className="lg:hidden btn-terminal p-2 text-text-muted hover:text-primary rounded-sm"
                    >
                        {isMobileMenuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
                    </button>
                </div>
            </div>

            {/* Mobile menu */}
            {isMobileMenuOpen && (
                <div
                    className="lg:hidden border-t border-border"
                    style={{ background: "var(--surface)", boxShadow: "0 8px 24px rgba(0,0,0,0.70)" }}
                >
                    <div className="px-4 py-4 space-y-1">
                        {navLinks.map((link) => {
                            const isActive = activeSection === link.href.slice(1);
                            return (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    className={`flex items-center gap-2 px-3 py-2 text-base font-mono rounded-sm transition-all ${
                                        isActive
                                            ? "text-primary phosphor-glow"
                                            : "text-text-muted hover:text-primary"
                                    }`}
                                >
                                    <span className="text-text-muted text-xs">&gt;</span>
                                    {link.label}
                                </Link>
                            );
                        })}
                        <div className="pt-3 border-t border-border">
                            <Link
                                href="#contact"
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="flex btn-primary items-center justify-center gap-1.5 px-4 py-2 text-base rounded-sm font-mono w-full"
                            >
                                <span className="text-accent">$</span>
                                <span>hire --me</span>
                            </Link>
                        </div>
                    </div>
                </div>
            )}
        </nav>
    );
}
