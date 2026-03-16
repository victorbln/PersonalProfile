"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";

const CHANNELS = [
    {
        key: "email",
        label: "victorbalan9@gmail.com",
        command: "mail --to victorbalan9@gmail.com",
        href: "mailto:victorbalan9@gmail.com",
        copyValue: "victorbalan9@gmail.com",
        type: "copy",
    },
    {
        key: "phone",
        label: "(+40) 787722414",
        command: "call +40787722414",
        href: "tel:+40787722414",
        type: "link",
    },
    {
        key: "github",
        label: "github.com/victorbln",
        command: "open --browser github.com/victorbln",
        href: "https://github.com/victorbln",
        type: "link",
        external: true,
    },
    {
        key: "linkedin",
        label: "linkedin.com/in/balan-victor",
        command: "open --browser linkedin.com/in/balan-victor",
        href: "https://www.linkedin.com/in/balan-victor/",
        type: "link",
        external: true,
    },
];

export default function ContactSection() {
    const [copied, setCopied] = useState(false);
    const [selected, setSelected] = useState<string | null>(null);

    const handleEmailCopy = () => {
        navigator.clipboard.writeText("victorbalan9@gmail.com");
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <section id="contact" className="py-24 sm:py-32 relative">
            <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">

                {/* Section header */}
                <motion.div
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="mb-12"
                >
                    <div className="text-text-muted text-xs font-mono mb-2 uppercase tracking-widest">// section 07</div>
                    <h2
                        className="phosphor-glow-strong"
                        style={{
                            fontFamily: "var(--font-vt323), monospace",
                            fontSize: "clamp(2.5rem, 6vw, 4rem)",
                            color: "var(--primary)",
                            letterSpacing: "0.06em",
                        }}
                    >
                        CONTACT.SH
                    </h2>
                    <div className="term-divider mt-3" />
                </motion.div>

                {/* SSH window */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                >
                    <div className="terminal-window">
                        <div className="terminal-titlebar">
                            <span className="terminal-dot" style={{ background: "#ff5f57" }} />
                            <span className="terminal-dot" style={{ background: "#ffbd2e" }} />
                            <span className="terminal-dot" style={{ background: "#28c840" }} />
                            <span className="ml-3">ssh victor@balan.dev</span>
                        </div>

                        <div className="p-5 sm:p-8 font-mono text-base space-y-5">

                            {/* Connection log */}
                            <div className="text-sm space-y-0.5">
                                <div className="text-text-muted">Connecting to victor@balan.dev...</div>
                                <div className="text-accent accent-glow">Connection established.</div>
                                <div className="text-text-muted">Authenticated via portfolio handshake.</div>
                            </div>

                            <div className="term-divider" />

                            {/* Header */}
                            <div>
                                <div
                                    className="phosphor-glow mb-1"
                                    style={{
                                        fontFamily: "var(--font-vt323), monospace",
                                        fontSize: "1.4rem",
                                        color: "var(--primary)",
                                    }}
                                >
                                    AVAILABLE CHANNELS
                                </div>
                                <p className="text-text-muted text-sm">
                                    Open to new opportunities. Select a channel to reach out:
                                </p>
                            </div>

                            {/* Channel list */}
                            <div className="space-y-2">
                                {CHANNELS.map((ch, i) => (
                                    <motion.div
                                        key={ch.key}
                                        initial={{ opacity: 0, x: -10 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: 0.15 + i * 0.07 }}
                                        className="relative"
                                    >
                                        <div
                                            className="flex items-center gap-3 p-3 rounded-sm cursor-pointer transition-all"
                                            onClick={() => {
                                                if (ch.key === "email") {
                                                    handleEmailCopy();
                                                }
                                                setSelected(ch.key);
                                            }}
                                            style={{
                                                background: selected === ch.key ? "oklch(0.72 0.185 65 / 0.06)" : "transparent",
                                                border: "1px solid",
                                                borderColor: selected === ch.key ? "var(--border)" : "transparent",
                                            }}
                                        >
                                            {/* Index */}
                                            <span
                                                className="text-sm shrink-0 w-6 text-center"
                                                style={{
                                                    color: selected === ch.key ? "var(--primary)" : "var(--text-muted)",
                                                    textShadow: selected === ch.key ? "0 0 6px var(--phosphor-glow)" : "none",
                                                }}
                                            >
                                                [{i + 1}]
                                            </span>

                                            {/* Command */}
                                            <div className="flex-1 min-w-0">
                                                {ch.type === "link" ? (
                                                    <Link
                                                        href={ch.href}
                                                        target={ch.external ? "_blank" : undefined}
                                                        rel={ch.external ? "noopener noreferrer" : undefined}
                                                        className="text-sm text-text-secondary hover:text-primary transition-colors truncate block"
                                                        onClick={e => e.stopPropagation()}
                                                    >
                                                        <span className="text-text-muted">$ </span>
                                                        {ch.command}
                                                    </Link>
                                                ) : (
                                                    <div className="text-sm text-text-secondary truncate">
                                                        <span className="text-text-muted">$ </span>
                                                        {ch.command}
                                                    </div>
                                                )}
                                                <div className="text-sm text-primary phosphor-glow mt-0.5">{ch.label}</div>
                                            </div>

                                            {/* Copy feedback */}
                                            {ch.key === "email" && (
                                                <button
                                                    onClick={e => { e.stopPropagation(); handleEmailCopy(); }}
                                                    className="btn-terminal px-2.5 py-1 text-sm rounded-sm text-text-muted hover:text-primary shrink-0"
                                                >
                                                    {copied ? (
                                                        <span className="text-accent accent-glow">copied!</span>
                                                    ) : (
                                                        <span>copy</span>
                                                    )}
                                                </button>
                                            )}
                                        </div>
                                    </motion.div>
                                ))}
                            </div>

                            <div className="term-divider" />

                            {/* Input prompt */}
                            <div>
                                <div className="text-sm text-text-muted mb-3">
                                    Enter channel number to connect:
                                </div>
                                <div className="flex items-center gap-2 text-sm panel-inset rounded-sm p-3">
                                    <span className="text-accent accent-glow shrink-0">victor@balan.dev:~$</span>
                                    <span className="text-text-secondary">connect</span>
                                    <span className="cursor-blink" />
                                </div>
                            </div>

                        </div>
                    </div>
                </motion.div>

            </div>
        </section>
    );
}
