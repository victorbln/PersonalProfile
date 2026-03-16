"use client";

import { motion } from "framer-motion";

const degrees = [
    {
        degree: "Bachelor's Degree in Computer Science & Engineering",
        institution: "Ștefan cel Mare University of Suceava",
        period: "Oct 2021 – Jul 2025",
        location: "Suceava, Romania",
        status: "COMPLETED",
        statusColor: "var(--accent)",
    },
    {
        degree: "Master's Degree in Cybersecurity",
        institution: "Ștefan cel Mare University of Suceava",
        period: "Sep 2025 – Present",
        location: "Suceava, Romania",
        status: "IN PROGRESS",
        statusColor: "var(--primary)",
    },
];

const volunteering = [
    {
        org: "FIRESC Students Association",
        role: "Volunteer",
        period: "2022 – Present",
        highlights: [
            "Organized workshops for students that wanted to learn programming, contributing hands-on experience",
            "Promoted technical knowledge sharing and skills development across students",
            "Co-organized the first and second annual hackathon",
        ],
    },
];

export default function EducationSection() {
    return (
        <section id="education" className="py-24 sm:py-32 relative">
            <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">

                {/* Section header */}
                <motion.div
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="mb-12"
                >
                    <div className="text-text-muted text-xs font-mono mb-2 uppercase tracking-widest">// section 03</div>
                    <h2
                        className="phosphor-glow-strong"
                        style={{
                            fontFamily: "var(--font-vt323), monospace",
                            fontSize: "clamp(2.5rem, 6vw, 4rem)",
                            color: "var(--primary)",
                            letterSpacing: "0.06em",
                        }}
                    >
                        CREDENTIALS.DB
                    </h2>
                    <div className="term-divider mt-3" />
                </motion.div>

                {/* cat /etc/credentials */}
                <div className="terminal-window mb-6">
                    <div className="terminal-titlebar">
                        <span className="terminal-dot" style={{ background: "#ff5f57" }} />
                        <span className="terminal-dot" style={{ background: "#ffbd2e" }} />
                        <span className="terminal-dot" style={{ background: "#28c840" }} />
                        <span className="ml-3">cat /etc/academic-credentials</span>
                    </div>

                    <div className="divide-y divide-border">
                        {degrees.map((edu, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 16 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.12 }}
                                className="p-5 sm:p-8 font-mono scan-hover"
                            >
                                {/* Record header */}
                                <div className="flex items-center justify-between flex-wrap gap-3 mb-4">
                                    <div className="flex items-center gap-2 text-sm">
                                        <span className="text-text-muted">RECORD</span>
                                        <span className="text-text-muted">[{String(index + 1).padStart(3, "0")}]</span>
                                    </div>
                                    <span
                                        className="text-sm px-2.5 py-0.5 rounded-sm border font-bold"
                                        style={{
                                            color: edu.statusColor,
                                            borderColor: `${edu.statusColor}60`,
                                            background: `${edu.statusColor}12`,
                                        }}
                                    >
                                        ◈ {edu.status}
                                    </span>
                                </div>

                                {/* Degree */}
                                <div
                                    className="mb-2 phosphor-glow"
                                    style={{
                                        fontFamily: "var(--font-vt323), monospace",
                                        fontSize: "1.55rem",
                                        color: "var(--primary)",
                                        letterSpacing: "0.04em",
                                    }}
                                >
                                    {edu.degree.toUpperCase()}
                                </div>

                                {/* Details grid */}
                                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 text-sm mt-3">
                                    <div>
                                        <span className="text-text-muted">institution: </span>
                                        <span className="text-text-secondary">{edu.institution}</span>
                                    </div>
                                    <div>
                                        <span className="text-text-muted">period:      </span>
                                        <span className="text-text-secondary">{edu.period}</span>
                                    </div>
                                    <div>
                                        <span className="text-text-muted">location:    </span>
                                        <span className="text-text-secondary">{edu.location}</span>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Volunteering */}
                <motion.div
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.25 }}
                >
                    <div className="text-text-muted text-xs font-mono mb-4 uppercase tracking-widest">
                        — volunteering & community
                    </div>

                    <div className="terminal-window">
                        <div className="terminal-titlebar">
                            <span className="terminal-dot" style={{ background: "#ff5f57" }} />
                            <span className="terminal-dot" style={{ background: "#ffbd2e" }} />
                            <span className="terminal-dot" style={{ background: "#28c840" }} />
                            <span className="ml-3">cat /etc/community-contributions</span>
                        </div>

                        {volunteering.map((vol, index) => (
                            <div key={index} className="p-5 sm:p-8 font-mono">
                                <div className="flex items-center justify-between flex-wrap gap-3 mb-4">
                                    <div>
                                        <div
                                            className="phosphor-glow mb-1"
                                            style={{
                                                fontFamily: "var(--font-vt323), monospace",
                                                fontSize: "1.55rem",
                                                color: "var(--primary)",
                                                letterSpacing: "0.04em",
                                            }}
                                        >
                                            {vol.org.toUpperCase()}
                                        </div>
                                        <div className="text-accent accent-glow text-sm">{vol.role}</div>
                                    </div>
                                    <span
                                        className="text-sm px-3 py-1 rounded-sm border font-mono"
                                        style={{
                                            color: "var(--text-muted)",
                                            borderColor: "var(--border)",
                                            background: "var(--surface-alt)",
                                        }}
                                    >
                                        {vol.period}
                                    </span>
                                </div>

                                <ul className="space-y-2">
                                    {vol.highlights.map((h, i) => (
                                        <li key={i} className="flex items-start gap-3 text-sm sm:text-base text-text-secondary">
                                            <span className="text-primary phosphor-glow shrink-0 mt-0.5">+</span>
                                            <span>{h}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </motion.div>

            </div>
        </section>
    );
}
