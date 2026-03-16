"use client";

import { motion } from "framer-motion";

type Project = {
    title: string;
    description: string;
    tech: string[];
    category: string;
    metric?: string;
    metricLabel?: string;
    award?: string;
    featured?: boolean;
    accentColor: string;
    titlebarName: string;
};

const workProjects: Project[] = [
    {
        title: "Zero-Downtime Database Migration",
        description: "Full migration from a high-throughput NoSQL store to relational SQL in a live production environment — continuous operation, zero service interruption throughout.",
        tech: ["Java", "Spring Boot", "PostgreSQL", "MongoDB", "Kubernetes"],
        category: "Production",
        metric: "1M+",
        metricLabel: "tx/hr",
        featured: true,
        accentColor: "var(--primary)",
        titlebarName: "db-migration.java",
    },
    {
        title: "Multi-Platform iGaming Backend",
        description: "Core backend and frontend for a major iGaming platform — Web, iOS, Android, and Windows served from a shared Java + TypeScript backbone.",
        tech: ["Java", "TypeScript", "Angular", ".NET Core", "PostgreSQL", "Redis"],
        category: "Platform",
        metric: "4",
        metricLabel: "platforms",
        accentColor: "oklch(0.70 0.220 145)",
        titlebarName: "igaming-platform.ts",
    },
    {
        title: "Cloud-Native CI/CD Modernization",
        description: "Migrated an entire delivery pipeline from legacy on-premise tooling to GitLab CI/CD with full Terraform infrastructure-as-code.",
        tech: ["GitLab CI", "Terraform", "Docker", "Kubernetes", "AWS", "Azure"],
        category: "Infrastructure",
        metric: "70%",
        metricLabel: "load-reduced",
        accentColor: "oklch(0.65 0.070 250)",
        titlebarName: "pipeline.gitlab-ci.yml",
    },
];

const sideProjects: Project[] = [
    {
        title: "PereAware",
        description: "Innovative awareness platform built at ASSIST Software — placing 2nd at the internal Best Innovative Minds competition.",
        tech: ["Java", "Spring Boot", "React", "TypeScript"],
        category: "Innovation",
        metric: "#2",
        metricLabel: "ASSIST award",
        award: "2nd Place · Best Innovative Minds",
        featured: true,
        accentColor: "var(--primary)",
        titlebarName: "pereaware/main.java",
    },
    {
        title: "Exam Timetabling System",
        description: "Constraint-based exam scheduling engine built in 3rd year CS — automates conflict-free university timetable generation.",
        tech: ["Java", "Constraint Programming", "Algorithm Design"],
        category: "Academic",
        accentColor: "oklch(0.72 0.185 65 / 0.80)",
        titlebarName: "scheduler.java",
    },
    {
        title: "Browser PDF Editor",
        description: "Fully free, browser-native PDF editor — no server, no account. Edit PDFs directly in the browser.",
        tech: ["TypeScript", "PDF.js", "HTML Canvas", "Web APIs"],
        category: "Tool",
        accentColor: "oklch(0.70 0.220 145)",
        titlebarName: "pdf-editor/index.ts",
    },
    {
        title: "Neapetrica Flooring",
        description: "Presentation website for a local flooring company — portfolio, services, and contact built as a client project.",
        tech: ["Next.js", "TypeScript", "Tailwind CSS"],
        category: "Client",
        accentColor: "oklch(0.65 0.080 90)",
        titlebarName: "neapetrica/page.tsx",
    },
    {
        title: "Flappy Bird",
        description: "Classic arcade game recreation from 1st year CS — game loop, physics, collision, and rendering built from scratch.",
        tech: ["Java", "Swing", "Game Loop", "OOP"],
        category: "Game",
        accentColor: "oklch(0.65 0.090 220)",
        titlebarName: "flappy-bird/Game.java",
    },
];

