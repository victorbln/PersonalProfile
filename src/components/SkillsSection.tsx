"use client";

import { motion } from "framer-motion";

const skillCategories = [
    { key: "languages",    title: "Languages",     skills: ["Java", "TypeScript", "JavaScript", "Python", "SQL", "Bash"] },
    { key: "frameworks",   title: "Frameworks",    skills: ["Spring Boot", "Quarkus", "Apache Camel", "Angular", ".NET Core", "Spring Security", "Hibernate", "JPA"] },
    { key: "cloud_devops", title: "Cloud & DevOps", skills: ["Docker", "Kubernetes", "Terraform", "GitLab CI", "AWS", "Azure", "Maven", "Consul", "Linux"] },
    { key: "databases",    title: "Databases",     skills: ["PostgreSQL", "MongoDB", "Redis", "Cassandra", "MySQL", "JDBC"] },
    { key: "observability",title: "Observability", skills: ["Prometheus", "Grafana", "Cypress", "Integration Testing", "API Testing"] },
];

export default function SkillsSection() {
    return (
        <section id="skills" className="py-24 sm:py-32 relative">
            <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">

                {/* Section header */}
                <motion.div
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="mb-12"
                >
                    <div className="text-text-muted text-xs font-mono mb-2 uppercase tracking-widest">// section 05</div>
                    <h2
                        className="phosphor-glow-strong"
                        style={{
                            fontFamily: "var(--font-vt323), monospace",
                            fontSize: "clamp(2.5rem, 6vw, 4rem)",
                            color: "var(--primary)",
                            letterSpacing: "0.06em",
                        }}
                    >
                        TECH.STACK
                    </h2>
                    <div className="term-divider mt-3" />
                </motion.div>

                {/* Inventory table */}
                <div className="terminal-window">
                    <div className="terminal-titlebar">
                        <span className="terminal-dot" style={{ background: "#ff5f57" }} />
                        <span className="terminal-dot" style={{ background: "#ffbd2e" }} />
                        <span className="terminal-dot" style={{ background: "#28c840" }} />
                        <span className="ml-3">victor --show-inventory --format=table</span>
                    </div>

                    {/* Table header */}
                    <div
                        className="flex items-center px-5 sm:px-8 py-3 text-sm font-mono border-b"
                        style={{ borderColor: "var(--border)", background: "var(--surface-alt)" }}
                    >
                        <span
                            className="w-36 sm:w-44 shrink-0 text-text-muted uppercase tracking-widest"
                            style={{ fontSize: "0.8rem" }}
                        >
                            CATEGORY
                        </span>
                        <span
                            className="text-text-muted uppercase tracking-widest"
                            style={{ fontSize: "0.8rem" }}
                        >
                            TECHNOLOGIES
                        </span>
                    </div>

                    <div>
                        {skillCategories.map((cat, index) => (
                            <motion.div
                                key={cat.key}
                                initial={{ opacity: 0, x: -12 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.4, delay: index * 0.07 }}
                                className="flex items-start px-5 sm:px-8 py-4 border-b last:border-b-0 scan-hover"
                                style={{ borderColor: "var(--border)" }}
                            >
                                {/* Category */}
                                <div className="w-36 sm:w-44 shrink-0 pt-0.5">
                                    <span
                                        className="text-accent accent-glow font-mono font-bold"
                                        style={{ fontSize: "0.82rem", letterSpacing: "0.06em" }}
                                    >
                                        {cat.title.toUpperCase()}
                                    </span>
                                </div>

                                {/* Skills — pill chips with a terminal look */}
                                <div className="flex flex-wrap gap-2">
                                    {cat.skills.map((skill, i) => (
                                        <motion.span
                                            key={skill}
                                            initial={{ opacity: 0 }}
                                            whileInView={{ opacity: 1 }}
                                            viewport={{ once: true }}
                                            transition={{ delay: index * 0.07 + i * 0.03 }}
                                            className="text-sm font-mono px-2.5 py-1 rounded-sm"
                                            style={{
                                                color: "var(--foreground)",
                                                background: "var(--surface-alt)",
                                                border: "1px solid var(--border)",
                                                boxShadow:
                                                    "1px 1px 0 oklch(0.36 0.028 65 / 0.35), -1px -1px 0 rgba(0,0,0,0.55)",
                                            }}
                                        >
                                            {skill}
                                        </motion.span>
                                    ))}
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    {/* Footer row */}
                    <div
                        className="px-5 sm:px-8 py-3 text-sm font-mono text-text-muted flex items-center gap-2"
                        style={{ background: "var(--surface-alt)", borderTop: "1px solid var(--border)" }}
                    >
                        <span className="text-accent accent-glow">$</span>
                        <span>{skillCategories.reduce((acc, c) => acc + c.skills.length, 0)} technologies loaded</span>
                        <span className="cursor-blink" />
                    </div>
                </div>

            </div>
        </section>
    );
}
