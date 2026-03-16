"use client";

import { motion } from "framer-motion";

const experiences = [
    {
        hash: "a1b2c3d",
        company: "ASSIST SOFTWARE SRL",
        role: "Deputy, Java Technologies Department",
        period: "Mar 2026 – Present",
        location: "Suceava, Romania",
        isPromotion: true,
        isCurrent: true,
        description: [
            "Elevated to Deputy of the Java Technologies Department — ownership of technical strategy, engineering standards, and developer growth across Java-focused teams.",
            "Establishing architectural best practices, code quality guidelines, and knowledge-sharing initiatives across the Java ecosystem at ASSIST Software.",
            "Collaborating with engineering leadership on technical reviews, project scoping, and cross-team alignment.",
        ],
        tech: ["Java", "Spring Boot", "Quarkus", "System Architecture", "Technical Leadership", "Mentoring"],
        highlights: null,
    },
    {
        hash: "e5f6g7h",
        company: "ASSIST SOFTWARE SRL",
        role: "Software Engineer",
        period: "Feb 2023 – Mar 2026",
        location: "Suceava, Romania",
        isPromotion: false,
        isCurrent: false,
        description: [
            "Key technical contributor across multiple client projects spanning iGaming platforms, cloud infrastructure, and enterprise system migrations.",
            "Developed and maintained multi-platform game backends and frontends for a major iGaming client across Web, iOS, Android, and Windows.",
            "Designed and implemented a zero-downtime migration from NoSQL to SQL for a high-load system handling 1M+ transactions/hour.",
            "Led CI/CD modernization from on-premise tooling to GitLab pipelines with full Terraform infrastructure-as-code, reducing system load by 70%.",
            "Contributed to the architecture of a unified platform consolidating three existing legacy systems.",
            "Integrated Prometheus & Grafana for real-time observability and production health monitoring.",
        ],
        tech: ["Java", "Spring Boot", "Quarkus", "TypeScript", "Angular", ".NET Core", "Docker", "Kubernetes", "Terraform", "GitLab CI", "PostgreSQL", "MongoDB", "Redis", "Apache Camel", "Prometheus", "Grafana"],
        highlights: [
            { label: "1M+/hr", sublabel: "transactions" },
            { label: "70%",    sublabel: "load-reduced"  },
            { label: "3",      sublabel: "unified-platforms" },
        ],
    },
];

export default function ExperienceSection() {
    return (
        <section id="experience" className="py-24 sm:py-32 relative">
            <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">

                {/* Section header */}
                <motion.div
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="mb-12"
                >
                    <div className="text-text-muted text-xs font-mono mb-2 uppercase tracking-widest">// section 02</div>
                    <h2
                        className="phosphor-glow-strong"
                        style={{
                            fontFamily: "var(--font-vt323), monospace",
                            fontSize: "clamp(2.5rem, 6vw, 4rem)",
                            color: "var(--primary)",
                            letterSpacing: "0.06em",
                        }}
                    >
                        EXPERIENCE.LOG
                    </h2>
                    <div className="term-divider mt-3" />
                </motion.div>

                {/* git log output */}
                <div className="terminal-window">
                    <div className="terminal-titlebar">
                        <span className="terminal-dot" style={{ background: "#ff5f57" }} />
                        <span className="terminal-dot" style={{ background: "#ffbd2e" }} />
                        <span className="terminal-dot" style={{ background: "#28c840" }} />
                        <span className="ml-3">git log --career --oneline --decorate</span>
                    </div>

                    <div className="divide-y divide-border font-mono">
                        {experiences.map((exp, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.12 }}
                                className="p-5 sm:p-8 scan-hover"
                            >
                                {/* Commit line */}
                                <div className="flex flex-wrap items-center gap-x-3 gap-y-1 mb-4 text-sm">
                                    <span className="text-accent-bright accent-glow font-bold">●</span>
                                    <span className="text-text-muted">commit</span>
                                    <span className="text-accent accent-glow">{exp.hash}</span>
                                    {exp.isCurrent && (
                                        <span
                                            className="text-xs px-2 py-0.5 rounded-sm border"
                                            style={{
                                                color: "var(--accent)",
                                                borderColor: "oklch(0.70 0.220 145 / 0.40)",
                                                background: "oklch(0.70 0.220 145 / 0.08)",
                                            }}
                                        >
                                            HEAD → main
                                        </span>
                                    )}
                                    {exp.isPromotion && (
                                        <span
                                            className="text-xs px-2 py-0.5 rounded-sm border"
                                            style={{
                                                color: "var(--primary)",
                                                borderColor: "var(--border)",
                                                background: "oklch(0.72 0.185 65 / 0.08)",
                                            }}
                                        >
                                            ↑ PROMOTION
                                        </span>
                                    )}
                                </div>

                                {/* Author / Date */}
                                <div className="text-sm text-text-muted space-y-0.5 mb-5 pl-4 border-l-2 border-border">
                                    <div>
                                        <span className="text-text-secondary">Author:</span>{" "}
                                        Victor Balan &lt;victorbalan9@gmail.com&gt;
                                    </div>
                                    <div>
                                        <span className="text-text-secondary">Date:</span>{" "}
                                        {exp.period}
                                    </div>
                                    <div>
                                        <span className="text-text-secondary">Location:</span>{" "}
                                        {exp.location}
                                    </div>
                                </div>

                                {/* Commit title */}
                                <div
                                    className="mb-1 phosphor-glow"
                                    style={{
                                        fontFamily: "var(--font-vt323), monospace",
                                        fontSize: "1.6rem",
                                        color: "var(--primary)",
                                        letterSpacing: "0.04em",
                                    }}
                                >
                                    {exp.role}
                                </div>
                                <div className="text-sm text-text-secondary mb-5">{exp.company}</div>

                                {/* Highlights */}
                                {exp.highlights && (
                                    <div className="flex flex-wrap gap-8 mb-5 pl-4 py-3 panel-inset rounded-sm">
                                        {exp.highlights.map((h, i) => (
                                            <div key={i}>
                                                <div
                                                    className="phosphor-glow-strong leading-none"
                                                    style={{
                                                        fontFamily: "var(--font-vt323), monospace",
                                                        fontSize: "1.8rem",
                                                        color: "var(--primary)",
                                                    }}
                                                >
                                                    {h.label}
                                                </div>
                                                <div className="text-text-muted text-sm mt-0.5">{h.sublabel}</div>
                                            </div>
                                        ))}
                                    </div>
                                )}

                                {/* Description bullets */}
                                <ul className="space-y-2 mb-5">
                                    {exp.description.map((item, i) => (
                                        <motion.li
                                            key={i}
                                            initial={{ opacity: 0, x: -10 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ delay: 0.1 + i * 0.05 }}
                                            className="flex items-start gap-3 text-sm sm:text-base text-text-secondary leading-relaxed"
                                        >
                                            <span className="text-primary phosphor-glow shrink-0 mt-0.5">+</span>
                                            <span>{item}</span>
                                        </motion.li>
                                    ))}
                                </ul>

                                {/* Tech */}
                                <div className="text-sm text-text-muted">
                                    <span className="text-text-secondary mr-2">tech:</span>
                                    {exp.tech.join(" · ")}
                                </div>

                            </motion.div>
                        ))}
                    </div>
                </div>

            </div>
        </section>
    );
}