function ProjectCard({ project, delay = 0 }: { project: Project; delay?: number }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay }}
            className="h-full"
        >
            <div className="terminal-window h-full flex flex-col scan-hover">
                {/* Titlebar */}
                <div className="terminal-titlebar shrink-0">
                    <span className="terminal-dot" style={{ background: "#ff5f57" }} />
                    <span className="terminal-dot" style={{ background: "#ffbd2e" }} />
                    <span className="terminal-dot" style={{ background: "#28c840" }} />
                    <span className="ml-3 flex-1 truncate">{project.titlebarName}</span>
                    <span
                        className="text-xs px-2 py-0.5 rounded-sm shrink-0"
                        style={{
                            color: project.accentColor,
                            border: `1px solid ${project.accentColor}40`,
                            background: `${project.accentColor}12`,
                            fontSize: "0.62rem",
                            letterSpacing: "0.08em",
                        }}
                    >
                        {project.category.toUpperCase()}
                    </span>
                </div>

                {/* Body */}
                <div className="p-5 sm:p-6 flex flex-col grow font-mono">

                    {/* Metric + Award */}
                    <div className="flex items-start justify-between gap-4 mb-4">
                        <div>
                            {project.award && (
                                <div
                                    className="text-sm mb-2"
                                    style={{ color: "var(--primary)", textShadow: "0 0 6px var(--phosphor-glow)" }}
                                >
                                    ★ {project.award}
                                </div>
                            )}
                            <div
                                className="phosphor-glow"
                                style={{
                                    fontFamily: "var(--font-vt323), monospace",
                                    fontSize: "1.5rem",
                                    color: project.accentColor,
                                    letterSpacing: "0.04em",
                                }}
                            >
                                {project.title.toUpperCase()}
                            </div>
                        </div>
                        {project.metric && (
                            <div className="text-right shrink-0">
                                <div
                                    className="leading-none"
                                    style={{
                                        fontFamily: "var(--font-vt323), monospace",
                                        fontSize: project.featured ? "2.5rem" : "2rem",
                                        color: project.accentColor,
                                        textShadow: `0 0 10px ${project.accentColor}60`,
                                    }}
                                >
                                    {project.metric}
                                </div>
                                <div className="text-text-muted text-sm mt-0.5">{project.metricLabel}</div>
                            </div>
                        )}
                    </div>

                    {/* Description */}
                    <p className="text-text-secondary text-sm sm:text-base leading-relaxed mb-4 grow">
                        {project.description}
                    </p>

                    {/* Tech */}
                    <div
                        className="text-sm text-text-muted pt-3 border-t"
                        style={{ borderColor: "var(--border)" }}
                    >
                        <span className="text-text-secondary mr-1">$</span>
                        {project.tech.join(" · ")}
                    </div>
                </div>
            </div>
        </motion.div>
    );
}

function SubLabel({ label }: { label: string }) {
    return (
        <div className="flex items-center gap-3 mb-8">
            <div className="text-accent accent-glow text-xs font-mono">$</div>
            <div className="text-text-secondary text-xs font-mono uppercase tracking-widest">{label}</div>
            <div className="flex-1 h-px" style={{ background: "var(--border)" }} />
        </div>
    );
}

export default function ProjectsSection() {
    return (
        <section id="projects" className="py-24 sm:py-32 relative">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

                {/* Section header */}
                <motion.div
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="mb-12"
                >
                    <div className="text-text-muted text-xs font-mono mb-2 uppercase tracking-widest">// section 04</div>
                    <h2
                        className="phosphor-glow-strong"
                        style={{
                            fontFamily: "var(--font-vt323), monospace",
                            fontSize: "clamp(2.5rem, 6vw, 4rem)",
                            color: "var(--primary)",
                            letterSpacing: "0.06em",
                        }}
                    >
                        PROJECTS/
                    </h2>
                    <div className="term-divider mt-3" />
                </motion.div>

                {/* Work Projects — bento grid */}
                <div className="mb-16">
                    <SubLabel label="ls -la ./production/" />
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div className="md:col-span-2 md:row-span-2">
                            <ProjectCard project={workProjects[0]} delay={0} />
                        </div>
                        <ProjectCard project={workProjects[1]} delay={0.08} />
                        <ProjectCard project={workProjects[2]} delay={0.16} />
                    </div>
                </div>

                {/* Side Projects */}
                <div>
                    <SubLabel label="ls -la ./personal-and-academic/" />
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                        {sideProjects.map((p, i) => (
                            <ProjectCard key={p.title} project={p} delay={i * 0.08} />
                        ))}
                    </div>
                </div>

            </div>
        </section>
    );
}
